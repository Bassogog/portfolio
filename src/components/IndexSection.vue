<template>
  <div class="portfolio-page">

    <!-- ================= NAVBAR ================= -->
    <header class="navbar">

      <div class="navbar-container">

        <!-- Logo -->
        <router-link to="/" class="brand">
          <img
            src="@/assets/image/logo.png"
            alt="Jorel Kue"
            class="brand-logo"
          />

          <div class="brand-text">
            <span class="brand-name">JOREL KUE</span>
            <span class="brand-role">FULL-STACK DEVELOPER</span>
          </div>
        </router-link>

        <!-- Desktop menu -->
        <nav class="desktop-menu">

          <router-link to="/" class="nav-link active">
            Accueil
          </router-link>

          <router-link to="/aboutsection" class="nav-link">
            À propos
          </router-link>

          <router-link to="/achievementsection" class="nav-link">
            Réalisations
          </router-link>

          <router-link to="/contactsection" class="nav-link">
            Contact
          </router-link>

        </nav>

        <!-- Mobile button -->
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

      <!-- Mobile menu -->
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


    <!-- ================= HERO ================= -->
    <main class="hero-section">

      <!-- Background effects -->
      <div class="hero-glow glow-one"></div>
      <div class="hero-glow glow-two"></div>

      <div class="hero-container">

        <!-- LEFT -->
        <section class="hero-content">

          <div class="availability">
            <span class="status-dot"></span>
            Disponible pour de nouveaux projets
          </div>

          <p class="hero-intro">
            Bonjour, je suis
          </p>

          <h1>
            Stalonne Kevin
            <span>Bounze Kue</span>
          </h1>

          <div class="hero-title">

            <span class="line"></span>

            <div>
              <strong>FULL-STACK</strong>
              <span>DEVELOPER</span>
            </div>

          </div>

          <p class="hero-description">
            Je conçois et développe des applications web modernes,
            performantes et évolutives avec une approche orientée
            expérience utilisateur, architecture logicielle et
            performance.
          </p>

          <!-- Technologies -->
          <div class="tech-stack">

            <span>Vue.js</span>
            <span>Spring Boot</span>
            <span>CodeIgniter</span>
            <span>REST API</span>
            <span>PostgreSQL</span>

          </div>

          <!-- Buttons -->
          <div class="hero-actions">

            <router-link
              to="/achievementsection"
              class="primary-button"
            >
              Voir mes réalisations
              <span>→</span>
            </router-link>

            <router-link
              to="/contactsection"
              class="secondary-button"
            >
              Me contacter
            </router-link>

          </div>

          <!-- Social -->
          <div class="social-section">

            <span class="social-label">
              Retrouvez-moi
            </span>

            <div class="social-links">

              <a
                href="https://www.linkedin.com/in/jorel-kue-5a7961262/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <font-awesome-icon
                  :icon="['fab', 'linkedin']"
                />
              </a>

              <a
                href="https://x.com/JorelKue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <font-awesome-icon
                  :icon="['fab', 'twitter']"
                />
              </a>

              <a
                href="https://www.facebook.com/jorel.kue.3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <font-awesome-icon
                  :icon="['fab', 'facebook']"
                />
              </a>

              <a
                href="https://wa.me/237655402659"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <font-awesome-icon
                  :icon="['fab', 'whatsapp']"
                />
              </a>

            </div>

          </div>

        </section>


        <!-- RIGHT : PROFILE -->
        <section class="hero-profile">

          <div class="profile-decoration decoration-one"></div>
          <div class="profile-decoration decoration-two"></div>

          <div class="profile-card">

            <div class="profile-top-line"></div>

            <div class="profile-image-wrapper">

              <img
                src="@/assets/image/profile.png"
                alt="Stalonne Kevin Bounze Kue"
                class="profile-image"
              />

            </div>

            <div class="profile-info">

              <p class="profile-code">
                &lt; developer /&gt;
              </p>

              <p class="profile-location">
                Cameroon · Full-Stack
              </p>

            </div>

          </div>

          <!-- Floating card -->
          <div class="floating-card floating-card-one">

            <span class="floating-icon">
              &lt;/&gt;
            </span>

            <div>
              <strong>Clean Code</strong>
              <small>Architecture</small>
            </div>

          </div>


          <div class="floating-card floating-card-two">

            <span class="floating-number">
              3+
            </span>

            <div>
              <strong>Années</strong>
              <small>d'expérience</small>
            </div>

          </div>

        </section>

      </div>


      <!-- ================= BOTTOM STATS ================= -->

      <section class="stats-section">

        <div class="stat">

          <strong>3+</strong>

          <span>
            Années<br />
            d'expérience
          </span>

        </div>


        <div class="stat-separator"></div>


        <div class="stat">

          <strong>10+</strong>

          <span>
            Projets<br />
            réalisés
          </span>

        </div>


        <div class="stat-separator"></div>


        <div class="stat">

          <strong>5+</strong>

          <span>
            Technologies<br />
            maîtrisées
          </span>

        </div>


        <div class="stat-separator"></div>


        <div class="stat">

          <strong>100%</strong>

          <span>
            Passion<br />
            du développement
          </span>

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

  name: "IndexSection",

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
   GLOBAL
