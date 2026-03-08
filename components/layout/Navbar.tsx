"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Dropdown } from '@/components/ui/Dropdown'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'From the Church', href: '/events' },
  { name: 'Contact', href: '/contact' },
]

// Organization items shown in dropdown
const organizationLinks = [
  { name: 'Sunday School', href: '/sermons' },
  { name: 'EMTeens', href: '/sermons' },
  { name: 'MYF', href: '/sermons' },
  { name: 'WSCS', href: '/sermons' },
  { name: 'Methodist Men', href: '/sermons' },
]

// From the Church items shown in dropdown
const fromChurchLinks = [
  { name: 'Blogs', href: '/events' },
  { name: 'Announcements', href: '/events' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-xs border-b border-gray-200 flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/logo/Epworth_logo.webp"
                  alt="Epworth Logo"
                  width={190}
                  height={48}
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <Link
                href="/"
                className={`px-4 py-2 rounded-full text-sm font-normal transition-colors ${
                  isActive('/')
                    ? 'text-[var(--color-highlight)] bg-[var(--color-highlight)]/10'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 rounded-full text-sm font-normal transition-colors ${
                  isActive('/about')
                    ? 'text-[var(--color-highlight)] bg-[var(--color-highlight)]/10'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                About
              </Link>
              <Dropdown
                trigger="Organizations"
                items={organizationLinks}
              />
              <Dropdown
                trigger="From the Church"
                items={fromChurchLinks}
              />
              <Link
                href="/contact"
                className={`px-4 py-2 rounded-full text-sm font-normal transition-colors ${
                  isActive('/contact')
                    ? 'text-[var(--color-highlight)] bg-[var(--color-highlight)]/10'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/')
                  ? 'text-[var(--color-highlight)] bg-[var(--color-highlight)]/10'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/about')
                  ? 'text-[var(--color-highlight)] bg-[var(--color-highlight)]/10'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              About
            </Link>
            <div className="pt-2 pb-1">
              <span className="block px-3 py-2 text-sm font-semibold text-gray-900">
                Organizations
              </span>
            </div>
            {organizationLinks.map((org) => (
              <Link
                key={org.name}
                href={org.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                {org.name}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <span className="block px-3 py-2 text-sm font-semibold text-gray-900">
                From the Church
              </span>
            </div>
            {fromChurchLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-[var(--color-highlight)] bg-[var(--color-highlight)]/10'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar