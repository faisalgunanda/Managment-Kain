<?php

namespace Modules\Penjualan\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use DB;
use Carbon\Carbon;
class PenjualanController extends Controller
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
        return view('penjualan::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        $databarang = DB::table('barangs')->select('kode_barang')->get();
        return view('penjualan::create', ["databarang" => $databarang]);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $inputs = $request->except('_method', '_token');
        $condition = $inputs['kode_barang'];
        foreach ($condition as $key => $value) {
            $create = DB::table('penjualans')->insert([
                "kode_barang" => $request->kode_barang[$key],
                "nama_barang" => $request->nama_barang[$key],
                "panjang_terjual" => $request->panjang_terjual[$key],
                "harga_jual" => $request->harga_jual[$key],
                "satuan" => $request->satuan[$key],
                "created_at" => Carbon::now(),
            ]);
            $datastock = DB::table('barangs')->where('kode_barang', $request->kode_barang[$key])->select('stock_tersisa')->first();
            // dd($datastock);
            $updatestock = DB::table('barangs')->where('kode_barang', $request->kode_barang[$key])->update([
                "stock_tersisa" => $datastock->stock_tersisa - 1,
            ]);
        }

        return redirect()->route('penjualan.index')->with('success', 'Berhasil Menambahkan Data!');
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Response
     */
    public function show()
    {
        $get = DB::table('penjualans')->orderBy('id', 'ASC')->get();

        return Datatables()->of($get)
        ->addcolumn('harga_jual', function($get){
            $harga_beli = "Rp. " . number_format($get->harga_jual,0,',','.');

            return $harga_beli;
        })
        ->addcolumn('action', function($get){

            return '<a href="/penjualan/edit/'.$get->id.'" class="action-edit" title="Edit Data"><i class="feather icon-edit"></i></a>
            <a href="#" data-url="/penjualan/delete/'.$get->id.'?kode_barang='.$get->kode_barang.'" class="action-delete" id="delete-penjualan" title="Hapus Data"><i class="feather icon-trash"></i></a>';
        })
        ->rawColumns(['harga_jual', 'action'])
        ->make(true);
        // return view('penjualan::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        $data = DB::table('penjualans')->where('id', $id)->first();
        $databarang = DB::table('barangs')->select('kode_barang')->get();
        return view('penjualan::edit', ["data" => $data, "databarang" => $databarang]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $update = DB::table('penjualans')->where('id', $id)->update([
            "kode_barang" => $request->kode_barang,
            "nama_barang" => $request->nama_barang,
            "panjang_terjual" => $request->panjang_terjual,
            "harga_jual" => $request->harga_jual,
        ]);

        return redirect()->route('penjualan.index');
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Response
     */
    public function destroy(Request $request, $id)
    {
        $delete = DB::table('penjualans')->where('id', $id)->delete();
        $datastock = DB::table('barangs')->where('kode_barang', $request->kode_barang)->select('stock_tersisa')->first();
        $updatestock = DB::table('barangs')->where('kode_barang', $request->kode_barang)->update([
            "stock_tersisa" => $datastock->stock_tersisa + 1,
        ]);

        return redirect()->route('penjualan.index');

    }

    public function getnamabarang(Request $request)
    {
        $name = DB::table('barangs')->where('kode_barang', $request->kode_barang)->select('nama_barang')->first();

        return $name->nama_barang;
    }

    public function getkodebarang()
    {
        $databarang = DB::table('barangs')->select('kode_barang')->get();

        return response()->json($databarang);
    }
}
