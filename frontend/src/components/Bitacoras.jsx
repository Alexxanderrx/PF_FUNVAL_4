import React from "react";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Bitacoras(props) {


    const [bitacora, setBitacora] = useState([]);
    const [showModal, setShowModal] = React.useState(0);
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/bitacora')
            .then((response) => {
                setBitacora(response.data);
                console.log(response.data);

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
                                    Nombre del bitacora
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Id del Usuario
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Fecha
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Hora
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    IP
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    SO
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Navegador
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Nombre de Usuario
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Habilitado
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {bitacora.map((e, index) => (

                                    <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {e.bitacora}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.id_usuario}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.fecha}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.hora}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.ip}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.so}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.navegador}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {e.usuario_nombre}
                                        </Table.Cell>
                                        <Table.Cell>

                                            {(e.habilitado) == 1 ?
                                                <p className="bg-green-500 text-center text-white rounded-full">Activado</p> :
                                                <p className="bg-red-500 text-center text-white rounded-full px-2">Desactivado</p>
                                            }
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