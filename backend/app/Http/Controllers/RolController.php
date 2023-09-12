<?php

namespace App\Http\Controllers;

use App\Models\Rol;
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
            // $updateRol->usuario_creacion = NULL;
            // $updateRol->usuario_modificacion = NULL;
            $updateRol->save();
            // return $updateRol;
            return redirect("http://localhost:5173/roles/" . $id);
            // return  "rol actualizado";
        } catch (Exception $e) {
            return  $e->getMessage();
        }
        // return  redirect("http://localhost:5173/info")->with(['id' => $newUsuario->id]);
    }
}
