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
	<h1>Information</h1>
	<table class="table">
		<tr>
			<th scope="col">Dojo Name</th>
			<th scope="col">Ninja Count</th>
		</tr>
		<c:forEach var = "dojo" items="${dojos}">
			<tr>
				<td>
					<c:out value="${dojo.name}"></c:out>
				</td>
				<td>
					<c:out value="${dojo.ninjas.size()} ninjas"></c:out>
				</td>
			</tr>
			
		</c:forEach>
	</table>
	
</body>
</html>