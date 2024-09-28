<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthenticatedSessionController::class, 'storeApi']);
    Route::post('register',[RegisteredUserController::class, 'storeApi']);
})->middleware('auth:sanctum');;