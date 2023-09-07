export default function InfoU() {
    return (
        <div className="h-[50rem] w-full">
            <nav className="flex  pl-10 pr-10 w-full h-16 justify-between items-center ">
                <div className="w-32">
                    <img src="./imgs/devchallenges.svg" alt="devchallenges.svg" />
                </div>
                <div id="open" className="w-8 h-8  md:w-fit flex  justify-between items-center">
                    <div className=" border  absolute md:static rounded-md h-8 w-8 overflow-hidden">
                        {/* <?php
                        echo "<img className='h-8 w-8' src='data:image/jpg; base64," . base64_encode($_SESSION["info_photo"]) . "'>";
                ?> */}
                    </div>
                    <p className=" md:visible collapse pl-4 pr-4">name</p>
                    {/* <svg id="spin" style="transition-duration: 500ms;"
                        className="md:visible collapse w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="-8 0 30 10">
                        <path
                            d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                    </svg> */}

                </div>
                <ul id="toggle"
                    className="flex flex-col justify-center items-center  md:h-44 md:w-48  h-36 w-40 border rounded-xl bg-white absolute right-10 md:top-16 top-12 collapse">

                    <div className=" w-11/12 ">
                        <a href="personalInfo.php" className="hover:bg-gray-200 flex justify-start items-center rounded-2xl px-4">
                            <svg className="md:w-6 md:h-6 w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 20 20">
                                <path
                                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            <li className="text-gray-500 flex justify-center items-center p-3 md:text-base text-sm">My Profile</li>
                        </a>
                    </div>

                    <div className="w-11/12 border-b border-gray">
                        <a href="personalInfo.php" className="hover:bg-gray-200 flex justify-start items-center rounded-2xl px-4">
                            <svg className="md:w-6 md:h-6 w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 20 18">
                                <path
                                    d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                            </svg>
                            <li className="text-gray-500 flex justify-center items-center p-3 md:text-base text-sm">
                                Group Chat
                            </li>
                        </a>
                    </div>

                    <div className="w-11/12">
                        <a href="logout.php"
                            className="hover:bg-gray-200 text-red-600 flex justify-start items-center rounded-2xl px-4">
                            <svg className="md:w-6 md:h-6 w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                <path stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                            </svg>
                            <li className="flex justify-center items-center p-3 md:text-base text-sm">
                                Log out
                            </li>
                        </a>
                    </div>

                </ul>
            </nav>

            <form className="h-[50rem] flex flex-col justify-start items-center w-full " method="POST" action="updateHall.php"
                encType="multipart/form-data">
                <a href="/info" className="text-sky-500 pl-8 w-full md:w-3/5 mb-2 mt-4">&#60;&#160;Back</a>

                <div className="w-full md:w-3/5 flex flex-col justify-center items-center border-0 md:border rounded-2xl">

                    <div className="h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div>
                            <p className="text-lg">Change Info</p>
                            <p className="text-xs text-gray-400">Changes will be reflected to every services</p>
                        </div>

                    </div>

                    <div className=" px-8 h-20 w-full flex justify-start  items-center text-sm">
                        <div className="rounded-md">
                            {/* <?php
                            echo '<img type="image" style="opacity: 40%;" className="h-12 w-12 hover:bg-gray-300 text-gray-500 border border-gray-400 rounded-lg " width="48" height="48" id="image" alt="photo" src="data:image/jpg; base64,' . base64_encode($_SESSION['info_photo']) . '" disabled>';
                    ?> */}
                        </div>


                        <div className="w-36  flex justify-center items-center  ">
                            <input className="border w-1" type="file" id="archivo" accept="image/*" name="newPhoto"
                                required />
                            <label className="flex justify-center items-center h-10 bg-white text-gray-500 cursor-pointer absolute"
                                htmlFor="archivo">
                                <span>CHANGE PHOTO</span>
                            </label>

                        </div>
                        {/* <!-- <p className="border text-center  text-red-700">&#160;
                            <?php
                            if (isset($_SESSION["error_nophoto"])) {
                                echo $_SESSION["error_nophoto"];
                    };
                            unset($_SESSION["error_nophoto"]);
                    ?>
                        </p> --> */}
                    </div>

                    <div className="h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div className="flex">
                            <p>Name</p>
                        </div>
                        <input className="h-12 md:w-1/2 w-full bg-white text-black border rounded-lg pl-4" type="text"
                            placeholder="Enter your name..." size="30" name="newName" required />
                    </div>

                    <div className="h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div className="flex">
                            <p>Bio</p>
                        </div>
                        <input className="h-24 md:w-1/2 w-full bg-white text-black border rounded-lg pl-4 overflow-scroll"
                            type="text" placeholder="Enter your bio..." size="30" name="newBio" />
                    </div>


                    <div className="h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div className="flex">
                            <p>Phone</p>
                        </div>
                        <input className="h-12 md:w-1/2 w-full bg-white text-black border rounded-lg pl-4" type="text"
                            placeholder="Enter your phone..." size="30" name="newPhone" />
                    </div>

                    <div className=" h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div className="flex">
                            <p>Email</p>
                            <p className="text-center  text-red-700">&#160;
                                {/* <?php
                                if (isset($_SESSION["error_update"])) {
                                    echo $_SESSION["error_update"];
                        };
                                unset($_SESSION["error_update"]);

                        ?> */}
                            </p>
                        </div>

                        <input className="h-12 md:w-1/2 w-full bg-white text-black border rounded-lg pl-4" type="text"
                            placeholder="Enter your email..." size="30" name="newEmail" required />
                    </div>

                    <div className=" h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div className="flex">
                            <p>Password</p>
                            {/* <!-- <p className="text-center  text-red-700">&#160;
                                <?php
                                if (isset($_SESSION["error_nopass"])) {
                                    echo $_SESSION["error_nopass"];
                        };
                                unset($_SESSION["error_nopass"]);
                        ?>
                            </p> --> */}
                        </div>
                        <input className=" h-12 md:w-1/2 w-full bg-white text-black border rounded-lg pl-4" type="password"
                            placeholder="Enter your new password..." size="30" name="newPass" required />
                    </div>

                    <div className=" h-16 w-full flex  justify-start items-center text-sm  px-8">
                        <button className="h-10 p-6 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-lg"
                            type="submit">Save</button>
                    </div>

                </div>

                <div className="pt-6 pb-4 px-2 flex w-full md:w-3/5 items-center justify-between text-gray-400">
                    <p className="text-sm">create by <a href="https://github.com/Alexxanderrx">Alexxanderrx</a></p>
                    <p className="text-sm">devChallenges.io</p>
                </div>

            </form>


        </div>
    )
}