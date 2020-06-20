<!DOCTYPE html>
<html lang="en" data-textdirection="ltr">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="CX1hMBTOKNAZp1x4fEHF6ZXr7ym82j9Iyjhr3PWI">
    <title>Dashboard Analytics - Vuexy Vuejs, HTML & Laravel Admin Dashboard Template</title>
    <link rel="shortcut icon" type="image/x-icon" href="images/logo/favicon.ico">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600">
    <link rel="stylesheet" href="{{asset('backend2/vendors/css/vendors.min3440.css?id=a09a0e3f1b4a384cbbce')}}">
    <link rel="stylesheet" href="{{asset('backend2/vendors/css/ui/prism.minf1e1.css?id=2b6ec658f3078cb5a481')}}">
    <!-- vendor css files -->
    <link rel="stylesheet" href="{{asset('backend2/vendors/css/charts/apexchartsfada.css?id=d3b53e6191f8e9844532')}}">
    <link rel="stylesheet" href="{{asset('backend2/vendors/css/extensions/tether-theme-arrowsa04f.css?id=2399fd15ec68bd930226')}}">
    <link rel="stylesheet" href="{{asset('backend2/vendors/css/extensions/tether.minaecb.css?id=62155a3948cbf17b1bf4')}}">
    <link rel="stylesheet" href="{{asset('backend2/vendors/css/extensions/shepherd-theme-default177f.css?id=b6c8ae91da678dcf5c4c')}}">

    <link rel="stylesheet" href="{{asset('backend2/css/bootstrap3ae5.css?id=98c1b5bba782c43d2bc3')}}">
    <link rel="stylesheet" href="{{asset('backend2/css/bootstrap-extended5854.css?id=4534b3f019dabbf49ade')}}">
    <link rel="stylesheet" href="{{asset('backend2/css/colors7195.css?id=a0cd3dcd259da4263102')}}">
    <link rel="stylesheet" href="{{asset('backend2/css/componentsa26d.css?id=a24d3227c97be4ae5678')}}">
    <link rel="stylesheet" href="{{asset('backend2/css/themes/dark-layout33bd.css?id=9bb62817ffd3425a9f65')}}">
    <link rel="stylesheet" href="{{asset('backend2/css/themes/semi-dark-layout39e1.css?id=a01d87d1930befd3f900')}}">
    <link rel="stylesheet" href="{{asset('backend2/css/core/menu/menu-types/vertical-menud03a.css?id=31d588213cea00d082ab')}}">
    <link rel="stylesheet" href="{{asset('backend2/css/core/colors/palette-gradient39bd.css?id=481306dac133dfb42a7b')}}">
    <link rel="stylesheet" href="{{asset('backend2/vendors/css/tables/datatable/datatables.mincaff.css?id=5a73106bc8032d95933a')}}">
    <!-- Page css files -->
    @yield('css')
