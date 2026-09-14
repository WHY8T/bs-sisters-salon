THE BS SISTERS — SITE WEB
==========================

Comment le lancer (terminal, localhost:3000)
----------------------------------------------
1. Décompressez le dossier et ouvrez-le dans VS Code.
2. Ouvrez un terminal (Terminal > Nouveau terminal, ou Ctrl+`).
3. Tapez : npx --yes serve -l 3000 .
4. Ouvrez http://localhost:3000 dans votre navigateur.
5. Après avoir modifié un fichier et sauvegardé, rafraîchissez la page
   (Ctrl+R / Cmd+R) — ce serveur ne recharge pas tout seul.
6. Pour arrêter : retournez dans le terminal, Ctrl+C.

À propos des photos
---------------------
Le site utilise déjà de vraies photos (ongles, manucure, intérieur de salon),
libres de droits, venant de Pexels — pas besoin de les héberger vous-même,
elles se chargent directement depuis internet.

CE SONT DES PHOTOS D'ILLUSTRATION, PAS VOS VRAIES RÉALISATIONS.
Dès que possible, remplacez-les par vos propres photos (celles de votre
Instagram @the_sisterssalon, ou de nouvelles photos prises au salon).

Comment remplacer une photo par la vôtre :
1. Mettez votre photo dans le dossier images/ (ex: images/mon-nail-art.jpg).
2. Dans index.html, repérez la balise <img> à remplacer, par exemple :

   <img src="https://images.pexels.com/photos/5874876/pexels-photo-5874876.jpeg?..." alt="Nail art détaillé sur fond vert">

3. Remplacez juste le src par le chemin local :

   <img src="images/mon-nail-art.jpg" alt="Nail art détaillé sur fond vert">

Il y a des photos à remplacer dans :
- La section héro (tout en haut, plein écran)
- Les deux blocs "Ongles" (id="ongles")
- Le bloc "Coiffure" (id="coiffure")
- La galerie (id="galerie") — 6 photos

Personnalisation avant mise en ligne
----------------------------------------
- Numéro WhatsApp : remplacez "213000000000" partout dans index.html par
  votre vrai numéro au format international (sans le "+").
- Horaires réels : sections FAQ et Adresse.
- Vrais avis clients : section id="avis" (avec l'accord des clientes).
- Tarifs et durées : sections "Ongles" et "Coiffure".

Mise en ligne
-------------
Site 100% statique — publiable gratuitement sur GitHub Pages, Netlify
(glisser-déposer le dossier sur netlify.com/drop), ou Vercel.
