import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY.replace(
  /\\n/g,
  "\n",
);

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export const fetchMetaData = async (row) => {
  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY,
  });
  // loads document properties and worksheets
  await doc.loadInfo();
  // const sheet = doc.sheetsByIndex[0];
  const sheet = doc.sheetsById[0];
  const rows = await sheet.getRows();

  return rows;
};

export const fetchstemming = async (row) => {
  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY,
  });
  // loads document properties and worksheets
  await doc.loadInfo();
  // const sheet = doc.sheetsByIndex[1];
  const sheet = doc.sheetsById[1268600256];
  const rows = await sheet.getRows();

  return rows;
};

export default doc;
