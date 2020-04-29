class Journal {
  journalEntries = [];
  journalEntryService;

  constructor(journalEntryService) {
    this.journalEntryService = journalEntryService;
  }

  init() {
    this.render()
  }
}

_buildJournalEntryRow = (journalEntry) => {
  const entryRow = document.createElement('li)');
  

  const nameSpan = document.createElement('div');
  nameSpan.className = 'journalEntry-name flex-child';
  nameSpan.innerText = journalEntry.entryName;

  const dateSpan = document.createElement('div');
  dateSpan.className = 'journalEntry-date flex-child';
  dateSpan.innerText = journalEntry.dateCreated;

  // add list item
 entryRow.append(nameSpan);
 entryRow.append(dateSpan);

return entryRow;
};

showJournalEntries = () => {
  const journalEntriesDiv = document.getElementById('journalEntries');
  const loadingDiv =  journalEntriesDiv.childNodes[0];
  const fragment = document.createDocumentFragment();
  const ul = document.createElement('ul');
  ul.id='journalEntry-list';

  this.journalEntries.map((journalEntry) => {
    const entryRow = this._buildJournalEntryRow(journalEntry);

    ul.appendChild(entryRow);
  });

  fragment.appendChild(ul);
journalEntriesDiv.replaceChild(fragment, loadingDiv);
};

defaultMsg = () => {
  const journalEntriesDiv = document.getElementById('journalEntries');
  const loadingDiv = journalEntriesDiv.childNodes[0];
  const listParent = document.getElementById('journalEntry-list');
  const defaultMsg = this.createMsgElement('You have no Journal Entries. Start Writing.');

  if(journalEntriesDiv) {
    journalEntriesDiv.replaceChild(defaultMsg, loadingDiv);
  } else {
    journalEntriesDiv.replaceChild(defaultMsg, listParent);
  }
};

// addJounralEntry = async (newJournalEntry) => {
//   try {
//     const {entryName, entryBody} = newJournalEntry;
//     await this.journalEntryService.addJournalEntry({entryName, entryBody});
//     this.journalEntries.push(newJournalEntry);
//   } catch (err) {
//     console.log(err);
//     alert('Could not add task at this time. Please try again later');
//     }
//   };

//   addJournalEntryHandler = () => {
  
//     const entryName = document.getElementById('entryName').value;
//     const entryBody = document.getElementById('entryBody').value;
  
//     if (!entryName) {
//       alert('Please enter a journal entry title.');
//       return;
//     }
  
//     const journalEntry = { entryName, entryBody };
//    const 

// };
// (async () => {
//     const journalEntries = await getJournalEntries();
//     console.log(journalEntries);

//     if (journalEntries.length) {
//       const entryElement = document.getElementById('journalEntries');
//       const loadingEntryElement = document.getElementById('')

//       const ul = document.createElement('ul');

//       // replace 'loading...' with list
//       entryElement.replaceChild(ul, loadingEntryElement); // <- order is important here!

//       // create the list
//       journalEntries.map((journalEntry) => {
//         // building blocks
//         const li = document.createElement('li');
//         li.className = 'journalEntry-li';
//         const block = document.createElement('div');
//         block.className = 'journalEntry-block';
//         //TO DO get it so you can click each tiem 
//         li.addEventListener('click', function(_mouseEvent){
//           window.location.href = "/journalEntry.html?id="+journalEntry._id;
//         }
//         ); 

//         //   content

//         const nameSpan = document.createElement('div');
//         nameSpan.className = 'journalEntry-name flex-child';
//         nameSpan.innerText = journalEntry.entryName;

//         const dateSpan = document.createElement('div');
//         dateSpan.className = 'journalEntry-date flex-child';
//         dateSpan.innerText = journalEntry.dateCreated;

//         // add list item
//         block.appendChild(nameSpan);
//         // block.appendChild(bodySpan);
//         block.appendChild(dateSpan);

//         li.appendChild(block);
//         ul.appendChild(li);
//       });
//     }
//   })();


