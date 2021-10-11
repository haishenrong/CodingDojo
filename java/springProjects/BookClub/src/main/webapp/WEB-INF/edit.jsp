<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>   
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
		<div style="display:flex;">
			<h1>Edit Book</h1>
			<a style="margin-left:auto;"href = "/home">back to shelf</a>
		</div>
		<form:form action="/books/${book.id}" method="post" modelAttribute="book">
		    <input type="hidden" name="_method" value="put">
		    <form:hidden path = "user" value = "${user.id}" />
			<p style="color:red;"><form:errors path="title"/></p>
			<p>
		        <form:label path="title">Title</form:label>
				<form:input path="title"/>
		    </p>
			<p style="color:red;"><form:errors path="Author"/></p>
		    <p>
		        <form:label path="Author">Authorr</form:label>
		        <form:input path="Author"/>
		    </p>
			<p style="color:red;"><form:errors path="thoughts"/></p>
			<p>
		        <form:label path="thoughts">My Thoughts</form:label>
		        <form:textarea path="thoughts"/>
		    </p>       
		    <input type="submit" value="Submit"/>
		</form:form>
	</div>
</body>
</html>