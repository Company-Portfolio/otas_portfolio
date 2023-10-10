<template>
  <div class="container-fluid py-4">
    <div class="d-none d-md-flex mx-auto boxContainers">
        <div class="group1 d-flex">
          <div class="box1">
           <div class="ourContainers px-3">
              <img src="../assets/photo/ourmisions.png" alt="mission" class="missionphoto">
              <p class="groupheader">Our Mission</p>
              <p class="text-center pt-3">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
              </p>
           </div>
          </div>
          <div class="box2">
            <div class="ourContainers px-3">
                <img src="../assets/photo/ourvission.png" alt="mission" class="missionphoto">
                <p class="groupheader">Our Vission</p>
                <p class="text-center pt-3">
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                </p>
            </div>
          </div>
        </div>
        <div class="group2 d-flex">
          <div class=" box3">
            <div class="ourContainers px-3">
                <img src="../assets/photo/ourvalue.png" alt="value" class="missionphoto">
                <p class="groupheader">Our Value</p>
                <p class="text-center pt-3">
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                </p>
            </div>
          </div>
          <div class="mt-5 box4">
              <ul class="mt-5 custom-list">
                <li><p>We Pirioty our client bussiness</p></li>
                <li><p>We Ensure that our solution is huge stepstone to your bussiness</p></li>
                <li><p>We always have a solution to any problems</p></li>
                <li><p>We Ensure that our solution is huge stepstone to your bussiness</p></li>
              </ul>
          </div>
          <div class="arrowboxs">
            <div class="trianglearrow"></div>
          </div>
        </div>
        
    </div>

    <div class="d-block d-md-none">
          <div class="col-10 mx-auto">
           <div class="ourContainers px-3">
              <img src="../assets/photo/ourmisions.png" alt="mission" class="missionphoto">
              <p class="groupheader">Our Mission</p>
              <p class="text-center pt-3">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
              </p>
           </div>
          </div>
          <div class="col-10 mx-auto">
            <div class="ourContainers px-3">
                <img src="../assets/photo/ourvission.png" alt="mission" class="missionphoto">
                <p class="groupheader">Our Vission</p>
                <p class="text-center pt-3">
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                </p>
            </div>
          </div>
          <div class="col-10 mx-auto">
            <div class="ourContainers px-3">
                <img src="../assets/photo/ourvalue.png" alt="value" class="missionphoto">
                <p class="groupheader">Our Value</p>
                <p class="text-center pt-3">
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                </p>
            </div>
          </div>
          <div class="col-10 mx-auto">
              <ul class="mt-5 custom-list">
                <li><p>We Pirioty our client bussiness</p></li>
                <li><p>We Ensure that our solution is huge stepstone to your bussiness</p></li>
                <li><p>We always have a solution to any problems</p></li>
                <li><p>We Ensure that our solution is huge stepstone to your bussiness</p></li>
              </ul>
          </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.missionphoto{
  width: 80px;
  height: 80px;
}

.ourContainers{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.boxContainers{
  width: 1150px;
  /* background: red; */
  display: flex;
}

.box1,.box2,.box3,.box4{
  width: 280px;
  /* background: yellow; */

}

.group2{
  position: relative;
}

.arrowboxs{
  width: 115px;
  height: 40px;
  border: 2px dotted black;
  position: absolute;
  top: 45px;
  left: 185px;
  border-left: none;
  border-bottom: none;
  border-radius: 0 5px 0 0;
}

.trianglearrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-top: 6px solid #000;
    border-bottom: 0;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    position: absolute;
    top: 35px;
    left: 108px;
  }

  .custom-list {
    list-style: none;
    padding-left: 0;
}
.custom-list li {
    position: relative;
    padding-left: 40px;
}
.custom-list li:before {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    background-image: url('../assets/photo/diamond.png');
    background-size: cover;
    background-position: top;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

  @media (max-width:1160px) {
    .boxContainers{
      width: 700px;
      /* background: red; */
      display: flex;
      flex-direction: column;
    }

    .box1,.box2,.box3,.box4{
      width: 350px;
      /* background: yellow; */

    }

    .arrowboxs{
      width: 140px;
      left: 230px;
    }

    .trianglearrow{
      position: absolute;
      top: 37px;
      left: 133px;
    }
  }

  @media (max-width:800px) {
    .boxContainers{
      width: 700px;
      /* background: red; */
      display: block;
      flex-direction: column;
    }

    .box1,.box2,.box3,.box4{
      width: 350px;
      /* background: yellow; */

    }

    .arrowboxs{
      width: 140px;
      left: 230px;
    }

    .trianglearrow{
      position: absolute;
      top: 37px;
      left: 133px;
    }
  }
</style>