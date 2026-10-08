<template>
  <section class="services-page">

    <!-- NAVBAR -->
    <header class="navbar">

      <router-link to="/" class="brand">
        <span class="brand-dot"></span>
        JOREL<span>DEV</span>
      </router-link>

      <nav class="desktop-nav">

        <router-link to="/">
          Accueil
        </router-link>

        <router-link to="/aboutsection">
          À propos
        </router-link>

        <router-link to="/achievementsection">
          Réalisations
        </router-link>

        <router-link
          to="/othersection"
          class="active"
        >
          Services
        </router-link>

        <router-link
          to="/contactsection"
          class="nav-contact"
        >
          Contact
        </router-link>

      </nav>

    </header>

    <!-- INTRO -->

    <section class="services-intro">

      <span class="number">04</span>

      <div>

        <p class="eyebrow">
          EXPERTISE
        </p>

        <h1>
          Ce que je peux
          <span>construire.</span>
        </h1>

        <p>
          Je conçois et développe des applications web modernes,
          performantes et adaptées aux besoins réels des entreprises.
        </p>

      </div>

    </section>

    <!-- SERVICES -->

    <section class="services-grid">

      <article class="service-card">

        <div class="service-top">
          <span>01</span>
          <div class="service-icon">⌘</div>
        </div>

        <h2>Développement Full Stack</h2>

        <p>
          Développement complet d'applications web, depuis l'interface
          utilisateur jusqu'à l'API et la base de données.
        </p>

        <div class="service-tags">
          <span>Vue.js</span>
          <span>Spring Boot</span>
          <span>PHP</span>
        </div>

      </article>


      <article class="service-card">

        <div class="service-top">
          <span>02</span>
          <div class="service-icon">{ }</div>
        </div>

        <h2>API & Backend</h2>

        <p>
          Conception d'API REST, logique métier, authentification,
          gestion des données et intégration avec les applications frontend.
        </p>

        <div class="service-tags">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>CodeIgniter</span>
        </div>

      </article>


      <article class="service-card">

        <div class="service-top">
          <span>03</span>
          <div class="service-icon">◈</div>
        </div>

        <h2>Applications Web</h2>

        <p>
          Création d'interfaces modernes, responsive et intuitives
          pensées pour offrir une expérience utilisateur professionnelle.
        </p>

        <div class="service-tags">
          <span>Vue 3</span>
          <span>Vite</span>
          <span>Bootstrap</span>
        </div>

      </article>


      <article class="service-card">

        <div class="service-top">
          <span>04</span>
          <div class="service-icon">▣</div>
        </div>

        <h2>Gestion de données</h2>

        <p>
          Conception et gestion de bases de données adaptées aux
          besoins des applications et aux contraintes métier.
        </p>

        <div class="service-tags">
          <span>PostgreSQL</span>
          <span>MySQL</span>
          <span>SQL</span>
        </div>

      </article>


      <article class="service-card">

        <div class="service-top">
          <span>05</span>
          <div class="service-icon">↗</div>
        </div>

        <h2>Solutions métier</h2>

        <p>
          Transformation d'un besoin métier en solution digitale :
          gestion de stock, agriculture, suivi, administration et reporting.
        </p>

        <div class="service-tags">
          <span>Business</span>
          <span>Automation</span>
          <span>Dashboard</span>
        </div>

      </article>


      <article class="service-card highlight">

        <div class="service-top">
          <span>06</span>
          <div class="service-icon">+</div>
        </div>

        <h2>Un projet spécifique ?</h2>

        <p>
          Vous avez un besoin particulier ? Parlons de votre idée
          et définissons ensemble la meilleure approche technique.
        </p>

        <router-link
          to="/contactsection"
          class="service-button"
        >
          Démarrer une discussion →
        </router-link>

      </article>

    </section>


    <!-- TECHNOLOGIES -->

    <section class="technology-section">

      <div class="technology-title">

        <p class="eyebrow">
          TECHNOLOGIES
        </p>

        <h2>
          Mon environnement
          <span>technique.</span>
        </h2>

      </div>

      <div class="technology-list">

        <span>Vue.js</span>
        <span>JavaScript</span>
        <span>Spring Boot</span>
        <span>Java</span>
        <span>PHP</span>
        <span>CodeIgniter</span>
        <span>PostgreSQL</span>
        <span>MySQL</span>
        <span>REST API</span>
        <span>Git</span>

      </div>

    </section>


    <!-- FOOTER -->

    <footer>

      <p>
        © {{ currentYear }} JorelDev. Tous droits réservés.
      </p>

      <p>
        Full Stack Developer
      </p>

    </footer>

  </section>
</template>


<script>

export default {

  name: "OtherSection",

  data() {

    return {
      currentYear: new Date().getFullYear()
    };

  }

};

</script>


<style scoped>

.services-page {

  min-height: 100vh;

  background: #0B1120;

  color: #F8FAFC;

  padding: 0 7%;

}


