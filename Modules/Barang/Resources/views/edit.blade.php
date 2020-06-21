@extends('partials.master')
@section('css')
<link rel="stylesheet" href="{{asset('backend2/vendors/css/forms/select/select2.min4389.css?id=9f54e6414f87e0d14b9e')}}">
@endsection
@section('content')
<div class="row breadcrumbs-top">
  <div class="col-12">
    <h2 class="content-header-title float-left mb-0">Edit Data Barang</h2>
    <div class="breadcrumb-wrapper col-12">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="{{url('/home')}}"> Dashboard </a>
        </li>
        <li class="breadcrumb-item">
          <a href="{{url('/barang')}}"> Data Barang</a>
        </li>
        <li class="breadcrumb-item">
          Edit Data Barang
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
          <h4 class="card-title">Edit Data Barang</h4>
        </div>
        <div class="card-content">
          <div class="card-body">
            <form class="form form-vertical" method="POST" action="{{route('barang.update', ["id" => $data->id])}}">
              <div class="form-body">
                <div class="row">
                  <div class="row">
                    @METHOD('POST')
                      @csrf
                      <div class="col-12">
                        <div class="form-group">
                          <label for="kode_barang">Kode Barang</label>
                          <input value="{{$data->kode_barang}}" type="text" id="kode_barang" class="form-control" name="kode_barang" placeholder="Kode Barang">
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="nama_barang">Nama Barang</label>
                          <input value="{{$data->nama_barang}}" type="text" id="nama_barang" class="form-control" name="nama_barang" placeholder="Nama Barang">
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="harga_beli">Harga Beli</label>
                          <input value="{{$data->harga_beli}}" type="number" id="harga_beli" class="form-control" name="harga_beli" placeholder="Harga Beli">
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="harga_jual">Harga Jual</label>
                          <input value="{{$data->harga_jual}}" type="number" id="harga_jual" class="form-control" name="harga_jual" placeholder="Harga Jual">
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="form-group">
                          <label for="panjang">Panjang</label>
                          <input value="{{$data->panjang}}" type="text" id="panjang" class="form-control" name="panjang" placeholder="Panjang">
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="form-group">
                          <label for="satuan">Satuan</label>
                          <select class="form-control" id="satuan" data-placeholder="Satuan" name="satuan">
                            <option></option>
                            <option value="Meter" @if($data->satuan == "Meter") selected @endif>Meter</option>
                            <option value="Yard" @if($data->satuan == "Yard") selected @endif>Yard</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="form-group">
                          <label for="stock">Stock</label>
                          <input value="{{$data->stock_tersisa}}" type="number" id="stock" class="form-control" name="stock" placeholder="Stock">
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="modal">Modal</label>
                          <input value="{{$data->modal}}" type="number" id="modal" class="form-control" name="modal" placeholder="Modal">
                        </div>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary mr-1 mb-1">Edit</button>
                        {{-- <button type="reset" class="btn btn-outline-warning mr-1 mb-1">Reset</button> --}}
                    </div>
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