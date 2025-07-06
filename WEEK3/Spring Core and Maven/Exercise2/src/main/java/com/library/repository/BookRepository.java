package com.library.repository;
import org.springframework.stereotype.Component;

@Component
public class BookRepository {
	public String getBookDetails() {
		return "Introduction to Spring Framework - By Telusuko ";
	}
}
