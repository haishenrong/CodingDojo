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
		<h1>New Product</h1>
		<form:form action="/product" method="post" modelAttribute="product">
		    <p>
		        <form:label path="name">Name</form:label>
		        <form:errors path="name"/>
				<form:input path="name"/>
		    </p>
		    <p>
		        <form:label path="description">Description</form:label>
		        <form:errors path="description"/>
				<form:input path="description"/>
		    </p>
		    <p>
				<form:label path="price">Price</form:label> 
				<form:errors path="price"/>
		        $<form:input type="number" step="0.01" path="price"/>
		    </p>
		    <input type="submit" value="Submit"/>
		</form:form> 
	</div>  
</body>
</html>