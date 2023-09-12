<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Pagina;
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
        Usuario::create(['id_persona' => '1', 'usuario' => 'admin@gmail.com', 'clave' => 123, 'fecha'  => '1999-06-16', 'id_rol' => 1, 'habilitado' => 1, 'fecha_creacion' => now()]);
        Usuario::create(['id_persona' => '2', 'usuario' => 'afiliado@gmail.com', 'clave' => 123, 'fecha'  => '1999-06-16', 'id_rol' => 2, 'habilitado' => 1, 'fecha_creacion' => now()]);
        Usuario::create(['id_persona' => '3', 'usuario' => 'rrhh@gmail.com', 'clave' => 123, 'fecha'  => '1999-06-16', 'id_rol' => 3, 'habilitado' => 1, 'fecha_creacion' => now()]);

        Pagina::create(['nombre' => "Roles", 'url' => "http://localhost:5173/roles", 'estado' => 1, 'descripcion'  => "En esta pagina estan los roles", 'icono'  => "â", 'tipo' => "nose", 'habilitado' => 1, 'fecha_creacion' => now()]);
        Pagina::create(['nombre' => "Usuarios", 'url' => "http://localhost:5173/usuarios", 'estado' => 1, 'descripcion'  => "En esta pagina estan los usuarios", 'icono'  => "â", 'tipo' => "nose", 'habilitado' => 1, 'fecha_creacion' => now()]);
        Pagina::create(['nombre' => "Enlaces", 'url' => "http://localhost:5173/enlaces", 'estado' => 1, 'descripcion'  => "En esta pagina estan los enlaces", 'icono'  => "â", 'tipo' => "nose", 'habilitado' => 1, 'fecha_creacion' => now()]);
        Pagina::create(['nombre' => "Bitacoras", 'url' => "http://localhost:5173/bitacoras", 'estado' => 1, 'descripcion'  => "En esta pagina estan los bitacoras", 'icono'  => "â", 'tipo' => "nose", 'habilitado' => 1, 'fecha_creacion' => now()]);
    }
}