===================================================== */

.portfolio-page {

  --background: #070b14;
  --background-secondary: #0d1422;
  --card: rgba(17, 24, 39, 0.78);

  --primary: #38bdf8;
  --primary-dark: #0ea5e9;

  --green: #22c55e;

  --text: #f8fafc;
  --muted: #94a3b8;
  --border: rgba(148, 163, 184, 0.16);

  min-height: 100vh;

  background:
    radial-gradient(
      circle at 80% 20%,
      rgba(56, 189, 248, 0.10),
      transparent 30%
    ),
    radial-gradient(
      circle at 15% 80%,
      rgba(34, 197, 94, 0.06),
      transparent 25%
    ),
    var(--background);

  color: var(--text);

  overflow: hidden;

}


/* =====================================================
   NAVBAR
===================================================== */

.navbar {

  position: relative;

  width: 100%;

  background: rgba(7, 11, 20, 0.85);

  backdrop-filter: blur(18px);

  border-bottom: 1px solid var(--border);

  z-index: 100;

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

  align-items: center;

  gap: 38px;

}


.nav-link {

  position: relative;

  color: #cbd5e1;

  text-decoration: none;

  font-size: 14px;

  font-weight: 600;

  transition: 0.3s;

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

  transition: 0.3s;

}


.nav-link:hover::after,
.nav-link.active::after {

  width: 100%;

}


/* =====================================================
   MOBILE NAV
===================================================== */

.mobile-menu-button {

  display: none;

  width: 42px;

  height: 42px;

  border: 1px solid var(--border);

  border-radius: 10px;

  background: rgba(255,255,255,0.04);

  padding: 9px;

  cursor: pointer;

}


.mobile-menu-button span {

  display: block;

  height: 2px;

  margin: 5px 0;

  background: white;

}


.mobile-menu {

  display: none;

}


/* =====================================================
   HERO
===================================================== */

.hero-section {

  position: relative;

  max-width: 1250px;

  margin: auto;

  padding: 100px 30px 50px;

}


.hero-container {

  display: grid;

  grid-template-columns: 1.1fr 0.9fr;

  align-items: center;

  gap: 70px;

  min-height: 620px;

}


/* Background lights */

.hero-glow {

  position: absolute;

  width: 350px;

  height: 350px;

  border-radius: 50%;

  filter: blur(120px);

  pointer-events: none;

}


.glow-one {

  top: 100px;

  right: -150px;

  background: rgba(56, 189, 248, 0.12);

}


.glow-two {

  bottom: 50px;

  left: -180px;

  background: rgba(34, 197, 94, 0.08);

}


/* =====================================================
   HERO CONTENT
===================================================== */

.hero-content {

  position: relative;

  z-index: 2;

  animation: heroReveal 1s ease forwards;

}


