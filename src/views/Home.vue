<template>
  <div class="flex flex-col w-full bg-white text-gray-800 font-sans overflow-x-hidden">
    
    <!-- ========================================== -->
    <!-- SECTION 1 : CARROUSEL HÉRO (Fond Orange) -->
    <!-- ========================================== -->
    <section class="bg-[#e84920] text-[#ffffff] relative overflow-hidden min-h-[400px] flex items-center">
     <!-- APRÈS (image logo) -->
<div class="absolute right-0 bottom-0 pointer-events-none opacity-10 w-1/2 max-w-[600px]">
  <img :src="logoBg" alt="Watermark" class="w-full h-auto object-contain" />
</div>

      <div class="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-10 md:py-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Texte gauche -->
        <div class="space-y-4 text-center lg:text-left">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Normalisation</h1>
          <h2 class="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Normes nationales et internationales</h2>
          <p class="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 max-w-lg mx-auto lg:mx-0">
            Coordination de l'élaboration des normes nationales et participation aux travaux régionaux et internationaux.
          </p>
          
          <!-- Contrôles du carrousel -->
          <div class="flex items-center justify-center lg:justify-start gap-3 pt-4">
            <button class="w-8 h-8 rounded-full bg-[#268d45] hover:bg-[#1e7037] flex items-center justify-center transition-colors">
              <ArrowLeft class="w-4 h-4 text-white" />
            </button>
            <div class="flex gap-1.5">
              <span class="w-2 h-2 rounded-full bg-white"></span>
              <span class="w-2 h-2 rounded-full bg-white/50"></span>
              <span class="w-2 h-2 rounded-full bg-white/50"></span>
              <span class="w-2 h-2 rounded-full bg-white/50"></span>
              <span class="w-2 h-2 rounded-full bg-white/50"></span>
              <span class="w-2 h-2 rounded-full bg-white/50"></span>
            </div>
            <button class="w-8 h-8 rounded-full bg-[#268d45] hover:bg-[#1e7037] flex items-center justify-center transition-colors">
              <ArrowRight class="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <!-- Image droite -->
        <div class="flex justify-center lg:justify-end">
          <div class="w-full max-w-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img :src="photoHeader" alt="Illustration Normalisation" class="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 2 : DG & INTRODUCTION (Fond Vert Clé) -->
    <!-- ========================================== -->
    <section class="bg-[#e9f4eb] py-12 md:py-16 px-4 sm:px-6 lg:px-16">
      <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <!-- Texte gauche -->
        <div class="space-y-4 md:space-y-6 text-center lg:text-left">
          <span class="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Association Ivoirienne de Normalisation
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            CODINORM, Garant de la <span class="text-[#e84920]">Qualité en Côte d'Ivoire</span>
          </h2>
          <p class="text-sm lg:text-base leading-relaxed text-gray-700">
            Depuis plus de trois décennies, CODINORM développe une politique qualité dans tous ses secteurs d'activités. Nous sommes l'organisme national de normalisation, certification et formation, reconnu pour notre expertise et notre engagement envers l'excellence.
          </p>
          <div class="flex justify-center lg:justify-start">
            <RouterLink to="/a-propos" class="inline-flex items-center gap-2 bg-[#e84920] hover:bg-[#d03d17] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-md">
              <span>Savoir plus</span>
              <ArrowRight class="w-4 h-4" />
            </RouterLink>
          </div>
        </div>

        <!-- Photo du DG (IMAGE DIFFÉRENTE DU HERO) -->
        <div class="space-y-4">
          <div class="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <img :src="photoDG" alt="Direction Générale CODINORM" class="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover object-top" />
          </div>
          <blockquote class="text-xs sm:text-sm italic text-gray-700 border-l-4 border-[#e84920] pl-4">
            "CODINORM est l'acteur incontournable de la normalisation en Côte d'Ivoire, garantissant la qualité et la conformité pour un développement économique durable."
          </blockquote>
          <p class="text-xs font-bold text-gray-900 pl-4">- Direction Générale CODINORM</p>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 3 : RECONNAISSANCE INTERNATIONALE -->
    <!-- ========================================== -->
    <section class="py-12 md:py-16 px-4 sm:px-6 lg:px-16 max-w-[1400px] mx-auto w-full bg-[#f8f7fc]">
      <div class="mb-8 md:mb-10">
        <span class="text-xs text-gray-500 uppercase tracking-wide">Association Ivoirienne de Normalisation</span>
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-1">
          La reconnaissance <span class="text-[#e84920]">internationale</span> de notre savoir-faire
        </h2>
      </div>

      <!-- Cartes de certification -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <!-- Carte 1 -->
        <div class="bg-[#e84920] text-white p-5 md:p-6 rounded-3xl flex flex-col justify-between shadow-lg">
          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <h3 class="font-bold text-base md:text-lg">Accréditation ISO/IEC 17065 (ACCREDIA)</h3>
              <span class="bg-white text-[#e84920] text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap self-start">
                ISO/IEC 17065
              </span>
            </div>
            <p class="text-xs leading-relaxed text-white/90">
              Compétence reconnue à l'international pour la certification de produits, services et procédés selon la norme ISO/IEC 17065. Accrédité par ACCREDIA selon la norme ISO/IEC 17065, garantissant la compétence, l'impartialité et la crédibilité de nos activités de certification.
            </p>
          </div>
          <div class="pt-6">
            <RouterLink to="#" class="inline-flex items-center gap-2 bg-[#268d45] hover:bg-[#1e7037] text-white px-4 py-2 rounded-full text-xs font-medium transition-colors">
              <span>Voir le document</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </RouterLink>
          </div>
        </div>

        <!-- Carte 2 -->
        <div class="bg-white border border-gray-100 p-5 md:p-6 rounded-3xl flex flex-col justify-between shadow-sm">
          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <h3 class="font-bold text-base md:text-lg text-gray-900">Certification ISO 9001</h3>
              <span class="bg-[#268d45] text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap self-start">
                ISO 9001
              </span>
            </div>
            <p class="text-xs leading-relaxed text-gray-600">
              Système de management de la qualité certifié ISO 9001:2015 pour nos activités de formation.
            </p>
          </div>
          <div class="pt-6">
            <RouterLink to="#" class="inline-flex items-center gap-2 bg-[#e84920] hover:bg-[#d03d17] text-white px-4 py-2 rounded-full text-xs font-medium transition-colors">
              <span>Voir le document</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </RouterLink>
          </div>
        </div>

        <!-- Carte 3 -->
        <div class="bg-white border border-gray-100 p-5 md:p-6 rounded-3xl flex flex-col justify-between shadow-sm sm:col-span-2 lg:col-span-1">
          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <h3 class="font-bold text-base md:text-lg text-gray-900">Reconnaissance IECEE CB Scheme</h3>
              <span class="bg-gray-200 text-gray-800 text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap self-start">
                CB Scheme
              </span>
            </div>
            <p class="text-xs leading-relaxed text-gray-600">
              Organisme National de Certification reconnu pour le système international CB des équipements électrotechniques.
            </p>
          </div>
          <div class="pt-6">
            <RouterLink to="#" class="inline-flex items-center gap-2 bg-[#e84920] hover:bg-[#d03d17] text-white px-4 py-2 rounded-full text-xs font-medium transition-colors">
              <span>Voir le document</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Boutons de navigation verts -->
      <div class="flex justify-end gap-2 mt-6">
        <button class="w-8 h-8 rounded-full bg-[#268d45] hover:bg-[#1e7037] flex items-center justify-center transition-colors shadow">
          <ArrowLeft class="w-4 h-4 text-white" />
        </button>
        <button class="w-8 h-8 rounded-full bg-[#268d45] hover:bg-[#1e7037] flex items-center justify-center transition-colors shadow">
          <ArrowRight class="w-4 h-4 text-white" />
        </button>
      </div>

      <!-- Programme de certification -->
      <div class="mt-8 space-y-4">
        <h4 class="text-sm md:text-base font-bold text-gray-900">Programme de certification des conducteurs et câbles électriques</h4>
        <div class="flex flex-wrap gap-3">
          <a href="#" class="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-3 md:px-4 py-2 rounded-full text-[11px] md:text-xs font-medium transition-colors border border-gray-200 shadow-sm">
            <FileText class="w-4 h-4 text-[#268d45]" />
            <span class="truncate">Règlement de certification NI...</span>
            <Download class="w-3.5 h-3.5 text-gray-400 ml-1 shrink-0" />
          </a>
          <a href="#" class="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-3 md:px-4 py-2 rounded-full text-[11px] md:text-xs font-medium transition-colors border border-gray-200 shadow-sm">
            <FileText class="w-4 h-4 text-[#268d45]" />
            <span class="truncate">Procédure de traitement des plai...</span>
            <Download class="w-3.5 h-3.5 text-gray-400 ml-1 shrink-0" />
          </a>
        </div>
      </div>

      <!-- Documents de gouvernance -->
      <div class="mt-8 space-y-4">
        <h4 class="text-sm md:text-base font-bold text-gray-900">Documents de gouvernance</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a v-for="(doc, index) in governanceDocs" :key="index" href="#" class="flex items-center justify-between bg-white hover:bg-gray-50 p-3 rounded-2xl border border-gray-200 text-xs font-medium text-gray-800 transition-colors shadow-sm">
            <div class="flex items-center gap-2 truncate">
              <FileText class="w-4 h-4 text-[#268d45] shrink-0" />
              <span class="truncate">{{ doc }}</span>
            </div>
            <Download class="w-3.5 h-3.5 text-gray-400 shrink-0 ml-2" />
          </a>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 4 : NOS SERVICES -->
    <!-- ========================================== -->
    <section class="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-16 border-t border-b border-gray-100">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-10 md:mb-12 space-y-2">
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Nos Services</h2>
          <p class="text-xs sm:text-sm text-gray-600">CODINORM vous accompagne par les normes dans tous vos projets</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <!-- Service Card 1 -->
          <div class="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between">
            <div>
              <div class="rounded-2xl overflow-hidden mb-4 h-40">
                <img :src="service1" alt="Normalisation" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-bold text-base text-gray-900 mb-1">Normalisation</h3>
              <p class="text-xs text-gray-600 leading-relaxed">
                Développement et mise à jour des normes nationales pour tous les secteurs d'activité
              </p>
            </div>
            <div class="pt-4">
              <RouterLink to="#" class="inline-flex items-center gap-2 bg-[#e84920] hover:bg-[#d03d17] text-[#ffffff] px-4 py-2 rounded-full text-xs font-medium transition-colors">
                <span>En savoir plus</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>

          <!-- Service Card 2 (Mise en avant orange) -->
          <div class="bg-[#e84920] text-[#ffffff] rounded-3xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div class="rounded-2xl overflow-hidden mb-4 h-40">
                <img :src="service2" alt="Certification" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-bold text-base mb-1">Certification</h3>
              <p class="text-xs text-gray-100 leading-relaxed">
                Certification de produits, services, procédés, personnes et systèmes selon les normes en vigueur
              </p>
            </div>
            <div class="pt-4">
              <RouterLink to="#" class="inline-flex items-center gap-2 bg-[#d03d17] hover:bg-black text-[#ffffff] px-4 py-2 rounded-full text-xs font-medium transition-colors">
                <span>En savoir plus</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>

          <!-- Service Card 3 -->
          <div class="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between">
            <div>
              <div class="rounded-2xl overflow-hidden mb-4 h-40">
                <img :src="service3" alt="Formation" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-bold text-base text-gray-900 mb-1">Formation</h3>
              <p class="text-xs text-gray-600 leading-relaxed">
                Formation spécialisées sur les normes et la qualité pour renforcer les compétences de vos équipes
              </p>
            </div>
            <div class="pt-4">
              <RouterLink to="#" class="inline-flex items-center gap-2 bg-[#e84920] hover:bg-[#d03d17] text-[#ffffff] px-4 py-2 rounded-full text-xs font-medium transition-colors">
                <span>En savoir plus</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>

          <!-- Service Card 4 -->
          <div class="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between">
            <div>
              <div class="rounded-2xl overflow-hidden mb-4 h-40">
                <img :src="service4" alt="Centre d'information" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-bold text-base text-gray-900 mb-1">Centre d'information</h3>
              <p class="text-xs text-gray-600 leading-relaxed">
                Information, orientation et conseil sur les normes et réglementations en vigueur
              </p>
            </div>
            <div class="pt-4">
              <RouterLink to="#" class="inline-flex items-center gap-2 bg-[#e84920] hover:bg-[#d03d17] text-[#ffffff] px-4 py-2 rounded-full text-xs font-medium transition-colors">
                <span>En savoir plus</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>

          <!-- Service Card 5 -->
          <div class="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between">
            <div>
              <div class="rounded-2xl overflow-hidden mb-4 h-40">
                <img :src="service5" alt="Appui conseil" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-bold text-base text-gray-900 mb-1">Appui conseil</h3>
              <p class="text-xs text-gray-600 leading-relaxed">
                Accompagnement technique et conseil aux entreprises et organisations
              </p>
            </div>
            <div class="pt-4">
              <RouterLink to="#" class="inline-flex items-center gap-2 bg-[#e84920] hover:bg-[#d03d17] text-[#ffffff] px-4 py-2 rounded-full text-xs font-medium transition-colors">
                <span>En savoir plus</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>

          <!-- Service Card 6 -->
          <div class="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between">
            <div>
              <div class="rounded-2xl overflow-hidden mb-4 h-40">
                <img :src="service3" alt="Services aux membres" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-bold text-base text-gray-900 mb-1">Services aux membres</h3>
              <p class="text-xs text-gray-600 leading-relaxed">
                Services dédiés aux membres pour faciliter l'accès à l'information normative
              </p>
            </div>
            <div class="pt-4">
              <RouterLink to="#" class="inline-flex items-center gap-2 bg-[#e84920] hover:bg-[#d03d17] text-[#ffffff] px-4 py-2 rounded-full text-xs font-medium transition-colors">
                <span>En savoir plus</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 5 : NOS PARTENAIRES TECHNIQUES -->
    <!-- ========================================== -->
    <section class="py-10 md:py-12 px-4 sm:px-6 lg:px-16 max-w-[1400px] mx-auto w-full text-center">
      <h2 class="text-lg sm:text-xl font-bold text-gray-900 mb-1">Nos Partenaires Techniques</h2>
      <p class="text-xs text-gray-500 mb-6 md:mb-8">Ils nous font confiance et nous accompagnent dans notre mission</p>

      <div class="flex items-center justify-center overflow-x-auto py-4">
        <img :src="partenaireImg" alt="Partenaires Techniques CODINORM" class="max-h-10 md:max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-80" />
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 6 : ACCÈS RAPIDE -->
    <!-- ========================================== -->
    <section class="bg-[#e84920] py-12 md:py-16 px-4 sm:px-6 lg:px-16 text-[#ffffff]">
      <div class="max-w-[1400px] mx-auto">
        <div class="mb-8 md:mb-10">
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold">Accès Rapide</h2>
          <p class="text-xs text-gray-100 mt-1">Trouvez rapidement ce que vous cherchez</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <!-- Carte Rapide 1 -->
          <div class="bg-white text-gray-900 rounded-3xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div class="rounded-2xl overflow-hidden mb-4 h-36">
                <img :src="service1" alt="Demande de certification" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-bold text-base mb-1">Demande de certification</h3>
              <p class="text-xs text-gray-600">Démarrer votre processus de certification</p>
            </div>
            <div class="pt-6">
              <RouterLink to="#" class="inline-flex items-center gap-2 bg-[#e84920] hover:bg-[#d03d17] text-[#ffffff] px-4 py-2 rounded-full text-xs font-medium transition-colors">
                <span>Consulter</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>

          <!-- Carte Rapide 2 -->
          <div class="bg-white text-gray-900 rounded-3xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div class="rounded-2xl overflow-hidden mb-4 h-36">
                <img :src="service2" alt="Catalogue de formation" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-bold text-base mb-1">Catalogue de formation</h3>
              <p class="text-xs text-gray-600">Découvrez nos formations spécialisées</p>
            </div>
            <div class="pt-6">
              <RouterLink to="#" class="inline-flex items-center gap-2 bg-[#e84920] hover:bg-[#d03d17] text-[#ffffff] px-4 py-2 rounded-full text-xs font-medium transition-colors">
                <span>Consulter</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>

          <!-- Carte Rapide 3 -->
          <div class="bg-white text-gray-900 rounded-3xl p-5 shadow-lg flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div>
              <div class="rounded-2xl overflow-hidden mb-4 h-36">
                <img :src="photoHeader" alt="Librairie de norme en ligne" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-bold text-base mb-1">Librairies de norme en ligne</h3>
              <p class="text-xs text-gray-600">Achetez les normes qui vous correspondent</p>
            </div>
            <div class="pt-6">
              <RouterLink to="#" class="inline-flex items-center gap-2 bg-[#e84920] hover:bg-[#d03d17] text-[#ffffff] px-4 py-2 rounded-full text-xs font-medium transition-colors">
                <span>Consulter</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 7 : DERNIÈRES ACTUALITÉS -->
    <!-- ========================================== -->
    <section class="py-12 md:py-16 px-4 sm:px-6 lg:px-16 max-w-[1400px] mx-auto w-full">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-10">
        <div>
          <h2 class="text-xl sm:text-2xl font-bold text-gray-900">Dernières Actualités</h2>
          <p class="text-xs text-gray-500 mt-1">Restez informé des dernières nouvelles de CODINORM</p>
        </div>
        <RouterLink to="#" class="inline-flex items-center justify-center bg-[#e84920] hover:bg-[#d03d17] text-[#ffffff] px-4 md:px-5 py-2.5 rounded-full text-xs font-medium transition-colors shadow self-start sm:self-auto">
          <span>Voir toutes nos actualités</span>
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        <!-- Grande actu principale -->
        <div class="lg:col-span-2 bg-gray-50 border border-gray-100 rounded-3xl p-4 md:p-5 shadow-sm space-y-4">
          <div class="relative rounded-2xl overflow-hidden h-[220px] sm:h-[280px] lg:h-[360px]">
            <img :src="actualite1" alt="Actualité principale" class="w-full h-full object-cover" />
            <span class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-3 py-1 rounded-full">
              Événement
            </span>
          </div>
          <h3 class="text-sm sm:text-base lg:text-lg font-bold text-[#e84920] leading-snug">
            Améliorer la performance des acteurs pour la satisfaction des usagers : le rôle clé de la normalisation.
          </h3>
        </div>

        <!-- Liste des actus secondaires -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 md:gap-4 bg-gray-50 border border-gray-100 p-3 rounded-2xl shadow-sm">
            <div class="w-20 md:w-24 h-16 md:h-20 rounded-xl overflow-hidden shrink-0 relative">
              <img :src="actualite2" alt="Actu 2" class="w-full h-full object-cover" />
              <span class="absolute top-1 left-1 bg-white/80 text-[8px] font-bold px-1.5 py-0.5 rounded text-gray-800">Entretien</span>
            </div>
            <div>
              <p class="text-[10px] text-gray-400">Le jeudi 11 septembre</p>
              <h4 class="text-xs font-bold text-gray-900 line-clamp-2">CODINORM eu l'honneur d'accueillir une délégation de fournisseurs...</h4>
            </div>
          </div>

          <div class="flex items-center gap-3 md:gap-4 bg-gray-50 border border-gray-100 p-3 rounded-2xl shadow-sm">
            <div class="w-20 md:w-24 h-16 md:h-20 rounded-xl overflow-hidden shrink-0 relative">
              <img :src="actualite3" alt="Actu 3" class="w-full h-full object-cover" />
              <span class="absolute top-1 left-1 bg-white/80 text-[8px] font-bold px-1.5 py-0.5 rounded text-gray-800">Décision</span>
            </div>
            <div>
              <p class="text-[10px] text-gray-400">Le jeudi 11 septembre</p>
              <h4 class="text-xs font-bold text-gray-900 line-clamp-2">Réglementation Des Produits d'énergies Renouvelable</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 8 : DEVENEZ MEMBRE & CONTACTEZ-NOUS -->
    <!-- ========================================== -->
    <section class="bg-[#e9f4eb] py-12 md:py-16 px-4 sm:px-6 lg:px-16 border-t border-b border-green-100">
      <div class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-green-100 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="w-10 h-10 rounded-xl bg-orange-100 text-[#e84920] flex items-center justify-center">
              <User class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-lg md:text-xl font-bold text-gray-900">Devenez membre</h3>
              <p class="text-xs text-gray-500">Rejoignez notre communauté</p>
            </div>
            <ul class="space-y-2.5 text-xs text-gray-700">
              <li class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-[#e84920] text-[#ffffff] flex items-center justify-center text-[10px] font-bold">✓</span> Accès privilégié aux normes</li>
              <li class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-[#e84920] text-[#ffffff] flex items-center justify-center text-[10px] font-bold">✓</span> Tarifs préférentiels</li>
              <li class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-[#e84920] text-[#ffffff] flex items-center justify-center text-[10px] font-bold">✓</span> Formations exclusives</li>
              <li class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-[#e84920] text-[#ffffff] flex items-center justify-center text-[10px] font-bold">✓</span> Réseau professionnel</li>
            </ul>
          </div>
          <RouterLink to="#" class="inline-flex items-center justify-center bg-[#e84920] hover:bg-[#d03d17] text-[#ffffff] w-full py-2.5 rounded-full text-xs font-medium transition-colors shadow">
            <span>Devenir membre</span>
          </RouterLink>
        </div>

        <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-green-100 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
              <PhoneCall class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-lg md:text-xl font-bold text-gray-900">Contactez-nous</h3>
              <p class="text-xs text-gray-500">Parlons de vos besoins qualité</p>
            </div>
            <ul class="space-y-2.5 text-xs text-gray-700">
              <li class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-[#268d45] text-[#ffffff] flex items-center justify-center text-[10px] font-bold">✓</span> Accès privilégié aux normes</li>
              <li class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-[#268d45] text-[#ffffff] flex items-center justify-center text-[10px] font-bold">✓</span> Tarifs préférentiels</li>
              <li class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-[#268d45] text-[#ffffff] flex items-center justify-center text-[10px] font-bold">✓</span> Formations exclusives</li>
              <li class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-[#268d45] text-[#ffffff] flex items-center justify-center text-[10px] font-bold">✓</span> Réseau professionnel</li>
            </ul>
          </div>
          <RouterLink to="#" class="inline-flex items-center justify-center bg-[#268d45] hover:bg-[#1e7037] text-[#ffffff] w-full py-2.5 rounded-full text-xs font-medium transition-colors shadow">
            <span>Contactez-nous</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 9 : BANDEAU FINAL (Besoin d'aide) -->
    <!-- ========================================== -->
    <section class="bg-[#268d45] text-[#ffffff] py-10 md:py-12 px-4 sm:px-6 lg:px-16 text-center">
      <div class="max-w-[1200px] mx-auto space-y-6 md:space-y-8">
        <div class="space-y-2">
          <h2 class="text-lg sm:text-xl lg:text-2xl font-bold">Besoin d'informations supplémentaires ?</h2>
          <p class="text-xs text-gray-100">Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos démarches.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4 text-xs">
          <div class="space-y-2 flex flex-col items-center">
            <div class="w-8 h-8 rounded-full bg-[#e84920] flex items-center justify-center text-[#ffffff]">
              <Phone class="w-4 h-4" />
            </div>
            <p class="font-bold">Appelez-nous</p>
            <p class="text-gray-200">Du lundi au vendredi, 07h30 – 16h30</p>
            <a href="tel:+2252722223470" class="underline font-semibold">+225 27 22 22 34 70</a>
          </div>

          <div class="space-y-2 flex flex-col items-center">
            <div class="w-8 h-8 rounded-full bg-[#e84920] flex items-center justify-center text-[#ffffff]">
              <Clock class="w-4 h-4" />
            </div>
            <p class="font-bold">Réponse rapide</p>
            <p class="text-gray-200">Réponse sous 24h garantie</p>
            <a href="tel:+2252722223470" class="underline font-semibold">+225 27 22 22 34 70</a>
          </div>

          <div class="space-y-2 flex flex-col items-center sm:col-span-2 md:col-span-1">
            <div class="w-8 h-8 rounded-full bg-[#e84920] flex items-center justify-center text-[#ffffff]">
              <MapPin class="w-4 h-4" />
            </div>
            <p class="font-bold">Notre Adresse</p>
            <p class="text-gray-200">Abidjan II plateaux - Angle boulevard Latrille - SIDECI - 35 Rue Fatouma CISSE</p>
            <a href="tel:+2252722223470" class="underline font-semibold">+225 27 22 22 34 70</a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { 
  ArrowRight, 
  ArrowLeft,
  FileText, 
  Download, 
  User, 
  PhoneCall, 
  Phone, 
  Clock, 
  MapPin 
} from 'lucide-vue-next'

// ==========================================
// IMPORT DES PHOTOS DANS LE SCRIPT (VOS IMPORTS EXACTS)
// ==========================================
import logoBg from '@/assets/images/logoarriereplan.png';
import photoHeader from '@/assets/images/photoheader.png';  // Carrousel Hero
import photoDG from '@/assets/images/dg.png';              // Photo du DG
import service1 from '@/assets/images/service1.png';
import service2 from '@/assets/images/service2.png';
import service3 from '@/assets/images/service3.png';
import service4 from '@/assets/images/service4.png';
import service5 from '@/assets/images/service5.png';
import partenaireImg from '@/assets/images/partenaire.png';
import actualite1 from '@/assets/images/actualite1.png';
import actualite2 from '@/assets/images/actualite2.png';
import actualite3 from '@/assets/images/actualite3.png';

const governanceDocs = [
  "Plan stratégique 2026-2030",
  "Stratégie normale de normal...",
  "Règlement de certification NF...",
  "Règlement de certification NF...",
  "Règlement de certification NF...",
  "Organigramme"
]
</script>

<style scoped>
/* Personnalisations spécifiques si nécessaire */
</style>