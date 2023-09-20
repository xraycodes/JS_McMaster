
/**
 * Given the template for students grade report as follows;
 * ------------------------------------------------------------------------
 * Name/Subject    |   Math     |   Science    |   English   |   Average Grade
 * ------------------------------------------------------------------------
 * John            |    75      |      80      |      91     |
 * Mostafa         |    69      |      69      |      94     |
 * Amy             |    77      |      84      |      88     |
 * Chris           |    72      |      81      |      96     |
 * Robb            |    90      |      80      |      88     |
 * ------------------------------------------------------------------------
 */

let headerData = ['Name/Subject', 'Math', 'Science', 'English', 'Average Grade'];
let studentGrades = [
  ['John', 75, 80, 91,],
  ['Mostafa', 69, 77, 94,],
  ['Amy', 77, 84, 88,],
  ['Chris', 72, 81, 96,],
  ['Robb', 90, 80, 88,], 
];

/**
 * Write code to populate the "headerData" string array using data from the aforementioned template
 * 
 * Hint: use the "push" method to add data to the array (or re-define the array and initialize it with the data)
 */

/**
 * Write code to initialize the array "studentGrades"
 *  with the students/grades information from the previous template:
 *
 * Hint 1: use an array of arrays
 * Hint 2: each student and his/her grades (reflecting a table row) will be an array of different data types
 *         since it will include the student name followed by his/her grades
 */

/**
 * Write code to calculate the average grade for each student
 *  and update the "studentGrades" array
 * 
 * Hint 1: use loop syntax on each student's grades 
 * Hint 2: write a new function calculate the grades, and do not forget to call your function after defining it
 */

function getAverageGrade(student_info) {
    let number = 0
    for (info of student_info){
      if(isNaN(info)){
        student_name = info
        continue
      }
      else {
        number += info
      }
    }
    average = (number/(student_info.length - 1))
    student_info.push(average.toFixed())
}
console.log(studentGrades)
// get access to the table element in the page
const table = document.querySelector("#grades");

// let headerData = ['Name/Subject', 'Math', 'Science', 'English', 'Average Grade'];
// utility function to populate the table header
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
}
  
// utility function to populate the table rows
function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
}

// build the table

// for(let i = 0; i < studentGrades.length; i++) {
//     getAverageGrade(studentGrades[i])
// }

for (info of studentGrades){
  getAverageGrade(info)
}

generateTableHead(table, headerData);
generateTable(table, studentGrades);
  