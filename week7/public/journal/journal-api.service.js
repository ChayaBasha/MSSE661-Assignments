const JOURNALENTRY_API = `${BASE_API_URL}/journalEntry`;

class JournalEntryService {
getJournalEntries() {
  return _get(JOURNALENTRY_API).then(async(res) => {
    const responseJson = await res.json();
    console.log(responseJson);
    responseJson.forEach(item => item.dateCreated = new Date(item.dateCreated).toLocaleString());
    console.log(responseJson);
    return responseJson;
});
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

deleteJournalEntry(journalEnrtyId) {
  return _delete(`${JOURNALENTRY_API}/${journalEnrtyId}`);
};
}
