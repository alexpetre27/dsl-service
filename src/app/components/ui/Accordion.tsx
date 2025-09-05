'use client';

import { useState } from 'react';
import Icon from './Icon';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 last:mb-0 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <Icon 
          name="chevronDown" 
          size={20} 
          className={`text-accent transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index];
      } else {
        return prev.includes(index) ? [] : [index];
      }
    });
  };

  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.includes(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}