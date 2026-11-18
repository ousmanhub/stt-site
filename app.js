/* SMART TECHNOLOGIES TCHAD — i18n + interactions. Aucune dépendance externe. */
(() => {
  'use strict';

  document.documentElement.classList.add('js');

  const DICT = {
    fr: {
      'nav.about': 'La société', 'nav.poles': 'Nos domaines', 'nav.who': 'Pour qui', 'nav.contact': 'Contact',

      'hero.title': 'Du réseau au champ,<br>du code au <em>guichet</em>.',
      'hero.sub': "SMART TECHNOLOGIES TCHAD conçoit, déploie et maintient les applications, les réseaux et les solutions numériques dont les organisations tchadiennes ont besoin.",
      'hero.cta1': 'Parler de votre projet', 'hero.cta2': 'Voir nos domaines',

      'band.1t': 'Applications', 'band.1s': 'Conception et déploiement',
      'band.2t': 'Réseaux', 'band.2s': 'Conception et configuration',
      'band.3t': 'Agriculture', 'band.3s': 'Mesures et aide à la décision',
      'band.4t': 'Digitalisation', 'band.4s': 'Des métiers vers le numérique',

      'about.eyebrow': 'Qui nous sommes',
      'about.title': 'Une société tchadienne,<br>tournée vers l’usage.',
      'about.p1': "SMART TECHNOLOGIES TCHAD est une société de N'Djamena. Nous travaillons sur quatre terrains : le logiciel, le réseau, l'agriculture et la transformation numérique des métiers.",
      'about.p2': "Notre approche part du terrain : comprendre comment le travail se fait réellement, puis construire l'outil qui l'accompagne — pas l'inverse.",
      'chips.1': 'Basés à N’Djamena', 'chips.2': 'Quatre domaines complémentaires',
      'chips.3': 'Solutions en français', 'chips.4': 'Applications web et mobiles',

      'about.side': 'Ce qui nous définit',
      'about.v2': 'Conception, déploiement et configuration réalisés par nos soins',
      'about.v3': 'Contact direct avec l’équipe, sans intermédiaire',
      'about.v4': 'Le client reste propriétaire de son code et de ses données',

      'poles.eyebrow': 'Nos domaines', 'poles.title': 'Quatre terrains, une même méthode.',

      'pole1.title': 'Applications',
      'pole1.p': "Conception et déploiement de logiciels métier : gestion de stock, facturation, suivi d'activité. Des outils qui remplacent le tableur et le cahier par une base de données fiable.",
      'pole1.p1': 'Web et mobile', 'pole1.p2': 'Bases de données', 'pole1.p3': 'Interfaces métier',

      'pole2.title': 'Réseaux informatiques',
      'pole2.p': "Conception et configuration de réseaux : câblage structuré, Wi-Fi, routage, adressage, sécurité de base. Un réseau documenté, transmissible à tout technicien.",
      'pole2.p1': 'Câblage et Wi-Fi', 'pole2.p2': 'Routage et adressage', 'pole2.p3': 'Documentation réseau',

      'pole3.title': 'Agriculture intelligente',
      'pole3.p': "Capteurs, suivi des parcelles et outils d'aide à la décision pour l'irrigation et les cultures. Rendre visible ce qui se passe au champ, pour décider sur des mesures.",
      'pole3.p1': 'Capteurs et mesures', 'pole3.p2': 'Suivi des parcelles', 'pole3.p3': 'Aide à la décision',

      'pole4.title': 'Digitalisation des métiers',
      'pole4.p': "Transposer un métier existant dans un outil numérique : décrire les étapes réelles, repérer ce qui se perd, construire le formulaire ou le tableau de bord qui tient dans une journée de travail.",
      'pole4.p1': 'Analyse des processus', 'pole4.p2': 'Formulaires et registres', 'pole4.p3': 'Tableaux de bord',

      'who.eyebrow': 'Pour qui', 'who.title': 'Ceux qui ont un métier à outiller.',
      'who.1t': 'Entreprises', 'who.1p': 'PME et commerces qui veulent sortir du tableur et fiabiliser leur gestion.',
      'who.2t': 'Exploitations agricoles', 'who.2p': 'Structures qui cherchent à mesurer l’eau, les sols et les rendements.',
      'who.3t': 'Organisations et projets', 'who.3p': 'ONG, associations et projets de développement ayant besoin d’outils de suivi.',
      'who.4t': 'Administrations', 'who.4p': 'Services qui doivent numériser un guichet ou un registre papier.',

      'contact.eyebrow': 'Contact', 'contact.title': 'Décrivez-nous votre besoin.',
      'contact.sub': "Un message suffit pour démarrer. Nous précisons ensemble le périmètre avant toute proposition chiffrée.",

      'form.name': 'Nom', 'form.name_ph': 'Votre nom',
      'form.org': 'Structure', 'form.org_ph': 'Entreprise, ONG, exploitation…',
      'form.mail': 'E-mail', 'form.mail_ph': 'vous@exemple.com',
      'form.subject': 'Sujet',
      'form.s1': 'Une application', 'form.s2': 'Un réseau informatique',
      'form.s3': 'Un projet agricole', 'form.s4': 'Autre demande',
      'form.msg': 'Message', 'form.msg_ph': 'Décrivez votre besoin en quelques lignes.',
      'form.send': 'Envoyer le message',
      'form.hint': 'Ce formulaire ouvre votre logiciel de messagerie. Aucune donnée n’est stockée sur ce site.',

      'info.addr': 'Adresse', 'info.tel': 'Téléphone', 'info.mail': 'E-mail',
      'info.legal': 'Immatriculation',

      'faq.eyebrow': 'Questions fréquentes', 'faq.title': 'Avant de nous écrire.',
      'faq.q1': 'Comment se déroule une mission ?',
      'faq.a1': "Un premier échange pour comprendre le besoin, puis un devis écrit qui précise le périmètre, le matériel et le délai. Le travail commence à réception de l'accord.",
      'faq.q2': 'Travaillez-vous avec du matériel existant ?',
      'faq.a2': "Nous regardons d'abord ce qui est en place. Remplacer n'est pas toujours nécessaire : un réseau existant peut souvent être corrigé plutôt que refait.",
      'faq.q4': 'Comment demander un devis ?',
      'faq.a4': "Par le formulaire ci-dessus, par téléphone ou par courriel. Un devis écrit est établi avant toute intervention.",

      'foot.tag': "Applications, réseaux, agriculture intelligente et digitalisation des métiers. N'Djamena, Tchad.",
      'foot.nav': 'Navigation', 'foot.poles': 'Domaines', 'foot.contact': 'Contact',
      'foot.legal': 'NIF 9069867 b · RCCM TD-NDJ-OI-2026 AIO-03781'
    },

    en: {
      'nav.about': 'Company', 'nav.poles': 'What we do', 'nav.who': 'Who we serve', 'nav.contact': 'Contact',

      'hero.title': 'From the network to the field,<br>from code to the <em>counter</em>.',
      'hero.sub': 'SMART TECHNOLOGIES TCHAD designs, deploys and maintains the applications, networks and digital tools that Chadian organisations need.',
      'hero.cta1': 'Discuss your project', 'hero.cta2': 'See our fields',

      'band.1t': 'Applications', 'band.1s': 'Design and deployment',
      'band.2t': 'Networks', 'band.2s': 'Design and configuration',
      'band.3t': 'Agriculture', 'band.3s': 'Measurement and decision support',
      'band.4t': 'Digitalisation', 'band.4s': 'From trades to digital tools',

      'about.eyebrow': 'Who we are',
      'about.title': 'A Chadian company,<br>built around real use.',
      'about.p1': "SMART TECHNOLOGIES TCHAD is a company based in N'Djamena. We work across four fields: software, networks, agriculture and the digital transformation of trades.",
      'about.p2': "Our approach starts in the field: understand how the work is actually done, then build the tool that supports it — not the other way round.",
      'chips.1': 'Based in N’Djamena', 'chips.2': 'Four complementary fields',
      'chips.3': 'French-language solutions', 'chips.4': 'Web and mobile applications',

      'about.side': 'What defines us',
      'about.v2': 'Design, deployment and configuration done in-house',
      'about.v3': 'Direct contact with the team, no middlemen',
      'about.v4': 'The client keeps ownership of code and data',

      'poles.eyebrow': 'What we do', 'poles.title': 'Four fields, one method.',

      'pole1.title': 'Applications',
      'pole1.p': 'Design and deployment of business software: stock management, invoicing, activity tracking. Tools that replace spreadsheets and paper ledgers with a reliable database.',
      'pole1.p1': 'Web and mobile', 'pole1.p2': 'Databases', 'pole1.p3': 'Business interfaces',

      'pole2.title': 'Computer networks',
      'pole2.p': 'Network design and configuration: structured cabling, Wi-Fi, routing, addressing, baseline security. A documented network that any technician can take over.',
      'pole2.p1': 'Cabling and Wi-Fi', 'pole2.p2': 'Routing and addressing', 'pole2.p3': 'Network documentation',

      'pole3.title': 'Smart agriculture',
      'pole3.p': 'Sensors, plot monitoring and decision-support tools for irrigation and crops. Making visible what happens in the field, so decisions rest on measurements.',
      'pole3.p1': 'Sensors and measurement', 'pole3.p2': 'Plot monitoring', 'pole3.p3': 'Decision support',

      'pole4.title': 'Digitalising trades',
      'pole4.p': 'Moving an existing trade into a digital tool: describe the real steps, find what gets lost, and build the form or dashboard that fits inside a working day.',
      'pole4.p1': 'Process review', 'pole4.p2': 'Forms and registers', 'pole4.p3': 'Dashboards',

      'who.eyebrow': 'Who we serve', 'who.title': 'Those who have a trade to equip.',
      'who.1t': 'Businesses', 'who.1p': 'SMEs and shops ready to leave the spreadsheet behind and make their management reliable.',
      'who.2t': 'Farms', 'who.2p': 'Operations looking to measure water, soil and yields.',
      'who.3t': 'Organisations and projects', 'who.3p': 'NGOs, associations and development projects that need monitoring tools.',
      'who.4t': 'Public services', 'who.4p': 'Departments that need to digitise a counter or a paper register.',

      'contact.eyebrow': 'Contact', 'contact.title': 'Tell us what you need.',
      'contact.sub': 'One message is enough to start. We define the scope together before any priced proposal.',

      'form.name': 'Name', 'form.name_ph': 'Your name',
      'form.org': 'Organisation', 'form.org_ph': 'Company, NGO, farm…',
      'form.mail': 'Email', 'form.mail_ph': 'you@example.com',
      'form.subject': 'Subject',
      'form.s1': 'An application', 'form.s2': 'A computer network',
      'form.s3': 'An agricultural project', 'form.s4': 'Something else',
      'form.msg': 'Message', 'form.msg_ph': 'Describe your need in a few lines.',
      'form.send': 'Send the message',
      'form.hint': 'This form opens your email client. No data is stored on this site.',

      'info.addr': 'Address', 'info.tel': 'Phone', 'info.mail': 'Email',
      'info.legal': 'Registration',

      'faq.eyebrow': 'Frequently asked', 'faq.title': 'Before you write.',
      'faq.q1': 'How does a project run?',
      'faq.a1': 'A first conversation to understand the need, then a written quote stating scope, equipment and timeline. Work starts once it is approved.',
      'faq.q2': 'Do you work with existing equipment?',
      'faq.a2': 'We look at what is already there first. Replacement is not always needed: an existing network can often be corrected rather than rebuilt.',
      'faq.q4': 'How do I request a quote?',
      'faq.a4': 'Through the form above, by phone or by email. A written quote is issued before any work begins.',

      'foot.tag': "Applications, networks, smart agriculture and digitalisation of trades. N'Djamena, Chad.",
      'foot.nav': 'Navigation', 'foot.poles': 'Fields', 'foot.contact': 'Contact',
      'foot.legal': 'NIF 9069867 b · RCCM TD-NDJ-OI-2026 AIO-03781'
    }
  };

  const EMAIL = 'contact@sttworks.com';
  let lang = localStorage.getItem('stt-lang') || 'fr';

  function apply(l) {
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n, v = DICT[l] && DICT[l][k];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const v = DICT[l] && DICT[l][el.dataset.i18nPh];
      if (v != null) el.placeholder = v;
    });
    document.getElementById('fr').classList.toggle('on', l === 'fr');
    document.getElementById('en').classList.toggle('on', l === 'en');
    localStorage.setItem('stt-lang', l);
  }

  document.getElementById('fr').addEventListener('click', () => apply('fr'));
  document.getElementById('en').addEventListener('click', () => apply('en'));
  apply(lang);

  // année courante
  document.getElementById('yr').textContent = new Date().getFullYear();

  // header au scroll
  const hdr = document.getElementById('hdr');
  const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // menu mobile
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  burger.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

  // apparition au scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));

  // formulaire → client mail
  document.getElementById('form').addEventListener('submit', ev => {
    ev.preventDefault();
    const f = ev.target;
    const sujet = f.subject.options[f.subject.selectedIndex].textContent;
    const corps = [
      `Nom : ${f.name.value}`,
      f.org.value ? `Structure : ${f.org.value}` : '',
      `E-mail : ${f.email.value}`,
      `Sujet : ${sujet}`,
      '',
      f.message.value
    ].filter(Boolean).join('\n');
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('[' + sujet + '] ' + f.name.value)}`
                  + `&body=${encodeURIComponent(corps)}`;
  });
})();
