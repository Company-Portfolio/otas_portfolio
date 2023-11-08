<template>
    <div class="mx-auto wholeContainer">
      <AboutusSection class="ourServices" id="selection1"></AboutusSection>
      <OurService class="ourServices" id="selection2"></OurService>
      <BuiltSection class="ourServices" id="selection3"></BuiltSection>
      <SatisfiedClients class="ourServices" id="selection4"></SatisfiedClients>
      <ContactUs class="ourServices" id="selection5"></ContactUs>
    </div>
    <FooterSection></FooterSection>
</template>

<script>


// import ContactUs from '../components/ContactUs'
import SatisfiedClients from '../components/SatisfiedClients'
import OurService from '../components/OurService'
import AboutusSection from '@/components/AboutusSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import BuiltSection from '@/components/HowWeBuildSection.vue';
import ContactUs from '@/components/ContactUs.vue';
export default {
  components: {
    ContactUs,
    SatisfiedClients,
    OurService,
    AboutusSection,
    FooterSection,
    BuiltSection
  }
}
</script>

<style>
.wholeContainer{
  width: 90%;
}
  .ourServices{
    /* height: 100vh; */
  }
</style>


<!-- code to test single page with 100vh flow test, please do not delete this  -->

<!-- <template>
  <div>
    <div v-for="(section, index) in sections" :key="index" :id="section.id" class="section">
      <component :is="section.component"></component>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

import AboutusSection from '../components/AboutusSection.vue'; // Import your component files
import OurService from '../components/OurService.vue';
import HowWeBuildSection from '../components/HowWeBuildSection.vue';
import SatisfiedClients from '../components/SatisfiedClients.vue';
import ContactUs from '../components/ContactUs.vue';
import FooterSection from '../components/FooterSection.vue';

export default {
  components: {
    AboutusSection,
    OurService,
    HowWeBuildSection,
    SatisfiedClients,
    ContactUs,
    FooterSection,
  },
  setup() {
    const sections = ref([
      { id: 'selection1', component: 'AboutusSection' },
      { id: 'selection2', component: 'OurService' },
      { id: 'selection3', component: 'HowWeBuildSection' },
      { id: 'selection4', component: 'SatisfiedClients' },
      { id: 'selection5', component: 'ContactUs' },
      // Add more sections as needed
    ]);

    const currentSection = ref(0);

    const sectionRefs = ref([]);

    function scrollToSection(index) {
      if (index >= 0 && index < sectionRefs.value.length) {
        sectionRefs.value[index].scrollIntoView({ behavior: 'smooth' });
        currentSection.value = index;
      }
    }

    onMounted(() => {
      const handleScroll = (event) => {
        if (event.deltaY > 0) {
          // Scrolling down
          scrollToSection(currentSection.value + 1);
        } else {
          // Scrolling up
          scrollToSection(currentSection.value - 1);
        }
      };

      // Listen for wheel scroll events
      window.addEventListener('wheel', handleScroll);

      // Cleanup the event listener when the component is unmounted
      watch(() => currentSection.value, () => {
        window.removeEventListener('wheel', handleScroll);
      });

      scrollToSection(currentSection.value);
    });

    return {
      sections,
      currentSection,
      sectionRefs
    };
  },
};
</script>

<style>
.section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
</style> -->
