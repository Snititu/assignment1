const btn = document.querySelector("#btn1");
const tbody = document.querySelector("tbody");
const textarea = document.querySelectorAll("form-control")


btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const newTr = document.createElement("tr");
    tbody.appendChild(newTr);
    for(let i = 0; i<3 ; i++){
        let newTd = document.createElement("td");
        newTd.innerText =document.querySelectorAll("form-control")[i].value;
        newTr.appendChild(newTd);
        document.querySelectorAll("form-control")[i].value = "";
    }