CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    DepartmentID INT,
    Salary DECIMAL(10,2)
);
INSERT INTO Employees (EmployeeID, Name, DepartmentID, Salary) VALUES
(1, 'Emma', 101, 50000.00),
(2, 'Liam', 102, 60000.00),
(3, 'Olivia', 101, 55000.00),
(4, 'Noah', 103, 70000.00);
DELIMITER //

CREATE PROCEDURE UpdateEmployeeBonus(
    IN dept_id INT,
    IN bonus_percent DECIMAL(5,2)
)
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * bonus_percent / 100)
    WHERE DepartmentID = dept_id;

   
    SELECT * FROM Employees WHERE DepartmentID = dept_id;
END //

DELIMITER ;

CALL UpdateEmployeeBonus(101, 10);


