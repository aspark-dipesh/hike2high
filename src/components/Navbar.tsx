import Image from "next/image";

export default function Navbar() {
    return (
        <div className="bg-base-100 border-y-2 border-bottom-2">

            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="/">Home</a></li>
                            <li>
                                <a>Packages</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li ><a href="/about-us">About Us</a></li>
                            <li><a href="/contact-us" >Contact Us</a></li>
                        </ul>
                    </div>
                    <a className="text-xl relative">
                        <Image src="/img/logo.png"
                            alt="logo"
                            width={400}
                            height={400}
                            objectFit="contain"
                            className="h-12 w-auto rounded-sm"
                        />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="/">Home</a></li>
                        <li>
                            <details>
                                <summary>Packages</summary>
                                <ul className="p-2 w-52">
                                    <li><a href="/">Submenu 1</a></li>
                                    <li><a href="/">Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn" href="/blogs">Blog</a>
                </div>
            </div>
        </div>
    )
}