<template>
  <Whatis></Whatis>
  <OurMission></OurMission>
  <ContactUs></ContactUs>
  <FooterSection></FooterSection>
  
</template>

<script>
import Whatis from "../components/WhatisSection.vue"
import OurMission from "../components/OurmissionSection.vue"
import FooterSection from '@/components/FooterSection.vue';
import ContactUs from '@/components/ContactUs.vue';
export default {
  components:{Whatis,OurMission,FooterSection,ContactUs},
}
</script>

<style>

</style>
