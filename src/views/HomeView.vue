<template>
  <div class="mx-auto">
    <AboutusSection></AboutusSection>
    <BuiltSection></BuiltSection>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import AboutusSection from '@/components/AboutusSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import BuiltSection from '@/components/HowWeBuildSection.vue'
export default {
  components:{AboutusSection,FooterSection,BuiltSection}
}
</script>

<style>

</style>