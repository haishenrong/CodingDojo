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
		<div style="display:flex;">
			<h1>PokeBook Entry Details</h1>
			<a style="margin-left:auto;"href = "/entries/">Go Back</a>
		</div>
		<p>Expense Name:<c:out value="${entry.getExpense()}"></c:out></p>
		<p>Expense Description: <c:out value="${entry.getDescription()}"></c:out></p>
		<p>Vendor: <c:out value="${entry.vendor}"></c:out></p>
		<p>Amount Spent: <c:out value="${entry.amount}"></c:out></p>
	</div>
</body>
</html>