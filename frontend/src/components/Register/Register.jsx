import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/src/imgs/devchallenges.svg";
import facebook from "/src/imgs/Facebook.svg";
import github from "/src/imgs/Github.svg";
import google from "/src/imgs/Google.svg";
import twitter from "/src/imgs/Twitter.svg";

function Register() {

  return (
    <div className="w-screen h-screen flex border justify-center items-center">
      <div className="flex flex-col  justify-center align-items-center h-full w-full  md:w-96 ">
        <form className="flex-col h-full md:h-[560px]  w-full md:w-96 p-4 md:p-10 border-0 md:border border-gray-400 rounded-3xl" name="formularioSingUp" method="POST" action="http://127.0.0.1:8000/api/usuario/create">
          <img className="mb-4" src={logo} alt="devchallenges.svg" />

          <p className="mb-4 font-semibold ">Join thousands of
            learners
            from around the world</p>
          <p className="mb-5 text-sm">Master web development by making real-life projects. There are multiple paths for you to
            choose</p>
          <div>

            <div className="relative block mb-3">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </svg>
              </span>
              <input className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="email"
                id="usuario"
                name="usuario"
                placeholder="Email"
                required
              />
            </div>

            <div className="relative block mb-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                  </svg>
                </svg>
              </span>
              <input className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="password"
                id="clave"
                name="clave"
                placeholder="Password"
                required
              />
            </div>

          </div>
          <button className="mb-5 w-full bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-lg" type="submit" name="start">Star coding now</button>

          <p className="flex text-xs text-gray-500 justify-center">or
            continue with these social profile</p>

          <div className="p-4 pl-8 pr-8 flex justify-around align-items-center  ">
            <a href="#"><img src={google} alt="google.svg" /></a>
            <a href="#"><img src={facebook} alt="Facebook.svg" /></a>
            <a href="#"><img src={twitter} alt="Twitter.svg" /></a>
            <a href="#"><img src={github} alt="Gihub.svg" /></a>
          </div>
          <div className="flex text-sm justify-center">
            <p className="text-gray-500 text-xs">Already a member?</p>
            <p className=" text-sky-500 text-xs"><a href="/">&#160;Login</a></p>
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
export default Register;
