@extends('partials.master')
@section('content')
<div class="row breadcrumbs-top">
    <div class="col-12">
        <h2 class="content-header-title float-left mb-0">Data Barang</h2>
        <div class="breadcrumb-wrapper col-12">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="{{url('/admin')}}"> Dashboard </a>
                </li>
                <li class="breadcrumb-item">
                    Data Barang
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
                        <button id="addRow" class="btn btn-primary mb-2 float-right"><i class="feather icon-plus"></i>&nbsp; Tambah Barang Baru</button>
                        <div class="table-responsive">
                           <table class="table zero-configuration" id="kontol">
                            <thead>
                             <tr>
                              <th class="text-center">ID</th>
                              <th class="text-center">Nama Barang</th>
                              <th class="text-center">Harga Beli</th>
                              <th class="text-center">Harga Jual</th>
                              <th class="text-center">Panjang</th>
                              <th class="text-center">Satuan</th>
                              <th class="text-center">Stock Tersisa</th>
                              <th class="text-center">Modal</th>
                              <th class="text-center">Action</th>
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
<script>
    $(document).ready(function () {
        "use strict";
        $("#kontol")
        .DataTable({
            responsive: !1,
            columnDefs: [{ orderable: !0, targets: 0}],
            sdom: "<'row'<f l>><t><'row'<p i>>",
            oLanguage: { sLengthMenu: "_MENU_", sSearch: "" },
            aLengthMenu: [
            [4, 10, 15, 20],
            [4, 10, 15, 20],
            ],
            order: [[1, "asc"]],
            // bInfo: !1,
            // pageLength: 4,
        });
    });

</script>
@endsection