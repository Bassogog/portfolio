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
        <main class="flex-grow p-4 z-10 flex flex-col md:flex-row items-center">
          <div class="col-sm-3 col-md-3 col-xl-3">
              <div class="overflow-hidden z-40 mt-8 md:mt-0 mx-auto md:mx-0 md:ml-[-20px]">
              <img src="@/assets/image/aboutt.png" alt="about Image" class="shadow1-custom w-[350px] h-[100%] object-cover border-double border-8 border-white-500 animate-slide-in-from-right">
            </div>
          </div>
          
          <div class="col-sm-5 col-md-5 col-xl-5 mt-5" style="margin-left: auto; margin-right: auto;">
            <p class="text-4xl text-white font-bold">About me</p>
            <p class="text-3xl text-white font-bold font-sans animate__animated animate__slideInUp">
              I am a full stack developer with 3 years of experience.
              I hold a professional training certification from SIGERIS Sarl.
              I have to my credit, several professional and personal achievements
            </p>
            <router-link :to="'/achievementsection'" class="nav_link text-white font-extrabold" style="text-decoration: none">
              <button type="button" class="btn rounded-pill text-white animate__animated animate__slideInUp" style="background-image: linear-gradient(to right, rgba(63, 3, 3, 10), transparent); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);">
                <p class="font-bold m-0">My achievements</p><i class="fas fa-hand-point-right text-white" style="font-size: 30px;"></i>
              </button>
            </router-link>
          </div>
        </main>
        <div class="col-sm-10 col-md-10 col-xl-10 mt-5" style="margin-left: auto; margin-right: auto;">
          <div class="diaporama">
            <div class="diaporama-images">
              <img src="@/assets/image/vuejs_original.png" alt="vuejs_original">
              <img src="@/assets/image/codeigniter-1.svg" alt="codeigniter">
              <img src="@/assets/image/Mysql_logo.png" alt="Mysql_logo 3">
              <img src="@/assets/image/ajax.png" alt="Mysql_logo 3">
              <img src="@/assets/image/php.png" alt="Mysql_logo 3">
              <img src="@/assets/image/js.png" alt="Mysql_logo 3">
            </div>
          </div>
        </div>

        <div class="col-sm-5 col-md-5 col-xl-5 p-2" style="margin-left: auto; margin-right: auto;">
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
    box-shadow: 0 4px 8px rgba(255, 254, 254, 0.984);
    filter: brightness(0.5); 
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

  .diaporama {
    position: relative;
    width: 100%; /* Ajustez la largeur selon vos besoins */
    height: 300px; /* Ajustez la hauteur selon vos besoins */
    overflow: hidden;
  }

  .diaporama-images {
    display: flex;
    gap: 60px; /* Espace entre les images */
    animation: defilement 20s linear infinite; /* Ajustez la durée selon vos besoins */
  }

  .diaporama-images img {
    height: 100px; /* Hauteur uniforme pour toutes les images */
    object-fit: contain; /* Redimensionne l'image pour qu'elle soit contenue dans le conteneur tout en gardant ses proportions */
  }

  @keyframes defilement {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100% - 100px)); /* Ajoutez la valeur de l'espacement au défilement */
    }
  }

</style>
