SET SERVEROUTPUT ON;

DECLARE
    CURSOR loan_cur IS
        SELECT c.CustomerName,
               l.LoanID,
               l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR loan_rec IN loan_cur LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear ' ||
            loan_rec.CustomerName ||
            ', your loan ' ||
            loan_rec.LoanID ||
            ' is due on ' ||
            loan_rec.DueDate
        );
    END LOOP;
END;
/