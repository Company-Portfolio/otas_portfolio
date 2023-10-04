<template>
   <div class="mx-auto wholeContainer">
    <ServiceBanner />
    <OurService />
    <ContactUs />
   </div>
   <FooterSection />

</template>

<script>
import ServiceBanner from '../components/ServiceBanner.vue';
import OurService from '@/components/OurService.vue';
import ContactUs from '@/components/ContactUs.vue';
import FooterSection from '@/components/FooterSection.vue'
export default{
        components: {
            ServiceBanner,
            OurService,
            ContactUs,
            FooterSection
        }
    }
</script>

<style>

</style>