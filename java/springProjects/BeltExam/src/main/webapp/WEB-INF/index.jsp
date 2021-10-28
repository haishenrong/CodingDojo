<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	<link rel="stylesheet" href="/css/main.css"/>
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<title>Login/Registration</title>
</head>
<body>
	<div style="margin:15px;">
		<h1 style="color:rebeccapurple;"> Course Platform</h1>
		<p>Organize classes and students.</p>
	</div>
	<div style="margin:15px;display:flex;gap:50px;">
		<div>
		<h2> New Instructor </h2>
	    <form:form action="/register" method="post" modelAttribute="newUser">
	        <div class="form-group">
	            <p><form:errors path="userName" class="text-danger" /></p>
	            <label>User Name:</label>
	            <form:input path="userName" class="form-control" />
	        </div>
	        <div class="form-group">
	            <p><form:errors path="email" class="text-danger" /></p>
	            <label>Email:</label>
	            <form:input path="email" class="form-control" />
	        </div>
	        <div class="form-group">
	            <p><form:errors path="password" class="text-danger" /></p>
	            <label>Password:</label>
	            <form:password path="password" class="form-control" />
	        </div>
	        <div class="form-group">
	            <p><form:errors path="confirm" class="text-danger" /></p>
	            <label>Confirm Password:</label>
	            <form:password path="confirm" class="form-control" />

	        </div>
	        <input type="submit" value="Register" class="btn btn-primary" />
	    </form:form>
	    </div>
		<div>
		<h2> Login </h2>
	    <form:form action="/login" method="post" modelAttribute="newLogin">
	        <div class="form-group">
	          	<p><form:errors path="email" class="text-danger" /></p>
	            <label>Email:</label>
	            <form:input path="email" class="form-control" />
	        </div>
	        <div class="form-group">
	         	<p><form:errors path="password" class="text-danger" /></p>
	            <label>Password:</label>
	            <form:password path="password" class="form-control" />
	        </div>
	        <input type="submit" value="Login" class="btn btn-success" />
	    </form:form>
	    </div>
	</div>
</body>
</html>