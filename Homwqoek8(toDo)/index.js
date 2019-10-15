let input = document.getElementById("input"),
    put = document.getElementById("button"),
    output = document.getElementById("output"),
    form = document.forms.namedItem("myForm");

let dataList;
parsePage();


form.addEventListener("submit", function (e) {
    e.preventDefault();
    output.appendChild(createLi(input.value));
    input.value = "";
    toLocalStorage();
});

output.addEventListener("click", function (event) {
    event.preventDefault();
    removeLi(event );
    toLocalStorage();
});

function createLi(text) {
    let newElem = document.createElement("li");
    newElem.classList.add("app__ul-li");
    newElem.innerHTML = `
       <span class="app__ul-li-span">${text}</span>
       <td></td>
       <button  class="app__ul-li-delete"  type="button">Delete</button>
       <button  class="app__ul-li-done"  type="button">Done</button>
       `;
    return newElem;
}


function removeLi(event) {
    let target = event.target;
    if (target.classList.contains("app__ul-li-delete")) {
        target = target.parentNode;
        output.removeChild(target);
    } else if (target.classList.contains("app__ul-li-done")) {
        target = target.parentNode;
        console.log(target);
        target.style.textDecoration = "line-through";
        target.style.color = "green";
    }
}
function toLocalStorage(){
    dataList = output.innerHTML;
    localStorage.setItem("dataList", dataList);
}
function parsePage(){
    if(localStorage.getItem("dataList")){
        output.innerHTML = localStorage.getItem("dataList");
    }
}
