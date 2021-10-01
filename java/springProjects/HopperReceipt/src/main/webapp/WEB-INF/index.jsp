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
	<title>Receipt</title>
</head>
<body>
	<h1>Customer Name: <c:out value = "${name}"/></h1>
	<p>Item name: <c:out value = "${itemName}"/></p>
	<p>Price: <c:out value = "${price}"/></p>
	<p>Description: <c:out value = "${description}"/></p>
	<p>Vendor: <c:out value = "${vendor}"/></p>
</body>
</html>