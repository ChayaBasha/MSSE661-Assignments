(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const journalEntryId = urlParams.get("id");
    const journalEntry = await getJournalEntry(journalEntryId);
    console.log(journalEntry);
    
    if (journalEntry) {
        const journalEntryElement = document.getElementById('journalEntry');
        const loadingElement = journalEntryElement.childNodes[1];
        
        const block = document.createElement('div');
  
      // replace 'loading...' with list
      journalEntryElement.replaceChild(block, loadingElement); // <- order is important here!
  
      const journalEntryTitle = document.createElement('h1');
      journalEntryTitle.innerText = journalEntry.entryName;
    
      const journalEntryBody = document.createElement('p');
      journalEntryBody.innerText = journalEntry.entryBody;

      block.appendChild(journalEntryTitle);
      block.appendChild(journalEntryBody);
    };
})();
