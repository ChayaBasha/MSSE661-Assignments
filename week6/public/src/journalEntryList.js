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
        block.className = 'journalEntry-block';
        //TO DO get it so you can click each tiem 
        li.addEventListener('click', function(_mouseEvent){
          window.location.href = "/journalEntry.html?id="+journalEntry._id;
        }
        ); 
         
        //   content

        const nameSpan = document.createElement('div');
        nameSpan.className = 'journalEntry-name flex-child';
        nameSpan.innerText = journalEntry.entryName;
  
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


  