const goal = 25 ;
let entries = [];// Creates the array which stores the data from the user. 
const entriesWrapper = document.querySelector('#entries');
document.querySelector('#target').innerText = goal;

function addNewEntry(newEntry) {
  entriesWrapper.removeChild(entriesWrapper.firstElementChild);//this removes the first li 
  const listItem = document.createElement('li');// This creates the li element
  const listValue = document.createTextNode(newEntry.toFixed(1)); //This creates the text node.
  listItem.appendChild(listValue);//Places the list value in the LI

  entriesWrapper.appendChild(listItem);//Grabs the UL and appends a new child element
}
// Reducer function will take all entries and create 1 total.
function reducer(total, currentValue){
  return total + currentValue;
}
// generates the totals on the "total" line
function calcTotal(entries) {
  const totalValue = entries.reduce(reducer).toFixed(1);
  document.getElementById('total').innerText = totalValue;
  document.getElementById('progressTotal').innerText = totalValue;
}

// Calculates average
function calcAverage() {
  const average = (entries.reduce(reducer) / entries.length).toFixed(1);
  document.getElementById('average').innerText = average;
}

// calc weekly high
function weeklyHigh() {
  const high = Math.max(...entries);
  document.getElementById('high').innerText = high;
}

// Progress circle
function calcGoal() {
  const totalValue = entries.reduce(reducer).toFixed(1);
  const completedPercent  = totalValue / (goal /100);
  const progressCircle = document.querySelector('#progressCircle');
  if(completedPercent > 100) completedPercent === 100;
  progressCircle.style.background =  `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;
}

function handleSubmit(event){
  event.preventDefault()
  const entry = Number(document.querySelector('#entry').value);
  if(!entry) return; // This will not allow entry of blank
  document.querySelector('form').reset();// This will clear the form after each entry
  entries.push(entry);// This adds the last entry to the back end of array
  addNewEntry(entry)//Function call each time we get a new entry
  calcTotal(entries)
  calcAverage();
  weeklyHigh();
  calcGoal();
}

const form = document.querySelector('form').addEventListener('submit', handleSubmit);
