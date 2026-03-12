import ScrollReveal from "./ScrollReveal";
import { Link } from "react-router-dom";
import doctorCloseup from "@/assets/doctor-suit-closeup.jpg";

const DoctorIntro = () => {
  return (
    <section className="section-padding section-gradient">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src={doctorCloseup}
                alt="Dr Shoaib Aslam Kurerr - Orthopaedic Surgeon in Bahawalpur"
                className="rounded-2xl w-full max-w-md mx-auto lg:mx-0 object-cover aspect-[4/5]"
                style={{ boxShadow: "var(--shadow-hero)" }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Meet the Doctor</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dr Shoaib Aslam Kurerr
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
Dr. Shoaib Aslam Kurerr is an experienced orthopaedic and sports surgery specialist serving patients across Pakistan. With an extra Fellowship in Sports Surgery and Arthroscopy, he specializes in sports injury treatment, minimally invasive arthroscopic (keyhole) surgery, and knee and shoulder joint replacement.

He has trained and worked at leading institutions including Mayo Hospital Lahore and King Edward Medical University, bringing advanced orthopaedic care to patients in Bahawalpur and throughout Pakistan.</p>.
              <div className="space-y-2 mb-8">
                {[
                  "MBBS (A.I.M.C.)",
                  "FCPS (Trauma & Orthopaedics)",
                  "ATLS (USA)",
                  "MRCS-I (UK – Edinburgh)",
                  "Member of Irish Medical Council",
                ].map((cred) => (
                  <div key={cred} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    {cred}
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-all"
              >
                Read Full Profile →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DoctorIntro;
