let users6 = JSON.parse(user);
console.log(users6);

function updateHTML(){
    for ( let users1 of users6) {
        document.getElementById("demo").innerHTML += `
      
        <div class="card" style="width: 18rem;">
            <img src="./images/${users1.img}" class="card-img-top" alt="...">
            <p class="priority-amount">${users1.priority}</p>
            <input type="submit" value="priority" class="register-btn">
            <div class="card-body">
                <h5 class="card-title">Bank Employee Task</h5>
                <p class="card-text">${users1.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${users1.id}</li>
                <li class="list-group-item">${users1.firstName}</li>
                <li class="list-group-item">${users1.lastName}</li>
                <li class="list-group-item">${users1.position}</li>
                <li class="list-group-item">${users1.age}</li>
                
                
            </ul>
            <div class="card-body">
                <label>Status:</label>
                <a href="#" class="card-link">Pending</a>
                <a href="#" class="card-link">Done</a>
            </div>
        </div>
        `;
    }
}

updateHTML();
addEvent();

function priority(index) {
    if (users6[index].priority != 5) {
        users6[index].priority++;
        document.getElementsByClassName("priority-amount")[index].textContent = users6[index].priority;
    }
}

function addEvent (){
    let register_btns = document.getElementsByClassName("register-btn");

    for (let i = 0; i < register_btns.length; i++) {
        register_btns[i].addEventListener("click", function() {
            priority(i); // register(0);  register(1)
        })
    }
}



document.getElementById("sortbutton").onclick = sortByRegisterValue;



function sortByRegisterValue() {
    users6.sort((a, b) => b.priority - a.priority);

    document.getElementById("demo").innerHTML = "";
    updateHTML();
    addEvent();

}



