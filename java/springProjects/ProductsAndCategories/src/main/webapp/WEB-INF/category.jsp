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
		<h1><c:out value = "${category.name}"></c:out></h1>
		<div style = "display:flex;">
			<table class="table">
				<tr><th scope="col">Products</th></tr>
				<c:forEach var = "product" items = "${contains}">
					<tr><td>-<c:out value="${product.name}"></c:out></td></tr>
				</c:forEach>
			</table>
			<form:form action="/category/connect/${category.id}" method="post">
				<select name="id" id="id">
					<c:forEach var="prod" items="${notContains}">
	      				<option value="${prod.id}"><c:out value="${prod.name}"></c:out></option>
	      			</c:forEach>
				</select>
				<input type="submit" value="Add"/>
			</form:form>
		</div>
	</div>

</body>
</html>