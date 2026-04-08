sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/mycompany/employee/employeeui/test/integration/pages/EmployeesList",
	"com/mycompany/employee/employeeui/test/integration/pages/EmployeesObjectPage"
], function (JourneyRunner, EmployeesList, EmployeesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/mycompany/employee/employeeui') + '/test/flpSandbox.html#commycompanyemployeeemployeeui-tile',
        pages: {
			onTheEmployeesList: EmployeesList,
			onTheEmployeesObjectPage: EmployeesObjectPage
        },
        async: true
    });

    return runner;
});

