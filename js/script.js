let users5 = JSON.parse(user);
console.log(users5);

for ( let users of users5) {
    document.getElementById("demo").innerHTML += `
  
    <div class="card" style="width: 18rem;"></div>
    <div><img src="images/${users.img}" class="card-img-top" alt="..."></div>
    <p class="priority-amount">${users.priority}</p>
            <input type="submit" value="priority" class="priority-btn">
    <div class="card-body">
        <h5 class="card-title">Company Users</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${users.id}</li>
        <li class="list-group-item">${users.firstName}</li>
        <li class="list-group-item">${users.lastName}</li>
        <li class="list-group-item">${users.position}</li>
        <li class="list-group-item">$${users.age}</li>
        <li class="list-group-item">${users.priority}</li>
    </ul>
    <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>

    `;
}


function priority(index) {
    if (users5[index].priority != 10) {
        users5[index].priority++;
        document.getElementsByClassName("priority-amount")[index].innerHTML = users5[index].priority;
    }
}


let priority_btns = document.getElementsByClassName("priority-btn");

for (let i = 0; i < priority_btns.length; i++) {
    priority_btns[i].addEventListener("click", function() {
        priority(i); // register(0);  register(1)
    })
}

document.getElementById("priority").onclick = sortByRegisterValue;

// Set the date we're counting down to
var countDownDate = new Date("1, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);





