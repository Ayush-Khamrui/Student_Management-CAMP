package com.cap.main.advice;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cap.main.entity.Course;
import com.cap.main.entity.Faculty;
import com.cap.main.exception.InvalidUserException;

@RestControllerAdvice
public class MyAdviceForException {

	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public Map<String, String> handleInvalidArgument(MethodArgumentNotValidException ae) {

		Map<String, String> map = new LinkedHashMap<>();

		ae.getBindingResult().getFieldErrors().forEach(error -> {
			map.put(error.getField(), error.getDefaultMessage());
		});
		return map;
	}

	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(InvalidUserException.class)
	public Map<String, String> handlInvalidUser(InvalidUserException ae) {
		Map<String, String> map = new LinkedHashMap<>();

		map.put("user-error", ae.getMessage());
		return map;
	}
	
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(ConstraintViolationException.class)
	public Map<String, String> handleInvalidArguments(ConstraintViolationException ce) {
		System.out.println(ce.getConstraintViolations());

		Map<String, String> map = new LinkedHashMap<>();
		for (ConstraintViolation cerror : ce.getConstraintViolations()) {
			Faculty c = (Faculty) cerror.getLeafBean();
			System.out.println(cerror.getPropertyPath());
			System.out.println(c);
			map.put(cerror.getPropertyPath().toString(), cerror.getMessage());
		}
		return map;

	}
}
