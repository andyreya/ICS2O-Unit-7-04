//makes the function occur when the button is clicked

document.getElementById('button').addEventListener('click', check)
//creates variables

let age = 0
let date = 'Saturday'
//creates a function that will create a condition that has to be met and display messages accordingly

function check () {
  age = document.getElementById('input1').value
  age = parseInt(age)

  date = document.getElementById('input2').value

  if ((date === 'Wednesday' || date === 'Friday') || (age > 12 && age < 21)) {
    document.getElementById('answer').innerHTML = 'You get student pricing.'
  } else {
    document.getElementById('answer').innerHTML = 'You have to pay regular pricing.'
  }
}
