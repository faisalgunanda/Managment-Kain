@extends('partials.master')
@section('css')
<link rel="stylesheet" href="{{asset('backend2/vendors/css/forms/select/select2.min4389.css?id=9f54e6414f87e0d14b9e')}}">
@endsection
@section('content')
<div class="row breadcrumbs-top">
  <div class="col-12">
    <h2 class="content-header-title float-left mb-0">Tambah Penjualan Baru</h2>
    <div class="breadcrumb-wrapper col-12">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="{{url('/home')}}"> Dashboard </a>
        </li>
        <li class="breadcrumb-item">
          <a href="{{url('/penjualan')}}"> Data Barang</a>
        </li>
        <li class="breadcrumb-item">
          Tambah Penjualan Baru
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
          <h4 class="card-title">Tambah Data Penjualan</h4>
        </div>
        <div class="card-content">
          <div class="card-body">
            <form class="form form-vertical" method="POST" action="{{route('penjualan.store')}}">
              @method('POST')
              @csrf
              <div class="form-body">
                <div class="row" id="form-penjualan">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="kode_barang">Kode Barang</label>
                      <select class="form-control kode_barang number0" number="0" id="kode_barang0" data-placeholder="Kode Barang" name="kode_barang[]">
                        <option></option>
{{--                         @foreach ($databarang as $barang)
                        <option value="{{ $barang->kode_barang }}">{{ $barang->kode_barang }}</option>
                        @endforeach --}}
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="nama_barang">Nama Barang</label>
                      <input type="text" id="nama_barang0" class="form-control" name="nama_barang[]" placeholder="Nama Barang">
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label for="panjang_terjual">Panjang Terjual</label>
                      <input type="text" id="panjang_terjual" class="form-control" name="panjang_terjual[]" placeholder="Panjang Terjual">
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label for="satuan">Satuan</label>
                      <select class="form-control satuan" id="satuan0" data-placeholder="Satuan" name="satuan[]">
                        <option></option>
                        <option value="Meter">Meter</option>
                        <option value="Yard">Yard</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="harga_jual">Harga Jual</label>
                      <input type="number" id="harga_jual" class="form-control" name="harga_jual[]" placeholder="Harga Jual">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary mr-1 mb-1">Tambah Data</button>
                    <a href="#" class="btn btn-primary mr-1 mb-1 btn-add-form">Tambah Form</a>
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
      $(document).ready(function() {
        $('.kode_barang').select2({
          minimumResultsForSearch: -1
        });

        $('.satuan').select2({
          minimumResultsForSearch: -1
        });

        $.ajax({
          headers:"{{ csrf_token() }}",
          method:"get",
          url:location.origin+"/penjualan/getkodebarang",
          success:function (data) {
            selectOption = ''
            $.each(data, function (idx, val) {
              selectOption += "<option></option>"
              selectOption += "<option value='"+val.kode_barang+"'>"+val.kode_barang+"</option>"
            });
            $('#kode_barang0').html(selectOption);
          }
        });

        $(document).on('click', '.btn-add-form', function(){
          let getkey = $('.kode_barang:last').attr('number');
          let key = parseInt(getkey) + 1;
          $('#form-penjualan').append(
            '<div class="col-12">'+
            '<div class="form-group">'+
            '<label for="kode_barang">Kode Barang</label>'+
            '<select class="form-control kode_barang number'+key+'" number="'+key+'" id="kode_barang'+key+'" data-placeholder="Kode Barang" name="kode_barang[]">'+
            '<option></option>'+
            '</select>'+
            '</div>'+
            '</div>'+
            '<div class="col-12">'+
            '<div class="form-group">'+
            '<label for="nama_barang">Nama Barang</label>'+
            '<input type="text" id="nama_barang'+key+'" class="form-control" name="nama_barang[]" placeholder="Nama Barang">'+
            '</div>'+
            '</div>'+
            '<div class="col-6">'+
            '<div class="form-group">'+
            '<label for="panjang_terjual">Panjang Terjual</label>'+
            '<input type="text" id="panjang_terjual" class="form-control" name="panjang_terjual[]" placeholder="Panjang Terjual">'+
            '</div>'+
            '</div>'+
            '<div class="col-6">'+
            '<div class="form-group">'+
            '<label for="satuan">Satuan</label>'+
            '<select class="form-control satuan" id="satuan'+key+'" data-placeholder="Satuan" name="satuan[]">'+
            '<option></option>'+
            '<option value="Meter">Meter</option>'+
            '<option value="Yard">Yard</option>'+
            '</select>'+
            '</div>'+
            '</div>'+
            '<div class="col-12">'+
            '<div class="form-group">'+
            '<label for="harga_jual">Harga Jual</label>'+
            '<input type="number" id="harga_jual" class="form-control" name="harga_jual[]" placeholder="Harga Jual">'+
            '</div>'+
            '</div>'
            );

          $('.kode_barang').select2({
            minimumResultsForSearch: -1
          });

          $('.satuan').select2({
            minimumResultsForSearch: -1
          });

          $.ajax({
            headers:"{{ csrf_token() }}",
            method:"get",
            url:location.origin+"/penjualan/getkodebarang",
            success:function (data) {
              selectOption = ''
              $.each(data, function (idx, val) {
                selectOption += "<option></option>"
                selectOption += "<option value='"+val.kode_barang+"'>"+val.kode_barang+"</option>"
              });
              $('#kode_barang'+key).html(selectOption);
            }
          });
        });

        $(document).on('change', '.kode_barang', function(){
          var kode_barang = $(this).val();
          var number = $(this).attr('number');
          $.ajax({
            headers: "{{ csrf_token() }}",
            method: "get",
            data: {kode_barang:kode_barang},
            url: '{{route('penjualan.getnamabarang')}}',
            success:function (data) {
              $('#nama_barang'+number).val(data)
            }
          });
        });
      });
    </script>
    @endsection