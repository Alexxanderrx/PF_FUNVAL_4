export default function InfoU() {
    return (
        <form className="mt-4 flex flex-col justify-start items-center w-full h-full" method="POST" action="">
            {/* <a href="/profile" className="text-sky-500 pl-8 w-full md:w-3/5 mb-2 mt-4">&#60;&#160;Back</a> */}

            <div className="overflow-hidden bg-white w-full md:w-[90%] flex flex-col h-[95%] items-center border-0 md:border rounded-2xl">

                <div className="h-[20%] border-b w-full flex justify-between items-center text-sm  px-8">
                    <div>
                        <p className="text-lg">Change Info</p>
                        <p className="text-xs text-gray-400">Changes will be reflected to every services</p>
                    </div>
                    <a href="/profile" className="text-sky-500 pl-8  mb-2 mt-4">&#60;&#160;Back</a>
                </div>
                <div style={{ boxShadow: "inset -5px -5px 10px #c5c5c5" }} className=" w-full h-[80%] overflow-scroll overflow-x-hidden">
                    <div className="h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div className="flex">
                            <p>Name</p>
                        </div>
                        <input className="h-12  w-full bg-white text-black border rounded-lg pl-4" type="text"
                            placeholder="Enter your name..." size="30" name="newName" required />
                    </div>

                    <div className="h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div className="flex">
                            <p>Bio</p>
                        </div>
                        <textarea className="h-24  w-full bg-white text-black border rounded-lg pl-4 overflow-scroll overflow-x-hidden"
                            type="text" placeholder="Enter your bio..." size="30" name="newBio" style={{ resize: "none" }} />
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
                            </p>
                        </div>

                        <input className="h-12 md:w-1/2 w-full bg-white text-black border rounded-lg pl-4" type="text"
                            placeholder="Enter your email..." size="30" name="newEmail" required />
                    </div>

                    <div className=" h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div className="flex">
                            <p>Password</p>
                        </div>
                        <input className=" h-12 md:w-1/2 w-full bg-white text-black border rounded-lg pl-4" type="password"
                            placeholder="Enter your new password..." size="30" name="newPass" required />
                    </div>

                    <div className=" h-16 w-full flex  justify-start items-center text-sm  px-8">
                        <button className="h-10 p-6 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-lg"
                            type="submit">Save</button>
                    </div>

                </div>
            </div>


        </form>
    )
}