</head>
<body class="vertical-layout vertical-menu-modern 2-columns    semi-dark-layout  navbar-floating menu-expanded footer-static" data-menu="vertical-menu-modern" data-col="2-columns" data-layout="semi-dark-layout">
    <div class="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item mr-auto"><a class="navbar-brand" href="dashboard-analytics.html">
                    <div class="brand-logo"></div>
                    <h2 class="brand-text mb-0">Vuexy</h2>
                </a></li>
                <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block primary collapse-toggle-icon" data-ticon="icon-disc"></i></a></li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                @include('partials.menu')
            </ul>
        </div>
    </div>
    <!-- END: Main Menu-->
    <!-- BEGIN: Content-->
    <div class="app-content content">
        <!-- BEGIN: Header-->
        @include('partials.header')
        <!-- END: Header-->
        <div class="content-wrapper">
            <div class="content-body">
                @yield('content')
            </div>
        </div>

    </div>
    <!-- End: Content-->

    <div class="customizer d-none d-md-block">
        <a class="customizer-close" href="javascript:void(0)">
            <i class="feather icon-x"></i>
        </a>
        <a class="customizer-toggle" href="javascript:void(0)">
            <i class="feather icon-settings fa fa-spin fa-fw white"></i>
        </a>
        <div class="customizer-content p-2">
            <h4 class="text-uppercase mb-0">Theme Customizer</h4>
            <small>Customize & Preview in Real Time</small>
            <hr>

            <div id="customizer-theme-colors">
                <h5>Menu Colors</h5>
                <ul class="list-inline unstyled-list">
                    <li class="color-box bg-primary selected" data-color="theme-primary"></li>
                    <li class="color-box bg-success" data-color="theme-success"></li>
                    <li class="color-box bg-danger" data-color="theme-danger"></li>
                    <li class="color-box bg-info" data-color="theme-info"></li>
                    <li class="color-box bg-warning" data-color="theme-warning"></li>
                    <li class="color-box bg-dark" data-color="theme-dark"></li>
                </ul>
            </div>

            <hr>

            <h5 class="mt-1">Theme Layout</h5>
            <div class="theme-layouts">
                <div class="d-flex justify-content-start">
                    <div class="mx-50">
                        <fieldset>
                            <div class="vs-radio-con vs-radio-primary">
                                <input type="radio" name="layoutOptions" value="false" class="layout-name" data-layout="" checked>
                                <span class="vs-radio">
                                    <span class="vs-radio--border"></span>
                                    <span class="vs-radio--circle"></span>
                                </span>
                                <span class="">Light</span>
                            </div>
                        </fieldset>
                    </div>
                    <div class="mx-50">
                        <fieldset>
                            <div class="vs-radio-con vs-radio-primary">
                                <input type="radio" name="layoutOptions" value="false" class="layout-name" data-layout="dark-layout">
                                <span class="vs-radio">
                                    <span class="vs-radio--border"></span>
                                    <span class="vs-radio--circle"></span>
                                </span>
                                <span class="">Dark</span>
                            </div>
                        </fieldset>
                    </div>
                    <div class="mx-50 semi-dark">
                        <fieldset>
                            <div class="vs-radio-con vs-radio-primary">
                                <input type="radio" name="layoutOptions" value="false" class="layout-name" data-layout="semi-dark-layout">
                                <span class="vs-radio">
                                    <span class="vs-radio--border"></span>
                                    <span class="vs-radio--circle"></span>
                                </span>
                                <span class="">Semi Dark</span>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
            <hr>
            <div id="collapse-sidebar">
                <div class="collapse-sidebar d-flex justify-content-between">
                    <div class="collapse-option-title">
                        <h5 class="pt-25">Collapse Sidebar</h5>
                    </div>
                    <div class="collapse-option-switch">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="collapse-sidebar-switch">
                            <label class="custom-control-label" for="collapse-sidebar-switch"></label>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
            <div id="customizer-navbar-colors">
                <h5>Navbar Colors</h5>
                <ul class="list-inline unstyled-list">
                    <li class="color-box bg-white border selected" data-navbar-default=""></li>
                    <li class="color-box bg-primary" data-navbar-color="bg-primary"></li>
                    <li class="color-box bg-success" data-navbar-color="bg-success"></li>
                    <li class="color-box bg-danger" data-navbar-color="bg-danger"></li>
                    <li class="color-box bg-info" data-navbar-color="bg-info"></li>
                    <li class="color-box bg-warning" data-navbar-color="bg-warning"></li>
                    <li class="color-box bg-dark" data-navbar-color="bg-dark"></li>
                </ul>
                <hr>
            </div>


            <div id="navbar-type">
                <h5 class="navbar_type">Navbar Type</h5>
                <h5 class="menu_type d-none">Menu Type</h5>
                <div class="navbar-type d-flex justify-content-between">
                    <div class="mx-50">
                        <fieldset>
                            <div class="vs-radio-con vs-radio-primary">
                                <input type="radio" name="navbarType" value="false" id="navbar-hidden">
                                <span class="vs-radio">
                                    <span class="vs-radio--border"></span>
                                    <span class="vs-radio--circle"></span>
                                </span>
                                <span class="">Hidden</span>
                            </div>
                        </fieldset>
                    </div>
                    <div class="mx-50">
                        <fieldset>
                            <div class="vs-radio-con vs-radio-primary">
                                <input type="radio" name="navbarType" value="false" id="navbar-static">
                                <span class="vs-radio">
                                    <span class="vs-radio--border"></span>
                                    <span class="vs-radio--circle"></span>
                                </span>
                                <span class="">Static</span>
                            </div>
                        </fieldset>
                    </div>
                    <div class="mx-50">
                        <fieldset>
                            <div class="vs-radio-con vs-radio-primary">
                                <input type="radio" name="navbarType" value="false" id="navbar-sticky">
                                <span class="vs-radio">
                                    <span class="vs-radio--border"></span>
                                    <span class="vs-radio--circle"></span>
                                </span>
                                <span class="">Sticky</span>
                            </div>
                        </fieldset>
                    </div>
                    <div class="mx-50">
                        <fieldset>
                            <div class="vs-radio-con vs-radio-primary">
                                <input type="radio" name="navbarType" value="false" id="navbar-floating" checked>
                                <span class="vs-radio">
                                    <span class="vs-radio--border"></span>
                                    <span class="vs-radio--circle"></span>
                                </span>
                                <span class="">Floating</span>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <hr>
            </div>
            <h5>Footer Type</h5>
            <div class="footer-type d-flex justify-content-start">
                <div class="mx-50">
                    <fieldset>
                        <div class="vs-radio-con vs-radio-primary">
                            <input type="radio" name="footerType" value="false" id="footer-hidden">
                            <span class="vs-radio">
                                <span class="vs-radio--border"></span>
                                <span class="vs-radio--circle"></span>
                            </span>
                            <span class="">Hidden</span>
                        </div>
                    </fieldset>
                </div>
                <div class="mx-50">
                    <fieldset>
                        <div class="vs-radio-con vs-radio-primary">
                            <input type="radio" name="footerType" value="false" id="footer-static" checked>
                            <span class="vs-radio">
                                <span class="vs-radio--border"></span>
                                <span class="vs-radio--circle"></span>
                            </span>
                            <span class="">Static</span>
                        </div>
                    </fieldset>
                </div>
                <div class="mx-50">
                    <fieldset>
                        <div class="vs-radio-con vs-radio-primary">
                            <input type="radio" name="footerType" value="false" id="footer-sticky">
                            <span class="vs-radio">
                                <span class="vs-radio--border"></span>
                                <span class="vs-radio--circle"></span>
                            </span>
                            <span class="">Sticky</span>
                        </div>
                    </fieldset>
                </div>
            </div>

            <hr>


            <div class="hide-scroll-to-top d-flex justify-content-between py-25">
                <div class="hide-scroll-title">
                    <h5 class="pt-25">Hide Scroll To Top</h5>
                </div>
                <div class="hide-scroll-top-switch">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="hide-scroll-top-switch">
                        <label class="custom-control-label" for="hide-scroll-top-switch"></label>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

    <!-- BEGIN: Footer-->
    @include('partials.footer')
    <!-- END: Footer-->


    <script src="{{asset('backend2/vendors/js/vendors.min61c9.js?id=0eef70ca571453be304a')}}"></script>
    <script src="{{asset('backend2/vendors/js/ui/prism.minb678.js?id=fde910813cf7141eae50')}}"></script>
    <!-- vendor files -->
    <script src="{{asset('backend2/vendors/js/charts/apexcharts.minf40a.js?id=bbb1adadc937c1636f35')}}"></script>
    <script src="{{asset('backend2/vendors/js/extensions/tether.min8161.js?id=1c4a5999a2b43cdd3aaa')}}"></script>
    <script src="{{asset('backend2/vendors/js/extensions/shepherd.minc3b9.js?id=60f87e0f49e292c0ba2c')}}"></script>

    <script src="{{asset('backend2/js/core/app-menu3881.js?id=f2d50706b9e71eaa130f')}}"></script>
    <script src="{{asset('backend2/js/core/app13d8.js?id=ff431fb6d48449d357e3')}}"></script>
    <script src="{{asset('backend2/js/scripts/componentsf530.js?id=2ab188ae0fa7b622cdb1')}}"></script>
    <script src="{{asset('backend2/js/scripts/customizerecd2.js?id=bd6e1f733770a42402a7')}}"></script>
    <script src="{{asset('backend2/js/scripts/footerc918.js?id=b382ec364916c35eff84')}}"></script>
    <script src="{{asset('backend2/vendors/js/tables/datatable/datatables.minca2e.js?id=97fd6a774fc6211e7619')}}"></script>
    <script src="{{asset('backend2/vendors/js/tables/datatable/datatables.buttons.min2b5b.js?id=ef66b6c574a0c5e99fae')}}"></script>
    <script src="{{asset('backend2/vendors/js/tables/datatable/datatables.bootstrap4.mine091.js?id=b63fdeeb4941fd4cab8a')}}"></script>
    <script src="{{asset('backend2/vendors/js/tables/datatable/buttons.bootstrap.minca54.js?id=77c8d7c4b64bceb0251c')}}"></script>
    <script src="{{asset('backend2/vendors/js/tables/datatable/dataTables.select.min9d2f.js?id=e06c874532cc59e272dc')}}"></script>
    <script src="{{asset('backend2/vendors/js/tables/datatable/datatables.checkboxes.min7d76.js?id=fbefb5342e6319df72b7')}}"></script>

    <!-- Page js files -->
    @yield('js')


</body>
</html>