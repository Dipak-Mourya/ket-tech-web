import { Phone, Mail } from "lucide-react";

export function Location() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            How To Reach Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-100 bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.121862843435!2d88.39115299999999!3d22.5638025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027755af72115b%3A0x3c64d4c5cb38456e!2sKET%20Design!5e0!3m2!1sen!2sin!4v1693845678901!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KET Design Location"
            />
          </div>

          <div className="space-y-4">
            <div className="group p-4 rounded-xl bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h3 className="font-sans font-semibold text-lg text-foreground mb-3 flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Visit Our Office
              </h3>
              <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                45/4, Beleghata Main Road, Kolkata - 700010, West Bengal, India
              </p>
            </div>

            <div className="group p-4 rounded-xl bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h3 className="font-sans font-semibold text-lg text-foreground mb-3 flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Contact Information
              </h3>
              <div className="space-y-2 font-sans text-sm md:text-base text-muted-foreground">
                <p className="flex items-center space-x-3 group">
                  <div className="p-1.5 bg-accent/10 rounded-lg">
                    <Phone className="h-4 w-4 text-accent" />
                  </div>
                  <span>Contact Number: 9051618504</span>
                </p>
                <p className="flex items-center space-x-3 group">
                  <div className="p-1.5 bg-accent/10 rounded-lg">
                    <Mail className="h-4 w-4 text-accent" />
                  </div>
                  <span>Email: ketdesignkolkata@gmail.com</span>
                </p>
              </div>
            </div>

            <div className="group p-4 rounded-xl bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h3 className="font-sans font-semibold text-lg text-foreground mb-3 flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Business Hours
              </h3>
              <div className="space-y-1 font-sans text-sm md:text-base text-muted-foreground">
                <p className="flex justify-between items-center">
                  <span>Monday to Saturday:</span> 
                  <span className="text-accent font-medium">9:30 AM – 7:30 PM</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Sunday:</span> 
                  <span className="text-muted-foreground/80">Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
