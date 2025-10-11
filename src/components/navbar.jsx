import { Link } from "react-router";


export default function Navbar() {


    return (
        <nav className="flex justify-around py-[40px] ">
            <div className="">logo</div>
            <div className="flex gap-1">
                <Link to={'/'} className=" text-xl text-[#041018] mb-[10px] relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#041018]  after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full">
                    Home
                </Link>
            </div>
            <div className="">qoute</div>
        </nav>
    );
}