<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title >{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
 
		<!--=== CSS Link ===--> 
		<link rel="stylesheet" href="{{asset('/assets/css/bootstrap.min.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/owl.theme.default.min.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/owl.carousel.min.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/remixicon.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/font-awesome-pro.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/metisMenu.min.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/simplebar.min.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/prism.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/jquery.dataTables.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/magnific-popup.min.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/sweetalert2.min.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/style.css')}}">
		
		<!--=== Favicon ===-->
		<link rel="icon" type="image/png" href="assets/images/favicon.png">
		<!--=== Title ===-->
	

        @viteReactRefresh
        @vite(['resources/js/index.tsx'])
       
    </head>
    <body class="font-sans antialiased">
        <div id="root"></div>

             <!--=== JS Link ===-->
             <script src="{{asset('assets/js/jquery.min.js')}}"></script> 
             <script src="{{asset('assets/js/bootstrap.bundle.min.js')}}"></script>
             <script src="{{asset('assets/js/owl.carousel.min.js')}}"></script>
             <script src="{{asset('assets/js/metisMenu.min.js')}}"></script>
             <script src="{{asset('assets/js/countdown.min.js')}}"></script>
             <script src="{{asset('assets/js/feather.min.js')}}"></script>
             {{-- <script src="{{asset('assets/js/simplebar.min.js')}}"></script> --}}
             <script src="{{asset('assets/js/prism.js')}}"></script>
             <script src="{{asset('assets/js/html5sortable.js')}}"></script>
             <script src="{{asset('assets/js/members-list.js')}}"></script>
             <script src="{{asset('assets/js/jquery-ui.min.js')}}"></script>
             <script src="{{asset('assets/js/jquery.dataTables.js')}}"></script>  
             <script src="{{asset('assets/js/magnific-popup.min.js')}}"></script>  
             <script src="{{asset('assets/js/sweetalert2.all.min.js')}}"></script>  
             <script src="{{asset('assets/js/kanban-board.js')}}"></script> 
             <!--=== Apex Charts ===-->
             <script src="{{asset('assets/js/apex/apexcharts.js')}}"></script>
             <!--=== Amcharts ===-->
   
             {{-- <script src="{{asset(')}}"></script> --}}
             <script >
                const scriptList = [
                 '/assets/js/simplebar.min.js',
                 'assets/js/custom.js',
                 'assets/js/amcharts/index.js',
                 'assets/js/amcharts/map.js',
                 'assets/js/amcharts/worldLow.js',
                 'assets/js/amcharts/Animated.js',
                 'assets/js/apex/analytics-chart.js',
        
           
        
       
    
          
          
                ];
              
                scriptList.forEach((scriptUrl, index) => {
                  setTimeout(() => {
                    const script = document.createElement('script');
                    script.src = scriptUrl;
                    document.head.appendChild(script);
                  }, index * 400); // Adjust the delay as needed
                });
              </script>
    </body>
</html>
