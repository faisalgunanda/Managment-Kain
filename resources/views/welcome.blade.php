
<!DOCTYPE html>
<html lang="en" data-textdirection="ltr">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="csrf-token" content="CX1hMBTOKNAZp1x4fEHF6ZXr7ym82j9Iyjhr3PWI">
<title>Login Page</title>
<link rel="shortcut icon" type="image/x-icon" href="images/logo/favicon.ico">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600">
<link rel="stylesheet" href="{{ asset('backend2/vendors/css/vendors.min3440.css?id=a09a0e3f1b4a384cbbce')}}">
<link rel="stylesheet" href="{{ asset('backend2/vendors/css/ui/prism.minf1e1.css?id=2b6ec658f3078cb5a481')}}">
<link rel="stylesheet" href="{{ asset('backend2/css/bootstrap3ae5.css?id=98c1b5bba782c43d2bc3')}}">
<link rel="stylesheet" href="{{ asset('backend2/css/bootstrap-extended5854.css?id=4534b3f019dabbf49ade')}}">
<link rel="stylesheet" href="{{ asset('backend2/css/colors7195.css?id=a0cd3dcd259da4263102')}}">
<link rel="stylesheet" href="{{ asset('backend2/css/componentsa26d.css?id=a24d3227c97be4ae5678')}}">
<link rel="stylesheet" href="{{ asset('backend2/css/themes/dark-layout33bd.css?id=9bb62817ffd3425a9f65')}}">
<link rel="stylesheet" href="{{ asset('backend2/css/themes/semi-dark-layout39e1.css?id=a01d87d1930befd3f900')}}">
<link rel="stylesheet" href="{{ asset('backend2/css/core/menu/menu-types/vertical-menud03a.css?id=31d588213cea00d082ab')}}">
<link rel="stylesheet" href="{{ asset('backend2/css/core/colors/palette-gradient39bd.css?id=481306dac133dfb42a7b')}}">
<link rel="stylesheet" href="{{ asset('backend2/css/pages/authentication6fa9.css?id=f755c902d3704053a7de')}}">
<link rel="stylesheet" href="{{ asset('backend2/css/custom-laravel901b.css?id=f796e995f1ed0a769668')}}">
</head>



<body class="vertical-layout vertical-menu-modern 1-column blank-page bg-full-screen-image semi-dark-layout data-menu="vertical-menu-modern" data-col="1-column"  data-layout="semi-dark-layout">

    <!-- BEGIN: Content-->
    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-body">
                <section class="row flexbox-container">
                  <div class="col-xl-8 col-11 d-flex justify-content-center">
                      <div class="card bg-authentication rounded-0 mb-0">
                          <div class="row m-0">
                              <div class="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                                  <img src="{{asset('backend2/images/pages/login.png')}}" alt="branding logo">
                              </div>
                              <div class="col-lg-6 col-12 p-0">
                                  <div class="card rounded-0 mb-0 px-2">
                                      <div class="card-header pb-1">
                                          <div class="card-title">
                                              <h4 class="mb-0">Login</h4>
                                          </div>
                                      </div>
                                      <p class="px-2">Welcome back, please login to your account.</p>
                                      <div class="card-content">
                                          <div class="card-body pt-1">
                                              <form action="{{route('login')}}">
                                                @csrf
                                                <fieldset class="form-label-group form-group position-relative has-icon-left">
                                                  <input type="email" name="email" class="form-control" id="email" placeholder="Email" required autocomplete="off">
                                                  <div class="form-control-position">
                                                      <i class="feather icon-user"></i>
                                                  </div>
                                                  <label for="email">Email</label>
                                              </fieldset>

                                              <fieldset class="form-label-group position-relative has-icon-left">
                                                  <input type="password" class="form-control" id="user-password" placeholder="Password" required>
                                                  <div class="form-control-position">
                                                      <i class="feather icon-lock"></i>
                                                  </div>
                                                  <label for="user-password">Password</label>
                                              </fieldset>
                                              <a href="{{route('register')}}" class="btn btn-outline-primary float-left btn-inline">Register</a>
                                              <button type="submit" class="btn btn-primary float-right btn-inline">Login</button>
                                          </form>
                                      </div>
                                  </div>
                                  <div class="login-footer">
                                    <div class="divider">
                                      <div class="divider-text">COPYRIGHT © 2020 All rights Reserved</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

  </div>
</div>
</div>
<!-- End: Content-->


<script src="{{asset('backend2/vendors/js/vendors.min61c9.js?id=0eef70ca571453be304a')}}"></script>
<script src="{{asset('backend2/vendors/js/ui/prism.minb678.js?id=fde910813cf7141eae50')}}"></script>

<script src="{{asset('backend2/js/core/app-menu3881.js?id=f2d50706b9e71eaa130f')}}"></script>
<script src="{{asset('backend2/js/core/app13d8.js?id=ff431fb6d48449d357e3')}}"></script>
<script src="{{asset('backend2/js/scripts/componentsf530.js?id=2ab188ae0fa7b622cdb1')}}"></script>



</body>

<!-- Mirrored from pixinvent.com/demo/vuexy-bootstrap-laravel-admin-template/demo-4/auth-login by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 19 Jun 2020 13:06:03 GMT -->
</html>
