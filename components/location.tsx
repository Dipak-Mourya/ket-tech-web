export function Location() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-geist font-bold text-3xl md:text-4xl text-foreground mb-4">How To Reach Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1234567890123!2d88.36234567890123!3d22.572345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIwLjQiTiA4OMKwMjEnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
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
              <h3 className="font-geist font-semibold text-xl text-foreground mb-3">Visit Our Office</h3>
              <p className="font-manrope text-muted-foreground leading-relaxed">
                Shop No. 6, ARUN PARK, S.No.33/3, near Aditya Birla Hospital Marg, Datta Nagar, Thergaon, PUNE,
                Maharashtra 411033
              </p>
            </div>

            <div>
              <h3 className="font-geist font-semibold text-xl text-foreground mb-3">Contact Information</h3>
              <div className="space-y-2 font-manrope text-muted-foreground">
                <p>📞 020-71177198</p>
                <p>✉ inquiry@kamsdesigner.com</p>
              </div>
            </div>

            <div>
              <h3 className="font-geist font-semibold text-xl text-foreground mb-3">Business Hours</h3>
              <div className="space-y-1 font-manrope text-muted-foreground">
                <p>Mon–Sat: 9:30 AM – 7:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
