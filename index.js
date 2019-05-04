var count = 0;
function takeANumber(line){
  count += 1;
  line.push(count);
  return `Welcome, You are number ${line.length}.`
}
function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  }
  var numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};
