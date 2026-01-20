import JobDashboard from '../features/job-dashboard/JobDashboard'
import JobEmpty from '../features/job-empty/JobEmpty'
import JobForm from '../features/job-form/JobForm'
import { useJobStore, useMenuStore } from '../store/store'

const Layout = () => {

      const stateMenu =  useMenuStore((state) => state.openMenu)
      const jobs = useJobStore((state) => state.jobs)

      return (
            <>
                  <section className=" flex ">
                        <section className={ ` absolute lg:relative top-0 lg:left-0  ${ stateMenu === 'open' ? ' left-0  ' : ' -left-full ' } w-full lg:w-107 2xl:w-130 h-screen lg:h-auto bg-gray-900/80 transition-all duration-200 ` }>
                              <JobForm />
                        </section>
                        <section className=" flex-1 ">
                        {
                              (jobs.length === 0)
                              ? <JobEmpty />
                              : <JobDashboard />
                        }
                        </section>
                  </section>

            </>
      )
}

export default Layout