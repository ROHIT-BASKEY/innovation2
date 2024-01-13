const scriptURL = 'https://script.google.com/macros/s/AKfycbzgTfYZuLZeKy5Nl3D8kJgR9Peem1Rm4K_zw8YRLNr7L_eY5OrQpo4E_6k3ns29EPfm/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})