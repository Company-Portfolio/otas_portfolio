<template>
    <div class="mx-auto">
      <AboutusSection></AboutusSection>
      <OurService></OurService>
      <SatisfiedClients></SatisfiedClients>
      <BuiltSection></BuiltSection>
      <FooterSection></FooterSection>
    </div>
</template>

<script>


import SatisfiedClients from '../components/SatisfiedClients'
import OurService from '../components/OurService'
import AboutusSection from '@/components/AboutusSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import BuiltSection from '@/components/HowWeBuildSection.vue'
export default {
  components: {
    SatisfiedClients,
    OurService,
    AboutusSection,FooterSection,BuiltSection
  }
}
</script>

<style>

</style>