function shout(string) {
  return string.toUpperCase(
    )
}
function whisper(string){
  return string.toLowerCase(
    )
}
function logShout(string){
<<<<<<< HEAD
 console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}



function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
  return "I can't hear you!";
}
  if (string.toUpperCase() === string){
  return "YES INDEED!";
}
  if ("I love you, Grandma." === string){
  return "I love you, too.";
}
=======
  const spy = expect.spyOn(console, 'log').andCallThrough()
  console.log()
  return string.toUpperCase(
    )

    logShout(spy)


    console.log.restore()
>>>>>>> 8004cdeda1196d6ae3d563da88542056f938a612
}