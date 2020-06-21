<?php

namespace Modules\Pengeluaran\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use DB;
use Carbon;

class PengeluaranController extends Controller
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
        return view('pengeluaran::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('pengeluaran::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $create = DB::table('pengeluarans')->insert([
            "nama_pengeluaran" => $request->nama_pengeluaran,
            "jumlah_pengeluaran" => $request->jumlah_pengeluaran,
            "created_at" => Carbon\Carbon::now()
        ]);

        return redirect()->route('pengeluaran.index')->with('success', 'Berhasil Menambahkan Data!');
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Response
     */
    public function show()
    {
        $get = DB::table('pengeluarans')->orderBy('id', 'ASC')->get();

        return Datatables()->of($get)
        ->addcolumn('jumlah_pengeluaran', function($get){
            $jumlah_pengeluaran = "Rp. " . number_format($get->jumlah_pengeluaran,0,',','.');

            return $jumlah_pengeluaran;
        })
        ->addcolumn('action', function($get){

            return '<a href="/pengeluaran/edit/'.$get->id.'" class="action-edit" title="Edit Data"><i class="feather icon-edit"></i></a>
            <a href="#" data-url="/pengeluaran/delete/'.$get->id.'" class="action-delete" id="delete-pengeluaran" title="Hapus Data"><i class="feather icon-trash"></i></a>';
        })
        ->rawColumns(['jumlah_pengeluaran', 'action'])
        ->make(true);
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        $data = DB::table('pengeluarans')->where('id', $id)->first();
        return view('pengeluaran::edit', ["data" => $data]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $create = DB::table('pengeluarans')->where('id', $id)->
        update([
            "nama_pengeluaran" => $request->nama_pengeluaran,
            "jumlah_pengeluaran" => $request->jumlah_pengeluaran,
        ]);

        return redirect()->route('pengeluaran.index');
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        $delete = DB::table('pengeluarans')->where('id', $id)->delete();

        return redirect()->route('pengeluaran.index');
    }
}
