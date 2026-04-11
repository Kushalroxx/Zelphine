import prisma from '@/lib/db'; 
import ContactsDashboard from '@/components/majorUi/ContactsDashboard';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function AdminContactsPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; password?: string }>; 
}) {
  const params = await searchParams;
  if(params.password !== process.env.ADMIN_USER_PASSWORD||params.email !== process.env.ADMIN_USER_EMAIL) { 
    return notFound();
  }
  const contacts = await prisma.customerContacts.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 ">
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Customer Contacts Admin</h1>
        <ContactsDashboard initialContacts={contacts} />
      </div>
    </div>
  );
}