const scriptURL = 'https://script.google.com/macros/s/AKfycbyZCsL6wt9wwR9V6H8MnL7dWjojo4hIrsC2flvAKALYh2O-icW1teSRW4Re5f2SGBBXyQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})