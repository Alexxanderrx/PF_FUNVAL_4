import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useParams } from 'react-router-dom';

export default function Usuarios(props) {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const params = useParams();
    const [usuario, setUsuario] = useState([]);
    const [usuarioB, setUsuarioB] = useState([]);
    const [persona, setPersona] = useState([]);
    const [rol, setRol] = useState([]);
    const [showModal, setShowModal] = React.useState(0);
    const [newModal, setNewModal] = React.useState(false);


    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/usuario/' + params.id)
            .then((response) => {
                setUsuarioB(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        setTimeout(() => {
            axios
                .get('http://127.0.0.1:8000/api/usuario')
                .then((response) => {
                    setUsuario(response.data);
                    // console.log(response.data);

                })
                .catch((error) => {
                    console.error(error);
                });
        }, 2000);
        setTimeout(() => {
            axios
                .get('http://127.0.0.1:8000/api/persona')
                .then((response) => {
                    setPersona(response.data);
                    // console.log(response.data);

                })
                .catch((error) => {
                    console.error(error);
                });
        }, 4000);
        setTimeout(() => {
            axios
                .get('http://127.0.0.1:8000/api/rol')
                .then((response) => {
                    setRol(response.data);
                    // console.log(response.data);

                })
                .catch((error) => {
                    console.error(error);
                });
        }, 6000);
    }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         axios
    //             .get('http://127.0.0.1:8000/api/usuario/' + params.id)
    //             .then((response) => {
    //                 setUsuarioB(response.data);
    //                 console.log(response.data);
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //             });
    //     }, 4000);
    // }, []);

    // usuario.map((rev) => {
    //     count(rev.id == params) == 0 &&
    //         null
    // });
    return (
        <>
            <div className="h-16 w-11/12  flex justify-between items-center">
                <p className="truncate  text-xl md:text-2xl font-medium pr-4">{props.name}</p>
                <form action={"http://127.0.0.1:8000/api/usuario/create/" + params.id} method="POST">
                    {usuarioB.id_rol == 1 ? (
                        <button
                            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setNewModal(true)}
                        >
                            Nuevo {props.name}
                        </button>) : null}
                    {newModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-sm">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Crear Nuevo {props.name}
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setNewModal(false)}
                                            >
                                                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex flex-col gap-6">
                                            <div className="flex items-center justify-between">
                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Persona :</span>
                                                {/* <input className="" type="text" name="id_persona" required /> */}
                                                <select name="id_persona" required>
                                                    <option value="" disabled selected>Selecione ID</option>
                                                    {persona.map((e, index) => (
                                                        <option key={index} value={e.id}>{e.id}</option>
                                                    ))}

                                                </select>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Usuario :</span>
                                                <input className="" type="text" name="usuario" required />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Clave :</span>
                                                <input className="" type="password" name="clave" required />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Fecha de Nacimiento :</span>
                                                <input className="" type="date" name="fecha" required />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Rol :</span>
                                                {/* <input className="" type="number" name="id_rol" required /> */}
                                                <select name="id_rol" required>
                                                    <option value="" disabled selected>Selecione ID</option>
                                                    {rol.map((e, index) => (
                                                        <option key={index} value={e.id}>{e.rol}</option>
                                                    ))}

                                                </select>
                                            </div>
                                            <div className="flex gap-4 justify-between">
                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Estado del rol :</span>
                                                <label className="relative inline-flex items-center mb-4 cursor-pointer">

                                                    <input type="checkbox" value="1" name="habilitado" className="sr-only peer" />
                                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                                                </label>
                                            </div>

                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setNewModal(false)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                            // onClick={() => setShowModal(false)}
                                            >
                                                Create
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </form>
                <p className="text-xs md:text-base"><span className=" text-sky-500">Home</span> / <span>{props.name}</span></p>
            </div>
            <section className=" h-[85%] flex w-11/12  justify-start items-start">
                <div className=" w-full h-full  p-4 bg-white border">

                    <div className="relative  h-full overflow-auto shadow-md sm:rounded-lg">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell>
                                    Persona
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Usuario
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Clave
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Fecha de Nacimiento
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Rol
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Habilitado
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Fecha de Creación
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Fecha de Modificación
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Usuario de Creación
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Usuario de Modificación
                                </Table.HeadCell>
                                {usuarioB.id_rol == 1 ? (
                                    <Table.HeadCell>
                                        <b>ACCIONES</b>
                                    </Table.HeadCell>
                                ) : null}
                            </Table.Head>
                            <Table.Body className="divide-y ">
                                {usuario != "" ? (usuario.map((e, index) => (

                                    <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {e.id_persona}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.usuario}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.clave}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.fecha}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {rol != "" ? (rol.map((f) => (
                                                (f.id == e.id_rol) ? f.rol : null
                                            ))) : <div className="text-center">
                                                <div role="status">
                                                    <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                    </svg>
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>}
                                        </Table.Cell>
                                        <Table.Cell>

                                            {(e.habilitado) == 1 ?
                                                <p className="bg-green-500 text-center text-white rounded-full px-2">Activado</p> :
                                                <p className="bg-red-500 text-center text-white rounded-full px-2">Desactivado</p>
                                            }
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.fecha_creacion}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.fecha_modificacion}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.usuario_creacion}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.usuario_creacion}
                                        </Table.Cell>
                                        {usuarioB.id_rol == 1 ? (
                                            <Table.Cell>
                                                <form id={e.id} action={"http://127.0.0.1:8000/api/usuario/update/" + e.id} method="POST">
                                                    <input className="hidden" type="text" name="params" value={params.id} />
                                                    <button
                                                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(e.id)}
                                                    >
                                                        Editar
                                                    </button>
                                                    {(showModal == e.id) ? (
                                                        <>
                                                            <div
                                                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                            >
                                                                <div className="relative w-auto my-6 mx-auto max-w-sm">
                                                                    {/*content*/}
                                                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                        {/*header*/}
                                                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                                            <h3 className="text-3xl font-semibold">
                                                                                Actualizar {props.name}
                                                                            </h3>
                                                                            <button
                                                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                                onClick={() => setShowModal(false)}
                                                                            >
                                                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                                    ×
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                        {/*body*/}
                                                                        <div className="relative p-6 flex flex-col gap-6">
                                                                            <div className="flex items-center justify-between">
                                                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Persona :</span>
                                                                                {/* <input className="" type="text" name="id_persona" required /> */}
                                                                                <select name="id_persona" >
                                                                                    <option value={e.id_persona} disabled selected>Selecione ID</option>
                                                                                    {persona.map((p, index) => (
                                                                                        <option key={index} value={p.id}>{p.id}</option>
                                                                                    ))}

                                                                                </select>
                                                                            </div>
                                                                            <div className="flex items-center justify-between">
                                                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Usuario :</span>
                                                                                <input className="" type="text" name="usuario" placeholder={e.usuario} />
                                                                            </div>
                                                                            <div className="flex items-center justify-between">
                                                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Clave :</span>
                                                                                <input className="" type="password" name="clave" placeholder={e.clave} />
                                                                            </div>
                                                                            <div className="flex items-center justify-between">
                                                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Fecha de Nacimiento :</span>
                                                                                <input className="" type="date" name="fecha" placeholder={e.fecha} />
                                                                            </div>
                                                                            <div className="flex items-center justify-between">
                                                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Rol :</span>
                                                                                {/* <input className="" type="number" name="id_rol" required /> */}
                                                                                <select name="id_rol" >
                                                                                    <option value={e.id_rol} disabled selected>Selecione ID</option>
                                                                                    {rol.map((r, index) => (
                                                                                        <option key={index} value={r.id}>{r.rol}</option>
                                                                                    ))}

                                                                                </select>
                                                                            </div>
                                                                            <div className="flex gap-4 justify-between">
                                                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Estado del rol :</span>
                                                                                <label className="relative inline-flex items-center mb-4 cursor-pointer">

                                                                                    <input type="checkbox" value="1" name="habilitado" className="sr-only peer" />
                                                                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                                                                                </label>
                                                                            </div>

                                                                        </div>
                                                                        {/*footer*/}
                                                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                                            <button
                                                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                                type="button"
                                                                                onClick={() => setShowModal(false)}
                                                                            >
                                                                                Close
                                                                            </button>
                                                                            <button
                                                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                                type="submit"
                                                                            >
                                                                                Save Changes
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                                        </>
                                                    ) : null}
                                                </form>
                                            </Table.Cell>
                                        ) : null}
                                    </Table.Row>
                                ))) :
                                    <Table.Row className="text-center ">
                                        <Table.Cell role="status">
                                            <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </Table.Cell>
                                    </Table.Row>
                                }
                            </Table.Body>
                        </Table>




                    </div>

                </div>
            </section>
        </>

    )
}