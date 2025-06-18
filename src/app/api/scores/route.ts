import { NextRequest, NextResponse } from "next/server";
import { fetchTopScores, storeScore } from "../../../lib/database";

export async function GET() {
    try {
        const scores = await fetchTopScores();
        return NextResponse.json(scores);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch scores" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { name, score } = await request.json();
        const newScore = await storeScore({ name, score });
        return NextResponse.json(newScore, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to store score" }, { status: 500 });
    }
}
