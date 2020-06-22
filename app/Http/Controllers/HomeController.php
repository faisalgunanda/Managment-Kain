<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Carbon\Carbon;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        date_default_timezone_set('Asia/Jakarta');
        $today = Carbon::now()->format('Y-m-d');
        $penjualans = DB::table('penjualans')->select('harga_jual');
        $totalmodal = DB::table('barangs')->select('modal')->get()->sum();
        $data_penjualan_hari_ini = DB::table('penjualans')->whereDate('created_at', $today)->select('harga_jual')->get()->sum('harga_jual');
        $data_pengeluaran_hari_ini = DB::table('pengeluarans')->whereDate('created_at', $today)->select('jumlah_pengeluaran')->get()->sum('jumlah_pengeluaran');
        $total_penjualan = $penjualans->get()->sum('harga_jual');
        $data = array(
            "data_hari_ini" => $this->number_rupiah_format($data_penjualan_hari_ini),
            "total" => $this->number_rupiah_format($total_penjualan),
            "modal" => $this->number_rupiah_format($totalmodal - $total_penjualan),
            "data_pengeluaran_hari_ini" => $this->number_rupiah_format($data_pengeluaran_hari_ini),

        );

        return view('admin', $data);
    }

    public function number_rupiah_format($data)
    {
        $rupiah = "Rp. " . number_format($data,0,',','.');

        return $rupiah;
    }
}
