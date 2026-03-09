"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
}

interface DropdownProps {
  trigger: string;
  items: DropdownItem[];
}

export function Dropdown({ trigger, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 rounded-full text-sm font-normal text-[var(--foreground)] hover:bg-[var(--accent-3)] hover:text-[var(--foreground)] transition-colors focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg shadow-xs ring-1 ring-black/5 focus:outline-none z-50"
          style={{ backgroundColor: 'var(--accent-3)' }}
        >
          <div className="py-1">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--accent-2)] hover:text-[var(--foreground)]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
