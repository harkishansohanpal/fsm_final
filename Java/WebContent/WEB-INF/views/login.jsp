<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>


  <style><%@ include file="../../resources/css/loginStyle.css" %></style>
</head>
<body>

<div class="back">
                
	    <form action="processLogin" method="POST">
	       
	       	<input style="margin-top: 105px;" class="txt" type="text" name="username" placeholder="Username">
	    
		    <!-- <input style="margin-top: 25px;" class="txt" type="password" name="password" placeholder="Password"> -->
            <!-- <h4 style="color:red;"> ${ErrorInfo} </h4> -->
            <input style="margin-top: 25px; -webkit-text-security: square;" class="txt" type="text" name="password" placeholder="Password">
         
			<button style="border: none;" class="buttonclass" type="submit" name="Submit" onSubmitForm=""></button>
			
	    </form>
</div>


</body>
</html>