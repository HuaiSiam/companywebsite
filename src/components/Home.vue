<template>
<div>
  <nav-bar/>
  <div class="main_img_area" id="home">
    <div id="main_img" style="margin-top: 0px; margin-bottom: 0px;height: 900px;"></div>
  </div>
  
  <section>
    <div id="about"></div>
    <div class="container">
      <div class="section-title">
        <h2 class="text-center">About <span class="text-danger">Us</span></h2>
      </div>
      <div class="text-center section-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, modi voluptates consectetur, maiores facilis, nam veritatis temporibus vero quidem necessitatibus ipsam perspiciatis? Maiores asperiores omnis excepturi veniam nesciunt. Similique, quia?</div>
    </div>
  </section>

  <section id="team">
    <div class="container">
      <div class="section-title">
        <h2 class="text-center">Meet <span class="text-danger">Our</span> Team</h2>
      </div>
      <team/>
    </div>
  </section>

  <section id="contact" class="contact-bg" style="margin-bottom: 0px;">
    <div class="container" style="padding-top: 50px; padding-bottom: 80px;">
      <div class="section-title">
        <h2 class="text-center">Contact <span class="text-danger">Us</span></h2>
      </div>
      <div class="section-content">
        <div class="row">
          <div class="col-md-5 col-lg-4">
            <div class="contact-item mb-4">
              <p><i class="fa fa-phone mr-2"></i><span><a href="callto:+959454642525">+95 945 464 425 25</a></span></p>
              <p><i class="fa fa-envelope mr-2"></i><span><a href="mailto:thuamvum@gmail.com">thuamvum@gmail.com</a></span></p>
              <p><i class="fa fa-map-marker mr-2"></i><span class="contact-item-address">Ba/12, Lawibual Qrt, Tedim, Chin, Myanmar.</span></p>
            </div>            
          </div>
          <div class="col-md-7 col-lg-8">
            <form>
              <div class="form-row">
                <div class="form-group col-lg-6">
                  <input type="text" class="form-control" placeholder="Name">
                </div>
                <div class="form-group col-lg-6">
                  <input type="text" class="form-control" placeholder="Email">
                </div>
              </div>
              <div class="form-group">
                <textarea class="form-control" rows="3" placeholder="Message"></textarea>
              </div>
              <div class="text-right">
                <button type="submit" class="btn contact-btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40858.0581292565!2d93.64110165444333!3d23.361793614080415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374c7dda06ddfbd7%3A0x6b9d0088fb9189cc!2sTedim!5e0!3m2!1sen!2smm!4v1578051446804!5m2!1sen!2smm" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
  </div>

  <div class="footer text-center">
    <div class="footer-text">
      © Copyright 2019 | <span class="footer-text-color">ThuamVum</span>
      <a href="#home" class="move-top"><i class="pe-7s-angle-up"></i></a>      
    </div>
  </div>
</div>
</template>

<script>
import NavBar from './NavBar.vue'
import Team from './Team.vue'

export default {
  components: { NavBar, Team },
}
</script>
