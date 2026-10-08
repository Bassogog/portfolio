<template>
  <section class="contact-page">

    <!-- NAVBAR -->
    <header class="navbar">

      <router-link to="/" class="brand">
        <span class="brand-dot"></span>
        JOREL<span>DEV</span>
      </router-link>

      <nav class="desktop-nav">
        <router-link to="/">Accueil</router-link>
        <router-link to="/aboutsection">À propos</router-link>
        <router-link to="/achievementsection">
          Réalisations
        </router-link>
        <router-link to="/othersection">
          Services
        </router-link>
        <router-link to="/contactsection" class="active">
          Contact
        </router-link>
      </nav>

    </header>

    <!-- INTRO -->
    <section class="contact-intro">

      <div class="number">05</div>

      <div>
        <p class="eyebrow">CONTACT</p>

        <h1>
          Parlons de votre
          <span>projet.</span>
        </h1>

        <p>
          Vous avez une idée, un projet web ou besoin d'une solution
          digitale ? Échangeons ensemble pour voir comment lui donner vie.
        </p>
      </div>

    </section>

    <!-- CONTACT CONTENT -->
    <section class="contact-grid">

      <!-- INFOS -->
      <div class="contact-info">

        <div class="info-card">
          <span class="info-icon">@</span>

          <div>
            <small>EMAIL</small>
            <a href="mailto:bounzestalonnekevin@gmail.com">
              bounzestalonnekevin@gmail.com
            </a>
          </div>
        </div>

        <div class="info-card">
          <span class="info-icon">☎</span>

          <div>
            <small>TÉLÉPHONE</small>
            <a href="tel:+237655402659">
              +237 6 55 40 26 59
            </a>
          </div>
        </div>

        <div class="info-card">
          <span class="info-icon">WA</span>

          <div>
            <small>WHATSAPP</small>
            <a
              href="https://wa.me/237655402659"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuter sur WhatsApp
            </a>
          </div>
        </div>

        <div class="social-block">

          <p>RETROUVEZ-MOI</p>

          <div class="social-links">

            <a
              href="https://www.linkedin.com/in/jorel-kue-5a7961262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://x.com/JorelKue"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>

            <a
              href="https://www.facebook.com/jorel.kue.3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

          </div>

        </div>

      </div>

      <!-- FORMULAIRE -->
      <div class="contact-form">

        <form @submit.prevent="sendMessage">

          <div class="form-row">

            <div class="field">
              <label>Prénom</label>
              <input
                v-model="form.firstName"
                type="text"
                placeholder="Votre prénom"
                required
              />
            </div>

            <div class="field">
              <label>Nom</label>
              <input
                v-model="form.lastName"
                type="text"
                placeholder="Votre nom"
                required
              />
            </div>

          </div>

          <div class="field">
            <label>Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="vous@email.com"
              required
            />
          </div>

          <div class="field">
            <label>Objet</label>
            <input
              v-model="form.subject"
              type="text"
              placeholder="Objet de votre message"
              required
            />
          </div>

          <div class="field">
            <label>Message</label>

            <textarea
              v-model="form.message"
              rows="6"
              placeholder="Parlez-moi de votre projet..."
              required
            ></textarea>
          </div>

          <button type="submit" class="send-button">
            Envoyer le message
            <span>→</span>
          </button>

        </form>

      </div>

    </section>

    <!-- FOOTER -->
    <footer>
      <p>© {{ currentYear }} JorelDev. Tous droits réservés.</p>
      <p>Full Stack Developer</p>
    </footer>

  </section>
</template>

<script>
export default {
  name: "ContactSection",

  data() {
    return {
      currentYear: new Date().getFullYear(),

      form: {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  },

  methods: {

    sendMessage() {

      const body = `
Bonjour,

Nom : ${this.form.firstName} ${this.form.lastName}
Email : ${this.form.email}

${this.form.message}
      `;

      const mailto =
        `mailto:jorel.kue@gmail.com` +
        `?subject=${encodeURIComponent(this.form.subject)}` +
        `&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
    }

  }
};
</script>

<style scoped>

.contact-page {
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
  border-bottom: 1px solid rgba(148,163,184,.12);
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

/* INTRO */

.contact-intro {
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
  font-size: 12px;
  letter-spacing: 3px;
  font-weight: 700;
}

.contact-intro h1 {
  font-size: clamp(45px, 7vw, 75px);
  line-height: 1;
  letter-spacing: -3px;
  margin: 15px 0 25px;
}

.contact-intro h1 span {
  color: #38BDF8;
}

.contact-intro p:last-child {
  max-width: 650px;
  color: #94A3B8;
  line-height: 1.8;
}

/* GRID */

.contact-grid {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 70px;
  padding-bottom: 100px;
}

/* INFO */

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 22px;
  background: #111827;
  border: 1px solid rgba(148,163,184,.12);
  border-radius: 16px;
}

.info-icon {
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: rgba(56,189,248,.1);
  color: #38BDF8;
  font-size: 13px;
  font-weight: 800;
}

.info-card small {
  display: block;
  color: #64748B;
  font-size: 10px;
  letter-spacing: 2px;
  margin-bottom: 5px;
}

.info-card a {
  color: #F8FAFC;
  text-decoration: none;
  font-size: 14px;
}

.info-card a:hover {
  color: #38BDF8;
}

.social-block {
  margin-top: 25px;
}

.social-block p {
  color: #64748B;
  font-size: 10px;
  letter-spacing: 2px;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.social-links a {
  color: #CBD5E1;
  text-decoration: none;
  padding: 10px 16px;
  border: 1px solid rgba(148,163,184,.15);
  border-radius: 30px;
  font-size: 13px;
}

/* FORM */

.contact-form {
  background: #111827;
  border: 1px solid rgba(148,163,184,.12);
  padding: 40px;
  border-radius: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.field {
  margin-bottom: 22px;
}

.field label {
  display: block;
  color: #CBD5E1;
  font-size: 12px;
  margin-bottom: 8px;
}

.field input,
.field textarea {
  width: 100%;
  box-sizing: border-box;
  background: #0B1120;
  border: 1px solid rgba(148,163,184,.15);
  border-radius: 10px;
  color: #F8FAFC;
  padding: 14px;
  outline: none;
  font-family: inherit;
  transition: .3s;
}

.field input:focus,
.field textarea:focus {
  border-color: #38BDF8;
}

.field textarea {
  resize: vertical;
}

.send-button {
  width: 100%;
  border: none;
  background: #F8FAFC;
  color: #0B1120;
  padding: 15px;
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
  transition: .3s;
}

.send-button:hover {
  background: #38BDF8;
}

.send-button span {
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

/* MOBILE */

@media (max-width: 900px) {

  .desktop-nav {
    display: none;
  }

  .contact-intro {
    grid-template-columns: 1fr;
    padding-top: 70px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .contact-form {
    padding: 25px;
  }

  footer {
    flex-direction: column;
    gap: 10px;
  }
}

</style>