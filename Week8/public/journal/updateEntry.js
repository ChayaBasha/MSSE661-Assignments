function currentJournalEntry(journalEntryName, journalEntryBody){
    document.getElementById('entryName').value=journalEntryName;
    document.getElementById('entryBody').value=journalEntryBody;
  };

const urlParams = new URLSearchParams(window.location.search);
const journalEntryName = urlParams.get('journalEntryName');
const journalEntryBody = urlParams.get('journalEntryBody');

currentJournalEntry(journalEntryName, journalEntryBody);

const journalEntryId = urlParams.get('journalEntryId');

const doUpdateJournalEntry = function (event) {
  event.preventDefault();
  const entryName = document.getElementById('entryName').value;
  const entryBody = document.getElementById('entryBody').value;

  journalEntryService.updateJournalEntry(journalEntryId,{ 
     entryName: entryName,
     entryBody: entryBody
  })
      window.location.href = '../journal/journal.html';
};