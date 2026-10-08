<template>
  <div class="about-page">

    <!-- ================= NAVBAR ================= -->
    <header class="navbar">

      <div class="navbar-container">

        <router-link to="/" class="brand">

          <img
            src="@/assets/image/logo.png"
            alt="Jorel Kue"
            class="brand-logo"
          />

          <div class="brand-text">
            <span class="brand-name">JOREL KUE</span>
            <span class="brand-role">
              FULL-STACK DEVELOPER
            </span>
          </div>

        </router-link>


        <nav class="desktop-menu">

          <router-link to="/" class="nav-link">
            Accueil
          </router-link>

          <router-link
            to="/aboutsection"
            class="nav-link active"
          >
            À propos
          </router-link>

          <router-link
            to="/achievementsection"
            class="nav-link"
          >
            Réalisations
          </router-link>

          <router-link
            to="/contactsection"
            class="nav-link"
          >
            Contact
          </router-link>

        </nav>


        <button
          class="mobile-menu-button"
          @click="navOpen = !navOpen"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      <!-- MOBILE MENU -->
      <transition name="mobile-menu">

        <div
          v-if="navOpen"
          class="mobile-menu"
        >

          <router-link
            to="/"
            class="mobile-link"
            @click="navOpen = false"
          >
            Accueil
          </router-link>

          <router-link
            to="/aboutsection"
            class="mobile-link"
            @click="navOpen = false"
          >
            À propos
          </router-link>

          <router-link
            to="/achievementsection"
            class="mobile-link"
            @click="navOpen = false"
          >
            Réalisations
          </router-link>

          <router-link
            to="/contactsection"
            class="mobile-link"
            @click="navOpen = false"
          >
            Contact
          </router-link>

        </div>

      </transition>

    </header>


    <!-- ================= MAIN ================= -->

    <main class="about-container">

      <!-- HEADER -->

      <section class="section-header">

        <span class="section-number">
          01
        </span>

        <div>

          <p class="section-label">
            PROFIL PROFESSIONNEL
          </p>

          <h1>
            À propos de <span>moi</span>
          </h1>

        </div>

      </section>


      <!-- ================= PRESENTATION ================= -->

      <section class="about-grid">


        <!-- PHOTO -->

        <div class="about-image-section">

          <div class="image-frame">

            <div class="image-top-line"></div>

            <img
              src="@/assets/image/aboutt.png"
              alt="À propos de Jorel Kue"
              class="about-image"
            />

            <div class="image-caption">

              <span>
                &lt; developer /&gt;
              </span>

              <span>
                Cameroon
              </span>

            </div>

          </div>


          <!-- Decorative code -->

          <div class="code-decoration">

            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>

          </div>

        </div>


        <!-- TEXT -->

        <div class="about-content">

          <div class="about-badge">

            <span class="badge-dot"></span>

            Full-Stack Developer

          </div>


          <h2>
            Je transforme des idées
            <span>en solutions digitales.</span>
          </h2>


          <p class="about-text">

            Je suis un développeur Full-Stack passionné par la conception
            et le développement d'applications web modernes,
            performantes et évolutives.

          </p>


          <p class="about-text">

            Mon approche consiste à comprendre le besoin métier,
            concevoir une architecture adaptée puis développer une
            solution fiable et agréable à utiliser.

          </p>


          <p class="about-text">

            Je travaille principalement avec des technologies modernes
            côté frontend et backend, notamment Vue.js, JavaScript,
            PHP, CodeIgniter, Spring Boot et les bases de données
            relationnelles.

          </p>


          <!-- EXPERIENCE -->

          <div class="experience-box">

            <div class="experience-number">
              3+
            </div>

            <div>

              <strong>
                Années d'expérience
              </strong>

              <p>
                Développement web & applications
              </p>

            </div>

          </div>


          <!-- BUTTON -->

          <router-link
            to="/achievementsection"
            class="achievement-button"
          >

            Découvrir mes réalisations

            <span>
              →
            </span>

          </router-link>

        </div>

      </section>


      <!-- ================= TECHNOLOGIES ================= -->

      <section class="technologies-section">

        <div class="technology-heading">

          <div>

            <p class="section-label">
              STACK TECHNIQUE
            </p>

            <h2>
              Technologies & outils
            </h2>

          </div>

          <p class="technology-description">
            Les principales technologies que j'utilise
            dans mes projets.
          </p>

        </div>


        <div class="technologies-grid">


          <!-- VUE -->

          <div class="technology-card">

            <div class="technology-icon vue-icon">
              V
            </div>

            <div>

              <h3>
                Vue.js
              </h3>

              <p>
                Frontend
              </p>

            </div>

          </div>


          <!-- SPRING -->

          <div class="technology-card">

            <div class="technology-icon spring-icon">
              S
            </div>

            <div>

              <h3>
                Spring Boot
              </h3>

              <p>
                Backend
              </p>

            </div>

          </div>


          <!-- CODEIGNITER -->

          <div class="technology-card">

            <div class="technology-icon php-icon">
              CI
            </div>

            <div>

              <h3>
                CodeIgniter
              </h3>

              <p>
                Backend PHP
              </p>

            </div>

          </div>


          <!-- LARAVEL (NOUVEAU) -->

          <div class="technology-card">

            <div class="technology-icon laravel-icon">
              L
            </div>

            <div>

              <h3>
                Laravel
              </h3>

              <p>
                Backend PHP
              </p>

            </div>

          </div>


          <!-- JAVASCRIPT -->

          <div class="technology-card">

            <div class="technology-icon js-icon">
              JS
            </div>

            <div>

              <h3>
                JavaScript
              </h3>

              <p>
                Programming
              </p>

            </div>

          </div>


          <!-- PYTHON (NOUVEAU) -->

          <div class="technology-card">

            <div class="technology-icon python-icon">
              PY
            </div>

            <div>

              <h3>
                Python
              </h3>

              <p>
                Programming
              </p>

            </div>

          </div>


          <!-- PHP -->

          <div class="technology-card">

            <div class="technology-icon php-icon">
              PHP
            </div>

            <div>

              <h3>
                PHP
              </h3>

              <p>
                Backend
              </p>

            </div>

          </div>


          <!-- POSTGRESQL -->

          <div class="technology-card">

            <div class="technology-icon database-icon">
              DB
            </div>

            <div>

              <h3>
                PostgreSQL
              </h3>

              <p>
                Database
              </p>

            </div>

          </div>


          <!-- MYSQL -->

          <div class="technology-card">

            <div class="technology-icon database-icon">
              SQL
            </div>

            <div>

              <h3>
                MySQL
              </h3>

              <p>
                Database
              </p>

            </div>

          </div>


          <!-- API -->

          <div class="technology-card">

            <div class="technology-icon api-icon">
              API
            </div>

            <div>

              <h3>
                REST API
              </h3>

              <p>
                Architecture
              </p>

            </div>

          </div>

        </div>

      </section>


      <!-- ================= APPROACH ================= -->

      <section class="approach-section">

        <div class="approach-header">

          <span class="section-number">
            02
          </span>

          <div>

            <p class="section-label">
              MA MÉTHODE
            </p>

            <h2>
              Une approche orientée
              <span>solution</span>
            </h2>

          </div>

        </div>


        <div class="approach-grid">


          <div class="approach-card">

            <span class="approach-number">
              01
            </span>

            <h3>
              Comprendre
            </h3>

            <p>
              Comprendre le besoin, les objectifs et les contraintes
              avant de commencer le développement.
            </p>

          </div>


          <div class="approach-card">

            <span class="approach-number">
              02
            </span>

            <h3>
              Concevoir
            </h3>

            <p>
              Définir une architecture claire, évolutive et adaptée
              aux besoins du projet.
            </p>

          </div>


          <div class="approach-card">

            <span class="approach-number">
              03
            </span>

            <h3>
              Développer
            </h3>

            <p>
              Transformer la conception en une application fiable,
              moderne et performante.
            </p>

          </div>


          <div class="approach-card">

            <span class="approach-number">
              04
            </span>

            <h3>
              Améliorer
            </h3>

            <p>
              Tester, optimiser et faire évoluer continuellement
              la solution.
            </p>

          </div>

        </div>

      </section>


    </main>


    <!-- ================= FOOTER ================= -->

    <footer class="footer">

      <div class="footer-container">

        <div>

          <strong>
            JOREL KUE
          </strong>

          <p>
            Full-Stack Developer · Cameroon
          </p>

        </div>


        <div class="footer-right">

          <p>
            © {{ currentYear }} Jorel Kue.
            Tous droits réservés.
          </p>

          <a href="tel:+237655402659">
            +237 6 55 40 26 59
          </a>

        </div>

      </div>

    </footer>

  </div>