.availability {

  display: inline-flex;

  align-items: center;

  gap: 9px;

  padding: 8px 14px;

  margin-bottom: 25px;

  border: 1px solid rgba(34, 197, 94, 0.2);

  background: rgba(34, 197, 94, 0.05);

  border-radius: 30px;

  color: #86efac;

  font-size: 12px;

}


.status-dot {

  width: 7px;

  height: 7px;

  border-radius: 50%;

  background: #22c55e;

  box-shadow: 0 0 12px #22c55e;

}


.hero-intro {

  margin: 0 0 5px;

  color: var(--muted);

  font-size: 18px;

}


.hero-content h1 {

  margin: 0;

  font-size: clamp(48px, 6vw, 78px);

  line-height: 1.05;

  font-weight: 800;

  letter-spacing: -3px;

}


.hero-content h1 span {

  display: block;

  color: transparent;

  background: linear-gradient(
    90deg,
    #38bdf8,
    #60a5fa
  );

  background-clip: text;

  -webkit-background-clip: text;

}


.hero-title {

  display: flex;

  align-items: center;

  gap: 15px;

  margin-top: 25px;

}


.hero-title .line {

  width: 45px;

  height: 2px;

  background: var(--primary);

}


.hero-title div {

  display: flex;

  gap: 8px;

  align-items: center;

}


.hero-title strong {

  font-size: 19px;

  letter-spacing: 2px;

}


.hero-title span {

  color: var(--muted);

  font-size: 19px;

  letter-spacing: 2px;

}


.hero-description {

  max-width: 650px;

  margin-top: 28px;

  color: var(--muted);

  font-size: 17px;

  line-height: 1.8;

}


/* =====================================================
   TECHNOLOGIES
===================================================== */

.tech-stack {

  display: flex;

  flex-wrap: wrap;

  gap: 9px;

  margin-top: 25px;

}


.tech-stack span {

  padding: 7px 12px;

  border: 1px solid var(--border);

  border-radius: 6px;

  background: rgba(255,255,255,0.025);

  color: #cbd5e1;

  font-size: 11px;

  font-weight: 600;

}


/* =====================================================
   BUTTONS
===================================================== */

.hero-actions {

  display: flex;

  gap: 14px;

  margin-top: 35px;

}


.primary-button,
.secondary-button {

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 15px;

  padding: 14px 22px;

  border-radius: 8px;

  text-decoration: none;

  font-size: 14px;

  font-weight: 700;

  transition: 0.3s;

}


.primary-button {

  background: var(--primary);

  color: #03121c;

}


.primary-button:hover {

  transform: translateY(-3px);

  box-shadow: 0 10px 30px rgba(56,189,248,0.2);

}


.secondary-button {

  border: 1px solid var(--border);

  color: white;

  background: rgba(255,255,255,0.03);

}


.secondary-button:hover {

  border-color: var(--primary);

  color: var(--primary);

}


/* =====================================================
   SOCIAL
===================================================== */

.social-section {

  display: flex;

  align-items: center;

  gap: 25px;

  margin-top: 35px;

}


.social-label {

  color: #64748b;

  font-size: 12px;

}


.social-links {

  display: flex;

  gap: 12px;

}


.social-links a {

  width: 38px;

  height: 38px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: 1px solid var(--border);

  border-radius: 8px;

  color: #94a3b8;

  transition: 0.3s;

}


.social-links a:hover {

  color: white;

  border-color: var(--primary);

  transform: translateY(-3px);

}


/* =====================================================
   PROFILE
===================================================== */

.hero-profile {

  position: relative;

  min-height: 560px;

  display: flex;

  justify-content: center;

  align-items: center;

}


.profile-card {

  position: relative;

  width: 380px;

  padding: 10px;

  border-radius: 25px;

  background:
    linear-gradient(
      145deg,
      rgba(56,189,248,0.2),
      rgba(17,24,39,0.7)
    );

  border: 1px solid rgba(148,163,184,0.18);

  box-shadow:
    0 40px 100px rgba(0,0,0,0.5);

  transform: rotate(2deg);

  animation: profileFloat 5s ease-in-out infinite;

}


