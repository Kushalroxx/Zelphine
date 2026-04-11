'use client';

import { useState, useMemo, useEffect } from 'react';
import MarkDoneButton from '@/components/majorUi/MarkDonebutton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  projectType: string;
  isDiscussed: boolean;
  description: string;
  createdAt: Date;
};

export default function ContactsDashboard({ initialContacts }: { initialContacts: Contact[] }) {
  const [statusFilter, setStatusFilter] = useState<string>('pending');
  const [sortBy, setSortBy] = useState<string>('newest');
 const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const filteredAndSortedContacts = useMemo(() => {
    let result = [...initialContacts];

    if (statusFilter === 'discussed') {
      result = result.filter((contact) => contact.isDiscussed);
    } else if (statusFilter === 'pending') {
      result = result.filter((contact) => !contact.isDiscussed);
    }

    result.sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      if (sortBy === 'oldest') {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return result;
  }, [initialContacts, statusFilter, sortBy]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 p-4">
        <div className="flex flex-col gap-1.5 w-full sm:w-[200px]">
          <label className="text-xs font-medium text-muted-foreground">Status</label>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Contacts</SelectItem>
              <SelectItem value="pending">Not Discussed</SelectItem>
              <SelectItem value="discussed">Discussed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5 w-full sm:w-[200px]">
          <label className="text-xs font-medium text-muted-foreground">Sort By</label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="name">Name (A-Z)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredAndSortedContacts.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground bg-card border rounded-lg shadow-sm">
          No contacts match your current filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAndSortedContacts.map((contact) => (
            <div 
              key={contact.id} 
              className="flex flex-col bg-card text-card-foreground p-5 rounded-xl border shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">{contact.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {isMounted && new Date(contact.createdAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <MarkDoneButton id={contact.id} isDiscussed={contact.isDiscussed} />
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium w-16 text-muted-foreground">Email:</span> 
                  <span className="truncate">{contact.email}</span>
                </div>
                {contact.phone && (
                  <div className="flex items-center gap-2">
                    <span className="font-medium w-16 text-muted-foreground">Phone:</span> 
                    <span>{contact.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className="font-medium w-16 text-muted-foreground">Project:</span> 
                  <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md text-xs font-medium">
                    {contact.projectType}
                  </span>
                </div>
              </div>
              
              <div className="mt-auto">
                <span className="text-xs font-medium text-muted-foreground block mb-1.5">Description:</span>
                <p className="whitespace-pre-wrap break-words bg-muted text-muted-foreground p-3 rounded-md text-sm border">
                  {contact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}