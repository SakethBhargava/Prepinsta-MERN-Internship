const employees = [];

document.getElementById('add-employee-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const position = document.getElementById('position').value;
  
  if (name && age && position) {
    const employee = { name, age, position };
    employees.push(employee);
    displayEmployees();
    clearForm();
  } else {
    alert('Please fill in all required fields.');
  }
});

function displayEmployees() {
  const employeeList = document.getElementById('employee-list');
  employeeList.innerHTML = '';
  
  employees.forEach(function(employee) {
    const employeeItem = document.createElement('div');
    employeeItem.innerHTML = `
      <p><strong>Name:</strong> ${employee.name}</p>
      <p><strong>Age:</strong> ${employee.age}</p>
      <p><strong>Position:</strong> ${employee.position}</p>
    `;
    employeeList.appendChild(employeeItem);
  });
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('position').value = '';
}
