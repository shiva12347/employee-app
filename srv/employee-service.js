const cds = require('@sap/cds');

module.exports = (srv) => {

  const { Employees } = srv.entities;

  // ✅ Before CREATE
  srv.before('CREATE', Employees, (req) => {

    const { email, salary, name } = req.data;

    // Email validation
    if (!email || !email.includes('@')) {
      req.error(400, 'Please enter a valid email address');
    }

    // Name validation
    if (!name || name.trim().length < 3) {
      req.error(400, 'Name must be at least 3 characters');
    }

    // Salary validation
    if (!salary || salary <= 0) {
      req.error(400, 'Salary must be greater than 0');
    }

  });

  // ✅ Before UPDATE
  srv.before('UPDATE', Employees, (req) => {

    const { email, salary } = req.data;

    if (email && !email.includes('@')) {
      req.error(400, 'Invalid email format');
    }

    if (salary && salary < 1000) {
      req.error(400, 'Minimum salary must be 1000');
    }

  });

};