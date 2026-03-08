import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui"
import InViewAnimation from '../majorUi/inViewAnimation'
const faqData = [
  {
    question: "What types of products do you build?",
    answer:
      "We build modern web products including SaaS platforms, AI-powered tools, internal dashboards, startup MVPs, and high-performance marketing websites."
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Simple websites usually take 1–2 weeks, while full platforms or SaaS MVPs typically take 3–6 weeks depending on the scope and features."
  },
  {
    question: "Do you work with startups or solo founders?",
    answer:
      "Yes. Many of our projects are built for startups and solo founders launching their first product. We help turn early ideas into working MVPs."
  },
  {
    question: "Will I own the code after the project is finished?",
    answer:
      "Yes. After final payment, you receive full ownership and access to the codebase, deployment setup, and project assets."
  },
  {
    question: "What happens after launch?",
    answer:
      "We provide post-launch support, updates, and improvements. You can request ongoing maintenance or reach out whenever new features are needed."
  },
  {
    question: "Can you give examples of project types and pricing?",
    ishtml: true,
    answer: `<div>
      <ul class="list-disc pl-4 space-y-1">
        <li><strong>Landing Pages</strong> – typically ₹6K to ₹15K depending on design and sections.</li>
        <li><strong>E-commerce Stores</strong> – usually ₹18K to ₹40K based on features and integrations.</li>
        <li><strong>Admin Dashboards / Internal Tools</strong> – around ₹20K to ₹45K depending on roles and analytics.</li>
        <li><strong>SaaS MVPs</strong> – generally starting from ₹30K+ depending on custom features and APIs.</li>
      </ul>
      <p class="mt-2">
        Final pricing depends on project scope and timeline. We provide a clear quote after a short discussion.
      </p>
    </div>`
  }
];

export default function Faq() {
  return (
    <>
     <div className="text-center mt-20 mb-12 md:mb-16">
      <InViewAnimation >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        </InViewAnimation>
      </div>
      <InViewAnimation>
    <Accordion className='max-w-2xl mx-auto px-2' type="multiple" defaultValue={["item-1"]}>
       {
           faqData.map((item, index) => (
               <AccordionItem key={index} value={`item-${index + 1}`}>
      <AccordionTrigger style={{textDecoration:"none"}} className='text-foreground text-base md:text-lg font-bold hover:bg-muted/80 px-4'>
        {item.question}
      </AccordionTrigger>

      {item.ishtml ? (
          <AccordionContent>
        <div
          className='px-4'
          dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </AccordionContent>
      ) : (
          <AccordionContent className='px-4 text-sm md:text-base'>
          {item.answer}
        </AccordionContent>
      )}
    </AccordionItem>
  ))
}
</Accordion>
</InViewAnimation>
  </>
  )
}
