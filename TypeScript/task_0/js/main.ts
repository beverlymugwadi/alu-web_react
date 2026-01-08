//Defining the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating student objects
const student1: Student = {
  firstName: "Brandina",
  lastName: "Mubango",
  age: 27,
  location: "Harare"
};

const student2: Student = {
  firstName: "Tinashe",
  lastName: "Moyo",
  age: 21,
  location: "Bulawayo"
};

// storing students in an array
const studentsList: Student[] = [student1, student2];

// Render table with student data
const table: HTMLTableElement = document.createElement('table');

// Create header row
const headerRow: HTMLTableRowElement = table.insertRow(0);
const headerCell1: HTMLTableCellElement = headerRow.insertCell(0);
const headerCell2: HTMLTableCellElement = headerRow.insertCell(1);
headerCell1.innerHTML = "<b>First Name</b>";
headerCell2.innerHTML = "<b>Location</b>";

// Add student rows
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = table.insertRow(-1);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

// Append table to document body
document.body.appendChild(table);
