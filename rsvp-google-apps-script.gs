// Kajal & Rahul – RSVP collector.
// Paste this whole file into Extensions → Apps Script of your Google Sheet, then Deploy → New deployment → Web app
// (Execute as: Me, Who has access: Anyone). Copy the Web app URL into RSVP_SHEET_URL in index.html.

const HEADERS = [
  'Received', 'Name', 'Phone', 'Attending', 'Guests',
  'Mehndi – Tue 1 Dec, 10:00 AM · Rajasthan Sewa Samiti',
  'Haldi – Wed 2 Dec, 10:00 AM · Rajasthan Sewa Samiti',
  'Wedding – Wed 2 Dec, 7:00 PM · Sabuj Kalyan Sangha'
];
const EVENTS = ['Mehndi', 'Haldi', 'Wedding'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    const p = e.parameter;
    const yes = p.attending === 'Yes';
    const evs = (p.events || '').split(',');
    const guests = yes ? Number(p.guests) || 1 : 0;
    // each event column holds the number of people coming to it, so the column can be summed
    sheet.appendRow([new Date(), p.name, "'" + p.phone, p.attending, guests]
      .concat(EVENTS.map(ev => yes && evs.indexOf(ev) !== -1 ? guests : '')));
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}
