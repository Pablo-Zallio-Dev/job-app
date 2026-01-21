import { Briefcase, Calendar, Plus, X } from "lucide-react";
import StatCard from "./components/StatCard";
import { useJobStore } from "../../store/store";

const JobStats = () => {

      const jobs = useJobStore((state) => state.jobs)

      const interviews = jobs.filter(job =>job.status === "Interview")
      const rejected = jobs.filter(job =>job.status === "Rejected")
      const offer = jobs.filter(job =>job.status === "Offer")

      

  return (
    <>
      <section className=" flex flex-wrap gap-4 lg:gap-12 justify-center py-8 lg:pt-10 ">
        <StatCard
          label="Total Applied"
          value={jobs.length}
          icon={<Briefcase size={18} />}
          variant="applied"
        />
        <StatCard
          label="Interviews"
          value= {interviews.length}
          icon={<Calendar size={18} />}
          variant="interviews"
        />
        <StatCard
          label="Rejected"
          value= {rejected.length}
          icon={<X size={18} />}
          variant="rejected"
        />
        <StatCard
          label="Offer"
          value={offer.length}
          icon={<Plus size={18} />}
          variant="offer"
        />
      </section>
    </>
  );
};

export default JobStats;
