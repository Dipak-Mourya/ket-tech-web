import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-800 text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 items-start justify-center text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="font-sans font-bold text-2xl">
              {" "}
              <Image
                src="/logo/profile-footer-logo.jpg"
                alt="KET Design Logo"
                width={120}
                height={48}
                priority
                className="h-12 w-full"
                style={{
                  mixBlendMode: "hard-light",
                  backgroundColor: "transparent",
                }}
                draggable={false}
              />
            </h3>
            <p className="font-sans text-sm leading-relaxed opacity-90">
              KET Design – Your Space, Our Passion.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/ketdesignkolkata/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/socials/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="h-6 w-6 opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                  draggable={false}
                />
              </a>
              <a
                href="https://www.youtube.com/@ketdesignkolkata"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/socials/youtube.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="h-6 w-6 opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                  draggable={false}
                />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/socials/x.png"
                  alt="Twitter/X"
                  width={24}
                  height={24}
                  className="h-6 w-6 opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                  draggable={false}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ket-design-45274029b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/socials/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="h-6 w-6 opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                  draggable={false}
                />
              </a>
              <a
                href="https://pin.it/4MoYLGMxV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/socials/pinterest.png"
                  alt="Pinterest"
                  width={24}
                  height={24}
                  className="h-6 w-6 opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                  draggable={false}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063962445536"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/socials/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="h-6 w-6 opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                  draggable={false}
                />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="font-sans font-semibold text-lg">Contact</h4>
            <div className="space-y-2 font-sans text-sm opacity-90">
              <p className="w-full flex justify-center md:justify-start">
                <a
                  href="tel:9051618504"
                  className="flex items-center space-x-2 hover:opacity-100 transition-opacity"
                >
                  <Phone className="h-4 w-4 inline-block opacity-90" />
                  <span>+91 9051618504</span>
                </a>
              </p>
              <p>
                <a
                  href="mailto:inquiry@kamsdesigner.com"
                  className="flex items-center space-x-2 hover:opacity-100 transition-opacity justify-center md:justify-start"
                >
                  <Mail className="h-4 w-4 inline-block opacity-90" />
                  <span>inquiry@kamsdesigner.com</span>
                </a>
              </p>
              <div className="pt-2">
                <p className="font-semibold mb-4">Address:</p>
                <p>45/4, Beleghata Main Road, Kolkata - 700010, West Bengal, India</p>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="font-sans font-semibold text-lg">Services</h4>
            <div className="space-y-2 font-sans text-sm opacity-90">
              <p className="hover:opacity-100 cursor-auto transition-opacity">
                Residential Interiors
              </p>
              <p className="hover:opacity-100 cursor-auto transition-opacity">
                Office & Workspace Design
              </p>
              <p className="hover:opacity-100 cursor-auto transition-opacity">
                Retail & Commercial Interiors
              </p>
              <p className="hover:opacity-100 cursor-auto transition-opacity">
                Modular Kitchens & Wardrobes
              </p>
              <p className="hover:opacity-100 cursor-auto transition-opacity">
                3D Design & Visualization
              </p>
              <p className="hover:opacity-100 cursor-auto transition-opacity">
                Turnkey Projects
              </p>
            </div>
          </div>

          {/* Address & Other Brands */}
          <div className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="font-sans font-semibold text-lg">Business Hours</h4>
            <p className="font-sans text-sm opacity-90 leading-relaxed">
              Monday: 9:30 AM – 7:30 PM
              <br />
              Tuesday: 9:30 AM – 7:30 PM
              <br />
              Wednesday: 9:30 AM – 7:30 PM
              <br />
              Thursday: 9:30 AM – 7:30 PM
              <br />
              Friday: 9:30 AM – 7:30 PM
              <br />
              Saturday: 9:30 AM – 7:30 PM
              <br />
              Sunday: Closed
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
              Designed & Crafted By <a href="https://dipakdev.in" target="_blank"><strong>Dipak</strong></a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
