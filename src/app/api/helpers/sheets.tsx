import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { ProductColumn } from '@/app/models/column';
const SHEET_ID = process.env.GOOGLE_SHEET_ID as string;
const SERVICE_EMAIL = process.env.GOOGLE_SERVICE_EMAIL as string;
const PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY as string;
const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets.readonly',
];

export async function getSheetByName(sheetName: string) {
    // Setup auth settings
    const serviceAuth = new JWT({
        email: SERVICE_EMAIL,
        key: PRIVATE_KEY,
        scopes: SCOPES,
      });
    const doc = new GoogleSpreadsheet(SHEET_ID, serviceAuth);
    
    // Fetch google sheet data
    await doc.loadInfo(); 
    const sheet = doc.sheetsByTitle[sheetName];
    if (!sheet) {
        throw new Error(`Sheet with title "${sheetName}" not found.`);
    }

    return sheet;
}

export function sortSheets(rows: GoogleSpreadsheetRow<Record<string, any>>[], sortField: string, isSortAsc: string) {
    const isAsc = isSortAsc.toLowerCase() === "true";
    const column = ProductColumn[sortField as keyof typeof ProductColumn]
    const sortedRows = rows.sort((a, b) => {
        const sortOrder = a.get(column) - b.get(column);
        return isAsc ? sortOrder : sortOrder * -1;
    });

    return sortedRows;
}