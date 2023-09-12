<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\Rol;
use App\Models\Usuario;
use Exception;
use Illuminate\Http\Request;

class RolController extends Controller
{
    public function index()
    {
        // $rol = Rol::where('habilitado', 1)->get();
        $rol = Rol::all();
        return $rol;
    }
    public function getById($id)
    {
        if (Rol::find($id) == null) {
            return "No existe un Rol con el id N° " . $id;
        }
        // if (Rol::find($id)->state == 0) {
        //     return "El Rol N° " . $id . " esta desactivado.";
        // }
        $rol = Rol::find($id);
        return $rol;
    }
    public function create($id, Request $request)
    {
        try {
            $newRol = new Rol();

            $newRol->rol = $request->rol;
            if ($request->habilitado == null) {
                $newRol->habilitado = 0;
            } else {
                $newRol->habilitado = $request->habilitado;
            }
            $newRol->fecha_creacion = now();
            $newRol->fecha_modificacion = NULL;
            $newRol->usuario_creacion = NULL;
            $newRol->usuario_modificacion = NULL;
            $newRol->save();

            $creador = Usuario::find($id);

            $newBitacora = new Bitacora();

            $newBitacora->bitacora = "Create Rol";
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

            return  redirect("http://localhost:5173/roles/" . $id);
        } catch (Exception $e) {
            return  $e->getMessage();
        }



        // return  redirect("http://localhost:5173/info")->with(['id' => $newUsuario->id]);
    }
    public function update($id, Request $request)
    {
        try {
            if (Rol::find($id) == null) {
                return "No existe un Rol con el id N° " . $id;
            }
            // if (Rol::find($id)->state == 0) {
            //     return "El Rol N° " . $id . " esta desactivado.";
            // }
            $updateRol = Rol::find($id);
            if ($request->rol == null) {
                $updateRol->rol = $updateRol->rol;
            } else {
                $updateRol->rol = $request->rol;
            }

            if ($request->habilitado == null) {
                $updateRol->habilitado = 0;
            } else {
                $updateRol->habilitado = $request->habilitado;
            }

            $updateRol->fecha_modificacion = now();

            $updateRol->save();

            $actualizador = Usuario::find($request->params);

            $newBitacora = new Bitacora();

            $newBitacora->bitacora = "Update Rol";
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
            // return $updateRol;
            return redirect("http://localhost:5173/roles/" . $request->params);
            // return  "rol actualizado";
        } catch (Exception $e) {
            return  $e->getMessage();
        }
        // return  redirect("http://localhost:5173/info")->with(['id' => $newUsuario->id]);
    }
}
