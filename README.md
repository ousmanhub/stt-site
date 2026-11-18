# Site vitrine — SMART TECHNOLOGIES TCHAD

Une page, zéro build, zéro dépendance externe.

## Fichiers

```
index.html          la page (HTML + CSS inline)
app.js              dictionnaire FR/EN, reveal, formulaire
assets/logo.svg     lockup horizontal (ivoire, pour fond sombre)
assets/favicon.svg  pastille inversée
assets/favicon.ico  repli navigateurs anciens
fonts/archivo.woff2 Archivo Bold (SIL OFL)
fonts/grotesk.woff2 Space Grotesk Medium (SIL OFL)
```

## Aperçu local

```bash
python3 -m http.server 8400 --bind 127.0.0.1
# http://127.0.0.1:8400/
```

## Modifier les textes

Tout le contenu est dans `DICT` (objet `fr` / `en`) au début de `app.js`.
Chaque clé correspond à un attribut `data-i18n` dans `index.html`.
**Ajouter une clé dans les deux langues**, sinon la valeur ne s'affiche pas.

Les valeurs passent par `innerHTML` : les balises (`<br>`, `<em>`) sont donc permises.

## Formulaire

Il n'y a pas de serveur : le formulaire compose un `mailto:` vers
`contact@sttworks.com` et ouvre le logiciel de messagerie du visiteur.
Pour un envoi réel sans client mail, remplacer le handler par un service
de formulaire (Formspree, Netlify Forms) ou une fonction serverless.

## Déploiement (GitHub Pages)

```bash
git init && git add . && git commit -m "Site STT"
git remote add origin git@github.com:<compte>/stt-site.git
git push -u origin main
```

Puis Settings → Pages → branche `main`, dossier `/ (root)`.
Domaine personnalisé : `sttworks.com` (crée un fichier `CNAME` contenant ce domaine).

DNS chez Gandi :

| Type | Nom | Valeur |
|---|---|---|
| A | `@` | 185.199.108.153, .109.153, .110.153, .111.153 |
| CNAME | `www` | `<compte>.github.io` |

Le A actuel `217.70.184.38` (parking Gandi) doit être supprimé.
Activer « Enforce HTTPS » une fois le certificat émis.
