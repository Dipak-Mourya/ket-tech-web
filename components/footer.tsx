export function Footer() {
  return (
    <footer className="bg-neutral-800 text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 items-center justify-center text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="font-sans font-bold text-2xl">KET Design</h3>
            <p className="font-sans text-sm leading-relaxed opacity-90">
              Best Interior Designers in Kolkata. Experience the highest level
              of transparency in interior design.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/socials/instagram.png"
                  alt="Instagram"
                  className="h-6 w-6 opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/socials/youtube.png"
                  alt="YouTube"
                  className="h-6 w-6 opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="/socials/x.png"
                  alt="Twitter/X"
                  className="h-6 w-6 opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/socials/linkedin.png"
                  alt="LinkedIn"
                  className="h-6 w-6 opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/socials/pinterest.png"
                  alt="Pinterest"
                  className="h-6 w-6 opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/socials/facebook.png"
                  alt="Facebook"
                  className="h-6 w-6 opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="font-sans font-semibold text-lg">Contact</h4>
            <div className="space-y-2 font-sans text-sm opacity-90">
              <p className="w-full flex justify-center md:justify-start">
                <a href="tel:02071177198" className="flex items-center space-x-2 hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.24.72 3.31a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c1.07.35 2.18.59 3.31.72a2 2 0 0 1 1.72 2z"></path></svg>
                  <span>020-71177198</span>
                </a>
              </p>
              <p>
                <a href="mailto:inquiry@kamsdesigner.com" className="flex items-center space-x-2 hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,6 12,13 2,6" /></svg>
                  <span>inquiry@kamsdesigner.com</span>
                </a>
              </p>
              <div className="pt-2">
                <p className="font-semibold">Business Hours:</p>
                <p>Mon–Sat: 9:30 AM – 7:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="font-sans font-semibold text-lg">Services</h4>
            <div className="space-y-2 font-sans text-sm opacity-90">
              <p className="hover:opacity-100 cursor-auto transition-opacity">
                Living Room Design
              </p>
              <p className="hover:opacity-100 cursor-auto transition-opacity">
                Bedroom Design
              </p>
              <p className="hover:opacity-100 cursor-auto transition-opacity">
                Kitchen Design
              </p>
              <p className="hover:opacity-100 cursor-auto transition-opacity">
                Wardrobe Design
              </p>
              <p className="hover:opacity-100 cursor-auto transition-opacity">
                Pooja Room Design
              </p>
            </div>
          </div>

          {/* Address & Other Brands */}
          <div className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="font-sans font-semibold text-lg">Address</h4>
            <p className="font-sans text-sm opacity-90 leading-relaxed">
              Shop No. 6, ARUN PARK, S.No.33/3, near Aditya Birla Hospital Marg,
              Datta Nagar, Thergaon, PUNE, Maharashtra 411033
            </p>
           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left w-full">
          <p className="font-sans text-sm opacity-90">
            {" "}
            © {new Date().getFullYear()} Ket Design. All rights reserved.
          </p>
          <div className="flex space-x-6 font-sans text-sm opacity-90">
            <span className="hover:opacity-100 cursor-auto transition-opacity">
              Designed & Crafted By ZapCode
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
