DELIMITER //

CREATE PROCEDURE TransferFunds(
    IN from_account_id INT,
    IN to_account_id INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE from_balance DECIMAL(10,2);


    SELECT Balance INTO from_balance
    FROM Accounts
    WHERE AccountID = from_account_id;

    
    IF from_balance >= amount THEN
        
        UPDATE Accounts
        SET Balance = Balance - amount
        WHERE AccountID = from_account_id;

        
        UPDATE Accounts
        SET Balance = Balance + amount
        WHERE AccountID = to_account_id;

        
        SELECT * FROM Accounts WHERE AccountID IN (from_account_id, to_account_id);
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient balance in source account';
    END IF;
END //

DELIMITER ;

CALL TransferFunds(1, 2, 300);
