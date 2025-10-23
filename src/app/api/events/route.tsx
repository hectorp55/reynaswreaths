import { EventColumn } from '@/app/models/column';
import { getSheetByName } from '../helpers/sheets';
const SHEET_NAME = "Events" as string;

export async function GET() {
    const sheet = await getSheetByName(SHEET_NAME);

    // Data processing
    const rows = await sheet.getRows();
    const response = rows.map((row) => {
        return {
            date: row.get(EventColumn.Date),
            name: row.get(EventColumn.Name),
            time: row.get(EventColumn.Time),
            location: row.get(EventColumn.Location),
        }
    })

    // Return in correct format for UI
    return new Response(JSON.stringify(response), {
        headers: { 'Content-Type': 'application/json' },
    });
}