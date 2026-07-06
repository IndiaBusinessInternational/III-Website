/**
 * III Website Members — Google Sheet logger (Google Apps Script)
 * ==============================================================
 * Receives every REGISTRATION and PAYMENT from the India Intelligence
 * International website and appends it to a Google Sheet, so you have
 * a permanent member & payment register to verify UTRs against GPay.
 *
 * ONE-TIME SETUP (about 2 minutes):
 *   1. Go to  https://script.google.com  (signed in as
 *      indiabusinessinternational@gmail.com).
 *   2. New project  →  delete the sample code  →  paste ALL of this file.
 *   3. Click  Deploy  →  New deployment.
 *   4. Type = Web app.
 *        Description : III Website Members logger
 *        Execute as  : Me (indiabusinessinternational@gmail.com)
 *        Who has access : Anyone
 *   5. Deploy  →  Authorize access  →  allow.
 *   6. Copy the  Web app URL  (ends in /exec) and paste it into
 *      CONFIG.GAS_URL near the top of the website's index.html.
 *
 * A spreadsheet named "III Website Members" is created automatically in
 * your Drive on the first hit, with two tabs: Registrations, Payments.
 */

var SS_NAME = 'III Website Members';

function _sheet(tab, headers) {
  var files = DriveApp.getFilesByName(SS_NAME);
  var ss = files.hasNext()
    ? SpreadsheetApp.open(files.next())
    : SpreadsheetApp.create(SS_NAME);
  var sh = ss.getSheetByName(tab) || ss.insertSheet(tab);
  if (sh.getLastRow() === 0) sh.appendRow(headers);
  return sh;
}

function doPost(e) {
  try {
    var b = JSON.parse(e.postData.contents);
    var now = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd-MMM-yyyy HH:mm:ss');

    if (b.type === 'registration') {
      _sheet('Registrations', ['Logged At', 'Name', 'Email', 'Mobile', 'Business', 'Address', 'City', 'State', 'PIN', 'GSTIN', 'Platforms', 'Registered At'])
        .appendRow([now, b.name || '', b.email || '', "'" + (b.mobile || ''), b.biz || '', b.address || '', b.city || '', b.state || '', "'" + (b.pin || ''), b.gstin || '', b.platforms || '', b.registeredAt || '']);
    } else if (b.type === 'payment') {
      _sheet('Payments', ['Logged At', 'Name', 'Email', 'Mobile', 'UTR', 'Amount (Rs)', 'Paid At', 'Valid Till', 'Verified in GPay?'])
        .appendRow([now, b.name || '', b.email || '', "'" + (b.mobile || ''), "'" + (b.utr || ''), b.amount || '', b.paidAt || '', b.validTill || '', 'PENDING']);
    }

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('III Website Members logger is live.');
}
