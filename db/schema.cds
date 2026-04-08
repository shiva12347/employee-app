namespace my.company;

entity Employees {
  key ID        : UUID;
  name          : String(100);
  email         : String(100);
  department    : String(50);
  salary        : Decimal(10,2);
}
