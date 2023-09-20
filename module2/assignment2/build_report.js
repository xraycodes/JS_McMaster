
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

// Added to headerData array the headers of table
let headerData = ['Name/Subject', 'Math', 'Science', 'English', 'Average Grade'];

// Added to studentGrades array as an array containing the name of the student and their grades 
let studentGrades = [
  ['John', 75, 80, 91,],
  ['Mostafa', 69, 77, 94,],
  ['Amy', 77, 84, 88,],
  ['Chris', 72, 81, 96,],
  ['Robb', 90, 80, 88,], 
];

/* Function to add the student name, their subject and average grades under the right header
param = student_info : Passing in studentGrades array
*/
function getAverageGrade(student_info) {
    let totalGrade = 0;
    for (info of student_info) { 
      if(isNaN(info)){  // Omits the first index of array which contains students name
        continue 
      }
      else {
        totalGrade += info;
      }
    };
    average = (totalGrade/(student_info.length - 1))  // Subtract 1 to omit student name in length of array
    student_info.push(average.toFixed()) // toFixed method rounds to nearest whole number,
                                        // Adds average to current array of that student
}

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
//Looping over studentGrades array and passing as argument to getAverageGrade function
for (info of studentGrades){
  getAverageGrade(info)
}

generateTableHead(table, headerData);
generateTable(table, studentGrades);
  