function gradesAverage(grades) {
    sum = 0;
    for (var i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return Number(sum / grades.length).toFixed(3);;
    
}
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
function calculateAverageScores(){
    let averageScores = []
    for(let i = 0 ; i < subjects.length; i ++){
        let scoresList = [];
        for(let j=0;j<students.length;j++){
            scoresList.push(Number(students[j].grades[i]));
        }
        averageScores.push(gradesAverage(scoresList));
    }
    return averageScores;
}
function generateTableBody(table,data) {
    let averageScores = calculateAverageScores();

    let tBody = table.createTBody();
    for (let element of data) {
      let row = tBody.insertRow();
      let cell = row.insertCell();
      let text = document.createTextNode(element.name);
      cell.appendChild(text);

      for (grade in element.grades) {

        let cell = row.insertCell();
        let text = document.createTextNode(element.grades[grade]);
        cell.appendChild(text);

        if(+element.grades[grade] > averageScores[grade]){
            cell.style.color = "green"
        }else{
            cell.style.color = "red"
        }
      }

    }
 
    let row = table.insertRow();
    let cell = row.insertCell();
    cell.appendChild(document.createTextNode('Average'))
    for(average of averageScores){
        let cell = row.insertCell();
        let text = document.createTextNode(average);
        cell.appendChild(text);
    }

}

function getFormData(){

    let studentInput = document.querySelector('#student').value;
    let frontGrade = document.querySelector('#front').value;
    let javaScriptGrade = document.querySelector('#javascript').value;
    let cssGrade = document.querySelector('#css').value;
    let reactGrade = document.querySelector('#react').value;
    
    let newStudents  = {
        name: studentInput,
        grades: [frontGrade, javaScriptGrade, cssGrade, reactGrade]
    }
    students.push(newStudents)
    
}
function updateTableState(){

    var row = document.getElementsByTagName('tbody')[0];
    row = row.parentNode.removeChild(row);
    
    generateTableBody(table ,students)
}