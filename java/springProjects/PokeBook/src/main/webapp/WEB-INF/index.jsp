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
		<h1>PokeBook</h1>
		<table class="table">
			<thead>
				<tr>
					<th scope = "col">Expense</th>
					<th scope = "col">Vendor</th>
					<th scope = "col">Amount</th>
					<th scope = "col">Actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="entry" items="${entries}">
					<tr>
						<td><a href="/entries/${entry.getId()}"><c:out value="${entry.getExpense()}"></c:out></a></td>
						<td><c:out value="${entry.getVendor()}"></c:out></td>
						<td><fmt:setLocale value = "en_US"/>
							<fmt:formatNumber value = "${entry.getAmount()}" type = "currency"/></td>
						<td>
							<div style="display:flex; gap:10px;">
								<a href="/entries/edit/${entry.getId()}">edit</a>
								<form action="/entries/${entry.id}" method="post">
	    							<input type="hidden" name="_method" value="delete">
	    							<input class="btn btn-danger btn-sm" type="submit" value="Delete">
								</form>
							</div>
						</td>	
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
	<div style="margin:15px;">
		<h1>Track an Expense:</h1>
		<form:form action="/entries" method="post" modelAttribute="entry">
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