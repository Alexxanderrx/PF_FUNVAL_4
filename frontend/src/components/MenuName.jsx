import { useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function MenuName(props) {
    const toggleBarRef = useRef(null);
    const toggleSpinRef = useRef(null);
    const btnOpenRef = useRef(null);
    const [spin, setSpin] = useState(false);

    function open() {
        toggleBarRef.current.classList.toggle("collapse");
        setSpin(!spin);
        // console.log(spin);
        if (spin == true) {
            toggleSpinRef.current.style.transform = "rotate(180deg)";
            // toggleSpinRef.current.style.transform = "transition-duration: 500ms";
        } else if (spin == false) {
            toggleSpinRef.current.style.transform = "rotate(0deg)";
        }
    }

    return (
        <div className="bg-[#f1f3f5] h-screen w-screen flex">
            <section id="toggleMenu" className="h-full w-1/6 bg-[#30363b]">
                <a id="toggleMenuU" className="h-16 w-full border-b flex md:justify-start justify-center md:pl-4 items-center" href="/">
                    {/* <div className=" h-12 w-12 rounded-full overflow-hidden">
              <img className="h-12 w-12" src="../assets/logoQ.jpg" alt="LogoUni.jpg" />
            </div> */}
                    <p id="Uni" className="md:flex hidden text-white pl-3 text-xl">Universidad</p>
                </a>
                <div id="" className="md:flex hidden h-28 w-full border-b flex-col justify-around items-start text-white p-4">
                    <p className=" text-xl"></p>
                    <p className="truncate w-full"></p>
                </div>
                <div className="w-full flex flex-col justify-center items-center text-white">
                    <p id="" className="p-4 md:flex hidden">MENU </p>
                    <Link to="/dashboard" id="" className="w-full flex md:justify-start justify-center items-center p-4 hover:bg-[#3d4449]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>

                        <p id="" className="md:flex hidden pl-2">Dashboard</p>
                    </Link>
                    <Link to="/parametros" id="" className=" w-full flex md:justify-start justify-center items-center p-4 hover:bg-[#3d4449]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                        </svg>

                        <p id="" className="md:flex hidden pl-2">Parametros</p>
                    </Link>
                    <Link to="/roles" id="" className=" w-full flex md:justify-start justify-center items-center p-4 hover:bg-[#3d4449]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                        <p className="md:flex hidden pl-2">Roles</p>
                    </Link>
                    <Link to="/login" id="" className=" w-full flex md:justify-start justify-center items-center p-4 hover:bg-[#3d4449]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                        <p className="md:flex hidden pl-2">Login</p>
                    </Link>

                </div>
            </section>
            <div id="section01" className="flex flex-col h-full w-5/6 justify-between items-center">
                <section className=" flex flex-col w-full h-[90%] justify-start items-center">
                    <nav className="h-16 w-full bg-white flex md:justify-between justify-end items-center border">
                        <div className="hidden md:flex h-full justify-start items-center">
                            <div id="btnOpen" className="h-full w-16 flex justify-center items-center hover:bg-[#f2f2f2]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>

                            <p className="pl-4">Home</p>
                        </div>
                        <div id="open" ref={btnOpenRef} onClick={open} className="flex h-full md:w-48 w-40 justify-end items-center px-4 hover:bg-[#f2f2f2]">
                            <p className="pr-2 truncate">
                            </p>
                            {/* style="transition-duration: 500ms;" */}
                            <svg id="spin" ref={toggleSpinRef} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                        <ul id="toggle" ref={toggleBarRef} className="flex flex-col justify-center items-center py-4  md:w-48 w-40 border rounded-b-xl bg-white absolute right-0 md:top-16 top-[63px] collapse z-10">

                            <div className=" w-11/12 border-b border-gray">
                                <button id="btnProfile" className="hover:bg-gray-200 w-full flex justify-start items-center rounded-2xl px-4">
                                    <svg className="md:w-6 md:h-6 w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                    <li className="text-gray-500 flex justify-center items-center p-3 md:text-base text-sm">My
                                        Profile</li>
                                </button>
                            </div>

                            <div className="w-11/12">
                                <a href="logout.php" className="hover:bg-gray-200 text-red-600 flex justify-start items-center rounded-2xl px-4">
                                    <svg className="md:w-6 md:h-6 w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                        <path stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                    </svg>
                                    <li className="flex justify-center items-center p-3 md:text-base text-sm">
                                        Log out
                                    </li>
                                </a>
                            </div>

                        </ul>
                    </nav>
                    {props.render()}
                </section>
                <footer className="h-12 w-full md:text-base text-xs bg-white flex justify-between items-center border px-4 text-gray-500">
                    <p>Copyright © 2023 <a className="text-gray-700" href="https://github.com/Alexxanderrx" target="_blank">Alexxanderrx.</a>
                    </p>
                    <p className="md:flex hidden">All rights reserved.</p>
                </footer>
            </div>
        </div >
    )
}