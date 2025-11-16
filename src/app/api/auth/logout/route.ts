import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
     try {
        (await cookies()).delete("session");
        return NextResponse.json({ message: "Logout Successful" }, { status: 200 })
     } catch (error) {
        return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 })
     }
}