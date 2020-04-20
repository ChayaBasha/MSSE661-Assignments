const JOURNALENTRY_API = `${BASE_API_URL}/journalEntry`;

function getJournalEntries() {
  return _get(JOURNALENTRY_API).then(res => res.json())
};

function addJournalEntry(entryData) {
  _post(JOURNALENTRY_API, entryData);
};

function getJournalEntry(journalEntryId) {
  return _get(`${JOURNALENTRY_API}/${journalEntryId}`).then(res => res.json());
}

function deleteEntry (journalEnrtyId) {
  return _delete(`${JOURNALENTRY_API}/${journalEnrtyId}`);
}