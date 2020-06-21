@extends('partials.master')
@section('css')
<link rel="stylesheet" href="{{asset('backend2/vendors/css/animate/animateb12e.css?id=91cc40989e5e96e8d6bd')}}">
<link rel="stylesheet" href="{{asset('backend2/vendors/css/extensions/sweetalert2.min85ba.css?id=56562de5f0c1004971d5')}}">
@endsection
@section('content')
<div class="row breadcrumbs-top">
  <div class="col-12">
    <h2 class="content-header-title float-left mb-0">Data Pengeluaran</h2>
    <div class="breadcrumb-wrapper col-12">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="{{url('/home')}}"> Dashboard </a>
        </li>
        <li class="breadcrumb-item">
          Data Pengeluaran
        </li>
      </ol>
    </div>
  </div>
</div>
<br>
<section id="basic-datatable">
	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-content">
					<div class="card-body card-dashboard">
            <button id="addRow" onclick="window.location.href='/pengeluaran/create'" class="btn btn-primary mb-2 float-right"><i class="feather icon-plus"></i>&nbsp; Tambah Pengeluaran Baru</button>
            <div class="table-responsive">
             <table class="table zero-configuration" id="kontol">
              <thead>
               <tr>
                <th>ID</th>
                <th>Nama Pengeluaran</th>
                <th>Nominal Pengeluaran</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
@endsection
@section('js')
<script src="{{asset('backend2/vendors/js/extensions/sweetalert2.all.mindcd2.js?id=22ec6821c0c81fe4e11e')}}"></script>
<script src="{{asset('backend2/vendors/js/extensions/polyfill.min6c8c.js?id=d05a380d50b74e629738')}}"></script>

<script>
  $(document).ready(function () {
    "use strict";
    $("#kontol").DataTable({
      responsive: !1,
      columnDefs: [{ orderable: !0, targets: 0}],
      sdom: "<'row'<f l>><t><'row'<p i>>",
      oLanguage: { sLengthMenu: "_MENU_", sSearch: "" },
      aLengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
      order: [[0, "asc"]],
      ajax        : {
        headers     : {
          'X-CSRF-Token': "{{ csrf_token() }}"
        },
        url         : '{{URL::route('pengeluaran.show')}}',
        method      : 'get',
      },
      columns     : [
      {data: 'id', name: 'id' , orderable: false, searchable: false},
      {data: 'nama_pengeluaran', name: 'nama_pengeluaran', orderable: false, searchable:false},
      {data: 'jumlah_pengeluaran', name: 'jumlah_pengeluaran', searchable:false, orderable: false},
      {data: 'action', name: 'action'},
      ]
    });
    $(document).on('click', '#delete-pengeluaran', function(e){
      const url = $(this).attr('data-url');
      Swal.fire({
        title: "Apakah kamu yakin ingin menghapus data ini?",
        text: "Anda tidak akan dapat mengembalikan data ini!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Iya, Hapus",
        confirmButtonClass: "btn btn-primary deletebarangyes",
        cancelButtonClass: "btn btn-danger ml-1",
        buttonsStyling: !1,
      }).then(function (t) {
        if(t.value){
          window.location.href = url;
        }
      });
    });
    // $(document).on('click', '.deletebarangyes')
  });

</script>
@endsection