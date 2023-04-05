   <!--===== head links --=====-->
   <?php include_once 'include/header.php'; ?>
     <!--===== Main Navbar--=====-->
  <?php include_once 'include/main-nav.php'; ?>
     <!--===== slider --=====-->
  <?php include_once 'include/slider.php'; ?>
 <!-- ======= Contact Section ======= -->
 <section id="contact" class="contact">
      <div class="container">
        <div class="section-title" data-aos="zoom-out">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
        <div class="row mt-5">
          <div class="col-lg-4" data-aos="fade-right">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Plot 197, Adeleke Adedoyin Street Lagos NG, Off Kofo Abayomi St, Victoria Island 101241, Victoria Island</p>
              </div>
              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+234 (081) 44324966</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">
            <form role="form" action="https://formsubmit.co/support@betking-agent.com" method="POST" enctype="multipart/form-data">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center text-bold"><button type="submit" class="font-5 btn btn-primary btn-lg">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section><!-- End Contact Section -->
	 <!--===== footer and js links --=====-->
	 <?php include_once 'include/footer.php'; ?>