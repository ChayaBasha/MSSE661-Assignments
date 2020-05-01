function showJournalEntryName(journalEntryName){
  const journalEntryNameElement = document.getElementById('journalEntryName');
  if(journalEntryName) {
    journalEntryNameElement.textContent=journalEntryName;
  }
};

function showJournalEntryBody(journalEntryBody) {
  const journalEntryBodyElement = document.getElementById('journalEntryBody');
  if(journalEntryBody) {
    journalEntryBodyElement.textContent=journalEntryBody;
  }
};



const urlParams = new URLSearchParams(window.location.search);
const journalEntryName = urlParams.get('journalEntryName');
const journalEntryBody = urlParams.get('journalEntryBody');
// const journalEntryDate = urlParams.get('journalEntryDate');

showJournalEntryName(journalEntryName);
showJournalEntryBody(journalEntryBody);


// function showJournalEntry(journalEntryName, journalEntryBody, journalEntryDate) {
//   document.getElementById('entryName').value = journalEntryName;
  
// } 

// showJournalEntry(journalEntryName, journalEntryBody, journalEntryDate);
