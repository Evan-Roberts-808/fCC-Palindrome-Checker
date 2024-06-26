const textInput = document.getElementById("text-input")
const checkButton = document.getElementById("check-btn")
const resultContainer = document.getElementById("result")

const checkPalindrome = () => {
  if (textInput.value.length == 0)
  {
    alert("Please input a value")
  }

  let polishedString = textInput.value.replace(/\W+|_/g, "").toLowerCase()
  let reversedString = polishedString.split("").reverse().join("")

  if (polishedString === reversedString)
  {
    resultContainer.innerHTML = `<p class="output">${textInput.value} is a palindrome</p>`
  }
  else
  {
    resultContainer.innerHTML = `<p class="output">${textInput.value} is not a palindrome</p>`
  }
}

checkButton.addEventListener("click", checkPalindrome)