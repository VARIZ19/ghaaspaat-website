/**
 * Ghaas Paat — Partner Form → Google Sheets
 *
 * SETUP:
 * 1. Create a new Google Sheet (e.g. "Ghaas Paat Partner Applications")
 * 2. Add headers in row 1: Timestamp | Name | Email | Contact | Occupation | Description
 * 3. Extensions → Apps Script → paste this file → Save
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL → add to Vercel as GOOGLE_SHEETS_WEBHOOK_URL
 */

const SHEET_NAME = "Partner Applications";

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Email",
      "Contact",
      "Occupation",
      "Description",
    ]);
    sheet.getRange(1, 1, 1, 6).setFontWeight("bold");
  }
  return sheet;
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getSheet_();

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.contact || "",
      data.occupation || "",
      data.description || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "Ghaas Paat partner webhook is active." }),
  ).setMimeType(ContentService.MimeType.JSON);
}
