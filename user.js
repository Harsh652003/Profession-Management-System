let employees = [];
let employeeId = 1;

function addEmployee() {
  const name = document.getElementById('name').value.trim();
  const profession = document.getElementById('profession').value.trim();
  const age = document.getElementById('age').value.trim();
  const messageElement = document.getElementById('message');


  messageElement.textContent = '';
  messageElement.className = '';

  if (!name || !profession || !age) {
    messageElement.textContent = 'Error: Please fill out all fields!';
    messageElement.className = 'error';
    return;
  }

  const employee = {
    id: employeeId++,
    name: name,
    profession: profession,
    age: parseInt(age)
  };

  employees.push(employee);
  displayEmployees();

  messageElement.textContent = 'Success: Employee added successfully!';
  messageElement.className = 'success';


  document.getElementById('name').value = '';
  document.getElementById('profession').value = '';
  document.getElementById('age').value = '';
}

function displayEmployees() {
  const employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';
  if (employees.length === 0) {
    employeeList.textContent = 'Data not found';
    return;
  }

  employees.forEach(employee => {
    const employeeDiv = document.createElement('div');
    employeeDiv.className = 'employee';
    employeeDiv.id = `employee-${employee.id}`;
    employeeDiv.innerHTML = `
      <span>${employee.name}</span>
      <span>${employee.profession}</span>
      <span>${employee.age}</span>
      <button onclick="deleteEmployee(${employee.id})">Delete</button>
    `;
    employeeList.appendChild(employeeDiv);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  displayEmployees();
}
