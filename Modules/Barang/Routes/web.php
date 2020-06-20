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

Route::prefix('barang')->group(function() {
    Route::get('/', 'BarangController@index')->name('barang.index');
    Route::get('/create', 'BarangController@create')->name('barang.create');
    Route::post('/store', 'BarangController@store')->name('barang.store');
    Route::get('/show', 'BarangController@show')->name('barang.show');
    Route::get('/edit/{id}', 'BarangController@edit');
    Route::post('/update/{id}', 'BarangController@update')->name('barang.update');
    Route::get('/delete/{id}', 'BarangController@destroy');
});
