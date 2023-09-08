<?php

use App\Http\Controllers\BitacoraController;
use App\Http\Controllers\EnlaceController;
use App\Http\Controllers\PaginaController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UsuarioController;
use App\Http\Middleware\NewCookie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/usuario', [UsuarioController::class, 'index']);
Route::get('/usuario/{id}', [UsuarioController::class, 'getById']);

Route::post('/usuario/create', [UsuarioController::class, 'create']);

// Route::get('/usuario/cookieU', [UsuarioController::class, 'cookieU']);

Route::post('/authusuario', [UsuarioController::class, 'authusuario']);
// Route::put('/usuario/update/{id}', [UsuarioController::class, 'update']);
// Route::put('/usuario/delete/{id}', [UsuarioController::class, 'delete']);

// Route::get('/bitacora', [BitacoraController::class, 'index']);
// Route::get('/bitacora/{id}', [BitacoraController::class, 'getById']);
// Route::post('/bitacora/create', [BitacoraController::class, 'create']);
// Route::put('/bitacora/update/{id}', [BitacoraController::class, 'update']);
// Route::put('/bitacora/delete/{id}', [BitacoraController::class, 'delete']);

// Route::get('/enlace', [EnlaceController::class, 'index']);
// Route::get('/enlace/{id}', [EnlaceController::class, 'getById']);
// Route::post('/enlace/create', [EnlaceController::class, 'create']);
// Route::put('/enlace/update/{id}', [EnlaceController::class, 'update']);
// Route::put('/enlace/delete/{id}', [EnlaceController::class, 'delete']);

// Route::get('/pagina', [PaginaController::class, 'index']);
// Route::get('/pagina/{id}', [PaginaController::class, 'getById']);
// Route::post('/pagina/create', [PaginaController::class, 'create']);
// Route::put('/pagina/update/{id}', [PaginaController::class, 'update']);
// Route::put('/pagina/delete/{id}', [PaginaController::class, 'delete']);

Route::get('/persona', [PersonaController::class, 'index']);
Route::get('/persona/{id}', [PersonaController::class, 'getById']);
// Route::post('/persona/create', [PersonaController::class, 'create']);
// Route::put('/persona/update/{id}', [PersonaController::class, 'update']);
// Route::put('/persona/delete/{id}', [PersonaController::class, 'delete']);

// Route::get('/rol', [RolController::class, 'index']);
// Route::get('/rol/{id}', [RolController::class, 'getById']);
// Route::post('/rol/create', [RolController::class, 'create']);
// Route::put('/rol/update/{id}', [RolController::class, 'update']);
// Route::put('/rol/delete/{id}', [RolController::class, 'delete']);