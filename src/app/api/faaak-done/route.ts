import { NextResponse } from 'next/server';
import prisma from '@/lib/db'; 

export async function PATCH(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Contact ID is required' }, { status: 400 });
    }
    const existingContact = await prisma.customerContacts.findUnique({ where: { id } });

    if (!existingContact) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }

    const updatedContact = await prisma.customerContacts.update({
      where: { id },
      data: { isDiscussed: existingContact.isDiscussed ? false : true },
    });

    return NextResponse.json({ success: true, contact: updatedContact });
  } catch (error) {
    console.error('Error updating contact:', error);
    return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 });
  }
}