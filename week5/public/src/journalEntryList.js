(async () => {
    const journalEntries = await getJournalEntries();
    console.log(journalEntries);
  
    if (jounralEntries.length) {
      const entryElement = document.getElementById('jounralEntries');
      const loadingEntryElement = entryElement.childNodes[1];
  
      const ul = document.createElement('ul');
  
      // replace 'loading...' with list
      entryElement.replaceChild(ul, loadingEntryElement); // <- order is important here!
  
      // create the list
      journalEntries.map((journalEntry) => {
        // building blocks
        const li = document.createElement('li');
        li.className = 'task-item';//this needs a name
        const block = document.createElement('div');
        block.className = 'task-item-block';//this needs a new name too
  
        //   content

        const nameSpan = document.createElement('span');
        nameSpan.className = 'task-name';//this nees a new name too
        nameSpan.innerText = journalEntry.name;
  
        const bodySpan = document.createElement('span');
        bodySpan.className = 'task-status';
        bodySpan.innerText = journalEntry.entryBody;
  
        const dateSpan = document.createElement('span');
        dateSpan.className = 'task-date';
        dateSpan.innerText = journalEntry.dateCreated;
  
        // add list item
        block.appendChild(nameSpan);
        block.appendChild(bodySpan);
        block.appendChild(dateSpan);
  
        li.appendChild(block);
        ul.appendChild(li);
      });
    }
  })();