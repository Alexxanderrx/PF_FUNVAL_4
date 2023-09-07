<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_persona');
            $table->foreign('id_persona')->references('id')->on('personas');
            $table->string('usuario')->unique();
            $table->string('clave');
            $table->date('fecha')->nullable();
            $table->unsignedBigInteger('id_rol');
            $table->foreign('id_rol')->references('id')->on('rols');
            $table->char('habilitado', 1)->default(1);
            $table->date('fecha_creacion');
            $table->date('fecha_modificacion')->nullable();
            $table->date('usuario_creacion')->nullable();
            $table->date('usuario_modificacion')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
