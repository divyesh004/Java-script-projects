let form = document.querySelector("form")
let tbody = document.querySelector("tbody");

let arr = [];

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let obj = {
        task: document.getElementById("task").value,
        priority: document.getElementById("priority").value
    }
    arr.push(obj);

    tbody.innerHTML = null

    for (let i = 0; i < arr.length; i++) {

        const tr = document.createElement('tr');
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const btn = document.createElement("button");

        td1.innerText = arr[i].task
        td2.innerText = arr[i].priority
        td3.append(btn);
        btn.innerText = "Delete";

        tr.append(td1, td2, td3)
        tbody.append(tr)

        btn.addEventListener("click", () => {
            tr.remove();
        })

        tbody.addEventListener("click", () => {
            arr.splice(i, 1)

        })

    }

})




