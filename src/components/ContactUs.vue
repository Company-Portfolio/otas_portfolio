<template>
   <div class="container-fluid col-12 mb-5">
    <!-- Section Title      -->
        <div class="ps-5">
            <h2 class="sectionTitle mt-3">How Can You <span class="lightblues">Contact Us</span></h2>
        </div>
    
    <!-- Section Body  -->
        <div class="col-12 d-flex">
            <!-- Text  -->
            <div class="col-lg-6 text-align-justify ps-5 pe-5 mt-3">
                <p class="lh-lg normalText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odio explicabo inventore veniam, natus repudiandae! Consequuntur, nemo corporis nobis, illum laborum incidunt recusandae explicabo debitis quos inventore quas. Itaque, corporis.</p>
            </div>
            <!-- Form  -->
            <div class="col-lg-6 mt-3">
                <form class="col-8">
                    <div class="form-floating">
                        <input class="form-control mb-3" type="text" placeholder="Company Name" aria-label="default input example">
                        <label for="floatingInput">Company Name</label>
                    </div>
                   
                    <div class="form-floating">
                        <input class="form-control mb-3" type="text" placeholder="Phone Number" aria-label="default input example">
                        <label for="floatingInput">Phone Number</label>
                    </div>

                    <div class="form-control mb-3">
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

                </form>
            </div>
        </div>
   </div>
</template>

<script>

export default{

}
</script>

<style>

</style>