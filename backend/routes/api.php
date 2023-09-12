<?php

use App\Http\Controllers\BitacoraController;
use App\Http\Controllers\EnlaceController;
use App\Http\Controllers\PaginaController;
use App\Http\Controllers\PersonaController;
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
Route::post('/rol/create/{id}', [RolController::class, 'create']);
Route::post('/rol/update/{id}', [RolController::class, 'update']);
Route::get('/usuario', [UsuarioController::class, 'index']);
Route::get('/usuario/{id}', [UsuarioController::class, 'getById']);
Route::post('/usuario/create/{id}', [UsuarioController::class, 'create']);
Route::post('/usuario/update/{id}', [UsuarioController::class, 'update']);
Route::get('/enlace', [EnlaceController::class, 'index']);
Route::post('/enlace/create/{id}', [EnlaceController::class, 'create']);
Route::post('/enlace/update/{id}', [EnlaceController::class, 'update']);
Route::get('/pagina', [PaginaController::class, 'index']);
Route::post('/pagina/create/{id}', [PaginaController::class, 'create']);
Route::post('/pagina/update/{id}', [PaginaController::class, 'update']);
Route::get('/persona', [PersonaController::class, 'index']);
Route::get('/persona/{id}', [PersonaController::class, 'getById']);
// Route::post('/persona/create', [PersonaController::class, 'create']);
Route::post('/persona/update/{id}', [PersonaController::class, 'update']);
Route::get('/bitacora', [BitacoraController::class, 'index']);
