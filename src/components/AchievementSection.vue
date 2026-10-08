<template>
  <section class="achievements-page">

    <!-- NAVBAR -->
    <header class="navbar">
      <router-link to="/" class="brand">
        <span class="brand-dot"></span>
        JOREL<span>DEV</span>
      </router-link>

      <nav class="desktop-nav">
        <router-link to="/">Accueil</router-link>
        <router-link to="/aboutsection">À propos</router-link>
        <router-link to="/achievementsection" class="active">
          Réalisations
        </router-link>
        <router-link to="/othersection">Services</router-link>
        <router-link to="/contactsection" class="nav-contact">
          Contact
        </router-link>
      </nav>
    </header>

    <!-- HERO -->
    <section class="section-hero">
      <span class="section-number">03</span>

      <div>
        <p class="eyebrow">MON PORTFOLIO</p>
        <h1>Mes <span>réalisations</span></h1>
        <p class="hero-description">
          Quelques projets sur lesquels j'ai travaillé dans le développement
          d'applications web et de solutions digitales.
        </p>
      </div>
    </section>

    <!-- ================= GARDE / AVERTISSEMENT ================= -->
    <section class="notice-banner">
      <div class="notice-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </div>

      <div class="notice-content">
        <p class="notice-title">Réalisations confidentielles</p>
        <p class="notice-text">
          Certaines réalisations ne sont pas présentées sur ce portfolio
          en raison du <strong>secret professionnel</strong> et des clauses
          de confidentialité liées à mes missions. N'hésitez pas à me
          contacter pour en discuter.
        </p>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="projects">

      <!-- PROJECT 1 -->
      <article class="project-card">
        <div class="project-image">
          <img
            src="@/assets/image/stationservice.png"
            alt="Application de gestion de station-service"
          />

          <div class="project-number">01</div>
        </div>

        <div class="project-content">
          <span class="project-category">APPLICATION WEB</span>

          <h2>Gestion de station-service</h2>

          <p>
            Application destinée à faciliter la gestion des entrées,
            sorties et de la consommation des clients d'une station-service.
          </p>

          <div class="technologies">
            <span>Web Application</span>
            <span>Dashboard</span>
            <span>Management</span>
          </div>

          <div class="project-footer">
            <span>Gestion & suivi</span>
            <span class="arrow">↗</span>
          </div>
        </div>
      </article>

      <!-- PROJECT 2 -->
      <article class="project-card reverse">
        <div class="project-image">
          <img
            src="@/assets/image/stock.png"
            alt="Application de gestion de stock"
          />

          <div class="project-number">02</div>
        </div>

        <div class="project-content">
          <span class="project-category">GESTION COMMERCIALE</span>

          <h2>Gestion de stock</h2>

          <p>
            Solution permettant de centraliser la gestion des produits,
            le suivi des stocks et les différentes opérations liées
            à la gestion commerciale.
          </p>

          <div class="technologies">
            <span>Stock Management</span>
            <span>Dashboard</span>
            <span>Business</span>
          </div>

          <div class="project-footer">
            <span>Gestion des stocks</span>
            <span class="arrow">↗</span>
          </div>
        </div>
      </article>

    </section>

    <!-- EXPERIENCE -->
    <section class="experience-section">

      <div class="section-heading">
        <span class="section-number">04</span>
        <div>
          <p class="eyebrow">PARCOURS PROFESSIONNEL</p>
          <h2>Mon expérience</h2>
        </div>
      </div>

      <div class="experience-grid">

        <div class="experience-card">
          <span class="experience-date">01</span>

          <div>
            <p class="experience-type">PHP DEVELOPMENT</p>
            <h3>PHP Developer</h3>
            <p class="company">LA'AHTECH</p>
            <p class="experience-text">
              Développement et maintenance de solutions web orientées
              vers les besoins métiers.
            </p>
          </div>
        </div>

        <div class="experience-card">
          <span class="experience-date">02</span>

          <div>
            <p class="experience-type">FRONT-END DEVELOPMENT</p>
            <h3>Front-end Developer</h3>
            <p class="company">HONORA PROJECT</p>
            <p class="experience-text">
              Participation au développement d'interfaces web modernes
              et interactives.
            </p>
          </div>
        </div>

        <div class="experience-card">
          <span class="experience-date">03</span>

          <div>
            <p class="experience-type">FULL STACK DEVELOPMENT</p>
            <h3>Full Stack Developer</h3>
            <p class="company">SIGERIS SARL</p>
            <p class="experience-text">
              Conception et développement de solutions web complètes,
              du frontend au backend.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="portfolio-cta">
      <div>
        <p class="eyebrow">UN PROJET EN TÊTE ?</p>
        <h2>Construisons quelque chose<br />d'utile ensemble.</h2>
      </div>

      <router-link to="/contactsection" class="cta-button">
        Me contacter <span>→</span>
      </router-link>
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
  name: "AchievementSection",

  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>

.achievements-page {
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
  border-bottom: 1px solid rgba(148, 163, 184, .12);
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
  align-items: center;
  gap: 30px;
}

.desktop-nav a {
  color: #94A3B8;
  text-decoration: none;
  font-size: 14px;
  transition: .3s;
}

.desktop-nav a:hover,
.desktop-nav a.active {
  color: #F8FAFC;
}

.nav-contact {
  border: 1px solid rgba(56,189,248,.5);
  padding: 10px 18px;
  border-radius: 30px;
}

/* HERO */

.section-hero {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 30px;
  padding: 110px 0 80px;
  max-width: 900px;
}

.section-number {
  color: #38BDF8;
  font-size: 14px;
  font-weight: 700;
}

