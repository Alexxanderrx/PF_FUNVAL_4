<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class CookieU extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function crearCookie()
    {
        $cookie = cookie('mi_cookie', 'mi_valor', 60);
        return response('Cookie creada')->cookie($cookie);
    }
}
