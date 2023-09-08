import { useEffect, useRef, useState } from "react";
import logo from "/src/imgs/devchallenges.svg";
import axios from "axios";
import { useCookies } from "react-cookie";
import queryString from 'query-string';

export default function InfoP() {

    // const values = queryString.parse(location.search);
    // const idU = values.id;
    // // console.log(values)
    // const [usuario, setUsuario] = useState([]);
    // const [persona, setPersona] = useState([]);
    // const idUuario = usuario.id;
    // useEffect(() => {
    //     axios
    //         .get("http://127.0.0.1:8000/api/usuario/" + idU)
    //         .then((response) => {
    //             setUsuario(response.data);
    //             console.log(response.data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });

    //     console.log(idUuario);
    //     axios
    //         .get("http://127.0.0.1:8000/api/persona/" + idUuario)
    //         .then((response) => {
    //             setPersona(response.data);
    //             console.log(response.data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, [idUuario]);

    // console.log(usuario)
    // const idUuario = usuario.id;
    const toggleBarRef = useRef(null);
    const toggleSpinRef = useRef(null);
    const btnOpenRef = useRef(null);
    const [spin, setSpin] = useState(false);

    return (
        <div className="flex  flex-col justify-center items-center h-[50rem] ">
            <nav className=" flex border  md:px-10 px-6 w-full h-16 justify-between items-center ">
                <div className="w-32">

                    {/* {valorCookie} */}

                    <img src={logo} alt="devchallenges.svg" />
                </div>
                <div id="open" ref={btnOpenRef} className=" w-8 h-8  md:w-fit flex  justify-between items-center" onClick={() => {
                    toggleBarRef.current.classList.toggle("collapse");
                    setSpin(!spin);
                    console.log(spin);
                    if (spin == true) {
                        toggleSpinRef.current.style.transform = "rotate(180deg)";
                        // toggleSpinRef.current.style.transform = "transition-duration: 500ms";
                    } else if (spin == false) {
                        toggleSpinRef.current.style.transform = "rotate(0deg)";
                    }
                }}>
                    <div className=" border  absolute md:static rounded-md h-8 w-8 overflow-hidden">
                        {/* <?php
                        echo "<img className='h-8 w-8' src='data:image/jpg; base64," . base64_encode($_SESSION["info_photo"]) . "'>";
                ?> */}
                    </div>
                    <p className=" md:visible collapse pl-4 pr-4">Aqui va el ususario</p>
                    {/* style="transition-duration: 500ms;" */}
                    <svg id="spin" ref={toggleSpinRef} className="md:visible collapse w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="-8 0 30 10">
                        <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                    </svg>
                    {/* <button className="border" onClick={}>a</button> */}

                </div>
                <ul id="toggle" ref={toggleBarRef} className="flex flex-col justify-center items-center  md:h-44 md:w-48  h-36 w-40 border rounded-xl bg-white absolute md:right-10 right-6 md:top-16 top-16 collapse">

                    <div className=" w-11/12 ">
                        <a href="personalInfo.php" className="hover:bg-gray-200 flex justify-start items-center rounded-2xl px-4">
                            <svg className="md:w-6 md:h-6 w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            <li className="text-gray-500 flex justify-center items-center p-3 md:text-base text-sm">My Profile</li>
                        </a>
                    </div>

                    <div className="w-11/12 border-b border-gray">
                        <a href="personalInfo.php" className="hover:bg-gray-200 flex justify-start items-center rounded-2xl px-4">
                            <svg className="md:w-6 md:h-6 w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 20 18">
                                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                            </svg>
                            <li className="text-gray-500 flex justify-center items-center p-3 md:text-base text-sm">
                                Dashboard
                            </li>
                        </a>
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
            </nav >
            <form className="h-[50rem] flex flex-col justify-start items-center w-full " action="updateInfo.php">
                <p className="text-3xl mb-2 mt-4">Personal info</p>
                <p className="mb-6">Basic info, like your name and photo</p>

                <div className="w-full md:w-3/5 flex flex-col justify-center items-center border-0 md:border rounded-2xl">

                    <div className="px-6 md:px-20 h-24 w-full flex justify-between items-center border-b border-gray">
                        <div>
                            <p className="text-lg">Profile</p>
                            <p className="text-xs text-gray-400 w-44 md:w-full">Some info may be visible to other people</p>
                        </div>

                        <a href="/update" className="bg-white hover:bg-gray-300 text-gray-500 border border-gray-400  py-2 px-8 rounded-lg" type="submit">Edit</a>

                    </div>
                    <div className="px-6 md:px-20 h-16 w-full flex border-b border-gray md:justify-normal justify-between items-center">
                        <p className="w-2/6 h-full flex items-center text-gray-400 text-sm">PHOTO</p>
                        <div className="border rounded-md h-12 w-12 overflow-hidden">
                            {/* <?php
                            echo "<img className='h-12 w-12' src='data:image/jpg; base64," . base64_encode($_SESSION["info_photo"]) . "'>";
                    ?> */}
                        </div>
                    </div>

                    <div className="px-6 md:px-20 h-16 w-full flex border-b border-gray items-center md:justify-normal justify-between text-gray-400 text-sm">
                        <p className="w-2/6 h-full flex items-center">NAME</p>
                        <input className="bg-white text-black md:text-left text-right" type="text" value="" size="20" disabled />
                    </div>

                    <div className="px-6 md:px-20 h-16 w-full flex border-b border-gray items-center md:justify-normal justify-between text-gray-400 text-sm">
                        <p className="w-2/6 h-full flex items-center">BIO</p>
                        <input className="bg-white text-black md:text-left text-right  md:w-80 w-20 text-ellipsis" type="text" value="" disabled />
                    </div>

                    <div className="px-6 md:px-20 h-16 w-full flex border-b border-gray items-center md:justify-normal justify-between text-gray-400 text-sm">
                        <p className="w-2/6 h-full flex items-center">PHONE</p>
                        <input className="bg-white text-black md:text-left text-right" type="text" value="" size="20" disabled />
                        {/* <?php
                                                                                                if ($_SESSION["info_phone"] == 0) {
                            echo "";
                                                                                                } else {
                            echo $_SESSION["info_phone"];
                                                                                                }
                                                                                                ?> */}
                    </div>

                    <div className="px-6 md:px-20 h-16 w-full flex border-b border-gray items-center md:justify-normal justify-between text-gray-400 text-sm">
                        <p className="w-2/6 h-full flex items-center">EMAIL</p>
                        <input className="bg-white text-black md:text-left text-right md:w-80 w-20 text-ellipsis" type="text" value="" placeholder="Escriba su email" disabled />
                    </div>

                    <div className="px-6 md:px-20 h-16 w-full flex items-center md:justify-normal  justify-between text-gray-400 text-sm">
                        <p className=" w-2/6 h-full flex items-center">PASSSWORD</p>
                        <input className="bg-white text-black md:text-left text-right" type="password" value="" placeholder="Escriba su password" size="20" disabled />
                    </div>
                </div>
                <div className="pt-6 pb-4 px-2 flex w-full md:w-3/5 justify-between items-center text-gray-400">
                    <p className="text-sm">create by <a href="https://github.com/Alexxanderrx">Alexxanderrx</a></p>
                    <p className="text-sm">devChallenges.io</p>
                </div>

            </form>
        </div >
    );
}