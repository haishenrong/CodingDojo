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
	<title>Insert title here</title>
</head>
<body>
	<div style="margin:15px">
		<div style="margin:15px;display:flex; justify-content:space-between;">
			<h1><c:out value="${book.getTitle()}"></c:out></h1>
			<a href="/home">back to the shelves</a>
		</div>
		<div style="margin:15px">
		<p><c:out value="${book.getUser().getUserName()} read ${book.getTitle()} by ${book.getAuthor()}."></c:out></p>
		<p><c:out value = "Here are ${book.getUser().getUserName()}'s thoughts:"></c:out></p>
		</div>
		<div style="width:50%;margin:20px; padding:25px;;border-top:4px solid black; border-bottom: 4px solid black;">
			<p><c:out value="${book.getThoughts()}"></c:out></p>
		</div>
	</div>

</body>
</html>