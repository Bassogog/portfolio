<template>
    <!-- <div class="card ">
      <div class="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out">
        <div class="p-4">
          <h3 class="text-lg font-bold mb-2">{{ title }}</h3>
          <p class="text-gray-600 mb-4">{{ description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-gray-500">{{ date }}</span>
            <a :href="link" class="text-blue-500 hover:text-blue-700">Lire plus</a>
          </div>
        </div>
      </div>
    </div> -->
    <div class="card animate-fade-in animation-delay-200">
      <div class="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out">
        <div class="card-header">
          <img :src="imageSrc" alt="" class="w-full object-cover" style="width:700px;">
        </div>
        <div class="card-body">
          <h3 class="text-lg font-bold mb-2">{{ title }}</h3>
        </div>
        <div class="card-footer">
          <p class="text-gray-600 mb-4">{{ description }}</p>
          <span class="text-gray-500 flex justify-between items-center">{{ date }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      }
    }
    
  }
  </script>
  
  <style scoped>
  .card {
    width: 20%;
    margin: 10px;
    /* height: 15%; */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 8px 8px rgba(250, 248, 248, 0.979);
    background-color: #000;
  }
  
  .animate-fade-in {
    animation: fade-in 5s ease-in-out;    
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

  .card {
    animation: flip 10s ease-in-out infinite;
  }

  @keyframes flip {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

    
  </style>