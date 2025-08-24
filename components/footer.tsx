import { Facebook, Instagram, Linkedin, Paintbrush as Pinterest, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-geist font-bold text-2xl">KET Design</h3>
            <p className="font-manrope text-sm leading-relaxed opacity-90">
              Best Interior Designers in Kolkata. Experience the highest level of transparency in interior design.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Youtube className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Pinterest className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Facebook className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-geist font-semibold text-lg">Contact</h4>
            <div className="space-y-2 font-manrope text-sm opacity-90">
              <p>📞 020-71177198</p>
              <p>✉ inquiry@kamsdesigner.com</p>
              <div className="pt-2">
                <p className="font-semibold">Business Hours:</p>
                <p>Mon–Sat: 9:30 AM – 7:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h4 className="font-geist font-semibold text-lg">Services</h4>
            <div className="space-y-2 font-manrope text-sm opacity-90">
              <p className="hover:opacity-100 cursor-pointer transition-opacity">Living Room Design</p>
              <p className="hover:opacity-100 cursor-pointer transition-opacity">Bedroom Design</p>
              <p className="hover:opacity-100 cursor-pointer transition-opacity">Kitchen Design</p>
              <p className="hover:opacity-100 cursor-pointer transition-opacity">Wardrobe Design</p>
              <p className="hover:opacity-100 cursor-pointer transition-opacity">Pooja Room Design</p>
            </div>
          </div>

          {/* Address & Other Brands */}
          <div className="space-y-4">
            <h4 className="font-geist font-semibold text-lg">Address</h4>
            <p className="font-manrope text-sm opacity-90 leading-relaxed">
              Shop No. 6, ARUN PARK, S.No.33/3, near Aditya Birla Hospital Marg, Datta Nagar, Thergaon, PUNE,
              Maharashtra 411033
            </p>
            <div className="pt-2">
              <p className="font-geist font-semibold text-sm">Other Brands:</p>
              <p className="font-manrope text-sm opacity-90">Life2Home, Fabshades</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-manrope text-sm opacity-70">© 2025 KET Design | Designed & Crafted By A2 Digital</p>
          <div className="flex space-x-6 font-manrope text-sm opacity-70">
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Terms & Conditions</span>
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
