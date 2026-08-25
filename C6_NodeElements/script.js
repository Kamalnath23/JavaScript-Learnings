const courses =[
    {
        name: "React JS",
        price: 15
    },
    {
        name: "Vue JS",
        price: 8.7
    },
    {
        name: "Bootstrap",
        price: 12.2
    },
    {
        name: "Java",
        price: 10
    }
]

function generateList(){
    const ul = document.querySelector(".list-group");
    courses.forEach(course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${course.name} - $${course.price}`;
        ul.appendChild(li);
    } )

}

//generateList();
window.addEventListener("DOMContentLoaded", generateList);

//Sort Courses by price
const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price); //sort the courses array by price in ascending order
    const ul = document.querySelector(".list-group"); //purpose: to clear the list before generating the sorted list
    ul.innerHTML = ""; //clear the list before generating the sorted list
    generateList();
});


const button2 = document.querySelector(".btn-primary");
button2.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price); //sort the courses array by price in descending order
    const ul = document.querySelector(".list-group"); //purpose: to clear the list before generating the sorted list
    ul.innerHTML = ""; //clear the list before generating the sorted list
    generateList();
});