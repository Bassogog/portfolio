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
      <div class="col-sm-12 col-md-12 col-xl-12 dashbord">
        <main class="flex-grow p-4 z-10 flex flex-col-reverse md:flex-row items-center">
          <img src="@/assets/image/logo.png" alt="Profile Image" class="shadow1-custom rounded-full w-[100px] h-[100px] border-white-500">
          <div class="animate-slide-in-from-left text-center md:text-left md:mx-[-20px]">
            <p class="text-3xl text-white font-bold font-sans dance">Stalonne Kevin Bounze Kue</p>
            <p class="text-3xl text-white font-bold font-serif dance">Full stack developer</p>
          </div>
          <div class="overflow-hidden z-40 mt-8 md:mt-0 mx-auto md:mx-0 md:ml-[-20px]">
            <img src="@/assets/image/profile.png" alt="Profile Image" class="shadow1-custom rounded-full w-[300px] h-[300px] object-cover border-double border-8 border-white-500 animate-slide-in-from-right">
          </div>
        </main>
        <div class="col-sm-5 col-md-5 col-xl-5 mt-5" style="margin-left: auto; margin-right: auto;">
          <p class="text-3xl text-white font-bold font-sans ">
            Welcome to my portfolio. Here you will see my achievements and my professional experiences 
          </p>
          <br/>
          <p class="text-3xl text-white font-bold font-sans blinking-text">3 </p><p class="blinking-text text-2xl text-white font-bold font-sans">years of experience</p>

        </div>
        <div class="col-sm-5 col-md-5 col-xl-5  mt-5 p-2" style="margin-left: auto; margin-right: auto;">
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
          <p>&copy; {{ currentYear }} Your business. All rights reserved.</p>
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
export default {
  components: {
    // CardComponent
  },
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
}
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    filter: brightness(0.7); 
  }

  .animate-slide-in-from-left {
    animation: slide-in-from-left 3s ease-in-out;
  }

  .animate-slide-in-from-right {
    animation: slide-in-from-right 1s ease-in-out;
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
   /* faire danser le text-center  */
  .dance {
      animation: dance 2s infinite;
  }

  @keyframes dance {
      0% {
          transform: translateY(0);
      }
      25% {
          transform: translateY(-20px);
      }
      50% {
          transform: translateY(0);
      }
      75% {
          transform: translateY(20px);
      }
      100% {
          transform: translateY(0);
      }
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
</style>
