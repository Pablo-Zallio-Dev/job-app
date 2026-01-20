import { Briefcase } from 'lucide-react'
import React from 'react'

const JobEmpty = () => {
  return (
    <>
   <section className=" p-8">
       <section className=" flex flex-col items-center p-10 rounded-lg border border-borderColor bg-zinc-900">
            <Briefcase size={48} color="#4f4f4f" />
      <h1 className=' text-sm text-gray-300 '>No application yet</h1>
      <p className=" pt-6 text-xs text-gray-300 ">Fill out the form and save the data to create a new entry.</p>
    </section>
   </section>
    </>
  )
}

export default JobEmpty