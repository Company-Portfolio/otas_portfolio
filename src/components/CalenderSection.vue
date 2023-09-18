<template>
  <div class="py-4">
    <h1 class="text-center sectionTitle">Consult Appointment <span class="lightblues">Calender</span></h1>
    <p class="calendertext col-9 mx-auto py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, </p>
    <div class="calenderContainer col-9 mx-auto">
        <h6 class="quicksand text-center px-5">You can make a appointment to discuss about your bussiness for free of charge!</h6>
        <!-- start Calender -->
        <div class="cleanderBg col-12 mx-auto">
            <p class="pt-3">Monday / September</p>
            <div class="d-flex justify-content-center datePicker">
              <DatePicker v-model="date"  :expanded="expanded" isDark borderless transparent></DatePicker>
            </div>
           
        </div>

        <!-- start Form -->
        <div class="formContainer p-4">
            <p class="formheader">Make a <span>Appointment</span></p>
            <form action="" class="forms">
              <input type="text" class="form-control texts" placeholder="Company Name">
              <input type="email" class="form-control texts" placeholder="Company Email">
              <div class="radioContainer">
                <h5 class="radioheader">Avaliable Time</h5>
                <div class="ms-3 mt-3">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                      <label class="form-check-label" for="exampleRadios1">
                        9:00 AM - 10:00 AM
                      </label>
                  </div>
                  <div class="form-check ">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                      <label class="form-check-label" for="exampleRadios2">
                        11:00 AM - 12:00 PM
                      </label>
                  </div>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option1">
                      <label class="form-check-label" for="exampleRadios3">
                        2:00 PM - 3:00 PM
                      </label>
                  </div>
                </div>
              </div>
              <div class="form-group textareas mt-4">
                <label for="exampleFormControlTextarea1">Project Decription</label>
                <textarea class="form-control mt-2" id="exampleFormControlTextarea1" rows="5" placeholder="Please let us know what is your bussiness and what  problem you wanna solve in your bussiness...."></textarea>
              </div>

              <div class= "d-flex justify-content-center mt-3">
                <button class="buttons" type="submit">Make Appointment</button>
              </div>
            </form>
        </div>


        <p class="quicksand mt-3">
          A appointment meeting link will be send to your email. If you can’t find the invitation link, we suggest you to look into the spam...
        </p>

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