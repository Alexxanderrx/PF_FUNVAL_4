<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Persona;
use App\Models\Rol;
use App\Models\Usuario;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'test',
            'email' => 'test@example.com',
        ]);
        Rol::create(['rol' => 'ROL_ADMINISTRADOR', 'fecha_creacion' => now(), 'fecha_modificacion' => null, 'usuario_creacion' => null, 'usuario_modificacion' => null]);
        Rol::create(['rol' => 'ROL_AFILIADO', 'fecha_creacion' => now(), 'fecha_modificacion' => null, 'usuario_creacion' => null, 'usuario_modificacion' => null]);
        Rol::create(['rol' => 'ROL_RRHH', 'fecha_creacion' => now(), 'fecha_modificacion' => null, 'usuario_creacion' => null, 'usuario_modificacion' => null]);
        Persona::create(['primer_nombre' => null, 'segundo_nombre' => null, 'primer_apellido' => null, 'segundo_apellido'  => null, 'habilitado' => 1, 'fecha_creacion' => now()]);
        Usuario::create(['id_persona' => '1', 'usuario' => 'admin@gmail.com', 'clave' => 123, 'fecha'  => '1999-06-16', 'id_rol' => 2, 'habilitado' => 1, 'fecha_creacion' => now()]);
    }
}
