<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('pengeluaran')->group(function() {
    Route::get('/', 'PengeluaranController@index')->name('pengeluaran.index');
    Route::get('/create', 'PengeluaranController@create')->name('pengeluaran.create');
    Route::post('/store', 'PengeluaranController@store')->name('pengeluaran.store');
    Route::get('/show', 'PengeluaranController@show')->name('pengeluaran.show');
    Route::get('/edit/{id}', 'PengeluaranController@edit');
    Route::post('/update/{id}', 'PengeluaranController@update')->name('pengeluaran.update');
    Route::get('/delete/{id}', 'PengeluaranController@destroy');
});