.eyebrow {
  color: #22C55E;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 15px;
}

.section-hero h1 {
  font-size: clamp(45px, 7vw, 80px);
  line-height: 1;
  margin: 0;
  letter-spacing: -3px;
}

.section-hero h1 span {
  color: #38BDF8;
}

.hero-description {
  max-width: 650px;
  margin-top: 25px;
  color: #94A3B8;
  line-height: 1.8;
  font-size: 16px;
}

/* =====================================================
   NOTICE / GARDE
===================================================== */

.notice-banner {
  display: flex;
  align-items: flex-start;
  gap: 20px;

  margin: 0 0 60px;
  padding: 25px 30px;

  background:
    linear-gradient(135deg, rgba(56,189,248,.06), rgba(34,197,94,.04)),
    #111827;

  border: 1px solid rgba(56,189,248,.25);
  border-left: 3px solid #38BDF8;
  border-radius: 16px;

  max-width: 900px;
}

.notice-icon {
  flex-shrink: 0;
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(56,189,248,.12);
  border-radius: 10px;
  color: #38BDF8;
}

.notice-icon svg {
  width: 22px;
  height: 22px;
}

.notice-content {
  flex: 1;
}

.notice-title {
  margin: 0 0 8px;
  color: #F8FAFC;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .5px;
}

.notice-text {
  margin: 0;
  color: #94A3B8;
  font-size: 14px;
  line-height: 1.7;
}

.notice-text strong {
  color: #38BDF8;
  font-weight: 600;
}

/* PROJECTS */

.projects {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.project-card {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  min-height: 430px;
  background: #111827;
  border: 1px solid rgba(148,163,184,.12);
  border-radius: 24px;
  overflow: hidden;
  transition: .4s;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(56,189,248,.35);
}

.project-card.reverse {
  grid-template-columns: 1fr 1.3fr;
}

.project-card.reverse .project-image {
  order: 2;
}

.project-image {
  position: relative;
  overflow: hidden;
  background: #020617;
}

.project-image img {
  width: 100%;
  height: 100%;
  min-height: 430px;
  object-fit: cover;
  transition: .5s;
}

.project-card:hover .project-image img {
  transform: scale(1.04);
}

.project-number {
  position: absolute;
  top: 25px;
  left: 25px;
  background: rgba(11,17,32,.85);
  border: 1px solid rgba(255,255,255,.15);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.project-content {
  padding: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-category {
  color: #38BDF8;
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 700;
}

.project-content h2 {
  font-size: 36px;
  margin: 15px 0;
}

.project-content p {
  color: #94A3B8;
  line-height: 1.8;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}

.technologies span {
  padding: 7px 12px;
  background: #0B1120;
  border: 1px solid rgba(148,163,184,.15);
  border-radius: 20px;
  color: #CBD5E1;
  font-size: 11px;
}

.project-footer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(148,163,184,.12);
  display: flex;
  justify-content: space-between;
  color: #CBD5E1;
  font-size: 13px;
}

.arrow {
  color: #38BDF8;
  font-size: 22px;
}

/* EXPERIENCE */

.experience-section {
  padding: 130px 0 80px;
}

.section-heading {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 30px;
  margin-bottom: 50px;
}

.section-heading h2 {
  font-size: 48px;
  margin: 0;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.experience-card {
  background: #111827;
  border: 1px solid rgba(148,163,184,.12);
  border-radius: 20px;
  padding: 30px;
  display: flex;
  gap: 20px;
  transition: .3s;
}

.experience-card:hover {
  border-color: rgba(34,197,94,.4);
  transform: translateY(-5px);
}

.experience-date {
  color: #22C55E;
  font-weight: 800;
}

.experience-type {
  color: #38BDF8;
  font-size: 10px;
  letter-spacing: 1.5px;
}

.experience-card h3 {
  font-size: 22px;
  margin: 8px 0;
}

.company {
  color: #F8FAFC !important;
  font-weight: 600;
}

.experience-text {
  font-size: 13px;
}

/* CTA */

.portfolio-cta {
  margin: 80px 0;
  padding: 55px;
  border: 1px solid rgba(56,189,248,.2);
  border-radius: 25px;
  background:
    radial-gradient(circle at 90% 20%, rgba(56,189,248,.1), transparent 30%),
    #111827;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.portfolio-cta h2 {
  font-size: 38px;
  line-height: 1.2;
  margin: 0;
}

.cta-button {
  color: #0B1120;
  background: #F8FAFC;
  text-decoration: none;
  padding: 15px 24px;
  border-radius: 30px;
  font-weight: 700;
  transition: .3s;
}

.cta-button:hover {
  background: #38BDF8;
}

.cta-button span {
  margin-left: 10px;
}

/* FOOTER */

footer {
  padding: 30px 0;
  border-top: 1px solid rgba(148,163,184,.12);
  display: flex;
  justify-content: space-between;
  color: #64748B;
  font-size: 13px;
}

/* RESPONSIVE */

@media (max-width: 900px) {

  .desktop-nav {
    display: none;
  }

  .section-hero {
    grid-template-columns: 1fr;
    padding-top: 70px;
  }

  .notice-banner {
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }

  .project-card,
  .project-card.reverse {
    grid-template-columns: 1fr;
  }

  .project-card.reverse .project-image {
    order: 0;
  }

  .project-image img {
    min-height: 280px;
  }

  .project-content {
    padding: 30px;
  }

  .experience-grid {
    grid-template-columns: 1fr;
  }

  .portfolio-cta {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  footer {
    flex-direction: column;
    gap: 10px;
  }
}

</style>