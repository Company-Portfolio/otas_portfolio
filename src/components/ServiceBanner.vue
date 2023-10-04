<template>
    <div class="container-fluid ">
       <div class="d-flex mt-5">
        <div class="col-sm-12 col-md-7 col-lg-7 serviceBannerText">
            <p class="mb-3"><span class="sectionTitle">Services We Offer From</span> <span class="companyName">OTAS</span></p>
           <p class="normalText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo cum, iste, optio dolorum quas exercitationem ab veniam veritatis porro iure totam inventore eos, itaque molestiae sapiente minima deserunt. Distinctio!</p>
        </div>
        <div class="col-sm-12 col-md-5 col-lg-5">
            <img src="../assets/servicesBanner.png" width="500" height="500" />
        </div>
       </div>
    </div>
</template>

<script>
    export default{
        components: {
            
        }
    }
</script>

<style>
    .companyName{
        /* color: linear-gradient(180deg, rgba(255,255,255,1) 0%, 
rgba(88,227,255,1) 100%); */
color: aquamarine;
font-family: var(--lato);
  font-size: 48px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.05em;
    }

    .serviceBannerText{
        margin-top: 6rem;
    }
</style>