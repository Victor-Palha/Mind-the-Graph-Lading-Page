import LogoMindTheGraph from "../../assets/logo_mindthegraph.svg";
import btnLogin from "../../assets/bt_login.svg";

export function Header(){
    return (
        <header className="flex justify-between px-9 py-10 bg-gray-700">
            <img src={LogoMindTheGraph} alt="Brain with a pencil and written Mind The Graph" />
            <nav className="flex gap-10 items-center text-white">
                <a href="#" className="text-base font-bold">Templates</a>
                <a href="#" className="text-base font-bold">Pricing</a>
                <a href="#" className="text-base font-bold">Blog</a>
                <a href="#" className="text-base font-bold">Jobs</a>
                <div className="flex items-center border-[1px] border-white px-5 py-3 rounded-xl">
                    <a href="#" className="text-base font-bold">Login</a>
                </div>
                <div className="flex items-center bg-mgPurpleDark border-white px-5 py-3 rounded-xl">
                    <a href="#" className="text-base font-bold">Sign up free</a>
                </div>
            </nav>
        </header>
    )
}