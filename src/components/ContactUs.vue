<template>
   <div class="container-fluid col-12 mb-5">
    <!-- Section Title      -->
        <div class="ps-5">
            <h2 class="sectionTitle mt-3">Create <span class="lightblues">Solutions</span><span class="ms-2 sectionTitle">With Us</span></h2>
        </div>
    
    <!-- Section Body  -->
        <div class="col-12 row">
            <!-- Text  -->
            <div class="col-lg-6 col-sm-12 text-align-justify ps-5 pe-5 mt-3">
                <p class="lh-lg normalText">If you have specific details about your ideas, I would recommend you to contact us via the contact us form below. We will follow up within a short time ..</p>
                
                <div>
                    <div class="mb-4">
                        <h6 class="callToActionBtn mb-2">Call Us</h6>
                        <button class="btn btn-rounded btn-primary phoneBtn">09951207795</button>
                    </div>                 
                    <div>
                        <h6 class="callToActionBtn mb-2">Follow Us For More</h6>
                        <div>
                            <img src="../assets/photo/linkedin.png" class="footerlogo" alt="facebook" >
                            <img src="../assets/photo/github.png" alt="linkedin" class="footerlogo mx-3">
                            <img src="../assets/photo/facebook.png" alt="github" class="footerlogo">
                        </div>
                    </div>   
                </div>
            
            </div>
            <!-- Form  -->
            <div class="col-lg-6 col-sm-12 mt-3">
                <form class="col-8 text-center">
                    <div class="form-floating">
                        <input class="form-control mb-3" type="text" placeholder="Company Name" aria-label="default input example" v-model="formData.companyName">
                        <label for="floatingInput">Company Name</label>
                    </div>
                   
                    <div class="form-floating">
                        <input class="form-control mb-3" type="text" placeholder="Phone Number" aria-label="default input example" v-model="formData.phoneNumber">
                        <label for="floatingInput">Phone Number</label>
                    </div>

                    <div class="form-control mb-3 text-start">
                        <label class="form-label">Project Category</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
                                <label class="form-check-label text-dark radioLabels" for="flexRadioDefault3">
                                    Consulting
                                </label>
                            </div>
                       
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label text-dark radioLabels" for="flexRadioDefault1">
                                    App Development
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
                                <label class="form-check-label text-dark radioLabels" for="flexRadioDefault2">
                                    Web Development
                                </label>
                            </div>
                    </div>

                    <div class="form-floating">
                        <textarea class="form-control mb-3" type="text" placeholder="Project Description" aria-label="default input example" style="height: 100px"></textarea>
                        <label for="floatingInput">Project Description</label>
                    </div>

                    <button type="button" class=" btn submitBtn" @click="sendData">Send Your Form</button>
                </form>
            </div>
        </div>
   </div>
</template>

<script>
    import { ref } from 'vue';
    // import {db} from '../firebase/firestoreconfig';
    import {db} from '@/firebase/firestoreconfig.js';
export default {
    setup(){
        const formData = ref(
            {
                companyName: '',
                phoneNumber: '',

            }
        )
        const sendData = async () =>{
            try{
                await db.collection('Client-resquest').add(formData.value);
            }catch(err){
                console.log(err.message);
            }
            console.log("Send Data", formData.value);
        }
        return{
           formData,
            sendData
        }
    }
}
</script>

<style>

    .phoneBtn, .submitBtn{
        border-radius: 25px !important;
    }

 
</style>