<template>
    <div class="container-fluid service p-5">
        <div class="row service-header text-start">
            <div class="col-12">
                <h2 class=" mb-3"><span class="lightblues">Services</span><span class="font_color"> We Offer</span></h2>
                <p class="font_color">We offer best services with afforedable prices and various adventageslorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,</p>
            </div>
        </div>
        
        <div class="row service-body p-5">
            
           <div class="mx-auto col-sm-12 col-md-6 col-lg-3 my-2">
                <div class="cards">
                    <div class="card-img-top py-2">
                        <img src="../assets/imgs/consulting.jpg" class="service-img rounded" style="width: 100%; height: 200px;" alt="web dev">
                    </div>
                    <div class="card-body ">
                        <h4 class="card-title fw-bold">Free Consulting</h4>
                        <p class="card-text">We provide best web development with our latest technology in the field lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
                    </div>
                </div>
                
           </div>
           
            <div class="mx-auto col-sm-12 col-md-6 col-lg-3 my-2">
                <div class="cards">
                    <div class="card-img-top py-2">
                        <img src="../assets/imgs/app-dev.png" class="rounded" style="width: 100%; height: 200px;" alt="web dev">
                    </div>
                    <div class="card-body ">
                        <h4 class="card-title fw-bold">App Development</h4>
                        <p class="card-text">We provide best web development with our latest technology in the field lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
                    </div>
                </div>
                
            </div>
            
            <div class="mx-auto col-sm-12 col-md-6 col-lg-3 my-2">
                <div class="cards">
                    <div class="card-img-top py-2">
                        <img src="../assets/imgs/web-dev.jpg" class="rounded" style="width: 100%; height: 200px;" alt="web dev">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title fw-bold">Web Development</h4>
                        <p class="card-text">We provide best web development with our latest technology in the field lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
                    </div>
                </div>
            </div>
        
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.service{
    /* color: #f9f9f9; */
    /* font-weight: 400; */
    font-family: "Lato", sans-serif;
    font-size: 16px;

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
    background: var(--linear1);
    padding: 1.2rem;
    /* margin-bottom: 1rem; */
    border-radius: 10px;
}

.card-title{
    /* margin-bottom: 1rem; */
    margin-top: 1rem;
}

.card-text{
    color: var(--groupheader);
    margin-top: 1rem;

    font-size: 16px;
    font-family: "Lato",sans-serif;
    word-spacing: 0.05em;
}

.card-box{
    /* background: #001933; */
}
</style>