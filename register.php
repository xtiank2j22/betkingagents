

<?php include "include/nav.php"; ?> <!-- for the nav slider and all the headers -->
<!-- Main Stylesheet File -->
	  <link rel="stylesheet" href="css/colors/blue.css">
	  <!-- sweet alert -->
	 <script src="js/sweetalert.min.js"></script>
	 
		<style>
		    .requiredf{
				color:red;
				font-size: 16px;
			}
			.warning{
				color:red;
				font-size:12px;
				margin:10px 0px 10px 0px;
			}
		</style>
	  <section class="section1" style="background-color:#001041;padding:40px 10px;">
	    <div class="container clearfix" style="background-color:#fff;">
		   <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		   <h4 class="title float-center" style="font-size:28px;"><strong>New Agent Form</strong></h4>
			</div>
		</div>
			<div class="container clearfix" style="background-color:#fff;">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			  <div class="content col-lg-6 col-md-6 col-sm-6 col-xs-12 clearfix">
				 <h2><span>Requirements</span></h2>
<ul>
	<p style="color:black;"><strong>></strong>  Get a shop in a strategic location. In most cases, 
			we advise that you choose a shop on a ground floor of a Building</p>
	<p style="color:black;"><strong>> </strong> You must be capable to pay for shop rent and finance the general shop set-up</p>
	<p style="color:black;"><strong>> </strong> Minimum shop size is a room size ( 18sqr/mtr)</p>
	<p style="color:black;"><strong>> </strong> Check the distance to an existing Betking shop and confirm
				 it’s upto 5mins distance trek.</p>
	<p style="color:black;"><strong>> </strong> send to us via WhatsApp the shop video and it’s environment.</p>
	<p style="color:black;"><strong>> </strong> Contact us for inspection before paying for the rent.</p>
	<p style="color:black;"><strong>> </strong>After we’ve inspected and approved your shop,</p>
	<p style="color:black;"><strong>> </strong> our inspection team will guide you on how to set-up your Betking shop</p>
	<p style="color:black;"><strong>> </strong>our inspection team will guide you on how to set-up your Betking shop</p>
	<p style="color:black;"><strong>> </strong>Minimum of two cashier space and three booking systems</li>
	<p style="color:black;"><strong>> </strong>Maximum period of 6weeks to set-up your Betking shop</p>
	<p style="color:black;"><strong>> </strong>A startup security deposit of #25,000 into your Betking account</p>
</ul>
</div><!-- end content -->
		
			  <div id="sidebar" class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
			  <form id="personalinfo" action="https://formsubmit.co/support@agentbetking.com" method="post" enctype="multipart/form-data">
			  <h2><span>Registration</span></h2>
			  <label for="fname"  style="color:black;">Full Name <span class="requiredf">*</span></label>				
				    <input type="text" name="fname" id="fname" class="form-control" placeholder="Full Name" Required/>
					<label for="lname"  style="color:black;">Date of Birth  <span class="requiredf">*</span></label>
				  <input type="date" name="dob" id="dob" class="form-control" Required/>
				  <label for="lname" style="color:black;">Gender  <span class="requiredf">*</span></label>
				  <select name="gender" class="form-control" Required>
					<option>Select</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
			  	  </select>
					<input type="hidden" name="_next" value="http://agentbetking.com/thank.php">
					<label for="lname" style="color:black;">Phone Number  <span class="requiredf">*</span></label>
				  <input type="text" name="phone" id="phone" class="form-control" placeholder="+234(806)5454321" Required/>
				  <label for="email" style="color:black;">Email Address  <span class="requiredf">*</span></label>
				  <input type="text" name="email" class="form-control" title="Email" placeholder="example@gmail.com" />
				  <label for="email" style="color:black;">Shop Address <span class="requiredf">*</span></label>
				  <input type="text" name="shop address" class="form-control" title="Email" placeholder="example@gmail.com" />
				  <label for="lname" style="color:black;"> Shop State  <span class="requiredf">*</span></label>
				  <select name="state" id="refme" onchange="runOption(this)" class="form-control" Required/>
					<option></option>
					<option value="Abia">Abia</option>
					<option value="Adamawa">Adamawa</option>
					<option value="Akwa Ibom">Akwa Ibom</option>
					<option value="Anambra">Anambra</option>
					<option value="Bauchi">Bauchi</option>
					<option value="Bayelsa">Bayelsa </option>
					<option value="Benue">Benue</option>
					<option value="Borno">Borno</option>
					<option value="Cross River">Cross River</option>
					<option value="Delta">Delta</option>
					<option value="Ebonyi">Ebonyi</option>
					<option value="Edo">Edo</option>
					<option value="Ekiti">Ekiti</option>
					<option value="Enugu">Enugu</option>
					<option value="Gombe">Gombe</option>
					<option value="Imo">Imo</option>
					<option value="Jigawa">Jigawa</option>
					<option value="Kaduna">Kaduna</option>
					<option value="Kano">Kano</option>
					<option value="Katsina">Katsina</option>
					<option value="Kebbi">Kebbi</option>
					<option value="Kogi">Kogi</option>
					<option value="Kwara">Kwara</option>
					<option value="Lagos">Lagos</option>
					<option value="Nasarawa">Nasarawa</option>
					<option value="Niger">Niger</option>
					<option value="Ogun">Ogun</option>
					<option value="Ondo">Ondo</option>
					<option value="Osun">Osun</option>
					<option value="Oyo">Oyo</option>
					<option value="Plateau">Plateau</option>
					<option value="Rivers">Rivers</option>
					<option value="Sokoto">Sokoto</option>
					<option value="Taraba">Taraba</option>
					<option value="Yobe">Yobe</option>
					<option value="Zamfara">Zamfara</option>
					<option value="FCT">FCT</option>
				  </select>
				  <label for="lname"  style="color:black;">L.G.A of Shop Address. <span class="requiredf">*</span></label>
				  <input type="text" name="LGA" id="LGA" class="form-control" placeholder="L.G.A" Required/>
				  <label for="lname" style="color:black;">Referral Channel <span class="requiredf">*</span></label>
				  <select name="ref" type="text" class="form-control" value="Supper Agent" Required>
					<option>Internet/Social Media</option>
					<option>Friends</option>
					<option value="Male">Radio</option>
					<option value="Female">Others</option>
			  	  </select>				  
				  <label for="lname"  style="color:black;">Subject</label>
				  <input type="text" name="subject" class="form-control" placeholder="New Application" />
				  <input type="checkbox" name="new" class="" placeholder="New Application"/>&nbsp;<b  style="color:black;">Agent Registration Form</b> 
				  <div class="form-group">        
       			 <button type="submit" class="btn btn-default" style="background-color:#F9C933; color:#072068;">Submit</button>
                 </div>
				</div>
			  <!-- end sidebar -->
			  </div>
			 
			</div>
			<!-- end container -->
		</form></div>
		<br><br>
	  </section><!-- end section -->
<?php include "include/footer.php"; ?><!-- all items represented in the footer -->
