import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
export default function InfoU() {
    const params = useParams();
    const [usuario, setUsuario] = useState([]);
    const [persona, setPersona] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/usuario/' + params.id)
            .then((response) => {
                setUsuario(response.data);
                console.log(response.data);

            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/persona/' + usuario.id_persona)
            .then((response) => {
                setPersona(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [usuario]);

    return (
        <form className="mt-4 flex flex-col justify-start items-center w-full h-full" method="POST" action={"http://127.0.0.1:8000/api/persona/update/" + usuario.id_persona}>
            {/* <a href="/profile" className="text-sky-500 pl-8 w-full md:w-3/5 mb-2 mt-4">&#60;&#160;Back</a> */}

            <div className="overflow-hidden bg-white w-full md:w-[90%] flex flex-col h-[95%] items-center border-0 md:border rounded-2xl">

                <div className="h-[20%] border-b w-full flex justify-between items-center text-sm  px-8">
                    <div>
                        <p className="text-lg">Change Info</p>
                        <p className="text-xs text-gray-400">Changes will be reflected to every services</p>
                    </div>
                    <a href={"/profile/" + params.id} className="text-sky-500 pl-8  mb-2 mt-4">&#60;&#160;Back</a>
                </div>
                <div style={{ boxShadow: "inset -5px -5px 10px #c5c5c5" }} className=" w-full h-[80%] overflow-scroll overflow-x-hidden">
                    <div className="h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div className="flex">
                            <p>PRIMER NOMBRE</p>
                        </div>
                        <input className="h-12  w-full  text-black border rounded-lg pl-4" type="text"
                            placeholder={persona.primer_nombre} size="30" name="primer_nombre" required />
                    </div>
                    <div className="h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div className="flex">
                            <p>SEGUNDO NOMBRE</p>
                        </div>
                        <input className="h-12  w-full  text-black border rounded-lg pl-4" type="text"
                            placeholder={persona.segundo_nombre} size="30" name="segundo_nombre" required />
                    </div>
                    <div className="h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div className="flex">
                            <p>PRIMER APELLIDO</p>
                        </div>
                        <input className="h-12  w-full  text-black border rounded-lg pl-4" type="text"
                            placeholder={persona.primer_apellido} size="30" name="primer_apellido" required />
                    </div>
                    <div className="h-24 w-full flex flex-col justify-center items-start text-sm  px-8">
                        <div className="flex">
                            <p>SEGUNDO APELLIDO</p>
                        </div>
                        <input className="h-12  w-full  text-black border rounded-lg pl-4" type="text"
                            placeholder={persona.segundo_apellido} size="30" name="segundo_apellido" required />
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