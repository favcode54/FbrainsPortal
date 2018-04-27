<template>
<div>
  		<nav class="navbar navbar-default navbar-mobile navbar-fixed white no-background bootsnav" id="head-section">
			<div class="container">
			
				<!-- Start Logo Header Navigation -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
						<i class="fa fa-bars"></i>
					</button>
					<a class="navbar-brand" href="index.html" uk-scroll>
						<img src="/img/logo-light.png" class="logo logo-display" alt="">
						<img src="/img/logo.png" class="logo logo-scrolled" alt="">
					</a>

				</div>
				<!-- End Logo Header Navigation -->

				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="navbar-menu">
				
					<ul class="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
					
						<li class="dropdown">
							<a href="index.html" class="dropdown-toggle" data-toggle="dropdown"><b>Hire Freelancers</b></a>
							<ul class="dropdown-menu animated fadeOutUp">
								<li><a href="#">Post Job</a></li>
								<li><a href="#">Post project</a></li>
								<li><a href="#">Community</a></li>
							
							</ul>
						</li>
					
					
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>Find a mentor</b></a>
							<ul class="dropdown-menu animated fadeOutUp">
								<li><a href="#">Mobile Development</a></li>
								<li><a href="#">Data Science </a></li>
								<li><a href="#">Web Programming</a></li>
								<li><a href="#">Others</a></li>
								
							</ul>
						</li>
						
						
						
						<li >
							<a href="#how-it-works" class="dropdown-toggle" uk-scroll='duration:1000'  data-toggle="dropdown"><b>How it works</b></a>
							
						</li>
						
					</ul>
					
					<ul class="nav navbar-nav navbar-right">
						<li class="br-right"><a href="javascript:void(0)"  data-toggle="modal" data-target="#signin"><i class="login-icon ti-user"></i>Login</a></li>
						<li class="sign-up"><a class="btn-signup red-btn" href="signup.html"><span class="ti-briefcase"></span>Create Account</a></li> 
					</ul>
						
				</div>
				<!-- /.navbar-collapse -->
			</div>   
		</nav>
  <banner></banner>
  <howitworks></howitworks>
  <jobcategory></jobcategory>
  <jobsession></jobsession>
  <footerr></footerr>

</div>
</template>
<script type="text/javascript">
import Vue from "vue";
import Banner from "../components/Banner.vue";
import  Footerr from "../components/Footer.vue";
import Howitworks from "../components/Howitworks.vue";
import Jobcategory from "../components/Jobcategory.vue";
import Jobsession from "../components/Jobsession.vue";
import Newsletter from "../components/Newsletter.vue";
export default {
  components: {
            Banner,
            Howitworks,
            Jobcategory,
            Jobsession,
            Newsletter,
            Footerr
		},
  data() {
    return {
     
    };
  },
  computed: {
    
  },
  watch: {
  },
  created() {

  },
  methods: {
}
}
</script>