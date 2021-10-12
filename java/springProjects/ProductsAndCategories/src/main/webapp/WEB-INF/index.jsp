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
<h1 style="margin:15px;">Products and Categories</h1>
<div style="margin:15px; display:flex; gap:20px;">
	<table class="table">
		<tr><th scope="col">Products</th> </tr>
		<c:forEach var="product" items="${products}">
			<tr><td><c:out value="${product.name}"></c:out></td></tr>
		</c:forEach>
	</table>
	<table class="table">
		<tr><th scope="col">Categories</th> </tr>
		<c:forEach var="cat" items="${categories}">
			<tr><td><c:out value="${cat.name}"></c:out></td></tr>
		</c:forEach>
	</table>
</div>
</body>
</html>