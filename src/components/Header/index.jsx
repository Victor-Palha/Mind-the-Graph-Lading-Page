import LogoMindTheGraph from "../../assets/logo_mindthegraph.svg";
import { ButtonLink } from "../ButtonLink";

export function Header(){
    return (
        <header className="flex justify-between px-9 py-10">
            <a href="#">
                <img src={LogoMindTheGraph} alt="Brain with a pencil and written Mind The Graph" />
            </a>
            <nav className="flex gap-10 items-center text-white">
                <a href="#" className="text-base font-bold">Templates</a>
                <a href="#" className="text-base font-bold">Pricing</a>
                <a href="#" className="text-base font-bold">Blog</a>
                <a href="#" className="text-base font-bold">Jobs</a>
                <ButtonLink content="Login" backgroundColor="transparent"/>
                <ButtonLink content="Sign up free"/>
            </nav>
        </header>
    )
}