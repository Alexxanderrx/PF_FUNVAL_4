<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\Pagina;
use App\Models\Usuario;
use Exception;
use Illuminate\Http\Request;

class PaginaController extends Controller
{
    public function index()
    {
        // $Pagina = Pagina::where('habilitado', 1)->get();
        $Pagina = Pagina::all();
        return $Pagina;
    }
    public function getById($id)
    {
        if (Pagina::find($id) == null) {
            return "No existe un Pagina con el id N° " . $id;
        }
        if (Pagina::find($id)->habilitado == 0) {
            return "El Pagina N° " . $id . " esta desactivado.";
        }
        $Pagina = Pagina::find($id);
        return $Pagina;
    }
    public function create($id, Request $request)
    {
        try {
            $newPagina = new Pagina();

            $newPagina->nombre = $request->nombre;
            $newPagina->url = $request->url;
            $newPagina->estado = $request->estado;
            $newPagina->descripcion = $request->descripcion;
            $newPagina->icono = $request->icono;
            $newPagina->tipo = $request->tipo;

            if ($request->habilitado == null) {
                $newPagina->habilitado = 0;
            } else {
                $newPagina->habilitado = $request->habilitado;
            }
            $newPagina->fecha_creacion = now();
            $newPagina->fecha_modificacion = NULL;
            $newPagina->usuario_creacion = NULL;
            $newPagina->usuario_modificacion = NULL;
            $newPagina->save();

            $creador = Usuario::find($id);

            $newBitacora = new Bitacora();

            $newBitacora->bitacora = "Create Pagina";
            $newBitacora->id_usuario = $id;
            $newBitacora->fecha = now();
            $newBitacora->hora = now();
            if (empty($_SERVER['REMOTE_ADDR'])) {
                $newBitacora->ip = "Desconocida";
            } else {
                $newBitacora->ip = $_SERVER['REMOTE_ADDR'];
            }
            $newBitacora->so = PHP_OS;
            $newBitacora->navegador = $_SERVER['HTTP_USER_AGENT'];
            $newBitacora->usuario_nombre = $creador->usuario;
            $newBitacora->habilitado = 1;
            $newBitacora->save();

            return  redirect("http://localhost:5173/paginas/" . $id);
        } catch (Exception $e) {
            return  $e->getMessage();
        }
    }
    public function update($id, Request $request)
    {
        try {
            if (Pagina::find($id) == null) {
                return "No existe un Pagina con el id N° " . $id;
            }
            // if (Pagina::find($id)->state == 0) {
            //     return "El Pagina N° " . $id . " esta desactivado.";
            // }
            $updatePagina = Pagina::find($id);
            ($request->nombre == null) ? ($updatePagina->nombre = $updatePagina->nombre) : ($updatePagina->nombre = $request->nombre);
            ($request->url == null) ? ($updatePagina->url = $updatePagina->url) : ($updatePagina->url = $request->url);
            ($request->estado == null) ? ($updatePagina->estado = $updatePagina->estado) : ($updatePagina->estado = $request->estado);
            ($request->descripcion == null) ? ($updatePagina->descripcion = $updatePagina->descripcion) : ($updatePagina->descripcion = $request->descripcion);
            ($request->icono == null) ? ($updatePagina->icono = $updatePagina->icono) : ($updatePagina->icono = $request->icono);
            ($request->tipo == null) ? ($updatePagina->tipo = $updatePagina->tipo) : ($updatePagina->tipo = $request->tipo);
            ($request->habilitado == null) ? ($updatePagina->habilitado = 0) : ($updatePagina->habilitado = $request->habilitado);

            $updatePagina->save();

            $actualizador = Usuario::find($request->params);

            $newBitacora = new Bitacora();

            $newBitacora->bitacora = "Update Página";
            $newBitacora->id_usuario = $request->params;
            $newBitacora->fecha = now();
            $newBitacora->hora = now();
            if (empty($_SERVER['REMOTE_ADDR'])) {
                $newBitacora->ip = "Desconocida";
            } else {
                $newBitacora->ip = $_SERVER['REMOTE_ADDR'];
            }
            $newBitacora->so = PHP_OS;
            $newBitacora->navegador = $_SERVER['HTTP_USER_AGENT'];
            $newBitacora->usuario_nombre = $actualizador->usuario;
            $newBitacora->habilitado = 1;
            $newBitacora->save();

            return redirect("http://localhost:5173/paginas/" . $request->params);
            // return  "rol actualizado";
        } catch (Exception $e) {
            return  $e->getMessage();
        }
    }
}
