package com.library.service;

import  com.library.repository.BookRepository;

public class BookService {
	BookRepository bookRepository;
	
	public void setbookRepository(BookRepository bookrepository) {
		this.bookRepository = bookrepository;
	}
	
	public void printBookDetails() {
		String details = bookRepository.getBookDetails();
		System.out.println("Book Details : "+details);
	}
	
	
}
