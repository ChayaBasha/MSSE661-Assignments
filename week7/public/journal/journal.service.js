class Journal {
  journalEntries = [];
  journalEntryService;

  constructor(journalEntryService) {
    this.journalEntryService = journalEntryService;  //Based on some research and help this seems to be like the Accept() method for a visting class 
  }

  init() {
    this.show();
  }

  _buildJournalEntryRow = (journalEntry) => {
    const entryRow = document.createElement('li');
    entryRow.className = "journalEntry-block";


    const nameSpan = document.createElement('div');
    // nameSpan.className = 'journalEntry-name flex-child';
    nameSpan.innerText = journalEntry.entryName;

    const dateSpan = document.createElement('div');
    // dateSpan.className = 'journalEntry-date flex-child';
    dateSpan.innerText = journalEntry.dateCreated;

    const deleteButton = document.createElement('button');
    deleteButton.className = "fa fa-minus";
    deleteButton.onclick = () => {
      this.deleteJournalEntry(journalEntry._id).then(res => {
        if (res && res.status === 200) { entryRow.remove();}
      });
    };

    entryRow.append(nameSpan);
    entryRow.append(dateSpan);
    entryRow.append(deleteButton);
    return entryRow;
  };

  _showJournalEntries = () => {
    const journalEntriesDiv = document.getElementById('journalEntries');
    const loadingDiv = journalEntriesDiv.childNodes[0];
    const fragment = document.createDocumentFragment();
    const ul = document.createElement('ul');
    ul.id = 'journalEntry-list';

    this.journalEntries.map((journalEntry) => {
      const entryRow = this._buildJournalEntryRow(journalEntry);

      ul.appendChild(entryRow);
    });

    fragment.appendChild(ul);
    journalEntriesDiv.replaceChild(fragment, loadingDiv);
  };


  addJournalEntry = async (newJournalEntry) => {
    try {
      const { entryName, entryBody } = newJournalEntry;
      await this.journalEntryService.addJournalEntry({ entryName, entryBody });
      this.journalEntries.push(newJournalEntry);
    } catch (err) {
      console.log(err);
      alert('Could not add task at this time. Please try again later');
    }
  };

  _addJournalEntryHandler = () => {

    const entryName = document.getElementById('entryName').value;
    const entryBody = document.getElementById('entryBody').value;

    if (!entryName) {
      alert('Please enter a journal entry title.');
      return;
    }

    const newJournalEntry = { entryName, entryBody };

    this.addJournalEntry(newJournalEntry);
    window.location.href = 'journal.html';
  };

  deleteJournalEntry = async (journalEntryId) => {
  
    const res = await this.journalEntryService.deleteJournalEntry(journalEntryId);
    
    if (res && res.status === 200) {
      this.journalEntries = this.journalEntries.filter((journalEntry) => journalEntry._id !== journalEntryId);
      alert('Journal Entry was deleted');
    } else {
      throw new Error("Could not delete at this time");
    }
    return res;
  
  };

  show = async () => {
    const journalEntries = await this.journalEntryService.getJournalEntries();

    try {
      if (journalEntries.length) {
        this.journalEntries = journalEntries;
        this._showJournalEntries();
      
      }
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }
};