.profile-top-line {

  height: 3px;

  width: 50px;

  margin: 15px;

  border-radius: 10px;

  background: var(--primary);

}


.profile-image-wrapper {

  overflow: hidden;

  border-radius: 18px;

}


.profile-image {

  display: block;

  width: 100%;

  height: 500px;

  object-fit: cover;

  object-position: center top;

  filter: saturate(0.95);

}


.profile-info {

  padding: 18px;

}


.profile-code {

  margin: 0;

  color: var(--primary);

  font-family: monospace;

  font-size: 13px;

}


.profile-location {

  margin: 6px 0 0;

  color: var(--muted);

  font-size: 11px;

}


/* =====================================================
   FLOATING CARDS
===================================================== */

.floating-card {

  position: absolute;

  display: flex;

  align-items: center;

  gap: 12px;

  padding: 13px 17px;

  border: 1px solid var(--border);

  background: rgba(13,20,34,0.88);

  backdrop-filter: blur(15px);

  border-radius: 12px;

  box-shadow: 0 20px 40px rgba(0,0,0,0.3);

}


.floating-card strong {

  display: block;

  font-size: 12px;

}


.floating-card small {

  display: block;

  margin-top: 3px;

  color: var(--muted);

  font-size: 10px;

}


.floating-icon {

  color: var(--primary);

  font-family: monospace;

  font-weight: bold;

}


.floating-number {

  color: var(--primary);

  font-size: 22px;

  font-weight: 800;

}


.floating-card-one {

  left: 0;

  top: 150px;

}


.floating-card-two {

  right: -10px;

  bottom: 120px;

}


/* =====================================================
   STATS
===================================================== */

.stats-section {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 60px;

  padding: 30px;

  border-top: 1px solid var(--border);

  border-bottom: 1px solid var(--border);

}


.stat {

  display: flex;

  align-items: center;

  gap: 15px;

}


.stat strong {

  font-size: 30px;

  color: white;

}


.stat span {

  color: var(--muted);

  font-size: 11px;

  line-height: 1.5;

}


.stat-separator {

  width: 1px;

  height: 35px;

  background: var(--border);

}


/* =====================================================
   FOOTER
===================================================== */

.footer {

  border-top: 1px solid var(--border);

  background: #05080f;

}


.footer-container {

  max-width: 1250px;

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
   ANIMATIONS
===================================================== */

@keyframes heroReveal {

  from {

    opacity: 0;

    transform: translateY(30px);

  }

  to {

    opacity: 1;

    transform: translateY(0);

  }

}


@keyframes profileFloat {

  0%,
  100% {

    transform: translateY(0) rotate(2deg);

  }

  50% {

    transform: translateY(-12px) rotate(2deg);

  }

}


/* =====================================================
   MOBILE
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


  .hero-section {

    padding-top: 60px;

  }


  .hero-container {

    grid-template-columns: 1fr;

    text-align: center;

  }


  .hero-title {

    justify-content: center;

  }


  .hero-description {

    margin-left: auto;

    margin-right: auto;

  }


  .tech-stack {

    justify-content: center;

  }


  .hero-actions {

    justify-content: center;

  }


  .social-section {

    justify-content: center;

  }


  .hero-profile {

    margin-top: 20px;

  }


  .stats-section {

    flex-wrap: wrap;

    gap: 25px;

    justify-content: center;

  }


  .stat-separator {

    display: none;

  }

}


@media (max-width: 600px) {

  .navbar-container {

    padding: 15px 20px;

  }


  .hero-section {

    padding: 50px 20px 30px;

  }


  .hero-content h1 {

    font-size: 48px;

    letter-spacing: -2px;

  }


  .hero-description {

    font-size: 15px;

  }


  .hero-actions {

    flex-direction: column;

  }


  .primary-button,
  .secondary-button {

    width: 100%;

  }


  .profile-card {

    width: 90%;

  }


  .profile-image {

    height: 420px;

  }


  .floating-card-one {

    left: -5px;

  }


  .floating-card-two {

    right: -5px;

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