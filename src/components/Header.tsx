import { GiHamburgerMenu } from "react-icons/gi";
import JobStats from "../features/job-stats/JobStats";
import { useMenuStore } from "../store/store";

const Header = () => {

      const changeMenuState = useMenuStore((state) => state.changeStatusMenu)
      const stateMenu = useMenuStore((state) => state.openMenu)

      console.log(stateMenu)


      return (
            <>
                  <section className=" bg-blue-900/10 border-b border-borderColor ">
                        <section className=" flex flex-col items-center ">
                              <h1 className=" pt-8 pb-3 px-8 lg:py-6  text-2xl lg:text-5xl text-center font-medium text-gray-200 ">
                                    Job Application Tracker
                              </h1>
                              <p className=" px-8 text-sm lg:text-lg text-center text-gray-300 ">
                                    Track and manage your job applications in one place
                              </p>
                        </section>

                        {
                              stateMenu === 'open'
                                    ? <section className=" hidden  fixed lg:hidden z-40 bottom-10 right-10 p-3 backdrop-blur-md bg-gray-500/20 border border-gray-600 rounded-xl " onClick={changeMenuState}>
                                          <GiHamburgerMenu />
                                    </section>
                                    : <section className="  fixed lg:hidden z-40 bottom-10 right-10 p-3 backdrop-blur-md bg-gray-500/20 border border-gray-600 rounded-xl " onClick={changeMenuState}>
                                          <GiHamburgerMenu />
                                    </section>
                        }

                        <JobStats />
                  </section>
            </>
      );
};

export default Header;
