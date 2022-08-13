# RockPaperScissor
A rock paper scissor game as an odin project.
For this project i had to figure out how to get the user's input,getting computer input
# Getting Computer Input
To get the computer input, I used a function which has a random Math function like this
`const arr = ['rock','paper','scissor']
let randomNumber = Math.floor((Math.random() * arr.length))
`
randomNumber will then give me number between 0 and 2 , which can be indexes of my array block

now using that:

`
return arr[randomNumber]
`
which will return various selection on every refresh.
