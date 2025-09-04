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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
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

          <div className="space-y-6">
            <div>
              <h3 className="font-sans font-semibold text-xl text-foreground mb-3">
                Visit Our Office
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                45/4, Beleghata Main Road, Kolkata - 700010, West Bengal, India
              </p>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-xl text-foreground mb-3">
                Contact Information
              </h3>
              <div className="space-y-2 font-sans text-muted-foreground">
                <p className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-foreground" />
                  <span>Contact Number: 9051618504</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-foreground" />
                  <span>Email: ketdesignkolkata@gmail.com</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-xl text-foreground mb-3">
                Business Hours
              </h3>
              <div className="space-y-1 font-sans text-muted-foreground">
                <p>Monday to Saturday: 9:30 AM – 7:30 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
