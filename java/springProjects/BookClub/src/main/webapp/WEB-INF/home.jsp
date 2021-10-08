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
	<div style="margin:15px">
		<div style="display:flex; justify-content:space-between;">
			<h1>Welcome, <c:out value="${user.userName}"></c:out></h1>
			<a href="/logout">Logout</a>
		</div>
		<div style="display:flex; justify-content:space-between;">
			<p>Books from all the shelves:</p>
			<a href="/books/new">+ Add to my shelf</a>
		</div>
		<table class="table">
			<thead>
				<tr>
					<th scope = "col">ID</th>
					<th scope = "col">Title</th>
					<th scope = "col">Author Name</th>
					<th scope = "col">Posted By</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="book" items="${books}">
					<tr>
						<td><c:out value="${book.getId()}"></c:out></td>
						<td><a href="/books/${book.getId()}"><c:out value="${book.getTitle()}"></c:out></a></td>
						<td><c:out value="${book.getAuthor()}"></c:out></td>
						<td><c:out value="${book.getUser().userName}"></c:out></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>