package com.library.service;

import  com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BookService {
	@Autowired
	BookRepository bookRepository;
	
	public void setbookRepository(BookRepository bookrepository) {
		this.bookRepository = bookrepository;
	}
	
	public void printBookDetails() {
		String details = bookRepository.getBookDetails();
		System.out.println("Book Details : "+details);
	}
	
	
}
