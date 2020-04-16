(async () => {
    const journalEntries = await getJournalEntries();
    console.log(journalEntries);
  
    if (journalEntries.length) {
      const entryElement = document.getElementById('journalEntries');
      const loadingEntryElement = entryElement.childNodes[1];
  
      const ul = document.createElement('ul');
  
      // replace 'loading...' with list
      entryElement.replaceChild(ul, loadingEntryElement); // <- order is important here!
  
      // create the list
      journalEntries.map((journalEntry) => {
        // building blocks
        const li = document.createElement('li');
        li.className = 'journalEntry-li';
        const block = document.createElement('div');
        block.className = 'journalEntry-block';//this needs styling
  
        //   content

        const nameSpan = document.createElement('div');
        nameSpan.className = 'journalEntry-name flex-child';//this nees a new name too
        nameSpan.innerText = journalEntry.entryName;

        //TO DO Need to make it so the entries are clickable from this list and these bodies should display on new screen
  
        // const bodySpan = document.createElement('span');
        // bodySpan.className = 'journalEntry-body';
        // bodySpan.innerText = journalEntry.entryBody;
  
        const dateSpan = document.createElement('div');
        dateSpan.className = 'journalEntry-date flex-child';
        dateSpan.innerText = journalEntry.dateCreated;
  
        // add list item
        block.appendChild(nameSpan);
        // block.appendChild(bodySpan);
        block.appendChild(dateSpan);
  
        li.appendChild(block);
        ul.appendChild(li);
      });
    }
  })();