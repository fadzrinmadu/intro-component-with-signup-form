document.addEventListener('DOMContentLoaded', function() {

  const form = document.querySelector('form');
  const inputs = document.querySelectorAll('input');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // delete error messages if present
    let invalidMessages = form.querySelectorAll('.trial__input-message');
    if (invalidMessages) {
      // remove multiple element
      invalidMessages.forEach((e) => {
        form.removeChild(e);
      })
    }

    // validation form
    inputs.forEach((input) => {
      let errorMessage = '';
      switch (input.name) {
        case 'firstname':
          if (input.value == '') errorMessage = 'First Name cannot be empty';
          break;
        case 'lastname':
          if (input.value == '') errorMessage = 'Last Name cannot be empty';
          break;
        case 'email':
          let pattern = /^([\w\.-]+)@([a-z\d-]+).([a-z\d-]{2,8})(\.[a-z]{2,8})?$/;
          if (input.value == '') {
            errorMessage = 'Email cannot be empty';
          } else if (!pattern.test(input.value)) {
            errorMessage = 'Looks like this is not an email';
          } 
          break;
        case 'password':
          if (input.value == '') errorMessage = 'Password cannot be empty';
          break;
        default:
          errorMessage = '';
      }
      if (errorMessage != '') {
        createErrorMessage(errorMessage, input);
        input.classList.add('trial__input--invalid');
      }
    })

  })
  

  /* FUNCTIONS */
  function createErrorMessage(text, element) {
    let span = document.createElement('span');
    let spanText = document.createTextNode(text);
    span.appendChild(spanText);
    span.classList.add('trial__input-message');
    form.insertBefore(span, element.nextSibling);
  }

})
