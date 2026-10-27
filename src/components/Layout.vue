<template>
  <div class="min-h-screen flex flex-col bg-[#e84920] font-sans text-[#ffffff]">
    <!-- Header / Navbar -->
    <header class="w-full pt-4 px-4 sm:px-8 max-w-[1400px] mx-auto">
      <div
        class="bg-white rounded-full px-6 py-3 flex items-center justify-between shadow-md text-gray-800"
      >
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center">
          <img
            :src="logoCodinorm"
            alt="CODINORM - Côte d'Ivoire"
            class="h-10 w-auto object-contain"
          />
        </RouterLink>

        <!-- Navigation Desktop -->
        <nav class="hidden lg:flex items-center gap-6 font-medium text-sm">
          <RouterLink
            to="/"
            class="hover:text-[#e84920] transition-colors duration-200"
          >
            Accueil
          </RouterLink>

          <!-- Dropdown Normalisation -->
          <div class="relative group cursor-pointer flex items-center gap-1">
            <span class="hover:text-[#e84920] transition-colors duration-200"
              >Normalisation</span
            >
            <ChevronDown class="w-4 h-4 text-gray-600" />
            <!-- Menu déroulant (optionnel) -->
            <div
              class="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 text-gray-700 z-50"
            >
              <RouterLink
                to="/normalisation/normes"
                class="block px-4 py-2 hover:bg-gray-100 hover:text-[#e84920]"
                >Normes</RouterLink
              >
              <RouterLink
                to="/normalisation/comites"
                class="block px-4 py-2 hover:bg-gray-100 hover:text-[#e84920]"
                >Comités techniques</RouterLink
              >
            </div>
          </div>

          <!-- Dropdown Certification -->
          <div class="relative group cursor-pointer flex items-center gap-1">
            <span class="hover:text-[#e84920] transition-colors duration-200"
              >Certification</span
            >
            <ChevronDown class="w-4 h-4 text-gray-600" />
          </div>

          <!-- Dropdown Formation -->
          <div class="relative group cursor-pointer flex items-center gap-1">
            <span class="hover:text-[#e84920] transition-colors duration-200"
              >Formation</span
            >
            <ChevronDown class="w-4 h-4 text-gray-600" />
          </div>

          <!-- Dropdown Membre -->
          <div class="relative group cursor-pointer flex items-center gap-1">
            <span class="hover:text-[#e84920] transition-colors duration-200"
              >Membre</span
            >
            <ChevronDown class="w-4 h-4 text-gray-600" />
          </div>

          <!-- Lien Cadre réglementaire -->
          <RouterLink
            to="/cadre-reglementaire"
            class="hover:text-[#e84920] transition-colors duration-200"
          >
            Cadre réglementaire
          </RouterLink>
        </nav>

        <!-- Actions Droite (Librairie + Langue) -->
        <div class="flex items-center gap-4">
          <RouterLink
            to="/librairie"
            class="bg-[#e84920] hover:bg-[#d03d17] text-white px-5 py-2.5 rounded-full flex items-center gap-2 font-medium text-sm transition-colors shadow"
          >
            <BookOpen class="w-4 h-4" />
            <span>Librairie</span>
          </RouterLink>

          <!-- Sélecteur de langue -->
          <div class="flex items-center gap-1 cursor-pointer font-medium text-sm">
            <span>FR</span>
            <ChevronDown class="w-4 h-4 text-gray-600" />
          </div>
        </div>
      </div>
    </header>

    <!-- Contenu Principal -->
    <main class="flex-1">
      <router-view></router-view>  
    </main>

    <!-- Footer -->
    <footer class="w-full relative overflow-hidden pt-12 pb-6 px-6 sm:px-12">
      <!-- Image d'arrière-plan avec opacité -->
      <div
        class="absolute right-0 bottom-0 pointer-events-none opacity-15 select-none w-1/2 max-w-[650px]"
      >
        <img
          :src="logoArrierePlan"
          alt="CODINORM Watermark"
          class="w-full h-auto object-contain"
        />
      </div>

      <div
        class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-white text-sm"
      >
        <!-- Colonne 1: Adresses & Contacts -->
        <div class="space-y-4">
          <p class="leading-relaxed">
            Abidjan II plateaux - Angle boulevard Latrille - SIDECI - 35 RUE
            Fatouma CISSE - villa n°195
          </p>

          <div class="pt-2">
            <p class="font-semibold">Standard</p>
            <a
              href="tel:+2252722223470"
              class="underline hover:text-gray-200 block"
            >
              (225) 27 22 22 34 70
            </a>
            <a
              href="tel:+2252722223471"
              class="underline hover:text-gray-200 block"
            >
              (225) 27 22 22 34 71
            </a>
          </div>

          <div class="pt-1">
            <p class="font-semibold">Direction de Certification</p>
            <a
              href="tel:+2252722223472"
              class="underline hover:text-gray-200 block"
            >
              (225) 27 22 22 34 72
            </a>
            <a
              href="tel:+225272222590010"
              class="underline hover:text-gray-200 block"
            >
              (225) 27 22 59 00 10
            </a>
          </div>
        </div>

        <!-- Colonne 2: Liens Institutionnels -->
        <div class="space-y-3">
          <RouterLink to="#" class="block hover:underline">
            Ministère du Commerce de l'Industrie et de l'Artisanat
          </RouterLink>
          <RouterLink to="#" class="block hover:underline">
            Chambre de Commerce et d'Industrie de Côte d'Ivoire
          </RouterLink>
          <RouterLink to="#" class="block hover:underline">
            Douanes
          </RouterLink>
          <RouterLink to="#" class="block hover:underline">
            CEPICI
          </RouterLink>
          <RouterLink to="#" class="block hover:underline">
            Comité National de Lutte contre la contrefaçon
          </RouterLink>
        </div>

        <!-- Colonne 3: Newsletter & Réseaux sociaux -->
        <div class="space-y-4">
          <h4 class="font-medium text-base">
            Abonnez-vous pour recevoir l'actualité chaque semaine
          </h4>

          <!-- Input Newsletter -->
          <form @submit.prevent="handleSubscribe" class="relative max-w-sm">
            <div
              class="bg-white rounded-2xl p-1.5 flex items-center justify-between shadow-sm"
            >
              <input
                v-model="email"
                type="email"
                placeholder="Votre mail"
                class="w-full bg-transparent px-4 py-2 text-gray-800 focus:outline-none text-sm placeholder-gray-400"
                required
              />
              <button
                type="submit"
                class="bg-[#e84920] hover:bg-[#d03d17] text-white p-2.5 rounded-xl flex items-center justify-center transition-colors"
              >
                <ArrowUpRight class="w-5 h-5" />
              </button>
            </div>
          </form>

          <p class="text-xs text-gray-200">
            By subscribing, you accept the Privacy Policy
          </p>

          <!-- Réseaux sociaux -->
          <div class="flex items-center gap-3 pt-2">
            <a
              href="#"
              class="w-9 h-9 rounded-full bg-white text-[#e84920] flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Facebook class="w-5 h-5 fill-current" />
            </a>
            <a
              href="#"
              class="w-9 h-9 rounded-full bg-white text-[#e84920] flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Twitter class="w-5 h-5 fill-current" />
            </a>
            <a
              href="#"
              class="w-9 h-9 rounded-full bg-white text-[#e84920] flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Linkedin class="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  ChevronDown,
  BookOpen,
  ArrowUpRight,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-vue-next'

// Import direct des images depuis le dossier assets
import logoCodinorm from '@/assets/images/logocodirnom.png'
import logoArrierePlan from '@/assets/images/logoarriereplan.png'

const email = ref('')

const handleSubscribe = () => {
  if (email.value) {
    console.log('Inscription newsletter:', email.value)
    email.value = ''
  }
}
</script>

<style scoped>
/* Styles additionnels si nécessaire */
</style>