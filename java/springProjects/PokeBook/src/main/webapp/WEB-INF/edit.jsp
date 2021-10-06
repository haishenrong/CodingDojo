<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
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
	<div style="margin:15px;">
		<h1>Edit Entry</h1>
		<form:form action="/entries/${entry.id}" method="post" modelAttribute="entry">
		    <input type="hidden" name="_method" value="put">
			<p style="color:red;"><form:errors path="expense"/></p>
			<p>
		        <form:label path="expense">Expense</form:label>
				<form:input path="expense"/>
		    </p>
			<p style="color:red;"><form:errors path="vendor"/></p>
		    <p>
		        <form:label path="vendor">Vendor</form:label>
		        <form:input path="vendor"/>
		    </p>
			<p style="color:red;"><form:errors path="amount"/></p>
		    <p>
		        <form:label path="amount">Amount</form:label>  
		        $<form:input type="number" step="0.01" path="amount"/>
		    </p>
			<p style="color:red;"><form:errors path="description"/></p>
			<p>
		        <form:label path="description">Description</form:label>
		        <form:textarea path="description"/>
		    </p>       
		    <input type="submit" value="Submit"/>
		</form:form>
	</div>
</body>
</html>