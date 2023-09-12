<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use Illuminate\Http\Request;

class BitacoraController extends Controller
{
    public function index()
    {
        // $Bitacora = Bitacora::where('habilitado', 1)->get();
        $Bitacora = Bitacora::all();
        return $Bitacora;
    }
    public function getById($id)
    {
        if (Bitacora::find($id) == null) {
            return "No existe un Bitacora con el id N° " . $id;
        }
        // if (Bitacora::find($id)->state == 0) {
        //     return "El Bitacora N° " . $id . " esta desactivado.";
        // }
        $Bitacora = Bitacora::find($id);
        return $Bitacora;
    }
}
