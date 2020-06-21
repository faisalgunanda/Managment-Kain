<?php

namespace Modules\Barang\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use DB;

class BarangController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        return view('barang::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('barang::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $create = DB::table('barangs')->insert([
            "kode_barang" => $request->kode_barang,
            "nama_barang" => $request->nama_barang,
            "harga_beli" => $request->harga_beli,
            "harga_jual" => $request->harga_jual,
            "panjang" => $request->panjang,
            "satuan" => $request->satuan,
            "stock_awal" => $request->stock,
            "stock_tersisa" => $request->stock,
            "modal" => $request->modal,
        ]);

        return redirect()->route('barang.index')->with('success', 'Berhasil Menambahkan Data!');
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Response
     */
    public function show()
    {
        $get = DB::table('barangs')->orderBy('id', 'ASC')->get();

        return Datatables()->of($get)
        ->addcolumn('harga_beli', function($get){
            $harga_beli = "Rp. " . number_format($get->harga_beli,0,',','.');

            return $harga_beli;
        })
        ->addcolumn('harga_jual', function($get){
            $harga_jual = "Rp. " . number_format($get->harga_jual,0,',','.');

            return $harga_jual;
        })
        ->addcolumn('modal', function($get){
            $modal = "Rp. " . number_format($get->modal,0,',','.');

            return $modal;
        })
        ->addcolumn('action', function($get){

            return '<a href="/barang/edit/'.$get->id.'" class="action-edit" title="Edit Data"><i class="feather icon-edit"></i></a>
                <a href="#" data-url="/barang/delete/'.$get->id.'" class="action-delete" id="delete-barang" title="Hapus Data"><i class="feather icon-trash"></i></a>';
        })
        ->rawColumns(['harga_beli', 'harga_jual', 'modal', 'action'])
        ->make(true);
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        $data = DB::table('barangs')->where('id', $id)->first();
        return view('barang::edit', ["data" => $data]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $update = DB::table('barangs')->where('id', $id)->update([
            "kode_barang" => $request->kode_barang,
            "nama_barang" => $request->nama_barang,
            "harga_beli" => $request->harga_beli,
            "harga_jual" => $request->harga_jual,
            "panjang" => $request->panjang,
            "satuan" => $request->satuan,
            "stock_awal" => $request->stock,
            "stock_tersisa" => $request->stock,
            "modal" => $request->modal,
        ]);

        return redirect()->route('barang.index');
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        $delete = DB::table('barangs')->where('id', $id)->delete();

        return redirect()->route('barang.index');
    }
}
