-- Procedure: ProcessMonthlyInterest

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
UPDATE Accounts
SET Balance = Balance + (Balance * 0.01)
WHERE AccountType = 'Savings';

COMMIT;
END;
/

-- Procedure: UpdateEmployeeBonus

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_name IN VARCHAR2,
  bonus_percent IN NUMBER
) IS
BEGIN
UPDATE Employees
SET Salary = Salary + (Salary * bonus_percent / 100)
WHERE Department = dept_name;

COMMIT;
END;
/

-- Procedure: TransferFunds

CREATE OR REPLACE PROCEDURE TransferFunds (
  from_account IN NUMBER,
  to_account IN NUMBER,
  amount IN NUMBER
) IS
  from_balance NUMBER;
BEGIN
SELECT Balance INTO from_balance
FROM Accounts
WHERE AccountID = from_account
    FOR UPDATE;

IF from_balance < amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds');
ELSE
UPDATE Accounts
SET Balance = Balance - amount
WHERE AccountID = from_account;

UPDATE Accounts
SET Balance = Balance + amount
WHERE AccountID = to_account;
END IF;

COMMIT;
END;
/

-- Execute Procedures (Test Block)

BEGIN
  -- Scenario 1: Apply monthly interest
  ProcessMonthlyInterest;

  -- Scenario 2: Give 10% bonus to IT department
  UpdateEmployeeBonus('IT', 10);

  -- Scenario 3: Transfer 1000 from account 101 to 104
  TransferFunds(101, 104, 1000);
END;
/
