<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
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
		<div style="display:flex; justify-content:space-between;">
			<h1>Namaste, <c:out value="${user.userName}"></c:out></h1>
			<a href="/logout">Logout</a>
		</div>
		<div style="display:flex; justify-content:space-between;">
			<p>Class Schedule</p>
			<a class= "btn btn-primary" href="/courses/new" role ="button">+ new class</a>
		</div>
		<table class="table">
			<thead>
				<tr>
					<th scope = "col">Class Name</th>
					<th scope = "col">Instructor</th>
					<th scope = "col">Weekday</th>
					<th scope = "col">Price</th>
					<th scope = "col">Time</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="course" items="${courses}">
					<tr>
						<td>
							<a href="/courses/${course.getId()}"><c:out value="${course.name}"></c:out></a>
							<c:if test = "${course.user.equals(user)}">
								<a class= "btn btn-primary" href="/edit/${course.id}">edit</a>
							</c:if>
						</td>
						<td><c:out value="${course.user.userName}"></c:out></td>
						<td><c:out value="${course.weekday}"></c:out></td>
						<td>
							<fmt:setLocale value = "en_US"/>
							<fmt:formatNumber value = "${course.price}" type = "currency"/>
						</td>
						<td><fmt:formatDate value="${course.time}" type="date" pattern="h:mm aa"/></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>