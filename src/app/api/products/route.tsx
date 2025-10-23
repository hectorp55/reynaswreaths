import { NextRequest } from 'next/server';
import { getSheetByName, sortSheets } from '../helpers/sheets';
import { ProductColumn } from '@/app/models/column';
const SHEET_NAME = "Products" as string;
const ORDER_FIELD_QUERY_KEY = "orderField" as string;
const IS_ORDER_ASC_QUERY_KEY = "isOrderAsc" as string;

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const orderField = searchParams.get(ORDER_FIELD_QUERY_KEY);
    const isOrderAsc = searchParams.get(IS_ORDER_ASC_QUERY_KEY);

    // Get Data from sheet
    const sheet = await getSheetByName(SHEET_NAME);

    // Data processing
    let rows = await sheet.getRows();
    // Sort rows if needed
    if (orderField && isOrderAsc) {
        rows = sortSheets(rows, orderField, isOrderAsc);
    }
    // Map rows
    const response = rows.map((row) => {
        return {
            name: row.get(ProductColumn.Name),
            price: Number(row.get(ProductColumn.Price)),
            image: row.get(ProductColumn.Image)
        }
    })

    // Return in correct format for UI
    return new Response(JSON.stringify(response), {
        headers: { 'Content-Type': 'application/json' },
    });
}