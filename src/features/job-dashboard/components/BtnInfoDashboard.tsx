
type btnInfoDashboardProps = {
      text: string,
      variant: "Linkedin" | "Indeed" | "Wellfound" |"Arc.dev" |"We Work Remotely" | "Applied" | "Interview" | "Rejected" | "Offers",
}

const variantStyle: Record<btnInfoDashboardProps["variant"], { bg: string }> = {
  Linkedin: {
    bg: "bg-sky-600/30 border border-sky-300/50 text-[.6rem] text-sky-300"
  },

  Indeed: {
    bg: "bg-blue-900/30 border border-blue-400/50 text-[.6rem] text-blue-400 "
  },
  Wellfound: {

    bg: "bg-pink-900/30 border border-pink-400/50 text-[.6rem] text-pink-400"
  },
  "Arc.dev": {
    bg: "bg-green-900/30 border border-green-400/50 text-[.6rem] text-green-400"
  },
  "We Work Remotely": {
    bg: "bg-red-900/30 border border-red-400/50 text-[.6rem] text-red-400"
  },

  Applied: {
    
    bg: "bg-blue-900/30 border border-blue-400/50 text-[.6rem] text-blue-400"
  },
  Interview: {
    
    bg: "bg-yellow-900/30 border border-yellow-400/50 text-[.6rem] text-yellow-400"
  },
  Rejected: {
    
    bg: "bg-red-900/30 border border-red-400/50 text-[.6rem] text-red-400"
  },
  Offers: {
    
    bg: "bg-green-900/30 border border-green-400/50 text-[.6rem] text-green-400"
  }
}



const BtnInfoDashboard = ({ text, variant }: btnInfoDashboardProps ) => {

      const styles = variantStyle[variant]
  return (
    <>
    
      <section className={  ` w-max py-0.5 px-1.5 rounded-md ${styles.bg} `}>
            <p className=""> {text} </p>
      </section>

    </>
  )
}

export default BtnInfoDashboard