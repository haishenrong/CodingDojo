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
	<h1 style = "text-align:center;">Here's Your Omikuji!</h1>
	<div style = "margin:10px auto; width: 60%; text-align: center; border: 3px solid black; background-color: cornflowerblue;">
		<h2 style = "text-align:center;"> In <c:out value="${year}"></c:out> years, you will live in <c:out value="${city}"></c:out> with <c:out value="${person}"></c:out> as your roommate, <c:out value="${hobby}"></c:out> for a living. The next time you see a <c:out value="${thing}"></c:out>, you will have good luck. Also, <c:out value="${nice}"></c:out>
		</h2>
	</div>
	<div style = "margin:10px auto; text-align:center;">
		<a href="/omikuji/">Go Back</a>
	</div>
</body>
</html>