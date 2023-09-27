<template>
    <div class="mx-auto ms-5 me-5">
      <AboutusSection></AboutusSection>
      <OurService></OurService>
      <BuiltSection></BuiltSection>
      <SatisfiedClients></SatisfiedClients>
      <ContactUs></ContactUs>
      <FooterSection></FooterSection>
    </div>
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
    AboutusSection,FooterSection,BuiltSection
  }
}
</script>

<style>

</style>