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

Route::prefix('penjualan')->group(function() {
    Route::get('/', 'PenjualanController@index')->name('penjualan.index');
    Route::get('/create', 'PenjualanController@create')->name('penjualan.create');
    Route::post('/store', 'PenjualanController@store')->name('penjualan.store');
    Route::get('/show', 'PenjualanController@show')->name('penjualan.show');
    Route::get('/edit/{id}', 'PenjualanController@edit');
    Route::post('/update/{id}', 'PenjualanController@update')->name('penjualan.update');
    Route::get('/delete/{id}', 'PenjualanController@destroy');
    Route::get('/getnamabarang', 'PenjualanController@getnamabarang')->name('penjualan.getnamabarang');
    Route::get('/getkodebarang', 'PenjualanController@getkodebarang')->name('penjualan.getkodebarang');
});
