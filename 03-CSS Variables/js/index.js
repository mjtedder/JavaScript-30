// Setting a variable for the controls in HTML
const inputs = document.querySelectorAll('.controls input')

// Definining function to upate properties of the CSS Variables
function handleUpdate(){
  const suffix = (this.dataset.sizing || '')
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

// Using forEach method on controls to listen for a change to the values
inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
