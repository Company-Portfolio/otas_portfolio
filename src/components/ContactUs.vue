<template>
   <div class="container-fluid col-12 mb-5">
    <!-- Section Title      -->
        <div class="">
            <h2 class="sectionTitle mt-3">Create <span class="lightblues">Solutions</span><span class="sectionTitle">With Us</span></h2>
        </div>
    
    <!-- Section Body  -->
        <div class="col-12 row">
            <!-- Text  -->
            <div class="col-lg-6 col-sm-12 text-align-justify mt-3">
                <p class="lh-lg normalText">If you have specific details about your ideas, I would recommend you to contact us via the contact us form below. We will follow up within a short time ..</p>
                
                <div class="mt-4">
                    <div class="mb-4">
                        <h6 class="callToActionBtn ">Call Us</h6>
                        <a href="tel:09754007485">
                            <button class="btn btn-rounded phoneBtn">09754007485</button>
                        </a>
                       
                    </div>                 
                    <div>
                        <h6 class="callToActionBtn ">Follow Us For More</h6>
                        <div>
                            <a href="https://www.facebook.com/otastechsolution">
                                <img src="../assets/photo/facebook.png" alt="facebook" class="footerlogo" >
                            </a>
                            <a href="https://www.linkedin.com/company/otas-tech-solution/">
                                <img src="../assets/photo/linkedin.png" alt="linkedin" class="footerlogo mx-1 mx-md-3">
                            </a>
                           
                            <!-- <img src="../assets/photo/facebook.png" alt="github" class="footerlogo"> -->
                        </div>
                    </div>   
                </div>
            
            </div>
            <!-- Form  -->
            <div class="col-lg-6 col-sm-12 text-align-justify mx-auto ">
                        <!-- Company Name  -->
                    <div class="form-group ">
                        <input type="text" required="required" v-model="formData.name" />
                        <label for="input" class="control-label">Company Name</label><i class="bar"></i>
                    </div>
                    <!-- Company Phone Number  -->
                    <div class="form-group">
                        <input type="text" required="required" v-model="formData.phone" />
                        <label for="input" class="control-label">Phone Number</label><i class="bar"></i>
                    </div>
                    <!-- Description  -->
                    <div class="form-group">
                        <textarea type="text" required="required" v-model="formData.desc" ></textarea>
                        <label for="input" class="control-label">Description</label><i class="bar"></i>
                    </div>
                    <div class="btnContainer">
                        <button class="sendInquory" @click="sendData">Send Your Form</button>
                    </div>
        
            </div>
        </div>
   </div>
</template>

<script>
    import { ref } from 'vue';
    import { collection, addDoc } from 'firebase/firestore';
    import db from '../database/init';
    export default{
        components:{},
        setup(){
        const formData = ref({
            name: '',
            phone: '',
            desc: ''
        });
           
        let sendData = async() =>{
            try{
                await addDoc(collection(db,'client'), formData.value);
                console.log('There is docRef=>');
            }catch(err){
                console.log("Error Message -",err);
            }
        }
       

        return{
            sendData,formData
        }
    }
}
</script>

<style>

/* Style for the form group container */
.form-group {
position: relative;
margin: 20px 0;
}

/* Style for the input field */
.form-group input, .form-group textarea {
width: 100%;
border: none;
border-bottom: 5px solid #ccc;
padding: 10px;
font-size: 16px;
transition: border-bottom-color 0.3s ease;
}

/* Style for the label */
.form-group label {
position: absolute;
top: 0;
left: 0;
pointer-events: none;
font-size: 20px;
font-family: 'Spline San';
padding: 10px;
transition: top 0.3s ease, font-size 0.3s ease;
}

/* Style for the bar under the input */
.form-group .bar {
position: relative;
display: block;
width: 100%;
&::before {
content: '';
height: 2px;
width: 0;
bottom: 0;
position: absolute;
background: #007bff; 
transition: width 0.3s ease;
}
}

/* Style for the input when it's in focus */
.form-group input:focus, .form-group textarea:focus {
outline: none;
border-bottom-color: #007bff; /* Change this to your desired highlight color */
}

/* Style for the label when the input has focus or contains text */
.form-group input:focus + label,
.form-group input:valid + label,
.form-group textarea:focus + label,
.form-group textarea:valid + label {
top: -20px;
font-size: 16px;
color: #007bff; /* Change this to your desired highlight color */
}

/* Style for the bar under the input when it's in focus */
.form-group input:focus + .bar::before,
.form-group textarea:focus + .bar::before {
width: 100%;
}

.btnContainer{
margin-top: 2rem;
display: flex;
justify-content: center;
}

.sendInquory{
color: #fff;
font-family: 'Outline';
font-weight:700;
font-size: 20px;
width: 300px;
border: none;
border-radius: 20px;
padding: 10px;
background: var(--linear1);

position: relative;
}

.sendInquory:hover {
  background: var(--bgcolortrwo);
  color: transparent;
}

.sendInquory:hover::before {
  content: "Send Your Form";
  width: 300px;
  /* height: 50px; */
  background: var(--linear1);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  position: absolute;
  /* top: 20% */
  left: 0%;

  z-index: 0;
}

.sendInquory:active {
  background: #fff;
  color: transparent;
  border: 1px solid var(--bgcolortrwo);
}

.sendInquory:active:before {
  content: "Send Your Form";
  width: 300px;
  background: var(--linear1);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  position: absolute;

  z-index: 0;
}


</style>