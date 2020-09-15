let entries = [];// Creates the array which stores the data from the user. 

const entriesWrapper = document.querySelector('#entries');

function addNewEntry(newEntry) {
  entriesWrapper.removeChild(entriesWrapper.firstElementChild);//this removes the first li 
  const listItem = document.createElement('li');// This creates the li element
  const listValue = document.createTextNode(newEntry); //This creates the text node.
  listItem.appendChild(listValue);//Places the list value in the LI

  entriesWrapper.appendChild(listItem);//Grabs the UL and appends a new child element
}

function handleSubmit(event){
  event.preventDefault()
  const entry = Number(document.querySelector('#entry').value);
  if(!entry) return; // This will not allow entry of blank
  document.querySelector('form').reset();// This will clear the form after each entry
  entries.push(entry);// This adds the last entry to the back end of array
  addNewEntry(entry)//Function call each time we get a new entry
}


const form = document.querySelector('form').addEventListener('submit', handleSubmit);
