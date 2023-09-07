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
        Schema::create('rols', function (Blueprint $table) {
            $table->id();
            $table->string('rol')->unique();
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
        Schema::dropIfExists('rols');
    }
};
