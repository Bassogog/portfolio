<template>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <!-- <link rel="icon" href="@/assets/image/logo.png"> -->
    <title>*****</title>
  </head>
    <body>
        <div class="container">
            <div class="container-flud">
                <div class="col-sm-12 col-md-12 col-xl-12 nav">
                        <div class="md:hidden">
                        <!-- Bouton toggle -->
                        <button id="burger-button" class="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8">
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                        </button>
                    </div>
                    <div id="menu" class="hidden md:flex space-x-7 p-2" style="margin-left: auto; margin-right: auto;">
                        <router-link :to="'/'" class="nav_link text-white font-extrabold" style="text-decoration: none"><button class="rounded-circle m-1" style="background-color: saddlebrown;"> Welcome </button></router-link>
                        <router-link :to="'/aboutsection'" class="nav_link text-white font-extrabold" style="text-decoration: none"><button class="rounded-circle m-1" style="background-color: saddlebrown;"> About </button></router-link>
                        <router-link :to="'/contactsection'" class="nav_link text-white font-extrabold" style="text-decoration: none"><button class="rounded-circle m-1" style="background-color: saddlebrown;"> Contact </button></router-link>
                    </div>
                </div>
            </div>

            <!-- software development -->
            <div class="col-sm-12 col-md-12 col-xl-12 dashbord"><br/><br/>
                <div class="col-sm-5 col-md-5 col-xl-5" style="margin-left: auto; margin-right: auto;">
                    <p class="text-3xl text-white font-bold font-sans" style="box-shadow: 0 4px 8px rgba(255, 255, 255, 0.979);">
                        latest achievements
                    </p>
                </div>
                
                <div class="row">
                    <div class="col-sm-3 col-md-3 col-xl-3 mt-5">
                        <img src="@/assets/image/im6.png" alt="Profile Image" class="w-[300px] h-[500px] object-cover  border-white-500 ">
                    </div>
                    <div class="col-sm-9 col-md-9 col-xl-9 mt-5">
                        <p class="text-3xl text-white font-bold font-sans dance animate-slide-in-from-right">gas station management application. <br/>manage the entry-exit and consumption of<br/> the station’s customers</p>
                        <img src="@/assets/image/stationservice.png" alt="stationservice Image" class="shadow1-custom w-[1200px] h-[300px] object-cover  border-white-500 ">

                    </div>
                </div>
                    
                <div class="row">
                    <div class="col-sm-9 col-md-9 col-xl-9 mt-5">
                        <p class="text-3xl text-white font-bold font-sans dance animate-slide-in-from-right">inventory management application</p>
                        <img src="@/assets/image/stock.png" alt="stationservice Image" class="shadow1-custom w-[1200px] h-[300px] object-cover  border-white-500 ">
                    </div>
                    <div class="col-sm-3 col-md-3 col-xl-3 mt-5">
                        <img src="@/assets/image/im7.png" alt="stationservice Image" class="shadow1-custom w-[1200px] h-[600px] object-cover  border-white-500 ">
                    </div>
                </div>
                <div class="col-sm-5 col-md-5 col-xl-5" style="margin-left: auto; margin-right: auto;">
                    <p class="text-3xl text-white font-bold font-sans" style="box-shadow: 0 4px 8px rgba(255, 255, 255, 0.979);">
                    Job
                    </p>
                </div>
                <div class="row mt-5" style="margin-left: auto; margin-right: auto; margin-top: -100px;">
                    <div class="col-sm-4 col-md-4 col-xl-4">
                        <button type="button" class="btn rounded-pill text-white" style="background-image: linear-gradient(to right, rgba(63, 3, 3, 10), transparent); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);">
                            <p class="font-extrabold m-0">PHP developer at LA'AHTECH</p>
                        </button>
                    </div>
                    <div class="col-sm-4 col-md-4 col-xl-4">
                        <button type="button" class="font-bold btn rounded-pill text-white" style="background-image: linear-gradient(to right, rgba(63, 3, 3, 10), transparent); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);">
                            <p class="font-extrabold m-0">Front-end developer front-end developer on HONORA PROJECT</p>
                        </button>
                    </div>
                    <div class="col-sm-4 col-md-4 col-xl-4">
                        <button type="button" class="btn rounded-pill text-white" style="background-image: linear-gradient(to right, rgba(63, 3, 3, 10), transparent); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);">
                            <p class="font-extrabold m-0">full stack developer at SIGERIS SARL</p>
                        </button>
                    </div>
                </div>

                <div class="col-sm-5 col-md-5 col-xl-5  mt-5 p-2" style="margin-left: auto; margin-right: auto;">
                    <p class="text-3xl text-white font-bold font-sans blinking-text">3 </p><p class="blinking-text text-2xl text-white font-bold font-sans">years of experience</p>
                    <div class="d-flex align-items-center">
                    <button type="button" class="btn rounded-pill text-white" style="background-image: linear-gradient(to right, rgba(63, 3, 3, 10), transparent); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);">
                        <p class="font-extrabold m-0">Follow me</p>
                    </button>
                    <a href="https://www.linkedin.com/in/jorel-kue-5a7961262/" target="_blank" rel="noopener noreferrer" class="" style="margin-left: 100px;">
                        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-white text-3xl" />
                    </a>
                    <a href="https://x.com/JorelKue" target="_blank" rel="noopener noreferrer" class="ml-5">
                        <font-awesome-icon :icon="['fab', 'twitter']" class="text-white text-3xl" />
                    </a>
                    <a href="https://www.facebook.com/jorel.kue.3" target="_blank" rel="noopener noreferrer" class="ml-5">
                        <font-awesome-icon :icon="['fab', 'facebook']" class="text-white text-3xl" />
                    </a>
                    <a href="https://wa.me/+237655402659" target="_blank" rel="noopener noreferrer" class="ml-5">
                        <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-white text-3xl" />
                    </a>
                    
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-xl-12" style="margin-top: 100px; overflow: hidden;">
                    <div class="d-flex">
                        <div class="spinner-border m-5 text-white" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border m-5 text-white" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border m-5 text-white" role="status" style="float: left;">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border m-5 text-white" role="status" style="float: left;">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border m-5 text-white" role="status" style="float: left;">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border m-5 text-white" role="status" style="float: left;">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border m-5 text-white" role="status" style="float: left;">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border m-5 text-white" role="status" style="float: left;">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border m-5 text-white" role="status" style="float: left;">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border m-5 text-white" role="status" style="float: left;">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>

            </div>
            <footer class="bg-gray-800 text-white py-6">
                <div class="container mx-auto flex justify-between items-center">
                <div>
                    <p>&copy; {{currentYear}} Your business. All rights reserved.</p>
                </div>
                <div class="flex space-x-4" >
                    <a href="#" class="hover:text-gray-400 text-white" style="text-decoration: none;">Legal Notice</a>
                    <a href="#" class="hover:text-gray-400 text-white" style="text-decoration: none;">Privacy Policy</a>
                    <a href="#" class="hover:text-gray-400 text-white" style="text-decoration: none;">+237 6 55 40 26 59</a>
                </div>
                </div>
            </footer>
        </div>
    </body>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default ({
   data() {
    return {
      currentYear: null,
      navOpen: false,


    }

   },
   mounted() {
    document.getElementById('burger-button').addEventListener('click', function() {
      var menu = document.getElementById('menu');
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
      }
    });
    const currentYear = new Date().getFullYear();
    this.currentYear = currentYear;
  }
  
})
</script>
<style scoped>
    .nav {
        background-image: linear-gradient(to right, rgba(63, 3, 3, 10), transparent);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        filter: brightness(1); 
        margin-top: -60px;
        height: 100%; 
    }
    body{
        background-color: #000; /* Noir vif */
        background-image: linear-gradient(rgba(255, 200, 200, 0.67), transparent);
        box-shadow: 0 4px 8px rgba(255, 255, 255, 0.979);
        filter: brightness(1);
    }
    .dashbord {
        background-color: #000; /* Noir vif */
        background-image: linear-gradient(rgba(255, 200, 200, 0.67), transparent);
        box-shadow: 0 4px 8px rgba(255, 255, 255, 0.979);
        filter: brightness(1);
    }
    .shadow1-custom {
        box-shadow: 0 4px 8px rgba(255, 254, 254, 0.984);
        filter: brightness(0.5); 
    }
    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .blinking-text {
        animation: blink 1s infinite;
    }
    .animate-slide-in-from-left {
        animation: slide-in-from-left 3s ease-in-out;
    }
    @keyframes slide-in-from-left {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    .animate-slide-in-from-right {
        animation: slide-in-from-right 3s ease-in-out;
    }
    @keyframes slide-in-from-right {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
        
    }
    .animate__animated {
        animation-duration: 3s;
        animation-fill-mode: both;
        
    }
  .animate__slideInUp{
    animation-name: slideInUp;
  }
  @keyframes slideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
