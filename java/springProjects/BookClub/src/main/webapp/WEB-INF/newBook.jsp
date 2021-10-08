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
	<div style="margin:15px;">
		<div style="margin:15px;display:flex; justify-content:space-between;">
			<h1>Add a book to your shelf!</h1>
			<a href="/home">back to the shelves</a>
		</div>

		<form:form action="/books" method="post" modelAttribute="book">
			<form:hidden path = "user" value = "${user.id}" />
			<form:errors path="user" class="text-danger" />
		    <p>
		        <form:label path="title">Title</form:label>
		        <form:errors path="title"/>
				<form:input path="title"/>
		    </p>
		    <p>
		        <form:label path="author">Author</form:label>
		        <form:errors path="author"/>
				<form:input path="author"/>
		    </p>
		    <p>
		        <form:label path="thoughts">Thoughts</form:label>
		        <form:errors path="thoughts"/>
				<form:textarea path="thoughts"/>
		    </p>
		    <input type="submit" value="Submit"/>
		</form:form> 
	</div>  
</body>
</html>