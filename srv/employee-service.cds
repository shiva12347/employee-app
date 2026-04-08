using { my.company as db } from '../db/schema';

service EmployeeService {
  @odata.draft.enabled
  entity Employees as projection on db.Employees;
}