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
	<h1>Fruit Store</h1>
	<table class="table">
		<thead>
			<tr>
				<th scope= "col"> Name </th>
				<th scope= "col"> Price </th>
			</tr>
		</thead>
		<c:forEach var="item" items="${fruits}">
			<tr>
        		<td><c:out value="${item.getName()}"></c:out></td>
        		<td><c:out value="${item.getPrice()}"></c:out></td>
        	</tr>
    	</c:forEach>
	</table>
</body>
</html>