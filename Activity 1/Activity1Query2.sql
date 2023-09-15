SELECT
    c.CustomerID,
    c.FirstName,
    c.LastName,
    a.AddressLine1,
    a.AddressLine2,
    a.City,
    a.PostalCode
FROM
    SalesLT.Customer AS c
INNER JOIN
    SalesLT.CustomerAddress AS ca ON c.CustomerID = ca.CustomerID
INNER JOIN
    SalesLT.Address AS a ON ca.AddressID = a.AddressID;

