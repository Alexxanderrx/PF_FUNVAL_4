import React from "react";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useParams } from 'react-router-dom';
export default function Paginas(props) {
    const params = useParams();
    // console.log(params)

    const [pagina, setPagina] = useState([]);
    const [showModal, setShowModal] = React.useState(0);
    const [newModal, setNewModal] = React.useState(false);
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/pagina')
            .then((response) => {
                setPagina(response.data);
                // console.log(response.data);

            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>

            <div className="h-16 w-11/12  flex justify-between items-center">
                <p className="truncate  text-xl md:text-2xl font-medium pr-4">{props.name + "s"}</p>
                <form action={"http://127.0.0.1:8000/api/pagina/create/" + params.id} method="POST">
                    <button
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setNewModal(true)}
                    >
                        Nueva {props.name + "s"}
                    </button>
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
                                                Crear Nueva {props.name}
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setNewModal(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex flex-col gap-6">
                                            <div className="flex items-center justify-between">
                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre de la {props.name} :</span>
                                                <input className="" type="text" name="nombre" required />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">URL :</span>
                                                <input className="" type="text" name="url" required />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Estado :</span>
                                                <input className="" type="text" name="estado" required />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Descripción :</span>
                                                <textarea className="" type="text" name="descripcion" >
                                                </textarea>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Icono :</span>
                                                <input className="" type="text" name="icono" required />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Tipo :</span>
                                                <input className="" type="text" name="tipo" required />
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

                <p className="text-xs md:text-base"><a href="./lobby.php" className=" text-sky-500">Home</a> / <span>{props.name}</span></p>
            </div>
            <section className=" h-[85%] flex w-11/12  justify-start items-start">
                <div className=" w-full h-full  p-4 bg-white border">

                    <div className="relative  h-full overflow-auto shadow-md sm:rounded-lg">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell>
                                    Nombre
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    URL
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Estado
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Descripcion
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Icono
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Tipo
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
                                {pagina.map((e, index) => (

                                    <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {e.nombre}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.url}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.estado}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.descripcion}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.icono}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.tipo}
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
                                            {e.usuario_modificacion}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <form id={e.id} action={"http://127.0.0.1:8000/api/pagina/update/" + e.id} method="POST">
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
                                                                    <div className="relative p-6 flex flex-col gap-4">
                                                                        <div className="flex justify-between items-center">
                                                                            <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre :</span>
                                                                            <input className="" type="text" name="nombre" placeholder={e.nombre} />
                                                                        </div>
                                                                        <div className="flex justify-between items-center">
                                                                            <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">URL :</span>
                                                                            <input className="" type="text" name="url" placeholder={e.url} />
                                                                        </div>
                                                                        <div className="flex justify-between items-center">
                                                                            <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Estado :</span>
                                                                            <input className="" type="text" name="estado" placeholder={e.estado} />
                                                                        </div>
                                                                        <div className="flex justify-between items-center">
                                                                            <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Descripción :</span>
                                                                            <textarea className="" type="text" name="descripcion" placeholder={e.descripcion} >
                                                                            </textarea>
                                                                        </div>
                                                                        <div className="flex justify-between items-center">
                                                                            <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Icono :</span>
                                                                            <input className="" type="text" name="icono" placeholder={e.icono} />
                                                                        </div>
                                                                        <div className="flex justify-between items-center">
                                                                            <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Tipo :</span>
                                                                            <input className="" type="text" name="tipo" placeholder={e.tipo} />
                                                                        </div>
                                                                        <div className="flex justify-between gap-4 ">
                                                                            <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Estado del rol :</span>
                                                                            <label className="relative inline-flex items-center justify-center mb-4 cursor-pointer">

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
            </section >
        </>

    )
}