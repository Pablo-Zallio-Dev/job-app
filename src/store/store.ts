import { create } from "zustand";
import { jobSchema } from "../schemas/jobs.schema";
import type z from "zod";
import { persist } from "zustand/middleware";

/* Estado del menu mobile */
type menuStore = {
  openMenu: "open" | "close";
  changeStatusMenu: () => void;
};

export const useMenuStore = create<menuStore>((set) => ({
  openMenu: "close",
  changeStatusMenu() {
    set((state) => ({
      openMenu: state.openMenu === "close" ? "open" : "close",
    }));
  },
}));

type job = z.infer<typeof jobSchema> & {
  id: string;
  createdAt: string;
};

interface jobStore {
  jobs: job[];
  addJob: (job: job) => void;
  editingJob: job | null;
  setEditingJob: (job: job | null) => void;
  updateJob: (updatedJob: job) => void;
  deleteJob: (id: string) => void;
}

export const useJobStore = create<jobStore>()(
  persist(
    (set) => ({
      jobs: [],
      editingJob: null,
      addJob: (newJob) =>
        set((state) => ({
          jobs: [...state.jobs, newJob],
        })),

      setEditingJob: (job) =>
        set(() => ({
          editingJob: job,
        })),
      updateJob: (updatedJob) =>
        set((state) => ({
          jobs: state.jobs.map((job) =>
            job.id === updatedJob.id ? updatedJob : job,
          ),
          editingJob: null, // Limpiamos el editor después de guardar
        })),
        deleteJob: (id) =>
      set((state) => ({
        jobs: state.jobs.filter((job) => job.id !== id),
        editingJob: null, // Limpiamos la edición por si acaso
      })),
    }),

    {
      name: "job-storage",
    },
  ),
);
