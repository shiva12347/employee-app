using { EmployeeService } from '../srv/employee-service';


annotate EmployeeService.Employees with {
  ID          @UI.lineItem;
  name        @UI.lineItem;
  email       @UI.lineItem;
  department  @UI.lineItem;
  salary      @UI.lineItem;
  name        @UI.identification;
  email       @UI.identification;

}; 
