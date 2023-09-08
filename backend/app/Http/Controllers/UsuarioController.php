<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use App\Models\Rol;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuario = Usuario::where('habilitado', 1)->get();
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
    public function create(Request $request)
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



        return  redirect("http://localhost:5173/");
        // return  redirect("http://localhost:5173/info")->with(['id' => $newUsuario->id]);
    }
    // public function cookieU(Request $request)
    // {
    //     return Response('Cookie creada')->cookie('mi_cookie', 'mi_valor');
    // }
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
            // return $id;

            session(['id' => $id]);
            $idU = session('id');

            // return redirect("http://localhost:5173/info")->with('variable', $id);
            return redirect("http://localhost:5173/info?id=" . $idU);
            // return redirect("http://localhost:5173/info");
        } else {
            return redirect("http://localhost:5173/");
        }
    }
}
