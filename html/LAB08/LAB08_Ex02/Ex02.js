let student1 = new Student("Jan", "Kowalski");
student1.grades = new Grade("PRI", 3);
student1.grades = new Grade("TIN", 3);
student1.grades = new Grade("POJ", 3);

let student2 = new Student("Anna", "Nowak");
student2.grades = new Grade("PRI", 4);
student2.grades = new Grade("TIN", 4);
student2.grades = new Grade("POJ", 4);

let student3 = new Student("Jan", "Trzeci");
student3.grades = new Grade("PRI", 5);
student3.grades = new Grade("TIN", 5);
student3.grades = new Grade("POJ", 5);

let studentArray = [student1, student2, student3]


function studentList() {
    let container = document.getElementById('list-container');

    for (let i = 0; i < studentArray.length; i++) {
        let student_div = document.createElement('div');

        let name = document.createElement('h3');
        name.appendChild(document.createTextNode(`${studentArray[i].name} ${studentArray[i].surname}`))

        let grades_average_div = document.createElement('div');
        grades_average_div.classList.add('content-row')

        let ul = document.createElement('ul');

        studentArray[i].gradesArray.forEach(grade => {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(`${grade.subject}: ${grade.value}`));
            ul.appendChild(li);
        })

        let average = document.createElement('h3');
        average.appendChild(document.createTextNode(`Average: ${studentArray[i].gradesAverage}`))

        student_div.appendChild(name);
        grades_average_div.appendChild(ul);
        grades_average_div.appendChild(average);
        student_div.appendChild(grades_average_div);
        container.appendChild(student_div)
    }
}
studentList();

document.addEventListener('DOMContentLoaded', function() {
    const studentDivs = document.querySelectorAll('#list-container > div');

    studentDivs.forEach(div => {
        div.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});