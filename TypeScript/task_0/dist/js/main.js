// Creating student objects
var student1 = {
    firstName: "Brandina",
    lastName: "Mubango",
    age: 27,
    location: "Harare"
};
var student2 = {
    firstName: "Tinashe",
    lastName: "Moyo",
    age: 21,
    location: "Bulawayo"
};
// storing students in an array
var studentsList = [student1, student2];
// Render table with student data
var table = document.createElement('table');
// Create header row
var headerRow = table.insertRow(0);
var headerCell1 = headerRow.insertCell(0);
var headerCell2 = headerRow.insertCell(1);
headerCell1.innerHTML = "<b>First Name</b>";
headerCell2.innerHTML = "<b>Location</b>";
// Add student rows
studentsList.forEach(function (student) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
// Append table to document body
document.body.appendChild(table);
//# sourceMappingURL=main.js.map