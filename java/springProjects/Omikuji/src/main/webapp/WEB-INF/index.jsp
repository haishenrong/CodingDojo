<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
	<title>Insert title here</title>
</head>
<body>
	<h1 style = "text-align:center;">Send an Omikuji</h1>
	<div style = "text-align: center; border: 3px solid black;">
		<form action='/omikuji/fortune' method = 'POST'>
			<div class="form-group">
			  <label for="year">Pick any number from 5 to 25</label>
			  <input type="number" class="form-control" name = "year" id="year" min="0" max="25">
			</div>
			<div class="form-group">
			  <label for="city"> Enter the name of any city</label>
			  <input type="text" class="form-control" id="city" name="city">
			</div>
			<div class="form-group">
			  <label for="person"> Enter the name of any real person</label>
			  <input type="text" class="form-control" id="person" name="person">
			</div>
			<div class="form-group">
			  <label for="hobby"> Enter professional endeavor or hobby:</label>
			  <input type="text" class="form-control" id="hobby" name="hobby">
			</div>
			<div class="form-group">
			  <label for="thing"> Enter any type of living thing</label>
			  <input type="text" class="form-control" id="thing" name="thing">
			</div>
			<div class="form-group">
			  <label for="nice"> Say something nice to someone:</label>
			  <textarea class="form-control" id="nice" name="nice" rows="3" cols = "35"></textarea>
			</div>
			<p> Send and show a friend </p>
			<button type="submit" class="btn btn-primary">Send</button>
		</form>
	</div>
</body>
</html>