@extends('partials.master')
@section('css')
<link rel="stylesheet" href="{{asset('backend2/vendors/css/forms/select/select2.min4389.css?id=9f54e6414f87e0d14b9e')}}">
@endsection
@section('content')
<div class="row breadcrumbs-top">
  <div class="col-12">
    <h2 class="content-header-title float-left mb-0">Tambah Data Pengeluaran</h2>
    <div class="breadcrumb-wrapper col-12">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="{{url('/home')}}"> Dashboard </a>
        </li>
        <li class="breadcrumb-item">
          <a href="{{url('/barang')}}"> Data Pengeluaran</a>
        </li>
        <li class="breadcrumb-item">
          Tambah Pengeluaran Baru
        </li>
      </ol>
    </div>
  </div>
</div>
<br>
<section id="basic-vertical-layouts">
  <div class="row match-height">
    <div class="col-md-6 col-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Tambah Data Pengeluaran</h4>
        </div>
        <div class="card-content">
          <div class="card-body">
            <form class="form form-vertical" method="POST" action="{{route('pengeluaran.store')}}">
              <div class="form-body">
                <div class="row">
                  @method('POST')
                  @csrf
                  <div class="col-12">
                    <div class="form-group">
                      <label for="nama_pengeluaran">Nama Pengeluaran</label>
                      <input type="text" id="nama_pengeluaran" class="form-control" name="nama_pengeluaran" placeholder="Nama Pengeluaran">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="jumlah_pengeluaran">Nominal Pengeluaran</label>
                      <input type="text" id="jumlah_pengeluaran" class="form-control" name="jumlah_pengeluaran" placeholder="Nominal Pengeluaran">
                    </div>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary mr-1 mb-1">Tambah</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    @endsection
    @section('js')
    @endsection