<template>
  <div class="py-4">
    <h1 class="text-center sectionTitle">Consult Appointment <span class="lightblues">Calender</span></h1>
    <p class="calendertext col-9 mx-auto py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, </p>
    <div class="calenderContainer col-9 mx-auto">
        <h6 class="quicksand text-center px-5">You can make a appointment to discuss about your bussiness for free of charge!</h6>
        <div class="cleanderBg col-12 mx-auto">
            <p>Monday / September</p>
            <div class="d-flex justify-content-center datePicker">
              <DatePicker v-model="date"  :expanded="expanded" isDark borderless transparent title-position="left"></DatePicker>
            </div>
           
        </div>
    </div>
  </div>
</template>

<script>
import { DatePicker } from 'v-calendar';
import { useScreens } from 'vue-screen-utils';
import 'v-calendar/style.css';
import { ref } from 'vue';
export default {
  components: {
    DatePicker,
  },
  setup(){
    let date = ref("");

    const { mapCurrent } = useScreens({
      xs: '0px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    });
    // const columns = mapCurrent({ lg: 2 }, 1);
    const expanded = mapCurrent({ lg: false }, true);

    return{date,expanded}
    
  }
}
</script>

<style>


.vc-header .vc-title{
  color: white;
}
</style>