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
		<h1>New Ninja</h1>
		<form:form action="/ninjas" method="post" modelAttribute="ninja">
			<form:select path="dojo" >
      				<form:options items="${dojos}" itemValue="id" itemLabel="name"/>
			</form:select>
		    <p>
		        <form:label path="firstName">First Name</form:label>
		        <form:errors path="firstName"/>
				<form:input path="firstName"/>
		    </p>
		    <p>
		        <form:label path="lastName">Last Name</form:label>
		        <form:errors path="lastName"/>
		        <form:input path="lastName"/>
		    </p>
		    <p>
		        <form:label path="age">Age</form:label>
		        <form:errors path="age"/>     
		        <form:input type="number" path="age"/>
		    </p>    
		    <input type="submit" value="Submit"/>
		</form:form> 
	</div>  
</body>
</html>