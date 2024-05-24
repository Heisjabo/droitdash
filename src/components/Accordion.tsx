import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface AccordionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between p-3 rounded cursor-pointer hover:bg-[#504A70]"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          {icon}
          <h3 className="text-lg ml-2">{title}</h3>
        </div>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && (
        <div className="pl-6 mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;

