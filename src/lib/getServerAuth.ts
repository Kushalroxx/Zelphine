import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getServerAuth() {
    try {
        const cookiesStore = await cookies(); 
    const sessionToken = cookiesStore.get("session")?.value;

    if (!sessionToken) {
        return null;
    }
    const decoded = jwt.verify(sessionToken, process.env.JWT_SECRET!) as { email: string };
    console.log("Decoded JWT:", decoded);
    
    return decoded;
    } catch (error) {
        return null;
    }
}