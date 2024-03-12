import LogoMindTheGraph from "../../assets/logo_mindthegraph.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { ButtonLink } from "../ButtonLink";
import { useState } from "react";
import { SideBar } from "./SideBar";

export function Header(){
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    return (
        <header className="flex justify-between px-9 py-10">
            <a href="#">
                <img src={LogoMindTheGraph} alt="Brain with a pencil and written Mind The Graph" />
            </a>
            <nav>
                <RxHamburgerMenu 
                    className="md:hidden cursor-pointer text-white" 
                    size={40}
                    onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                />
                <ul className="hidden md:flex gap-10 items-center text-white">
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
            <SideBar sideMenu={isSideBarOpen}/>
        </header>
    )
}