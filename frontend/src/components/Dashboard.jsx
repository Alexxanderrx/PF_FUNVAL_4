
export default function Dashboard() {
    return (

        <>
            <div className="h-16 w-11/12  flex justify-between items-center">
                <p id="title01" className="truncate  text-xl md:text-2xl font-medium pr-4">Dashboard</p>
                <p className="text-xs md:text-base"><a href="./lobby.php" className=" text-sky-500">Home</a> / <span id="title02">Dashboard</span></p>
            </div>
            <section id="sectionBienvenida" className="flex w-11/12  justify-start items-start">
                <div className=" w-[540px] p-4 bg-white border">
                    <p>Bienvenido</p>
                    <p>Seleciona la acción que quieres realizar en la pestaña de menu de la izquierda</p>
                </div>
            </section>
        </>

    )
}