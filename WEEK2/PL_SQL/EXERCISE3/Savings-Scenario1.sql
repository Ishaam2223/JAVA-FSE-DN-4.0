CREATE TABLE Accounts (
    AccountID INT PRIMARY KEY,
    AccountHolderName VARCHAR(100),
    AccountType VARCHAR(20),  -- 'Savings' or 'Current'
    Balance DECIMAL(10,2)
);
INSERT INTO Accounts (AccountID, AccountHolderName, AccountType, Balance) VALUES
(1, 'Alice', 'Savings', 1000.00),
(2, 'Bob', 'Savings', 2000.00),
(3, 'Charlie', 'Current', 1500.00),
(4, 'David', 'Savings', 3000.00);

DELIMITER //

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
    UPDATE Accounts
    SET Balance = Balance * 1.01
    WHERE AccountType = 'Savings';
END //

DELIMITER ;

CALL ProcessMonthlyInterest();
SELECT * FROM Accounts;

