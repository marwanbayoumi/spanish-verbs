let spanish = document.querySelectorAll('.table tbody tr th');
let english = document.querySelectorAll('.table tbody tr td:nth-child(2)');
let verbss = []
let button = document.querySelector(".btn");

spanish.forEach(e => (verbss.push(e.innerText)));

button.addEventListener("click", function () {
    let random_verb = Math.floor((Math.random() * 91) + 1);

    let random_die = Math.floor((Math.random() * 6) + 1);

    alert(verbss[random_verb] + ' ' + random_die);
})


console.log(verbss);





