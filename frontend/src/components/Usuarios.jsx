import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Usuarios(props) {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/usuario')
            .then((response) => {
                setUsuario(response.data);
                // console.log(response.data);

            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    // const roles = rol;
    // console.log(roles);

    return (
        <>
            <div className="h-16 w-11/12  flex justify-between items-center">
                <p className="truncate  text-xl md:text-2xl font-medium pr-4">{props.name}</p>
                <p className="text-xs md:text-base"><a href="./lobby.php" className=" text-sky-500">Home</a> / <span>{props.name}</span></p>
            </div>
            <section className="flex w-11/12  justify-start items-start">
                <div className=" w-full h-full p-4 bg-white border">

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                <Table.HeadCell>
                                    <span className="sr-only">
                                        Edit
                                    </span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {usuario.map((e, index) => (

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
                                            {e.id_rol}
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
                                        <Table.Cell>
                                            <a
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                href="/tables"
                                            >
                                                <p>
                                                    Editar
                                                </p>
                                            </a>
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