/* NAVBAR */

.navbar {

  height: 90px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  border-bottom:
    1px solid rgba(148,163,184,.12);

}


.brand {

  color: #F8FAFC;

  text-decoration: none;

  font-size: 20px;

  font-weight: 800;

  letter-spacing: 1px;

}


.brand span:last-child {

  color: #38BDF8;

}


.brand-dot {

  display: inline-block;

  width: 8px;

  height: 8px;

  background: #22C55E;

  border-radius: 50%;

  margin-right: 8px;

}


.desktop-nav {

  display: flex;

  gap: 30px;

}


.desktop-nav a {

  color: #94A3B8;

  text-decoration: none;

  font-size: 14px;

}


.desktop-nav a:hover,
.desktop-nav a.active {

  color: #F8FAFC;

}


.nav-contact {

  border:
    1px solid rgba(56,189,248,.5);

  padding: 10px 18px;

  border-radius: 30px;

}


/* INTRO */

.services-intro {

  display: grid;

  grid-template-columns: 100px 1fr;

  gap: 30px;

  padding: 100px 0 70px;

  max-width: 900px;

}


.number {

  color: #38BDF8;

  font-weight: 700;

}


.eyebrow {

  color: #22C55E;

  font-size: 11px;

  letter-spacing: 3px;

  font-weight: 700;

}


.services-intro h1 {

  font-size:
    clamp(45px, 7vw, 75px);

  line-height: 1;

  letter-spacing: -3px;

  margin: 15px 0 25px;

}


.services-intro h1 span {

  color: #38BDF8;

}


.services-intro p:last-child {

  max-width: 650px;

  color: #94A3B8;

  line-height: 1.8;

}


/* SERVICES */

.services-grid {

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;

}


.service-card {

  min-height: 330px;

  padding: 30px;

  background: #111827;

  border:
    1px solid rgba(148,163,184,.12);

  border-radius: 20px;

  display: flex;

  flex-direction: column;

  transition: .35s;

}


.service-card:hover {

  transform:
    translateY(-7px);

  border-color:
    rgba(56,189,248,.35);

}


.service-card.highlight {

  background:
    radial-gradient(
      circle at 90% 10%,
      rgba(34,197,94,.12),
      transparent 35%
    ),
    #111827;

}


.service-top {

  display: flex;

  justify-content: space-between;

  align-items: center;

}


.service-top > span {

  color: #38BDF8;

  font-size: 13px;

  font-weight: 700;

}


.service-icon {

  width: 45px;

  height: 45px;

  border-radius: 12px;

  display: flex;

  align-items: center;

  justify-content: center;

  background:
    rgba(56,189,248,.08);

  color: #38BDF8;

  font-weight: 700;

}


.service-card h2 {

  font-size: 23px;

  margin:
    40px 0 15px;

}


.service-card p {

  color: #94A3B8;

  font-size: 14px;

  line-height: 1.8;

}


.service-tags {

  display: flex;

  flex-wrap: wrap;

  gap: 7px;

  margin-top: auto;

  padding-top: 25px;

}


.service-tags span {

  padding:
    6px 10px;

  border-radius: 20px;

  background: #0B1120;

  color: #CBD5E1;

  font-size: 10px;

}


.service-button {

  display: inline-block;

  margin-top: auto;

  padding-top: 20px;

  color: #38BDF8;

  text-decoration: none;

  font-size: 13px;

  font-weight: 700;

}


/* TECHNOLOGIES */

.technology-section {

  margin: 120px 0 80px;

  padding: 50px;

  background: #111827;

  border:
    1px solid rgba(148,163,184,.12);

  border-radius: 25px;

  display: grid;

  grid-template-columns: 1fr 1.5fr;

  gap: 60px;

}


.technology-title h2 {

  font-size: 38px;

  line-height: 1.2;

}


.technology-title h2 span {

  color: #38BDF8;

}


.technology-list {

  display: flex;

  flex-wrap: wrap;

  gap: 12px;

  align-content: center;

}


.technology-list span {

  padding:
    12px 17px;

  border:
    1px solid rgba(148,163,184,.15);

  border-radius: 30px;

  color: #CBD5E1;

  font-size: 13px;

}


/* FOOTER */

footer {

  padding: 30px 0;

  border-top:
    1px solid rgba(148,163,184,.12);

  display: flex;

  justify-content: space-between;

  color: #64748B;

  font-size: 13px;

}


/* MOBILE */

@media (max-width: 950px) {

  .desktop-nav {

    display: none;

  }


  .services-intro {

    grid-template-columns: 1fr;

    padding-top: 70px;

  }


  .services-grid {

    grid-template-columns: 1fr;

  }


  .technology-section {

    grid-template-columns: 1fr;

    gap: 30px;

    padding: 30px;

  }


  footer {

    flex-direction: column;

    gap: 10px;

  }

}

</style>