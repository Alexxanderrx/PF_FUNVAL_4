import React from "react";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Enlaces(props) {


    const [enlace, setEnlace] = useState([]);
    const [showModal, setShowModal] = React.useState(0);
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/enlace')
            .then((response) => {
                setEnlace(response.data);
                // console.log(response.data);

            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>

            <div className="h-16 w-11/12  flex justify-between items-center">
                <p className="truncate  text-xl md:text-2xl font-medium pr-4">{props.name}</p>
                <p className="text-xs md:text-base"><span className=" text-sky-500">Home</span> / <span>{props.name}</span></p>
            </div>
            <section className=" h-[85%] flex w-11/12  justify-start items-start">
                <div className=" w-full h-full  p-4 bg-white border">

                    <div className="relative  h-full overflow-auto shadow-md sm:rounded-lg">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell>
                                    Id Pagina
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Id Rol
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Descripcion
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
                                <Table.HeadCell>
                                    <b>ACCIONES</b>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {enlace.map((e, index) => (

                                    <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {e.rol}
                                        </Table.Cell>
                                        <Table.Cell>

                                            {(e.habilitado) == 1 ?
                                                <p className="bg-green-500 text-center text-white rounded-full">Activado</p> :
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
                                        <Table.Cell>
                                            <form id={e.id} action={"http://127.0.0.1:8000/api/rol/update/" + e.id} method="POST">
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
                                                                            Actualizar Rol
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
                                                                    <div className="relative p-6 flex flex-col gap-4">
                                                                        <div className="flex">
                                                                            <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Nuevo nombre rol :</span>
                                                                            <input className="" type="text" name="rol" placeholder={e.rol} />
                                                                        </div>
                                                                        <div className="flex gap-4 ">
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
                                                                        // onClick={() => setShowModal(false)}
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
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </section>
        </>

    )
}