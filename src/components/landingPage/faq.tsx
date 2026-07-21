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
    question: "Can you build exactly what I need?",
    answer:
      "Most projects are custom. Whether you need a business website, e-commerce store, SaaS platform, AI application, internal dashboard, API integration, or improvements to an existing product, we tailor the solution to your requirements instead of forcing predefined packages."
  },
  {
    question: "How much does a project usually cost?",
    answer:
      "Smaller projects typically start around ₹7,500–₹20,000, business websites from around ₹20,000, e-commerce stores from ₹35,000, SaaS MVPs from ₹60,000, and AI applications from ₹80,000. Every quote depends on the required features, integrations, timeline, and technical complexity."
  },
  {
    question: "How long will my project take?",
    answer:
      "Small improvements can often be completed within a few days to two weeks. Business websites generally take 2–4 weeks, while SaaS products, AI applications, and larger platforms typically take 4–12 weeks depending on scope."
  },
  {
    question: "I already have a website or application. Can you improve it instead of rebuilding everything?",
    answer:
      "Absolutely. We frequently work on existing products by adding new features, integrating AI, improving performance, refactoring legacy code, fixing bugs, modernizing the UI, and scaling backend infrastructure."
  },
  {
    question: "Do I need to know exactly what I want before contacting you?",
    answer:
      "No. Many clients only have an idea or business problem. We'll help define the requirements, recommend the right technical approach, estimate the investment, and create a realistic development roadmap before any work begins."
  },
  {
    question: "Will I own the project after it's completed?",
    answer:
      "Yes. Once the project is completed and payment is settled, you receive full ownership of the source code, repositories, deployment access, documentation, and all project assets."
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We can continue improving your product with bug fixes, new features, AI enhancements, infrastructure maintenance, performance optimization, security updates, and ongoing technical support through a dedicated engineering partnership."
  },
  {
    question: "Can you integrate AI into my existing business?",
    answer:
      "Yes. We build practical AI solutions including intelligent search, workflow automation, retrieval-augmented generation (RAG), AI assistants, recommendation systems, document processing, and custom machine learning integrations that solve real business problems."
  }
];

export default function Faq() {
  return (
    <>
     <div className="text-center mt-20 mb-12 md:mb-16">
      <InViewAnimation >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked <span className="text-primary">Questions</span></h2>
        </InViewAnimation>
      </div>
      <InViewAnimation>
    <Accordion className='max-w-2xl mx-auto px-2' type="multiple" defaultValue={["item-1"]}>
       {
           faqData.map((item, index) => (
               <AccordionItem key={index} value={`item-${index + 1}`}>
      <AccordionTrigger style={{textDecoration:"none"}} className='text-foreground  font-bold hover:bg-muted/80 px-4'>
        {item.question}
      </AccordionTrigger>
          <AccordionContent className='px-4 '>
          {item.answer}
        </AccordionContent>
    </AccordionItem>
  ))
}
</Accordion>
</InViewAnimation>
  </>
  )
}
