<?php

namespace App\Http\Controllers;

use App\Models\Enlace;
use Illuminate\Http\Request;

class EnlaceController extends Controller
{
    public function index()
    {
        // $Enlace = Enlace::where('habilitado', 1)->get();
        $Enlace = Enlace::all();
        return $Enlace;
    }
    public function getById($id)
    {
        if (Enlace::find($id) == null) {
            return "No existe un Enlace con el id N° " . $id;
        }
        // if (Enlace::find($id)->state == 0) {
        //     return "El Enlace N° " . $id . " esta desactivado.";
        // }
        $Enlace = Enlace::find($id);
        return $Enlace;
    }
}
