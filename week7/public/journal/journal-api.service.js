const JOURNALENTRY_API = `${BASE_API_URL}/journalEntry`;

class JournalEntryService {
getJournalEntries() {
  return _get(JOURNALENTRY_API).then(res => res.json())
};

addJournalEntry(entryData) {
  _post(JOURNALENTRY_API, entryData);
};

getJournalEntry(journalEntryId) {
  console.log(journalEntryId);
  if (journalEntryId) {
    return _get(`${JOURNALENTRY_API}/${journalEntryId}`).then(res => res.json());
  }
}

deleteEntry(journalEnrtyId) {
  return _delete(`${JOURNALENTRY_API}/${journalEnrtyId}`);
};
}
