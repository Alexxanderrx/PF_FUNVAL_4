<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use App\Models\Rol;
use App\Models\Usuario;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;

class UsuarioController extends Controller
{
    public function index()
    {
        // $usuario = Usuario::where('habilitado', 1)->get();
        $usuario = Usuario::all();
        return $usuario;
    }
    public function getById($id)
    {
        if (Usuario::find($id) == null) {
            return "No existe un Usuario con el id N° " . $id;
        }
        if (Usuario::find($id)->habilitado == 0) {
            return "El Usuario N° " . $id . " esta desactivado.";
        }
        $usuario = Usuario::find($id);
        return $usuario;
    }
    public function create($id, Request $request)
    {
        $newPersona = new Persona();

        $newPersona->primer_nombre = NULL;
        $newPersona->segundo_nombre = NULL;
        $newPersona->primer_apellido = NULL;
        $newPersona->segundo_apellido = NULL;
        $newPersona->fecha_creacion = now();
        $newPersona->fecha_modificacion = NULL;
        $newPersona->usuario_creacion = NULL;
        $newPersona->usuario_modificacion = NULL;

        $newPersona->save();

        $newUsuario = new Usuario();

        $newUsuario->id_persona = $newPersona->id;
        $newUsuario->usuario = $request->usuario;
        $newUsuario->clave = $request->clave;
        $newUsuario->habilitado = "1";
        $newUsuario->fecha = null;

        $newUsuario->id_rol = 2;


        $newUsuario->fecha_creacion = now();
        $newUsuario->fecha_modificacion = null;
        $newUsuario->usuario_creacion = null;
        $newUsuario->usuario_modificacion = null;
        // $idU = $newUsuario->id;
        // $response = new Response();
        // $response->withCookie(cookie('idUsuario', 'hola', 60));

        $newUsuario->save();



        return  redirect("http://localhost:5173/usuarios/" . $id);
        // return  redirect("http://localhost:5173/info")->with(['id' => $newUsuario->id]);
    }
    public function update($id, Request $request)
    {
        try {
            if (Usuario::find($id) == null) {
                return "No existe un Usuario con el id N° " . $id;
            }
            // if (Usuario::find($id)->state == 0) {
            //     return "El Usuario N° " . $id . " esta desactivado.";
            // }
            $updateUsuario = Usuario::find($id);

            ($request->id_persona == null) ? ($updateUsuario->id_persona = $updateUsuario->id_persona) : ($updateUsuario->id_persona = $request->id_persona);
            ($request->usuario == null) ? ($updateUsuario->usuario = $updateUsuario->usuario) : ($updateUsuario->usuario = $request->usuario);
            ($request->clave == null) ? ($updateUsuario->clave = $updateUsuario->clave) : ($updateUsuario->clave = $request->clave);
            ($request->fecha == null) ? ($updateUsuario->fecha = $updateUsuario->fecha) : ($updateUsuario->fecha = $request->fecha);
            ($request->id_rol == null) ? ($updateUsuario->id_rol = $updateUsuario->id_rol) : ($updateUsuario->id_rol = $request->id_rol);

            if ($request->habilitado == null) {
                $updateUsuario->habilitado = 0;
            } else {
                $updateUsuario->habilitado = $request->habilitado;
            }
            $updateUsuario->fecha_modificacion = now();
            // $updateUsuario->usuario_creacion = null;
            // $updateUsuario->usuario_modificacion = null;

            $updateUsuario->save();

            return  redirect("http://localhost:5173/usuarios/" . $id);
        } catch (Exception $e) {
            $e->getMessage();
        }
        // return  redirect("http://localhost:5173/info")->with(['id' => $newUsuario->id]);
    }
    public function authusuario(Request $request)
    {

        $auth = Usuario::where('usuario', $request->usuario)->where('clave', $request->clave)->get();
        // $idU = Usuario::where('usuario', $request->usuario)->where('clave', $request->clave)->id;


        if (count($auth) == 1) {
            // return redirect("http://localhost:5173/info")->cookie('mi_cookiex', 'mi_valorx', 60);
            // $variable = 'Hola desde Laravel';

            // return $auth;
            $auth_array = json_decode($auth, true);
            $id = $auth_array[0]['id'];
            // // return $id;

            // session(['id' => $id]);
            // $idU = session('id');

            // return redirect("http://localhost:5173/info")->with('variable', $id);
            return redirect("http://localhost:5173/dashboard/" . $id);
            // return redirect("http://localhost:5173/dashboard")->with('name', 1);
            // return redirect()->route('http://localhost:5173/dashboard')->with('variable', 1);
            // return redirect("http://localhost:5173/info");
        } else {
            return redirect("http://localhost:5173/");
        }
    }
}
