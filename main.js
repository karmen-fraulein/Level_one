
function addStudent() {
    getFormData();
    updateTableState();
}

let titles = ['students',...subjects,];
let table = document.querySelector("table");
generateTableHead(table,titles);
generateTableBody(table,students);







