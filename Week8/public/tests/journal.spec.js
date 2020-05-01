const journalEntryService = new JournalEntryService();
const journal = new Journal(journalEntryService);

describe('Journal App', () => {
  it('should initialize', () => {
    spyOn(journal, 'init');
    journal.init();

    expect(journal.init).toHaveBeenCalled();
  });

  it('should add a Journal Entry', async () => {
    const newJournalEntry = { 
      entryName: 'LockDown 2020',
      entryBody: 'Day 35 in lockdown. I am starting to get a little stir crazy',
      created_date: '2020-04-29 22:50:32',
    };
    const addJournalEntryServiceSpy = spyOn(journalEntryService, 'addJournalEntry');

    expect(journal.journalEntries.length).toBe(0);

    await journal.addJournalEntry(newJournalEntry);

    expect(addJournalEntryServiceSpy).toHaveBeenCalled();
    expect(journal.journalEntries.length).toBe(1);
  });

  //This doesn't work right noew (i.e. the test, but delete works actually e2e. I think this has to do with the id and not using backend to create and serve the unique id)
  it('should delete an entry', async () => {
    const existingJournalEntry = {
        _id: 12345,
        entryName: 'LockDown 2020',
        entryBody: 'Day 35 in lockdown. I am starting to get a little stir crazy',
        created_date: '2020-04-29 22:50:32',
    };
    const deleteJournalEntryServiceSpy = spyOn(journalEntryService, 'deleteJournalEntry');

    expect(journal.journalEntries.length).toBe(1);

    await journal.deleteJournalEntry(existingJournalEntry._id);

    expect(deleteJournalEntryServiceSpy).toHaveBeenCalled();
    expect(journal.journalEntries.length).toBe(0);
  });

});