import { useJobStore } from '../../store/store'

import BtnInfoDashboard from "./components/BtnInfoDashboard"

const JobDashboard = () => {

      const jobs = useJobStore((state) => state.jobs)
      const setEditingJob = useJobStore((state) => state.setEditingJob)

   


      return (
            <>
                  <section className="  w-full  py-3 px-10 ">
                        <h1 className=" font-bold text-sm text-gray-300 ">Recent Aplication</h1> {/* Aqui hay que cambiar el titulo */}
                        <section className=" flex flex-col gap-4 py-6 ">
                              {
                                    jobs.map((job) => (
                                          <section id={job.id} className=" flex gap-4 p-3 rounded-lg  border border-borderColor bg-zinc-900/80 " onClick={() => setEditingJob(job)} >
                                                <p className="  flex justify-center items-center w-10 h-10 rounded-xl font-bold text-cyan-400 bg-cyan-900/50 border border-cyan-700  "> {job.companyName.slice(0, 1)} </p>
                                                <section className=" flex justify-between w-full ">
                                                      <section className=" flex flex-col gap-1.5 ">
                                                            <h2 className=" font-bold text-sm "> {job.job} </h2>
                                                            <h3 className=" text-xs text-gray-300 "> {job.companyName} </h3>
                                                            <section className=" flex gap-2 ">

                                                                  <BtnInfoDashboard text={job.plataform} variant={job.plataform} />
                                                                  <BtnInfoDashboard text={job.status} variant={job.status} />
                                                            </section>
                                                            <p className=" text-xs text-gray-400 "> {job.notes} </p>
                                                      </section>
                                                      <p className=" self-center text-xs text-gray-500 "> {job.createdAt} </p>
                                                </section>
                                          </section>
                                    ))
                              }
                        </section>
                  </section>
            </>
      )
}

export default JobDashboard



/* 


 {
            jobs.map((job) => (
                  <p className=""> { job.companyName } </p>
            ))
      }
            

         <section className=" flex gap-4 p-3 border border-borderColor bg-zinc-900/80 ">
                  <p className="  flex justify-center items-center w-10 h-10 rounded-xl font-bold text-cyan-400 bg-cyan-900/50 border border-cyan-700  ">E</p>
                  <section className=" flex justify-between w-full ">
                        <section className=" flex flex-col gap-1.5 ">
                              <h2 className=" font-bold text-sm ">Titulo</h2>
                              <h3 className=" text-xs text-gray-300 ">Nombreed la compania</h3>
                              <section className=" flex gap-2 ">
                                   
                                    <BtnInfoDashboard text="Linkedin" variant="Linkedin" />
                                    <BtnInfoDashboard text="Applied" variant="applied" />
                              </section>
                              <p className=" text-xs text-gray-400 ">Nota</p>
                        </section>
                        <p className=" self-center text-xs text-gray-500 ">Fecha</p>
                  </section>
            </section>
      
      */