</template>


<script>

export default {

  name: "AboutSection",

  data() {

    return {

      currentYear: new Date().getFullYear(),

      navOpen: false

    }

  }

}

</script>


<style scoped>

/* =====================================================
   BASE
===================================================== */

.about-page {

  --background: #070b14;
  --secondary: #0d1422;
  --card: rgba(17, 24, 39, 0.65);

  --primary: #38bdf8;
  --primary-dark: #0ea5e9;

  --text: #f8fafc;
  --muted: #94a3b8;

  --border: rgba(148, 163, 184, 0.15);

  min-height: 100vh;

  background:
    radial-gradient(
      circle at 85% 15%,
      rgba(56,189,248,0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 10% 70%,
      rgba(34,197,94,0.05),
      transparent 25%
    ),
    var(--background);

  color: var(--text);

}


/* =====================================================
   NAVBAR
===================================================== */

.navbar {

  background: rgba(7,11,20,0.88);

  backdrop-filter: blur(18px);

  border-bottom: 1px solid var(--border);

}


.navbar-container {

  max-width: 1250px;

  margin: auto;

  padding: 18px 30px;

  display: flex;

  align-items: center;

  justify-content: space-between;

}


.brand {

  display: flex;

  align-items: center;

  gap: 12px;

  text-decoration: none;

  color: white;

}


.brand-logo {

  width: 48px;

  height: 48px;

  object-fit: cover;

  border-radius: 12px;

}


.brand-text {

  display: flex;

  flex-direction: column;

}


.brand-name {

  font-size: 15px;

  font-weight: 800;

  letter-spacing: 2px;

}


.brand-role {

  font-size: 9px;

  letter-spacing: 2px;

  color: var(--muted);

}


.desktop-menu {

  display: flex;

  gap: 38px;

}


.nav-link {

  position: relative;

  color: #cbd5e1;

  text-decoration: none;

  font-size: 14px;

  font-weight: 600;

  transition: .3s;

}


.nav-link:hover,
.nav-link.active {

  color: white;

}


.nav-link::after {

  content: "";

  position: absolute;

  left: 0;

  bottom: -8px;

  width: 0;

  height: 2px;

  background: var(--primary);

  transition: .3s;

}


.nav-link.active::after,
.nav-link:hover::after {

  width: 100%;

}


/* =====================================================
   MOBILE
===================================================== */

.mobile-menu-button {

  display: none;

  width: 42px;

  height: 42px;

  background: rgba(255,255,255,.04);

  border: 1px solid var(--border);

  border-radius: 10px;

  padding: 8px;

}


.mobile-menu-button span {

  display: block;

  height: 2px;

  margin: 5px;

  background: white;

}


.mobile-menu {

  display: none;

}


/* =====================================================
   CONTAINER
===================================================== */

.about-container {

  max-width: 1200px;

  margin: auto;

  padding: 90px 30px;

}


/* =====================================================
   SECTION HEADER
===================================================== */

.section-header {

  display: flex;

  align-items: flex-start;

  gap: 25px;

  margin-bottom: 80px;

}


.section-number {

  color: var(--primary);

  font-family: monospace;

  font-size: 13px;

  padding-top: 8px;

}


.section-label {

  margin: 0 0 8px;

  color: var(--primary);

  font-size: 11px;

  letter-spacing: 3px;

  font-weight: 700;

}


.section-header h1 {

  margin: 0;

  font-size: clamp(42px,5vw,65px);

  letter-spacing: -2px;

}


.section-header h1 span,
.approach-header h2 span {

  color: var(--primary);

}


/* =====================================================
   ABOUT GRID
===================================================== */

.about-grid {

  display: grid;

  grid-template-columns: .8fr 1.2fr;

  gap: 90px;

  align-items: center;

}


/* =====================================================
   IMAGE
===================================================== */

.about-image-section {

  position: relative;

}


.image-frame {

  position: relative;

  padding: 10px;

  border: 1px solid var(--border);

  border-radius: 22px;

  background: rgba(255,255,255,.025);

}


.image-top-line {

  position: absolute;

  top: 25px;

  left: 25px;

  width: 45px;

  height: 3px;

  background: var(--primary);

  z-index: 2;

}


.about-image {

  display: block;

  width: 100%;

  height: 500px;

  object-fit: cover;

  border-radius: 15px;

}


.image-caption {

  display: flex;

  justify-content: space-between;

  padding: 15px 10px 5px;

  color: var(--muted);

  font-family: monospace;

  font-size: 11px;

}


.image-caption span:first-child {

  color: var(--primary);

}


/* =====================================================
   CODE DECORATION
===================================================== */

.code-decoration {

  position: absolute;

  right: -35px;

  top: 30px;

  display: flex;

  flex-direction: column;

  gap: 15px;

  color: #334155;

  font-family: monospace;

  font-size: 10px;

}


/* =====================================================
   CONTENT
===================================================== */

.about-badge {

  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 7px 12px;

  border: 1px solid var(--border);

  border-radius: 30px;

  color: var(--muted);

  font-size: 11px;

  margin-bottom: 25px;

}


.badge-dot {

  width: 6px;

  height: 6px;

  border-radius: 50%;

  background: var(--primary);

}


.about-content h2 {

  margin: 0;

  font-size: clamp(32px,4vw,50px);

  line-height: 1.15;

  letter-spacing: -1px;

}


.about-content h2 span {

  display: block;

  color: var(--primary);

}


.about-text {

  max-width: 650px;

  color: var(--muted);

  line-height: 1.8;

  font-size: 15px;

  margin-top: 20px;

}


/* =====================================================
   EXPERIENCE
===================================================== */

.experience-box {

  display: flex;

  align-items: center;

  gap: 20px;

  margin-top: 30px;

  padding: 20px;

  border: 1px solid var(--border);

  background: rgba(255,255,255,.025);

  border-radius: 12px;

  max-width: 400px;

}


.experience-number {

  color: var(--primary);

  font-size: 38px;

  font-weight: 800;

}


.experience-box strong {

  font-size: 14px;

}


.experience-box p {

  margin: 4px 0 0;

  color: var(--muted);

  font-size: 11px;

}


/* =====================================================
   BUTTON
===================================================== */

.achievement-button {

  display: inline-flex;

  align-items: center;

  gap: 20px;

  margin-top: 30px;

  padding: 14px 20px;

  background: var(--primary);

  color: #03121c;

  border-radius: 8px;

  text-decoration: none;

  font-size: 13px;

  font-weight: 700;

  transition: .3s;

}


.achievement-button:hover {

  transform: translateY(-3px);

  box-shadow: 0 15px 30px rgba(56,189,248,.15);

}


/* =====================================================
   TECHNOLOGIES
===================================================== */

.technologies-section {

  margin-top: 130px;

  padding-top: 80px;

  border-top: 1px solid var(--border);

}


.technology-heading {

  display: flex;

  justify-content: space-between;

  align-items: end;

  gap: 30px;

  margin-bottom: 40px;

}


.technology-heading h2 {

  margin: 0;

  font-size: 35px;

}


.technology-description {

  max-width: 300px;

  color: var(--muted);

  font-size: 13px;

  line-height: 1.6;

}


.technologies-grid {

  display: grid;

  grid-template-columns: repeat(4,1fr);

  gap: 15px;

}


.technology-card {

  display: flex;

  align-items: center;

  gap: 15px;

  padding: 20px;

  border: 1px solid var(--border);

  background: rgba(255,255,255,.025);

  border-radius: 12px;

  transition: .3s;

}


.technology-card:hover {

  border-color: rgba(56,189,248,.35);

  transform: translateY(-4px);

  background: rgba(56,189,248,.04);

}


.technology-icon {

  width: 45px;

  height: 45px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 10px;

  font-weight: 800;

  font-size: 13px;

}


.vue-icon {

  background: rgba(66,184,131,.12);

  color: #42b883;

}


.spring-icon {

  background: rgba(34,197,94,.10);

  color: #22c55e;

}


.php-icon {

  background: rgba(129,140,248,.10);

  color: #a5b4fc;

}


.js-icon {

  background: rgba(250,204,21,.10);

  color: #facc15;

}


.laravel-icon {

  background: rgba(255,45,32,.10);

  color: #ff2d20;

}


.python-icon {

  background: rgba(55,118,171,.10);

  color: #3776ab;

}


.database-icon {

  background: rgba(56,189,248,.10);

  color: var(--primary);

}


.api-icon {

  background: rgba(168,85,247,.10);

  color: #c084fc;

}


.technology-card h3 {

  margin: 0;

  font-size: 13px;

}


.technology-card p {

  margin: 4px 0 0;

  color: var(--muted);

  font-size: 10px;

}


/* =====================================================
   APPROACH
===================================================== */

.approach-section {

  margin-top: 130px;

  padding-top: 80px;

  border-top: 1px solid var(--border);

}


.approach-header {

  display: flex;

  gap: 25px;

  margin-bottom: 45px;

}


.approach-header h2 {

  margin: 0;

  font-size: 38px;

}


.approach-grid {

  display: grid;

  grid-template-columns: repeat(4,1fr);

  gap: 15px;

}


.approach-card {

  padding: 28px;

  border: 1px solid var(--border);

  border-radius: 14px;

  background: rgba(255,255,255,.02);

  transition: .3s;

}


.approach-card:hover {

  transform: translateY(-5px);

  border-color: rgba(56,189,248,.35);

}


.approach-number {

  color: var(--primary);

  font-family: monospace;

  font-size: 12px;

}


.approach-card h3 {

  margin: 25px 0 12px;

  font-size: 18px;

}


.approach-card p {

  color: var(--muted);

  font-size: 12px;

  line-height: 1.7;

}


/* =====================================================
   FOOTER
===================================================== */

.footer {

  border-top: 1px solid var(--border);

  background: #05080f;

}


.footer-container {

  max-width: 1200px;

  margin: auto;

  padding: 30px;

  display: flex;

  justify-content: space-between;

  align-items: center;

}


.footer strong {

  font-size: 13px;

  letter-spacing: 2px;

}


.footer p {

  margin: 5px 0 0;

  color: #64748b;

  font-size: 11px;

}


.footer-right {

  text-align: right;

}


.footer-right a {

  color: var(--primary);

  font-size: 11px;

  text-decoration: none;

}


/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 900px) {

  .desktop-menu {

    display: none;

  }


  .mobile-menu-button {

    display: block;

  }


  .mobile-menu {

    display: flex;

    flex-direction: column;

    padding: 15px 30px 25px;

    border-top: 1px solid var(--border);

  }


  .mobile-link {

    padding: 14px 0;

    color: #cbd5e1;

    text-decoration: none;

    border-bottom: 1px solid var(--border);

  }


  .about-container {

    padding: 60px 25px;

  }


  .about-grid {

    grid-template-columns: 1fr;

    gap: 60px;

  }


  .about-image {

    height: 450px;

  }


  .technologies-grid {

    grid-template-columns: repeat(2,1fr);

  }


  .approach-grid {

    grid-template-columns: repeat(2,1fr);

  }

}


@media (max-width: 600px) {

  .section-header {

    margin-bottom: 50px;

  }


  .section-header h1 {

    font-size: 42px;

  }


  .about-image {

    height: 400px;

  }


  .code-decoration {

    display: none;

  }


  .technology-heading {

    flex-direction: column;

    align-items: flex-start;

  }


  .technologies-grid {

    grid-template-columns: 1fr;

  }


  .approach-grid {

    grid-template-columns: 1fr;

  }


  .approach-header h2 {

    font-size: 30px;

  }


  .footer-container {

    flex-direction: column;

    align-items: flex-start;

    gap: 20px;

  }


  .footer-right {

    text-align: left;

  }

}

</style>