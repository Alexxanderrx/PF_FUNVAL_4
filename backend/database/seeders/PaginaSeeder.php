<?php

namespace Database\Seeders;

use App\Models\Pagina;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaginaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Pagina::create(['nombre' => "Roles", 'url' => "http://localhost:5173/roles", 'estado' => 1, 'descripcion'  => "En esta pagina estan los roles", 'icono'  => "â", 'tipo' => "nose", 'habilitado' => 1, 'fecha_creacion' => now()]);
        Pagina::create(['nombre' => "Usuarios", 'url' => "http://localhost:5173/usuarios", 'estado' => 1, 'descripcion'  => "En esta pagina estan los usuarios", 'icono'  => "â", 'tipo' => "nose", 'habilitado' => 1, 'fecha_creacion' => now()]);
        Pagina::create(['nombre' => "Enlaces", 'url' => "http://localhost:5173/enlaces", 'estado' => 1, 'descripcion'  => "En esta pagina estan los enlaces", 'icono'  => "â", 'tipo' => "nose", 'habilitado' => 1, 'fecha_creacion' => now()]);
        Pagina::create(['nombre' => "Bitacoras", 'url' => "http://localhost:5173/bitacoras", 'estado' => 1, 'descripcion'  => "En esta pagina estan los bitacoras", 'icono'  => "â", 'tipo' => "nose", 'habilitado' => 1, 'fecha_creacion' => now()]);
    }
}
