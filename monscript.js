 // Code JavaScript pour gérer l'affichage des sections
 document.addEventListener('DOMContentLoaded', function() {
     var accueilSection = document.getElementById('accueil');
     var aProposSection = document.getElementById('apropos');
     var contactSection = document.getElementById('contact');
     var inscriptionSection = document.getElementById('inscription');

     // Cacher toutes les sections sauf la section d'accueil au chargement initial
     aProposSection.style.display = 'none';
     contactSection.style.display = 'none';
     inscriptionSection.style.display = 'none';

     // Gérer les clics sur les liens de la barre de navigation
     var liensNav = document.querySelectorAll('nav a');
     liensNav.forEach(function(lien) {
         lien.addEventListener('click', function(e) {
             e.preventDefault(); // Empêcher le comportement par défaut du lien

             // Masquer toutes les sections
             accueilSection.style.display = 'none';
             aProposSection.style.display = 'none';
             contactSection.style.display = 'none';
             inscriptionSection.style.display = 'none';

             // Afficher la section correspondant au lien cliqué
             var cible = this.getAttribute('href');
             document.querySelector(cible).style.display = 'block';
         });
     });
 });