# RockPaperScissor
A rock paper scissor game as an odin project.
For this project i had to figure out how to get the user's input,getting computer input
# Getting Computer Input
To get the computer input, I used a function <br />
which has a random Math function like this
> const arr = ['rock','paper','scissor'] <br />
> let randomNumber = Math.floor((Math.random() * arr.length))

randomNumber will then give me <br />
number between 0 and 2 , which can be indexes of my array block

now using that:

`
return arr[randomNumber]
`
which will return various selection on every refresh.

For this project i used Vanilla JS, Some <br />
tailwind CSS For posiitioning my elements,
and also plain HTML.

**Restart Button**

> The restart button will only appear after <br/>
> Five(5) points have been earned by either the computer <br/>
> or the User playing.

**The Rock Paper Scissor Buttons**
1. There are three buttons and choosing either one of them means you are choosing you choice
2. the choice you chose will be reflected on  your left hand side, and the computer's <br />
on the right hand side.
