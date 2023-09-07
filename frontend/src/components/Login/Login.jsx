import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/src/imgs/devchallenges.svg";
import facebook from "/src/imgs/Facebook.svg";
import github from "/src/imgs/Github.svg";
import google from "/src/imgs/Google.svg";
import twitter from "/src/imgs/Twitter.svg";

function Login() {
    return (
        <div className="w-screen h-screen flex border justify-center items-center">
            <div class=" flex flex-col justify-center items-center h-full md:h-[480px] w-screen  md:w-96 ">
                <form
                    class=" flex-col h-full md:h-[460px] w-full md:w-96 p-4 md:p-10 border-0 md:border border-gray-400 rounded-3xl"
                    name="formularioLogIn" method="post" action="http://127.0.0.1:8000/api/authusuario">

                    <img className="mb-4" src={logo} alt="devchallenges.svg" />

                    <p class="mb-4 font-semibold text-lg">Login</p>

                    <div>

                        <div class="relative block mb-3">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="w-5 h-5">
                                        <path
                                            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path
                                            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                </svg>
                            </span>
                            <input
                                class="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                type="text" name="usuario" placeholder="Email" required />
                        </div>

                        <div class="relative block mb-1">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="w-6 h-6">
                                        <path fill-rule="evenodd"
                                            d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </svg>
                            </span>
                            <input
                                class="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                type="password" name="clave" placeholder="Password" required />
                        </div>
                    </div>
                    <button class="mb-5 w-full bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-lg" type="submit"
                        name="start">Login</button>

                    <p class=" text-gray-500 flex text-xs justify-center">or
                        continue with these
                        social profile</p>

                    <div class="p-4 pl-8 pr-8 flex justify-around align-items-center  ">
                        <a href="#"><img src={google} alt="google.svg" /></a>
                        <a href="#"><img src={facebook} alt="Facebook.svg" /></a>
                        <a href="#"><img src={twitter} alt="Twitter.svg" /></a>
                        <a href="#"><img src={github} alt="Gihub.svg" /></a>
                    </div>
                    <div class=" text-gray-500 flex text-xs justify-center">
                        <p>Don't you have an account yet?</p>
                        <p class=" text-sky-500"><a href="/register">&#160;Register</a></p>
                    </div>

                </form>
                <div className="flex align-items-center justify-between pt-2 px-4 md:px-0 w-full">
                    <p className="text-sm text-gray-500">create by <u><a href="https://github.com/Alexxanderrx">Alexxanderrx</a></u>
                    </p>
                    <p className="text-sm text-gray-500">devChallenges.io</p>
                </div>
            </div>

        </div>
    );
}
export default Login;