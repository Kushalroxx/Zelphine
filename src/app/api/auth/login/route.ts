import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { email, password } = data;

        if (!email || !password) {
            return NextResponse.json({ message: "Email and Password are required" }, { status: 400 })
        }

        const serverEmail = process.env.ADMIN_USER_EMAIL;
        const serverPassword = process.env.ADMIN_USER_PASSWORD;

        if (!serverEmail || !serverPassword) {
            throw new Error("Server credentials are not set");
        }

        if (email !== serverEmail || password !== serverPassword) {
            return NextResponse.json({ message: "Invalid Email or Password" }, { status: 401 })
        }
        const sessionToken = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '1d' });
        (await cookies()).set("session", sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 1,
            path: "/",
        });
        return NextResponse.json({ message: "Login Successful" }, { status: 200 })
    } catch (error) {
        console.error("Error logging in:", error);
        return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 })
    }
}