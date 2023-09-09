<?php

namespace Database\Seeders;

use App\Models\Usuario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Usuario::create(['id_persona' => '1', 'usuario' => 'admin@gmail.com', 'clave' => 123, 'fecha'  => 1999 - 06 - 16, 'id_rol' => 2, 'habilitado' => 1, 'fecha_creacion' => now()]);
    }
}
