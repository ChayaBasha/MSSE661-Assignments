const JOURNALENTRY_API = `${BASE_API_URL}/journalEntry`;

function getJournalEntries() {
  return _get(JOURNALENTRY_API);
};