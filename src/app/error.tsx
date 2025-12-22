'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RotateCcw, ArrowLeft, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming you have shadcn button

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  
  useEffect(() => {
    console.error("System Error Log:", error);
  }, [error]);

  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-background px-4 md:px-8">
      
      <div className="absolute inset-0 z-0 h-full w-full "></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500/20 opacity-20 blur-[100px]"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 flex max-w-lg flex-col items-center text-center"
      >
        
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600 ring-1 ring-red-100 dark:bg-red-900/20 dark:text-red-400 dark:ring-red-900/40">
           <TriangleAlert className="h-6 w-6" />
        </div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Execution Interrupted
        </h1>

        <p className="mb-8 text-muted-foreground leading-relaxed">
          The application encountered an architectural anomaly. 
          Our engineering monitors have flagged this event.
        </p>

        {error.message && (
            <div className="mb-8 w-full rounded-md border bg-muted/50 px-4 py-3 text-xs font-mono text-muted-foreground break-all">
                Error: {error.message.slice(0, 80)}{error.message.length > 80 && "..."}
            </div>
        )}

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Button 
            onClick={() => reset()} 
            size="lg" 
            className="w-full gap-2 sm:w-auto"
          >
            <RotateCcw className="h-4 w-4" />
            Reload Module
          </Button>

          <Link href="/" className="w-full sm:w-auto">
            <Button 
                variant="outline" 
                size="lg" 
                className="w-full gap-2 hover:bg-gray-200/50"
            >
                <ArrowLeft className="h-4 w-4" />
                Return Home
            </Button>
          </Link>
        </div>

      </motion.div>

      <div className="absolute bottom-8 text-xs text-muted-foreground font-mono opacity-50">
        System Status: <span className="text-red-500">Unstable</span> | Error Code: 500
      </div>

    </div>
  );
}