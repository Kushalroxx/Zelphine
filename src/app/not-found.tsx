'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, FileQuestion, Home } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'nextjs-toploader/app';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-background px-4 md:px-8">
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold text-foreground/5 opacity-[0.03] select-none sm:text-[20rem]">
        404
      </div>

      <motion.div
        className="relative z-10 flex max-w-lg flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted/50 ring-1 ring-border shadow-sm">
           <FileQuestion className="h-7 w-7 text-muted-foreground" />
        </div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Path Not Found
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          We could not locate this page. It may have been deprecated or moved to a new place.
        </p>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
            <Link href="/">
              <Home className="h-4 w-4" />
              Return to Base
            </Link>
          </Button>

          <Button onClick={e=>router.back()} variant="outline" size="lg" className="w-full gap-2 sm:w-auto hover:bg-gray-200/60">
             <ArrowLeft className="h-4 w-4" />
              Back
            
          </Button>
        </div>

      </motion.div>

      <div className="absolute bottom-8 flex items-center gap-2 text-xs font-mono text-muted-foreground opacity-50">
        <span className="h-2 w-2 rounded-full bg-yellow-500/50"></span>
        Status: Client-Side Routing Error
      </div>
    </div>
  );
}