// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(let i = 0; i < musicians.length ; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}


function johnLennonFacts(facts) {
<<<<<<< HEAD
  let array = [];
  let i = 0;
  while(i < facts.length) {
    array.push(facts[i] + "!!!")
    i++
  }
  return array
}

function iLoveTheBeatles(n) {
  let array = [];
  do {
    array.push("I love the Beatles!")
    n++
  } while(n < 15) 
  return array
=======
  let i = 0;
  function myIterator() {
  return i += 1;
  }
  do {
    facts[i] = `${facts[i]}!!!`;
  } while(myIterator() + 1 < facts.length) {
    facts[i] = `${facts[i]}!!!`;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array = [];
  function myIterator() {
    n += 1
  }
  do {
    array.push("I love the Beatles!")
  } while(myIterator() < 15) {
    array.push("I love the Beatles!")
  }
  
>>>>>>> ecc46f410a8612e2cbf5d913551cff7c989e5686
}