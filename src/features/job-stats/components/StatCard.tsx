import type { ReactNode } from "react";

type statCardProps = {
  label: string;
  value: number;
  icon: ReactNode;
  variant: "applied" | "interviews" | "rejected" | "offers";
};

/* Variantes para las tarjetas */
const variantStyles = {
  applied: {
    container: "bg-blue-500/10 border-blue-500/50",
    text: "text-blue-400 text-xs lg:text-sm  ",
    value: "text-blue-400 text-2xl font-bold pt-1 lg:pt-2  ",
    icon: "text-blue-500",
  },
  interviews: {
    container: "bg-yellow-500/10 border-yellow-500/50",
    text: "text-yellow-400 text-xs lg:text-sm  ",
    value: "text-yellow-400 text-2xl font-bold pt-1 lg:pt-2 ",
    icon: "text-yellow-500",
  },
  rejected: {
    container: "bg-red-500/10 border-red-500/50",
    text: "text-red-400 text-xs lg:text-sm  ",
    value: "text-red-400 text-2xl font-bold pt-1 lg:pt-2 ",
    icon: "text-red-500",
  },
  offers: {
    container: "bg-green-500/10 border-green-500/50",
    text: "text-green-400 text-xs lg:text-sm  ",
    value: "text-green-400 text-2xl font-bold pt-1 lg:pt-2 ",
    icon: "text-green-500",
  },
};

const StatCard = ({ label, value, icon, variant }: statCardProps) => {
  const styles = variantStyles[variant];
  return (
    <>
      <section
        className={` w-37.5 lg:w-44 py-3 pl-3 pr-9  border rounded-xl ${styles.container} `}
      >
        <section className=" flex gap-2 ">
          <section className={` ${styles.icon} `}>{icon}</section>
          <p className={` ${styles.text} `}>{label}</p>
        </section>
        <h2 className={` ${styles.value} `}> {value} </h2>
      </section>
    </>
  );
};

export default StatCard;
