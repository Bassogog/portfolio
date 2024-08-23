import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'tailwindcss/tailwind.css'


/*
    BOOTSTRAP CSS, JS
*/
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Importer les composants Vue pour FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Ajouter les icônes à la bibliothèque
library.add(faFacebook, faTwitter, faLinkedin)

// Créer l'application Vue
const app = createApp(App)
app.use(router)

// Enregistrer le composant FontAwesome
app.component('font-awesome-icon', FontAwesomeIcon)

// Monter l'application
app.mount('#app')
