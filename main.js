const secret = 'js30'
let enter = []

window.addEventListener('keypress', pressEvent)

/**
 * This function is push keypress key to enter array
 * @param e => keypress event 
 */
function pressEvent (e) {
  if (enter.length === secret.length) enter.splice(0, 1)
  enter.push(e.key)
  checkAnswer()
}

/**
 * This function is to check the enter is same as secret
 */
function checkAnswer () {
  if (enter.length === secret.length && enter.join('') === secret) cornify_add()
}