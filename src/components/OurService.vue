<template>
    <div class="container-fluid service p-5">
        <div class="row service-header text-start">
            <div class="col-12">
                <h2 class="fw-bold mb-3 text-white"><span class="textcolor">Services</span> We Offer</h2>
                <p class="texts">We offer best services with afforedable prices and various adventageslorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,</p>
            </div>
        </div>
        
        <div class="row service-body p-2">
            <!-- <div class="card card-box col-sm-12 col-md-6 col-lg-4 my-2">
                <div class="card-img-top pt-2">
                    <img src="../assets/imgs/consulting.jpg" class="service-img rounded" style="width: 100%; height: 200px;" alt="web dev">
                </div>
                <div class="card-body">
                    <h4 class="card-title fw-bold">Free Consulting</h4>
                    <p class="card-text">We provide best web development with our latest technology in the field lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
                </div>
           </div> -->
           <div class="col-sm-12 col-md-6 col-lg-4 my-2">
                <div class="cards">
                    <div class="card-img-top py-2">
                        <img src="../assets/imgs/consulting.jpg" class="service-img rounded" style="width: 100%; height: 200px;" alt="web dev">
                    </div>
                    <div class="card-body py-2">
                        <h4 class="card-title fw-bold">Free Consulting</h4>
                        <p class="card-text">We provide best web development with our latest technology in the field lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
                    </div>
                </div>
                
           </div>
           
            <div class="col-sm-12 col-md-6 col-lg-4 my-2">
                <div class="cards">
                    <div class="card-img-top py-2">
                        <img src="../assets/imgs/app-dev.png" class="rounded" style="width: 100%; height: 200px;" alt="web dev">
                    </div>
                    <div class="card-body py-2">
                        <h4 class="card-title fw-bold">App Development</h4>
                        <p class="card-text">We provide best web development with our latest technology in the field lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
                    </div>
                </div>
                
            </div>
            
            <div class="col-sm-12 col-md-6 col-lg-4 my-2">
                <div class="cards">
                    <div class="card-img-top py-2">
                        <img src="../assets/imgs/web-dev.jpg" class="rounded" style="width: 100%; height: 200px;" alt="web dev">
                    </div>
                    <div class="card-body py-2">
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
    background: #00264D;
    color: #f9f9f9;
    font-weight: 500;
    font-family: "Lato", sans-serif;
    font-size: 16px;

    padding: 0;
    margin: 0;
}

.cards{
    background: #001933;
}

.card-text{
    color: rgb(172, 170, 170);

    font-size: 16px;
    font-family: "Lato",sans-serif;
    word-spacing: 0.05em;
}

.card-box{
    /* background: #001933; */
}
</style>