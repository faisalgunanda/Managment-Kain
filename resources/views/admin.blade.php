@extends('partials.master')
@section('content')
<div class="row">
	<div class="col-lg-3 col-md-6 col-12">
		<div class="card">
			<div class="card-header d-flex flex-column align-items-start pb-0">
				<div class="avatar bg-rgba-primary p-50 m-0">
					<div class="avatar-content">
						<i class="feather icon-trending-up text-primary font-medium-5"></i>
					</div>
				</div>
				<h2 class="text-bold-700 mt-1 mb-25">{{$data_hari_ini}}</h2>
				<p class="mb-0">Penjualan Hari Ini</p>
			</div>
		</div>
	</div>
	<div class="col-lg-3 col-md-6 col-12">
		<div class="card">
			<div class="card-header d-flex flex-column align-items-start pb-0">
				<div class="avatar bg-rgba-primary p-50 m-0">
					<div class="avatar-content">
						<i class="feather icon-shopping-cart text-primary font-medium-5"></i>
					</div>
				</div>
				<h2 class="text-bold-700 mt-1 mb-25">{{$total}}</h2>
				<p class="mb-0">Total Penjualan</p>
			</div>
		</div>
	</div>
	<div class="col-lg-3 col-md-6 col-12">
		<div class="card">
			<div class="card-header d-flex flex-column align-items-start pb-0">
				<div class="avatar bg-rgba-primary p-50 m-0">
					<div class="avatar-content">
						<i class="feather icon-trending-up text-primary font-medium-5"></i>
					</div>
				</div>
				<h2 class="text-bold-700 mt-1 mb-25">{{$modal}}</h2>
				<p class="mb-0">Kekurangan Untuk Menutupi Modal</p>
			</div>
		</div>
	</div>
	<div class="col-lg-3 col-md-6 col-12">
		<div class="card">
			<div class="card-header d-flex flex-column align-items-start pb-0">
				<div class="avatar bg-rgba-primary p-50 m-0">
					<div class="avatar-content">
						<i class="feather icon-shopping-cart text-primary font-medium-5"></i>
					</div>
				</div>
				<h2 class="text-bold-700 mt-1 mb-25">{{$data_pengeluaran_hari_ini}}</h2>
				<p class="mb-0">Total Pengeluaran Hari Ini</p>
			</div>
		</div>
	</div>
</div>
@endsection
