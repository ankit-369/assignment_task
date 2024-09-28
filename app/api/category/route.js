import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await axios.get('https://dummyjson.com/products/category-list');
        const category = response.data; // Get the actual data from the response
        return NextResponse.json({ category });
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error: "Failed to fetch products" });
    }
}
