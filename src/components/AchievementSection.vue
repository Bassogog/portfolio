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
    <div class="col-sm-12 col-md-12 col-xl-12 dashbord"><br/><br/>
        <div class="row">
          <div class="col-sm-5 col-md-5 col-xl-5">
            <p class="text-3xl text-white font-bold font-sans animate__animated animate__slideInUp" style="box-shadow: 0 4px 8px rgba(255, 255, 255, 0.979);">
              MasterClass Theme: <u>CodeIgniter and Vue js3 Api Rest</u>
            </p>
          </div>
          <div class="col-sm-6 col-md-6 col-xl-6">
            <img src="@/assets/image/img5.jpg" alt="about Image" class="shadow1-custom w-[800px] h-[100%] object-cover border-double border-8 border-white-500 animate-fade-in1">
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-sm-3 col-md-3 col-xl-3">
            <div class="card animate-fade-in animation-delay-200 " style="">
              <div class="bg-gray-100 shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out">
                <div class="card-header">
                  <img src="@/assets/image/img1.jpg" alt="" class="w-full object-cover" style="width:700px; height: 150px;">
                </div>
                <div class="card-body">
                  <h3 class="text-lg font-bold mb-2">Brice Simo Mentor</h3>
                </div>
                <div class="card-footer">
                  <p class="text-gray-600 mb-4">Day of the MasterClass</p>
                  <span class="text-gray-500 flex justify-between items-center">May 24, 2024</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-md-3 col-xl-3">
            <div class="card animate-fade-in animation-delay-200">
              <div class="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out">
                <div class="card-header">
                  <img src="@/assets/image/img4.jpg" alt="" class="w-full object-cover" style="width:700px; height: 150px;">
                </div>
                <div class="card-body">
                  <h3 class="text-lg font-bold mb-2">Cyrille Kamgue Mentor</h3>
                </div>
                <div class="card-footer">
                  <p class="text-gray-600 mb-4">Day of the MasterClass</p>
                  <span class="text-gray-500 flex justify-between items-center">May 24, 2024</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-md-3 col-xl-3">
            <div class="card animate-fade-in animation-delay-200">
              <div class="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out">
                <div class="card-header">
                  <img src="@/assets/image/img3.jpg" alt="" class="w-full object-cover" style="width:700px;">
                </div>
                <div class="card-body">
                  <h3 class="text-lg font-bold mb-2">Roverlin Fomen Mentor</h3>
                </div>
                <div class="card-footer">
                  <p class="text-gray-600 mb-4">Day of the MasterClass</p>
                  <span class="text-gray-500 flex justify-between items-center">May 24, 2024</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-md-3 col-xl-3">
            <div class="card animate-fade-in animation-delay-200">
              <div class="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out">
                <div class="card-header">
                  <img src="@/assets/image/img2.jpg" alt="" class="w-full object-cover" style="width:700px;">
                </div>
                <div class="card-body">
                  <h3 class="text-lg font-bold mb-2">Teams of code</h3>
                </div>
                <div class="card-footer">
                  <p class="text-gray-600 mb-4">Day of the MasterClass</p>
                  <span class="text-gray-500 flex justify-between items-center">May 24, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-link :to="'/othersection'" class="nav_link text-white font-extrabold" style="text-decoration: none">
          <button type="button" class="btn rounded-pill text-white animate__animated animate__slideInUp ml-5" style="margin-top: 100px; font-size: 15px; background-image: linear-gradient(to right, rgba(63, 3, 3, 10), transparent); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);">
            <p class="font-bold m-0">Other Achievement</p><i class="fas fa-arrow-right text-white"></i>
          </button>
        </router-link>
        <div class="col-sm-5 col-md-5 col-xl-5 " style="margin-left: auto; margin-right: auto; margin-top: 100px;">
          <p class="text-3xl text-white font-bold font-sans animate__animated animate__slideInUp" style="box-shadow: 0 4px 8px rgba(255, 255, 255, 0.979);">
            Supervision Of Interns In SIGERIS
          </p>
        </div>
        <br/>
        <div class="col-sm-8 col-md-8 col-xl-8 mt-5" style="overflow: hidden;">
          <div class="gallery">
            <img src="@/assets/image/im3.jpg" alt="" class="w-full object-cover" style="width:500px; height: 500px;">
            <img src="@/assets/image/im4.jpg" alt="" class="w-full object-cover" style="width:500px; height: 500px;">
            <img src="@/assets/image/im5.jpg" alt="" class="w-full object-cover" style="width:500px; height: 500px;">
            <img src="@/assets/image/im1.jpg" alt="" class="w-full object-cover" style="width:500px; height: 500px;">
            <img src="@/assets/image/im2.jpg" alt="" class="w-full object-cover" style="width:500px; height: 500px;">
          </div>
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
// import CardComponent from "@/components/CardComponent.vue"
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
  .card {
    animation: flip 15s ease-in-out infinite;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 1.5);
    text-decoration: none;
    /* background-color: transparent; */

  }

  @keyframes flip {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
  @keyframes slide-in-from-behind {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }
  .animate-fade-in1 {
    animation: fade-in 10s ease-in-out;
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

  /* number of images*/
  .gallery {
    --d: 50s;
    /* duration */
    display: grid;
    width: 500px;
    /* margin-top: 30px; */
  }

  .gallery > img {
    grid-area: 1/1;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border: 10px solid #f2f2f2;
    box-shadow: 0 0 4px #0007;
    z-index: 2;
    animation: slide var(--d) infinite, z-order var(--d) infinite steps(1);
  }

  .gallery img:last-child {
    animation-name: slide, z-order-last;
  }

  .gallery > img:nth-child(1) {
    animation-delay: calc(0* var(--d));
    --r: -14deg;
  }

  .gallery > img:nth-child(2) {
    animation-delay: calc(-0.2* var(--d));
    --r: -6deg;
  }

  .gallery > img:nth-child(3) {
    animation-delay: calc(-0.4* var(--d));
    --r: 9deg;
  }

  .gallery > img:nth-child(4) {
    animation-delay: calc(-0.6* var(--d));
    --r: -11deg;
  }

  .gallery > img:nth-child(5) {
    animation-delay: calc(-0.8* var(--d));
    --r: 5deg;
  }

  @keyframes slide {
    10% {
      transform: translateX(120%) rotate(var(--r));
    }
    0%, 100%, 20% {
      transform: translateX(0%) rotate(var(--r));
    }
  }
  @keyframes z-order {
    10%, 20% {
      z-index: 1;
    }
    80% {
      z-index: 2;
    }
  }
  @keyframes z-order-last {
    10%, 20% {
      z-index: 1;
    }
    90% {
      z-index: 2;
    }
  }
  body {
    /* margin: 0; */
    min-height: 100vh;
    
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