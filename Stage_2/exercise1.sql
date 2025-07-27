-- Set DBMS output on (if supported)
SET SERVEROUTPUT ON;

-- Scenario 1: Discount for Age > 60
BEGIN
  FOR rec IN (SELECT CustomerID, Age, LoanInterestRate FROM Customers) LOOP
    IF rec.Age > 60 THEN
      UPDATE Customers
      SET LoanInterestRate = LoanInterestRate - 1
      WHERE CustomerID = rec.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
END;
/

-- Scenario 2: Set VIP flag
BEGIN
  FOR rec IN (SELECT CustomerID, Balance FROM Customers) LOOP
    IF rec.Balance > 10000 THEN
      UPDATE Customers
      SET IsVIP = 'TRUE'
      WHERE CustomerID = rec.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
END;
/

-- Scenario 3: Reminder for Due Dates
DECLARE
  v_name Customers.CustomerName%TYPE;
BEGIN
  FOR rec IN (
    SELECT LoanID, CustomerID, DueDate
    FROM Loans
    WHERE DueDate <= SYSDATE + 30
  ) LOOP
    SELECT CustomerName INTO v_name
    FROM Customers
    WHERE CustomerID = rec.CustomerID;

    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ' || rec.LoanID || 
                         ' for ' || v_name || 
                         ' is due on ' || TO_CHAR(rec.DueDate, 'DD-MON-YYYY'));
  END LOOP;
END;
/
