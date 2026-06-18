const SPREADSHEET_ID = "COLE_AQUI_O_ID_DA_PLANILHA";
const SHEET_NAME = "Leads";
const EXPECTED_TOKEN = "TROQUE_ESTE_TOKEN";

function doPost(e) {
  try {
    if (!e || !e.parameter || e.parameter.token !== EXPECTED_TOKEN) {
      return jsonResponse({ ok: false, message: "Token invalido." }, 403);
    }

    const payload = JSON.parse(e.postData.contents || "{}");
    const name = String(payload.name || "").trim();
    const phone = String(payload.phone || "").trim();

    if (!name || !phone) {
      return jsonResponse({ ok: false, message: "Nome e telefone sao obrigatorios." }, 400);
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = getOrCreateSheet(spreadsheet, SHEET_NAME);

    sheet.appendRow([
      new Date(),
      name,
      phone,
      String(payload.profile || ""),
      String(payload.message || ""),
      String(payload.source || "")
    ]);

    return jsonResponse({ ok: true, message: "Lead registrado." }, 200);
  } catch (error) {
    return jsonResponse({ ok: false, message: String(error) }, 500);
  }
}

function getOrCreateSheet(spreadsheet, sheetName) {
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Data", "Nome", "Telefone", "Perfil", "Mensagem", "Origem"]);
  }

  return sheet;
}

function jsonResponse(data, statusCode) {
  return ContentService
    .createTextOutput(JSON.stringify({ ...data, statusCode }))
    .setMimeType(ContentService.MimeType.JSON);
}
