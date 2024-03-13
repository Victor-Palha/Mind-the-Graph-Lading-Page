import { ButtonLink } from "../../ButtonLink";

/**
 * 
 * @param {boolean} sideMenu - State to show or hide the side menu
 */
export function SideBar({sideMenu}){
    return (
        <nav className={`
            md:hidden
            flex flex-col gap-4
            z-10
            ${sideMenu ? 'right-0 w-[300px] absolute h-screen top-[7.5rem]' : 'right-[-300px] w-0 absolute h-0'}
            pl-[40px] pr-[30px]
            backdrop-blur-xl
            transition-all
            duration-700`
        }>
            <ul className={`flex flex-col text-white items-center space-y-7 text-lg ${!sideMenu && "hidden"}`}>
                <li>
                    <a href="#" className="text-base font-bold border-b-[1px] border-transparent transition hover:border-white">Templates</a>
                </li>
                <li>
                    <a href="#" className="text-base font-bold border-b-[1px] border-transparent transition hover:border-white">Pricing</a>
                </li>
                <li>
                    <a href="#" className="text-base font-bold border-b-[1px] border-transparent transition hover:border-white">Blog</a>
                </li>
                <li>
                    <a href="#" className="text-base font-bold border-b-[1px] border-transparent transition hover:border-white">Jobs</a>
                </li>
                <li>
                    <ButtonLink content="Login" backgroundColor="transparent"/>
                </li>
                <li>
                    <ButtonLink content="Sign up free"/>
                </li>
            </ul>
        </nav>
    )
}