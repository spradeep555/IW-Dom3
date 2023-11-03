let myForm = document.querySelector("form");
let inputTask = document.getElementById("task");
let priority = document.getElementById("priority");
let tbody = document.querySelector("tbody");
let AllData = [];

function changeBackgroundColor(priorityValue) {
    if (priorityValue === 'High') {
        return 'red';
    } else if (priorityValue === 'Low') {
        return 'green';
    } else {
        return ''; 
    }
}

myForm.addEventListener("submit",function(e)
{
    e.preventDefault();
    let Data = {};
    Data.input1 = inputTask.value;
    Data.input2 = priority.value;
    AllData.push(Data);

    tbody.innerHTML = null;

    AllData.map((element) =>
    {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let button = document.createElement("button");
        button.innerText ="Favourite";
        button.setAttribute("class","button")
        
        td1.innerText = element.input1;
        td2.innerText = element.input2;
        td3.append(button);
        row.append(td1,td2,td3);
        row.style.backgroundColor = changeBackgroundColor(element.input2);
        tbody.append(row);

        button.addEventListener("click",function() {
            td3.innerText="favourite";
            td3.style.color="#FFFFFF";
            td3.style.textTransform="uppercase";
            td3.style.fontWeight="bold";
            row.append(td3);
            tbody.append(row);
            button.style.display="none";
        });
    })
})