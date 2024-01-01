<template>
    <div class="container-fluid pb-5">
        <div class="row sectionTitle text-start">
            <div class="col-12">
                <h1 class="sectionTitle "><span class="blues">Services</span><span class="sectionTitle"> We Offer</span></h1>
                <p class="normalText">We cooperate with our clients throughout the whole project building process and we negotiate to fit with our client's ratification. Vestibulum auctor ornare leo, non suscipit magna</p>
            </div>
        </div>
        
        <div class="row service-body">
            
           <div class="col-12 col-lg-4 mb-sm-0 mb-md-4 mb-lg-0">
                <div class="cards text-center">
                    <div class="">
                        <font-awesome-icon icon="fa-solid fa-display" bounce class="icon"  style="--fa-animation-duration: 5s;"/>
                    </div>
                    <div class="card-body ">
                        <h4 class="card-title">Web Developement</h4>
                        <p class="card-text">Unsplash is a website dedicated to sharing stock photography under the Unsplash license. Since 2021, it has been owned by Getty Images.</p>
                    </div>
                </div>
                
           </div>
           
           <div class="col-sm-12 col-md-6 col-lg-4 my-4 my-md-0">
                <div class="cards text-center">
                    <div class="">
                        <font-awesome-icon icon="fa-solid fa-mobile-screen-button" flip class="icon" style="--fa-animation-duration: 3s;"/>
                    </div>
                    <div class="card-body ">
                        <h4 class="card-title">App Developement</h4>
                        <p class="card-text">Unsplash is a website dedicated to sharing stock photography under the Unsplash license. Since 2021, it has been owned by Getty Images.</p>
                    </div>
                </div>
                
           </div>
            
           <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="cards text-center">
                    <div class="">
                        <font-awesome-icon icon="fa-solid fa-people-group" beat class="icon" style="--fa-animation-duration: 3s;" />
                    </div>
                    <div class="card-body ">
                        <h4 class="card-title">Free Consulting</h4>
                        <p class="card-text">Unsplash is a website dedicated to sharing stock photography under the Unsplash license. Since 2021, it has been owned by Getty Images.</p>
                    </div>
                </div>
                
           </div>
        
        </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup(){
        const companyName = ref('');
        const phoneNumber = ref('');

        return{
            companyName,
            phoneNumber
        }
    }
}
</script>

<style>
.cardContainer{
  display: flex;
  justify-content: center;
}

.font_color{
    color: hsl(212, 61, 17, 100%) !important;
    /* background-color: hsl(212, 61, 17, 100%); */
}

.cards{
    /* background: var(--linear1); */
    padding: 40px 20px;
    box-shadow: 2px 2px 2px 2px rgb(190, 188, 188);
    border-radius: 20px;
}

.card-title{
    font-family: 'Spline Sans';
    font-weight: bold;
    font-size: 24px;
    margin-top: 1rem;
    text-align: center;
}

.card-text{
    color: #3c4650;
    margin-top: 1rem;

    font-size: 16px;
    font-family: "Outfit";
    word-spacing: 0.05em;
}


.icon{
    margin: auto;
    width: 220px;
    height: 150px;
    color:#007FFF;
    opacity: 50%;
}

.card-box{
    /* background: #001933; */
}
</style>