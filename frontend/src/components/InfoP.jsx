import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

export default function InfoP() {
    const params = useParams();
    console.log(params)
    const [persona, setPersona] = useState([]);
    const [usuario, setUsuario] = useState([]);
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/usuario/' + params.id)
            .then((response) => {
                setUsuario(response.data);
                // console.log(response.data);

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
        <form className=" flex flex-col justify-start items-center w-full h-full" method="POST" action="">
            <p className="text-3xl mb-2 mt-4">Personal info</p>
            <p className="mb-6">Basic info, like your name and photo</p>

            <div className="w-full md:w-[90%] h-full flex flex-col items-center border-0 md:border rounded-2xl bg-white   overflow-hidden">

                <div className="px-6 md:px-20 h-[30%] w-full flex justify-between items-center border-b border-gray">
                    <div>
                        <p className="text-lg">Profile</p>
                        <p className="text-xs text-gray-400 w-44 md:w-full">Some info may be visible to other people</p>
                    </div>

                    <a href={"/update/" + params.id} className="bg-white hover:bg-gray-300 text-gray-500 border border-gray-400  py-2 px-8 rounded-lg" >Edit</a>

                </div>
                <div style={{ boxShadow: "inset -5px -5px 10px #c5c5c5" }} className=" w-full overflow-scroll overflow-x-hidden h-[70%]">
                    <div className="px-6 md:px-20 h-16 w-full flex border-b border-gray items-center md:justify-normal justify-between text-gray-400 text-sm">
                        <p className="w-2/6 h-full flex items-center">PRIMER NOMBRE</p>
                        <input className="border-0 w-[60%] bg-transparent text-black md:text-left text-right" type="text" value={persona.primer_nombre} disabled />
                    </div>
                    <div className="px-6 md:px-20 h-16 w-full flex border-b border-gray items-center md:justify-normal justify-between text-gray-400 text-sm">
                        <p className="w-2/6 h-full flex items-center">SEGUNDO NOMBRE</p>
                        <input className="border-0 w-[60%] bg-transparent text-black md:text-left text-right" type="text" value={persona.segundo_nombre} disabled />
                    </div>
                    <div className="px-6 md:px-20 h-16 w-full flex border-b border-gray items-center md:justify-normal justify-between text-gray-400 text-sm">
                        <p className="w-2/6 h-full flex items-center">PRIMER APELLIDO</p>
                        <input className="border-0 w-[60%] bg-transparent text-black md:text-left text-right" type="text" value={persona.primer_apellido} disabled />
                    </div>
                    <div className="px-6 md:px-20 h-16 w-full flex border-b border-gray items-center md:justify-normal justify-between text-gray-400 text-sm">
                        <p className="w-2/6 h-full flex items-center">SEGUNDO APELLIDO</p>
                        <input className="border-0 w-[60%] bg-transparent text-black md:text-left text-right" type="text" value={persona.segundo_apellido} disabled />
                    </div>

                </div>

            </div>

        </form>

    );
}