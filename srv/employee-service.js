const cds = require('@sap/cds');

module.exports = (srv) => {

  const { Employees } = srv.entities;

  srv.before(['NEW', 'CREATE', 'UPDATE'], Employees, (req) => {
    validateEmployee(req);
  });

  function validateEmployee(req) {

    const { email, name, salary } = req.data;

    // ✅ Email validation (SAFE)
    if (!email) {
      req.error('Email is required');
      return;
    }

    if (typeof email === 'string') {
      if (!email.includes('@')) {
        req.error('Email must contain "@"');
      }

      if (!email.includes('.')) {
        req.error('Email must contain "."');
      }
    }

    // ✅ Name validation
    if (!name) {
      req.error('Name is required');
    }

    // ✅ Salary validation
    if (salary !== undefined && salary !== null) {
      if (salary <= 0) {
        req.error('Salary must be greater than 0');
      }
    }

  }
};

