import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
]

const Footer = () => {
  return (
    <footer className="bg-[var(--color-secondary-background)] text-[var(--color-primary-text)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Image
              src="/logo/footer_logo.svg"
              alt="Epworth Church Footer Logo"
              width={66}
              height={120}
            />
            <div>
              <h3 className="text-xl text-[var(--color-highlight)] font-bold">Epworth Methodist Tamil Church</h3>
              <p className="text-[var(--color-secondary-text)] text-sm">A place of worship and community</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="font-semibold text-sm mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li><Link href="/" className="text-[var(--color-secondary-text)] text-sm hover:text-[var(--color-highlight)]">Home</Link></li>
                <li><Link href="/about" className="text-[var(--color-secondary-text)] text-sm hover:text-[var(--color-highlight)]">About</Link></li>
                <li><Link href="/events" className="text-[var(--color-secondary-text)] text-sm hover:text-[var(--color-highlight)]">Events</Link></li>
                <li><Link href="/contact" className="text-[var(--color-secondary-text)] text-sm hover:text-[var(--color-highlight)]">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm mb-2">Organizations</h4>
              <ul className="space-y-1">
                <li><Link href="/sermons" className="text-[var(--color-secondary-text)] text-sm hover:text-[var(--color-highlight)]">Sunday School</Link></li>
                <li><Link href="/sermons" className="text-[var(--color-secondary-text)] text-sm hover:text-[var(--color-highlight)]">EMTeens</Link></li>
                <li><Link href="/sermons" className="text-[var(--color-secondary-text)] text-sm hover:text-[var(--color-highlight)]">MYF</Link></li>
                <li><Link href="/sermons" className="text-[var(--color-secondary-text)] text-sm hover:text-[var(--color-highlight)]">WSCS</Link></li>
                <li><Link href="/sermons" className="text-[var(--color-secondary-text)] text-sm hover:text-[var(--color-highlight)]">Methodist Men</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm mb-2">From the Church</h4>
              <ul className="space-y-1">
                <li><Link href="/events" className="text-[var(--color-secondary-text)] text-sm hover:text-[var(--color-highlight)]">Blogs</Link></li>
                <li><Link href="/events" className="text-[var(--color-secondary-text)] text-sm hover:text-[var(--color-highlight)]">Announcements</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <div className="text-start text-sm text-[var(--color-highlight)]">
            <p>&copy; {new Date().getFullYear()} Epworth Methodist Tamil Church. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-secondary-text)] hover:text-[var(--color-highlight)] transition-colors"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
