import { X } from "lucide-react";
import { useJobStore, useMenuStore } from "../../store/store";
import { useForm } from "react-hook-form";
import { jobSchema, type JobFormData } from "../../schemas/jobs.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const JobForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
  });

  const changeMenuState = useMenuStore((state) => state.changeStatusMenu);
  const addJob = useJobStore((state) => state.addJob);
  const deleteJob = useJobStore((state) => state.deleteJob);
  const editingJob = useJobStore((state) => state.editingJob);
  const setEditingJob = useJobStore((state) => state.setEditingJob);
  const updateJob = useJobStore((state) => state.updateJob);

  const onSubmit = (data: JobFormData) => {
    if (editingJob) {
      const updateData = {
        ...data,
        id: editingJob.id,
        createdAt: editingJob.createdAt,
      };
      updateJob(updateData);
    } else {
      const fullJobData = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date().toLocaleDateString(),
      };
      addJob(fullJobData);
    }
    reset();
    setEditingJob(null);
  };

  useEffect(() => {
    if (editingJob) {
      reset(editingJob); // Rellena si hay algo que editar
    } else {
      // Si no hay nada editándose, fuerza el valor vacío de los campos
      reset({
        companyName: "",
        job: "",
        url: "",
        plataform: "Linkedin",
        status: "Applied",
        notes: "",
      });
    }
  }, [editingJob, reset]);

  const handleDelete = () => {
    if (editingJob) {
      // Confirmación opcional para evitar accidentes
      if (confirm("Are you sure you want to delete this application?")) {
        deleteJob(editingJob.id);
        reset(); // Limpia los campos del formulario
      }
    }
  };

  useEffect(() => {
    // Esta función se ejecuta cuando el componente se destruye o se recarga
    return () => {
      setEditingJob(null);
    };
  }, [setEditingJob]);

  /* 
          
                      
                */

  return (
    <>
      <section className=" w-full p-3 bg-zinc-900  ">
        <section className="  p-2 rounded-xl border border-borderColor ">
          <section className=" flex justify-between p-3 ">
            {/* Aqu cambia el titulo segun la tarea aplicar/editar ⬇️ */}

            {editingJob !== null ? (
              <p className=" text-blue-500 ">Edit Application</p>
            ) : (
              <p className=" text-blue-500 ">New Application</p>
            )}

            <section className="lg:hidden" onClick={changeMenuState}>
              <X size={20} color="#F9F9FA" />
            </section>
          </section>

          {/* form */}
          <section className="">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col gap-3 "
            >
              <div className=" flex flex-col px-3 text-gray-300 text-xs ">
                <label
                  htmlFor="companyName"
                  id="companyName"
                  className=" py-1.5 "
                >
                  Company Name*
                </label>
                <input
                  type="text"
                  id="companyName"
                  {...register("companyName")}
                  className=" p-1.5 bg-input rounded-lg  border border-borderColor focus:outline-3 focus:border-gray-200 outline-gray-500 transition-colors duration-500 "
                  placeholder="e.g., Google"
                />
                {errors.companyName && (
                  <p className=" pt-1 text-red-500 ">
                    Please fill in Company Name
                  </p>
                )}
              </div>
              <div className=" flex flex-col px-3 text-gray-300 text-xs ">
                <label htmlFor="job" className=" py-1.5 ">Job Title*</label>
                <input
                  type="text"
                  id="job"
                  {...register("job")}
                  className=" p-1.5 bg-input rounded-lg  border border-borderColor focus:outline-3 focus:border-gray-200 outline-gray-500 transition-colors duration-500 "
                  placeholder="e.g., Google"
                />
                {errors.job && (
                  <p className=" pt-1 text-red-500 ">
                    Please fill in Job Title
                  </p>
                )}
              </div>
              <div className=" flex flex-col px-3 text-gray-300 text-xs ">
                <label htmlFor="url" className=" py-1.5 ">Job URL</label>
                <input
                  type="text"
                  id="url"
                  {...register("url")}
                  className=" p-1.5 bg-input rounded-lg  border border-borderColor focus:outline-3 focus:border-gray-200 outline-gray-500 transition-colors duration-500 "
                  placeholder="e.g., Google"
                />
                {errors.job && (
                  <p className=" pt-1 text-red-500 ">Please fill in Job URL</p>
                )}
              </div>
              <div className=" flex flex-col px-3 text-gray-300 text-xs ">
                <label htmlFor="plataform" className=" py-1.5 ">Plataform</label>
                <select
                  id="plataform"
                  {...register("plataform")}
                  className=" p-1.5 bg-input rounded-lg  border border-borderColor focus:border-blue-400 transition-colors duration-500 "
                >
                  <option value="Linkedin">Linkedin</option>
                  <option value="Indeed">Indeed</option>
                  <option value="Wellfound">Wellfound</option>
                  <option value="Arc.dev">Arc.dev</option>
                  <option value="We Work Remotely">We Work Remotely</option>
                </select>
              </div>
              <div className=" flex flex-col px-3 text-gray-300 text-xs ">
                <label htmlFor="status" className=" py-1.5 ">Status</label>
                <select
                  id="status"
                  {...register("status")}
                  className=" p-1.5 bg-input rounded-lg  border border-borderColor focus:border-blue-400 transition-colors duration-500 "
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Offer">Offer</option>
                </select>
              </div>
              <div className=" flex flex-col px-3 text-gray-300 text-xs ">
                <label htmlFor="notes" className=" py-1.5 ">Notes</label>
                <textarea
                  id="notes"
                  {...register("notes")}
                  className=" p-1.5 bg-input rounded-lg  border border-borderColor focus:outline-3 focus:border-gray-200 outline-gray-500 transition-colors duration-500 resize-none "
                  placeholder="Add any relevant notes about this applications..."
                  rows={5}
                ></textarea>
              </div>
              <section className=" flex flex-col gap-2 px-3 pt-3 ">
                {editingJob ? (
                  <>
                    <section className=" flex gap-8 ">
                      <input
                        type="submit"
                        value="Update Application"
                        className=" w-full py-3 rounded-lg text-xs bg-linear-to-r from-teal-400 to-sky-400 "
                      />
                      <input
                        value="Delete Application"
                        className=" w-full py-3 rounded-lg text-xs text-center md:cursor-pointer text-red-400 border border-red-900 "
                        onClick={handleDelete}
                      />
                    </section>
                  </>
                ) : (
                  <input
                    type="submit"
                    value="Save Application"
                    className=" w-full py-3 rounded-lg text-xs bg-linear-to-r from-teal-400 to-sky-400 "
                  />
                )}

                {/* input para borrar */}
              </section>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};

export default JobForm;
