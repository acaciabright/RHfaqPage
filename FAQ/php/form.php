<?php 
	$to = 'dashboardfaqtest@gmail.com'; 
	$subject = 'Dashboard FAQ contact'; 
	$name = $_POST['name']; 
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$text = $_POST['message'];
	$eCheck = $_POST['emailCheck'];
	$cCheck = $_POST['callCheck'];
	$tCheck = $_POST['textCheck'];

	if(isset($eCheck) && $eCheck == 'on') {
	    $emailCheck = "Email";
	}
	if(isset($cCheck) && $cCheck == 'on') {
	    $callCheck = "Call";
	}
	if(isset($tCheck) && $tCheck == 'on') {
	    $textCheck = "Text";
	}
	else {
	    $noCheck = "None";
	}  

	$message = "From: $name \nEmail: $email \nPhone: $phone \nPreferred method of contact: $emailCheck $callCheck $textCheck $noCheck \nMessage: $text \n";

	$index = "../index2.html";

	$sent = mail($to, $subject, $message); 
	if($sent) {
	  echo "<div class='body'><h1 class='header'>Thank you for your message!</h1>
	  <div class='wrapper'><p class='p'>Your email has been sent successfully and 
	  we appreciate you getting in touch with us. We will be sending a reply soon.
	  </p></div><div class='wrapper2'><a href='$index' class='button'>Return to 
	  Dashboard FAQs</a></div></div>"; 
	}else{
	  echo "<div class='body'><h1 class='header'>Sorry, your message wasn't sent.
	  </h1></div><div class='wrapper'><p class='p'>We seem to have encountered 
	  a problem sending your message. Please go back and try again. If you get this 
	  message again please email <a href='mailto:webmaster@yourDomain.com'>
	  webmaster@yourDomain.com</a>.</p></div>"; 
	}
?>
<style type="text/css">
	body {
		background-color: #EFEFEF;
	}
	.body {
		background-color: white;
		padding-top: 20px;
		padding-bottom: 20px;
		margin-right: 5%;
		margin-left: 5%;
		max-width:100%;
		height:100%;
	}
	.header {
		text-align: center;
		width: 100%;
	}
	.p {

	}
	.wrapper {
		text-align: center;
	}
	.wrapper2 {
		margin-top: 30px;
		text-align: center;
	}
	.button {
		-webkit-appearance: none;
	    -moz-appearance: none;
	    border-radius: 3px;
	    border-style: solid;
	    border-width: 0;
	    cursor: pointer;
	    font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
	    font-weight: normal;
	    line-height: normal;
	    margin: 0 0 1.25rem;
	    position: relative;
	    text-align: center;
	    text-decoration: none;
	    display: inline-block;
	    padding: 1rem 2rem 1.0625rem 2rem;
	    font-size: 1rem;
	    border-color: #007095;
	    color: #fff;
	    transition: background-color 300ms ease-out;
	    text-align: center;
	    background-color: #D50000;
    	box-shadow: 1px 1px 4px rgba(0,0,0,0.5);
	}
	.button:hover {
		background-color: #bf0000;
	}
</style>

