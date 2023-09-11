<?php

namespace App\Http\Controllers;

use App\Models\Pagina;
use Illuminate\Http\Request;

class PaginaController extends Controller
{
    public function index()
    {
        $Pagina = Pagina::where('habilitado', 1)->get();
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
}
