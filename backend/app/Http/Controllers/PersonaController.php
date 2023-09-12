<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use Exception;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    public function index()
    {
        // $persona = Persona::where('habilitado', 1)->get();
        $persona = Persona::all();
        return $persona;
    }
    public function getById($id)
    {
        if (Persona::find($id) == null) {
            return "No existe un Persona con el id N° " . $id;
        }
        // if (Persona::find($id)->state == 0) {
        //     return "El Persona N° " . $id . " esta desactivado.";
        // }
        $persona = Persona::find($id);
        return $persona;
    }
    public function update($id, Request $request)
    {
        try {
            if (Persona::find($id) == null) {
                return "No existe un Persona con el id N° " . $id;
            }
            // if (Persona::find($id)->state == 0) {
            //     return "El Persona N° " . $id . " esta desactivado.";
            // }
            $updatePersona = Persona::find($id);

            ($request->primer_nombre == null) ? ($updatePersona->primer_nombre = $updatePersona->primer_nombre) : ($updatePersona->primer_nombre = $request->primer_nombre);
            ($request->segundo_nombre == null) ? ($updatePersona->segundo_nombre = $updatePersona->segundo_nombre) : ($updatePersona->segundo_nombre = $request->segundo_nombre);
            ($request->primer_apellido == null) ? ($updatePersona->primer_apellido = $updatePersona->primer_apellido) : ($updatePersona->primer_apellido = $request->primer_apellido);
            ($request->segundo_apellido == null) ? ($updatePersona->segundo_apellido = $updatePersona->segundo_apellido) : ($updatePersona->segundo_apellido = $request->segundo_apellido);

            // if ($request->habilitado == null) {
            //     $updatePersona->habilitado = 0;
            // } else {
            //     $updatePersona->habilitado = $request->habilitado;
            // }
            $updatePersona->fecha_modificacion = now();
            // $updatePersona->Persona_creacion = null;
            // $updatePersona->Persona_modificacion = null;

            $updatePersona->save();

            return  redirect("http://localhost:5173/profile/" . $id);
        } catch (Exception $e) {
            $e->getMessage();
        }
        // return  redirect("http://localhost:5173/info")->with(['id' => $newPersona->id]);
    }
}
