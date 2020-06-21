@extends('partials.master')
@section('css')
<link rel="stylesheet" href="{{asset('backend2/vendors/css/forms/select/select2.min4389.css?id=9f54e6414f87e0d14b9e')}}">
@endsection
@section('content')
<div class="row breadcrumbs-top">
  <div class="col-12">
    <h2 class="content-header-title float-left mb-0">Edit Data Pengeluaran</h2>
    <div class="breadcrumb-wrapper col-12">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="{{url('/home')}}"> Dashboard </a>
        </li>
        <li class="breadcrumb-item">
          <a href="{{url('/pengeluaran')}}"> Data Pengeluaran</a>
        </li>
        <li class="breadcrumb-item">
          Edit Data Pengeluaran
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
          <h4 class="card-title">Edit Data Pengeluaran</h4>
        </div>
        <div class="card-content">
          <div class="card-body">
            <form class="form form-vertical" method="POST" action="{{route('pengeluaran.update', ["id" => $data->id])}}">
              <div class="form-body">
                <div class="row">
                  @method('POST')
                  @csrf
                  <div class="col-12">
                    <div class="form-group">
                      <label for="nama_pengeluaran">Nama Pengeluaran</label>
                      <input value="{{$data->nama_pengeluaran}}" type="text" id="nama_pengeluaran" class="form-control" name="nama_pengeluaran" placeholder="Nama Pengeluaran">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="jumlah_pengeluaran">Nominal Pengeluaran</label>
                      <input value="{{$data->jumlah_pengeluaran}}" type="text" id="jumlah_pengeluaran" class="form-control" name="jumlah_pengeluaran" placeholder="Nominal Pengeluaran">
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
    <script src="{{asset('backend2/vendors/js/forms/select/select2.full.minf0a3.js?id=708724c21c5073e9e228')}}"></script>
    <script>
      var harga_beli = document.getElementById('harga_beli');
      var modal = document.getElementById('modal');
      harga_beli.addEventListener('keyup', function(e){
        modal.value = this.value;
      });
      $(document).ready(function() {
        $('#satuan').select2({
          minimumResultsForSearch: -1
        });
      });
    </script>
    @endsection