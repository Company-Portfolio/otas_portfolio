<template>
    <div class="container-fluid bg-light p-5 text-black">
        <div class="row contact-header">
            <div class="col-12 mb-4">
                <h2 class="fw-bold mb-4">How can you <span class="textcolor text-primary">Contact Us</span></h2>
                <p class="texts1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>

        <div class="row contact-form">
            <div class="col-12 bg-secondary form-floating p-3">
                <input class="bg-secondary" type="text" name="" id="" placeholder="">
                <label for="floadingInput">Company Name</label>
            </div>

            <!-- <div class="col-12 bg-secondary p-3 mt-4"> -->
                <input class="col-12 bg-secondary p-3 mt-4" type="text" name="" id="" placeholder="Phone Number">
            <!-- </div> -->

            <div class="col-12 category bg-secondary p-2 mt-4">
                <h5 class="p-2">Project Category</h5>
                <div class="form-check px-5">
                    <input class="form-check-input" type="radio" name="" id="" value="">
                    <label class="form-check-label mx-2" for="">Consulting</label>
                </div>
                <div class="form-check px-5">
                    <input class="form-check-input" type="radio" name="" id="" value="">
                    <label class="form-check-label mx-2" for="">App Development</label>
                </div>
                <div class="form-check px-5 mb-3">
                    <input class="form-check-input" type="radio" name="" id="" value="">
                    <label class="form-check-label mx-2" for="">Web Development</label>
                </div>
            </div>

            <div class="col-12 description bg-secondary p-2 mt-4">
                <h5 class="p-2">Project Description</h5>
                <textarea class="mx-2" name="" id="" cols="60" rows="7">Please let us know what is your problem you wanna solve in your business...</textarea>
            </div>            
        </div>

        <button class="d-grid contactus-btn mt-4 mx-auto">Send Your Form</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
*{
    box-sizing: border-box;
}

.contact-form{
    margin: 0 0 2px 0;
}
</style>