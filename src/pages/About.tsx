import ScrollReveal from "@/components/ScrollReveal";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const credentials = [
  "MBBS (A.I.M.C.)",
  "FCPS (Trauma & Orthopaedics)",
  "ATLS (USA)",
  "MRCS-I (UK – Edinburgh)",
  "Member of Irish Medical Council",
  "Member of PAS & PASSS",
  "Ex-Orthopaedic Surgeon, Mayo Hospital Lahore",
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-wide px-4 md:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Learn about Dr Shoaib Aslam Kurerr's journey and commitment to orthopaedic excellence.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <img src={doctorPortrait} alt="Dr Shoaib Aslam Kurerr" className="rounded-2xl w-full max-w-md mx-auto object-cover aspect-[4/5]" style={{ boxShadow: "var(--shadow-hero)" }} />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Orthopaedic Surgeon</p>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Dr Shoaib Aslam Kurerr</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dr Shoaib Aslam Kurerr is a distinguished orthopaedic surgeon specializing in knee and shoulder surgery, sports injuries, and joint replacement procedures. With years of rigorous training both locally and internationally, he brings world-class surgical expertise to patients in Bahawalpur and nearby cities.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  His patient-first philosophy ensures that every individual receives personalized care — from initial consultation through surgery and rehabilitation. Dr Shoaib believes in transparent communication, evidence-based treatment, and minimally invasive techniques wherever possible.
                </p>

                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Qualifications & Credentials</h3>
                <div className="space-y-3">
                  {credentials.map((c) => (
                    <div key={c} className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-foreground text-sm">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
