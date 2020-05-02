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
const journalEntryId = urlParams.get('journalEntryId');

showJournalEntryName(journalEntryName);
showJournalEntryBody(journalEntryBody);


function doEditJournalEntry() {
window.location.href = `./updateEntry.html?journalEntryId=${encodeURIComponent(journalEntryId)}&journalEntryName=${encodeURIComponent(journalEntryName)}&journalEntryBody=${encodeURIComponent(journalEntryBody)}`;
};

const updateButton = document.getElementById('updateButton');
if(updateButton) {
  updateButton.onclick = () => {
    doEditJournalEntry();
  }
}



