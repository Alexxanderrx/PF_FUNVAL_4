<?php

use App\Http\Controllers\BitacoraController;
use App\Http\Controllers\EnlaceController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/autorizacion', [UsuarioController::class, 'authusuario']);
Route::get('/rol', [RolController::class, 'index']);
Route::post('/rol/create', [RolController::class, 'create']);
Route::post('/rol/update/{id}', [RolController::class, 'update']);
Route::get('/usuario', [UsuarioController::class, 'index']);
Route::get('/bitacora', [BitacoraController::class, 'index']);
Route::get('/enlace', [EnlaceController::class, 'index']);
