use demo;
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    Balance DECIMAL(10, 2),
    IsVIP CHAR(1) DEFAULT 'N' 
);
CREATE TABLE Loans (
    LoanID INT PRIMARY KEY,
    CustomerID INT,
    InterestRate DECIMAL(5,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
INSERT INTO Customers (CustomerID, Name, Age, Balance, IsVIP) VALUES
(1, 'Ishaa', 65, 15000.00, 'N'),
(2, 'Natarajan', 45, 8000.00, 'N'),
(3, 'Hariharan', 62, 12000.00, 'N'),
(4, 'Kavitha', 30, 5000.00, 'N');

INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES
(101, 1, 8.5, '2025-07-15'),
(102, 2, 9.0, '2025-07-05'),
(103, 3, 10.0, '2025-08-10'),
(104, 4, 11.0, '2025-06-29');  

DELIMITER //

CREATE PROCEDURE ApplyInterestDiscount()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE cid INT;
    DECLARE lid INT;
    DECLARE cur CURSOR FOR
        SELECT l.LoanID, c.CustomerID
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE c.Age > 60;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO lid, cid;
        IF done THEN
            LEAVE read_loop;
        END IF;

        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE LoanID = lid;
    END LOOP;

    CLOSE cur;

    
    SELECT * FROM Loans;
END //

DELIMITER ;
CALL ApplyInterestDiscount(); 

DELIMITER //

CREATE PROCEDURE PromoteVIPCustomers()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE cid INT;
    DECLARE cur CURSOR FOR
        SELECT CustomerID FROM Customers WHERE Balance > 10000;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO cid;
        IF done THEN
            LEAVE read_loop;
        END IF;

        UPDATE Customers
        SET IsVIP = 'Y'
        WHERE CustomerID = cid;
    END LOOP;

    CLOSE cur;

    -- Show updated customers
    SELECT * FROM Customers;
END //

DELIMITER ;

CALL PromoteVIPCustomers();

DELIMITER //

CREATE PROCEDURE SendLoanReminders()
BEGIN
    SELECT c.Name, l.DueDate
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE l.DueDate BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 30 DAY);
END //

DELIMITER ;

CALL SendLoanReminders();

