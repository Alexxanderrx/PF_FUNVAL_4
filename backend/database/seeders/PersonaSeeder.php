<?php

namespace Database\Seeders;

use App\Models\Persona;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PersonaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Persona::create(['primer_nombre' => null, 'segundo_nombre' => null, 'primer_apellido' => null, 'segundo_apellido'  => null, 'habilitado' => 1, 'fecha_creacion' => now()]);
        Persona::create(['primer_nombre' => null, 'segundo_nombre' => null, 'primer_apellido' => null, 'segundo_apellido'  => null, 'habilitado' => 1, 'fecha_creacion' => now()]);
        Persona::create(['primer_nombre' => null, 'segundo_nombre' => null, 'primer_apellido' => null, 'segundo_apellido'  => null, 'habilitado' => 1, 'fecha_creacion' => now()]);
    }
}
