import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import mailerInstance from "@/lib/sendMail";

export async function POST(request: Request) {
    const data = await request.json();
    const { name, email, phone, description, projectType } = data;

    if (!name || !email || !description || !projectType) {
        return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    try {
        const newContact = await prisma.customerContacts.create({
            data: {
                name,
                email,
                phone,
                description,
                projectType,
            },
        });
        setTimeout(async() => {
        try {
            await mailerInstance.sendContactMail(email, name, phone, description, projectType);
        } catch (error) {
        }
        }, 0);
        return NextResponse.json({ message: "Contact created successfully." }, { status: 201 });
    } catch (error) {
        console.error("Error creating contact:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

}