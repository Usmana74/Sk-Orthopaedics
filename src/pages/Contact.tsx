import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MapPin, Clock, Mail, Send, Award } from "lucide-react";
import hospitalVisual from "@/assets/Hospital.webp"; 

const ContactPage = () => {
  const whatsappUrl = "https://wa.me/923002278796?text=Hello%20Dr.%20Shoaib%2C%20I%20would%20like%20to%20book%20an%20appointment.%0A%0APatient%20Name%3A%0AClinic%20to%20Visit%3A%0APrimary%20Problem%3A";

  return (
    <main className="bg-white">
      {/* 1. Header Hero */}
      <section className="pt-24 pb-12 bg-slate-50 border-b border-slate-100">
        <div className="container-wide px-6 text-center">
          <motion.h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Precision in Motion. <br />
            Excellence in <span className="text-primary">ORTHOPAEDICS.</span>
          </motion.h1>
          <div className="flex justify-center items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase">
            <Award className="w-4 h-4" />
            Fellowship Trained Sports & Arthroscopic Surgeon
          </div>
        </div>
      </section>

      {/* 2. Action Strip */}
      <div className="container-wide px-6 -mt-8 relative z-20">
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <a href="tel:+923002278796" className="flex items-center justify-center gap-3 bg-white border-2 border-primary text-primary py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all shadow-lg">
            <Phone className="w-5 h-5" /> Call: +92 300 2278796
          </a>
          <a href={whatsappUrl} target="_blank" className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg">
             Book via WhatsApp
          </a>
        </div>
      </div>

      {/* 3. Info & Form Section */}
      <section className="py-20">
        <div className="container-wide max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-10">
              <ScrollReveal direction="left">
                <h3 className="font-heading text-2xl font-bold mb-8">Clinical Hours & Location</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="text-primary w-6 h-6 shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>Midwest Hospital</strong><br />
                      Trust Colony, Street No. 3, Bahawalpur
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="text-primary w-6 h-6 shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Monday – Saturday<br />9:00 AM – 11:00 PM
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="text-primary w-6 h-6 shrink-0" />
                    <p className="text-sm text-muted-foreground">info@skorthopaedics.com</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8">
              <ScrollReveal direction="right">
                <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <input type="text" placeholder="Your Name" className="w-full p-4 rounded-2xl bg-white border-none text-sm outline-none focus:ring-2 focus:ring-primary/20" />
                      <input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-2xl bg-white border-none text-sm outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <textarea placeholder="Describe your orthopaedic concern..." rows={4} className="w-full p-4 rounded-2xl bg-white border-none text-sm outline-none focus:ring-2 focus:ring-primary/20 resize-none" />
                    <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                      <Send className="w-4 h-4" /> Send Appointment Request
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Surgical Visual & Map */}
      <section className="pb-24 container-wide">
        <div className="grid md:grid-cols-2 gap-6 h-[450px]">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img src={hospitalVisual} alt="Surgical Theatre" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-end p-10">
              <p className="text-white font-bold text-lg">Advanced Surgical Facility</p>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
            <iframe 
              src="https://www.google.com/maps/dir//MID-WEST+HOSPITAL+-+Trust+Colony,+Bahawalpur,+Trust+colony,+Street+No.3,+corner,+Bahawalpur,+63100,+Pakistan/@29.0902458,71.4893011,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x393b91da655623a1:0xd84bcc8df0d10bf8!2m2!1d71.6749718!2d29.3879797?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D`[cite" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
            />
          </div>
        </div>
      </section>
    </main>
  );
};