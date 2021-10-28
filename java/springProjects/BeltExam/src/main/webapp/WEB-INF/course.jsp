<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
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
	<div style="margin:15px">
		<div style="margin:15px;display:flex; justify-content:space-between;">
			<h1><c:out value="${course.name} with ${course.user.userName}"></c:out></h1>
			<a href="/home">back to courses</a>
		</div>
		<div style="margin:15px;padding-bottom:25px; border-bottom: 4px solid black;">
			<p><c:out value="Day: ${course.weekday}"></c:out></p>
			<p> Cost: 
				<fmt:setLocale value = "en_US"/>
				<fmt:formatNumber value = "${course.price}" type = "currency"/>
			</p>
			<p>Time: <fmt:formatDate value="${course.time}" type="date" pattern="h:mm aa"/></p>
			<p><c:out value="${course.description}"></c:out></p>
			<c:if test = "${course.user.equals(user)}">
				<a class = "btn btn-primary" href="/edit/${course.id}">edit</a>
			</c:if>
		</div>
		<c:if test = "${course.user.equals(user)}">
		<div style="margin:15px">
		<h2 style="color:rebeccapurple;">Student Roster</h2>
		<c:forEach var="student" items="${contains}">
			<p><c:out value="${student.name} - ${student.email}"></c:out></p>
		</c:forEach>
		</div><br>
		<h2 style="color:rebeccapurple;">Add Students to Class</h2>
		<div style="margin:15px;display:flex; justify-content:space-between;">
			<div>
				<h3> New Student </h3>
				<form:form action="/course/add/${course.id}" method="post" modelAttribute="student">
					<p style="color:red;"><form:errors path="name"/></p>
					<p>
				        <form:label path="name">Student Name</form:label>
						<form:input path="name"/>
				    </p>
					<p style="color:red;"><form:errors path="email"/></p>
				    <p>
				        <form:label path="email">Email</form:label>
				        <form:input path="email"/>
				    </p>
				    <input type="submit" value="Create and Add"/>
				</form:form> 
			</div>
			<div>
				<h3> Existing Student </h3>
				<form:form action="/course/connect/${course.id}" method="post">
					<select name="id" id="id">
						<c:forEach var="student" items="${notContains}">
		      				<option value="${student.id}"><c:out value="${student.name} - ${student.email}"></c:out></option>
		      			</c:forEach>
					</select>
					<input type="submit" value="Add to Roster"/>
				</form:form>
			</div>
		</div>
		</c:if>
	</div>
</body>
</html>