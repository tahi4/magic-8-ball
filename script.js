let options = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes – definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Don’t count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"
  ]

  const shake = document.getElementById("button")
  const input = document.getElementById("input")
  let eight = document.getElementById("eight")
  let answer = document.getElementById("answer")
  

   shake.addEventListener("click", function() {
    
    if(input.value.length < 1){ 
        alert("Please type question") } else{
      input.value = ""
     eight.textContent = " "
      let prediction = RandomNumber()
      answer.textContent =  options[prediction]
    }
}
  )


  function RandomNumber(){
    return Math.floor(Math.random()*options.length)
}
 