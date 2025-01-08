function doGet(e) {
  const SHEET = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell_arena = SHEET.getRange("A1");
  const cell_restaurant = SHEET.getRange("A2");
  const cell_budojo = SHEET.getRange("A3");
  let status;
  if (place == "arena") {
    status = cell_arena.getValue();
  } else if (place == "restaurant") {
    status = cell_restaurant.getValue();
  } else if (place == "budojo") {
    status = cell_budojo.getValue();
  } else {
    tatus = "faild";
  }
  let status_json = JSON.stringify({ status: status });
  const res = ContentService.createTextOutput(status_json);
  return res.setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const SHEET = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell_arena = SHEET.getRange("A1");
  const cell_restaurant = SHEET.getRange("A2");
  const cell_budojo = SHEET.getRange("A3");
  const place = e.postData.contents.name;
  const name = e.postData.contents.name;
  let status = "faild";
  if (place == "arena") {
    cell_arena.setValue();
    status = "success";
  } else if (place == "restaurant") {
    cell_restaurant.setValue();
    status = "success";
  } else if (place == "budojo") {
    cell_budojo.setValue();
    status = "success";
  } else {
    status = "faild";
  }
  let status_json = JSON.stringify({ status: status });
  const res = ContentService.createTextOutput(status_json);
  return res.setMimeType(ContentService.MimeType.JSON);
}
