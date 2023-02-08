const form = document.querySelector("#form-create-task");
const tbodytasks = document.querySelector("#tbody-tasks");

const tasks = [];

form.addEventListener("submit",(event)=> {
event.preventDefault();

const formvalues = event.target;

const {title,description} = formvalues;

tasks.push({
title: title.value,
description: description.value

});

title.value = "";
description.value = "";


console.log(event.target.title.value);

updateviewtable(tasks);


});

function updateviewtable(List){tbodytasks.innerHTML = "";

List.forEach((item, index) => {

const trElement = document.createElement("tr")

trElement.innerHTML = 

    <><td>${index + 1}</td>
    <td>${item.title}</td>
    <td>${item.description}</td>
    <td></td></>

tbodytasks.sppendchild(trElement)
});
}