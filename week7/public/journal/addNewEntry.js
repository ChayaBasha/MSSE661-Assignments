const doAddJournalEntry = async (event) => {
    event.preventDefault();
  
    const entryName = document.getElementById('entryName').value;
    const entryBody = document.getElementById('entryBody').value;
  
    if (!entryName) {
      alert('Please enter a journal entry title.');
      return;
    }
  
    const res = await addJournalEntry({ entryName, entryBody });
  
    window.location.href = 'journal.html'

};