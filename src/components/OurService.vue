<template>
    <div class="container-fluid service">
        <div class="row service-header text-start">
            <div class="col-12">
                <h1 class="sectionTitle "><span class="blues">Services</span><span class="sectionTitle"> We Offer</span></h1>
                <p class="normalText">We cooperate with our clients throughout the whole project building process and we negotiate to fit with our client's ratification. Vestibulum auctor ornare leo, non suscipit magna</p>
            </div>
        </div>
        
        <div class="row service-body p-5">
            
           <div class="mx-auto col-sm-12 col-md-6 col-lg-4">
                <div class="cards">
                    <div class="iconBox">
                        <!-- <img src="../assets/imgs/consulting.jpg" class="service-img rounded" style="width: 100%; height: 200px;" alt="web dev"> -->
                    </div>
                    <div class="card-body ">
                        <h4 class="card-title ">Free Consulting</h4>
                        <p class="card-text">Unsplash is a website dedicated to sharing stock photography under the Unsplash license. Since 2021, it has been owned by Getty Images.</p>
                    </div>
                </div>
                
           </div>
           
            <div class="mx-auto col-sm-12 col-md-6 col-lg-4">
                <div class="cards">
                    <div class="iconBox">
                        <!-- <img src="../assets/imgs/app-dev.png" class="rounded" style="width: 100%; height: 200px;" alt="web dev"> -->
                    </div>
                    <div class="card-body ">
                        <h4 class="card-title ">App Development</h4>
                        <p class="card-text">Unsplash is a website dedicated to sharing stock photography under the Unsplash license. Since 2021, it has been owned by Getty Images..</p>
                    </div>
                </div>
                
            </div>
            
            <div class="mx-auto col-sm-12 col-md-6 col-lg-4">
                <div class="cards">
                    <div class="iconBox">
                        <!-- <img src="../assets/imgs/web-dev.jpg" class="rounded" style="width: 100%; height: 200px;" alt="web dev"> -->
                    </div>
                    <div class="card-body">
                        <h4 class="card-title ">Web Development</h4>
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
.service{
    padding: 0;
    margin: 0;
}

.service-body{
    /* margin: auto; */
}

.font_color{
    color: hsl(212, 61, 17, 100%) !important;
    /* background-color: hsl(212, 61, 17, 100%); */
}

.cards{
    width: 300px;
    height: 450px;
    background: var(--linear1);
    padding: 1.5rem;
    /* margin-top: 3rem; */
    /* margin-bottom: 1rem; */
    border-radius: 20px;
}

.card-title{
    font-family: 'Spline Sans';
    font-weight: 500;
    font-size: 22px;
    margin-top: 1rem;
    text-align: center;
}

.card-text{
    color: #3c4650;
    margin-top: 1rem;

    font-size: 18px;
    font-family: "Outfit";
    word-spacing: 0.05em;
}

.iconBox{
    /* padding-top: 300px; */
    margin: auto;
    width: 220px;
    height: 150px;
    background-color: #D9D9D9;
    border-radius: 20px;
}

.card-box{
    /* background: #001933; */
}
</style>