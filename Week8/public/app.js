const journalEntryService = new JournalEntryService();
const journal = new Journal(journalEntryService);

journal.init();