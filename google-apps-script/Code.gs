/**
 * Вставьте этот код в Apps Script вашей Google-таблицы:
 * Расширения → Apps Script → вставить → Сохранить
 * Развернуть → Новое развёртывание → Веб-приложение
 *   Выполнять от имени: Меня
 *   У кого есть доступ: Все
 * Скопируйте URL веб-приложения в config.js → googleSheetsUrl
 */

const SHEET_NAME = 'data'; // имя листа; если нет — создастся

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const sheet = getOrCreateSheet_(SHEET_NAME);
    const rows = Array.isArray(payload.rows) ? payload.rows : [payload];

    rows.forEach(function (row) {
      appendRowDynamic_(sheet, row);
    });

    return json_({ ok: true, appended: rows.length });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, message: 'sweet_t Google Sheets endpoint is alive' });
}

function getOrCreateSheet_(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  return sheet;
}

function appendRowDynamic_(sheet, rowObj) {
  const headers = sheet.getLastRow() === 0
    ? []
    : sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  const keys = Object.keys(rowObj);
  let changed = false;

  keys.forEach(function (key) {
    if (headers.indexOf(key) === -1) {
      headers.push(key);
      changed = true;
    }
  });

  if (headers.length === 0) {
    return;
  }

  if (changed || sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  const values = headers.map(function (h) {
    const v = rowObj[h];
    if (v === undefined || v === null) return '';
    if (typeof v === 'object') return JSON.stringify(v);
    return v;
  });

  sheet.appendRow(values);
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
