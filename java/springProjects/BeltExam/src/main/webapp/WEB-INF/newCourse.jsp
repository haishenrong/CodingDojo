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
		<div style="margin:15px;display:flex; justify-content:space-between;">
			<h1>Create a Course</h1>
		</div>

		<form:form action="/courses" method="post" modelAttribute="course">
			<form:hidden path="user" value = "${user.id}" />
			<form:errors path="user" class="text-danger" />
			<p style="color:red;"><form:errors path="name"/></p>
			<p>
		        <form:label path="name">Name</form:label>
				<form:input path="name"/>
		    </p>
			<p style="color:red;"><form:errors path="weekday"/></p>
		    <p>
		        <form:label path="weekday">Day of Week</form:label>
		        <form:input path="weekday"/>
		    </p>
			<p style="color:red;"><form:errors path="price"/></p>
		    <p>
		        <form:label path="price">Drop-in Price</form:label>  
		        $<form:input type="number" step="0.01" path="price"/>
		    </p>
		     <p style="color:red;"><form:errors path="time"/></p>
		    <p>
		        <form:label path="time">Time</form:label>  
		        <form:select path="time" >
      				<form:option value="08:00 AM">08:00 AM</form:option>
					<form:option value="08:30 AM">08:30 AM</form:option>
					<form:option value="09:00 AM">09:00 AM</form:option>
					<form:option value="09:30 AM">09:30 AM</form:option>
					<form:option value="10:00 AM">10:00 AM</form:option>
					<form:option value="10:30 AM">10:30 AM</form:option>
					<form:option value="11:00 AM">11:00 AM</form:option>
					<form:option value="11:30 AM">11:30 AM</form:option>
					<form:option value="12:00 PM">12:00 PM</form:option>
					<form:option value="12:30 PM">12:30 PM</form:option>
					<form:option value="1:00 PM">1:00 PM</form:option>
					<form:option value="1:30 PM">1:30 PM</form:option>
					<form:option value="2:00 PM">2:00 PM</form:option>
					<form:option value="2:30 PM">2:30 PM</form:option>
					<form:option value="3:00 PM">3:00 PM</form:option>
					<form:option value="3:30 PM">3:30 PM</form:option>
					<form:option value="4:00 PM">4:00 PM</form:option>
					<form:option value="4:30 PM">4:30 PM</form:option>
					<form:option value="5:00 PM">5:00 PM</form:option>
					<form:option value="5:30 PM">5:30 PM</form:option>
					<form:option value="6:00 PM">6:00 PM</form:option>
					<form:option value="6:30 PM">6:30 PM</form:option>
					<form:option value="7:00 PM">7:00 PM</form:option>
					<form:option value="7:30 PM">7:30 PM</form:option>
					<form:option value="8:00 PM">8:00 PM</form:option>
					<form:option value="8:30 PM">8:30 PM</form:option>
					<form:option value="9:00 PM">9:00 PM</form:option>
					<form:option value="9:30 PM">9:30 PM</form:option>
					<form:option value="10:00 PM">10:00 PM</form:option>
					<form:option value="10:30 PM">10:30 PM</form:option>
					<form:option value="11:00 PM">11:00 PM</form:option>
					<form:option value="11:30 PM">11:30 PM</form:option>
					<form:option value="12:00 AM">12:00 AM</form:option>
					<form:option value="12:30 AM">12:30 AM</form:option>
					<form:option value="1:00 AM">1:00 AM</form:option>
					<form:option value="1:30 AM">1:30 AM</form:option>
					<form:option value="2:00 AM">2:00 AM</form:option>
					<form:option value="2:30 AM">2:30 AM</form:option>
					<form:option value="3:00 AM">3:00 AM</form:option>
					<form:option value="3:30 AM">3:30 AM</form:option>
					<form:option value="4:00 AM">4:00 AM</form:option>
					<form:option value="4:30 AM">4:30 AM</form:option>
					<form:option value="5:00 AM">5:00 AM</form:option>
					<form:option value="5:30 AM">5:30 AM</form:option>
					<form:option value="6:00 AM">6:00 AM</form:option>
					<form:option value="6:30 AM">6:30 AM</form:option>
					<form:option value="7:00 AM">7:00 AM</form:option>
					<form:option value="7:30 AM">7:30 AM</form:option>
				</form:select>
		    </p>
			<p style="color:red;"><form:errors path="description"/></p>
			<p>
		        <form:label path="description">Description</form:label>
		        <form:textarea path="description"/>
		    </p>    
		    <input class="btn btn-primary"type="submit" value="Submit"/>
		    <a class="btn btn-secondary" href = "/home">Cancel</a>
		</form:form> 
	</div> 
</body>
</html>