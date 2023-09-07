<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    public function index()
    {
        $persona = Persona::where('habilitado', 1)->get();
        return $persona;
    }
    public function getById($id)
    {
        if (Persona::find($id) == null) {
            return "No existe un Persona con el id N° " . $id;
        }
        if (Persona::find($id)->state == 0) {
            return "El Persona N° " . $id . " esta desactivado.";
        }
        $persona = Persona::find($id);
        return $persona;
    }
}
