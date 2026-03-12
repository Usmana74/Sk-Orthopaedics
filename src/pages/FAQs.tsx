import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I book an appointment with Dr Shoaib?",
    a: "You can schedule a consultation by calling +92 300 2278796 or by using the WhatsApp booking option available on this website. Patients from across Pakistan can contact the clinic team to arrange consultations and surgical evaluations."
  },
  {
    q: "What should I bring for my first consultation?",
    a: "Please bring any previous medical records, prescriptions, X-rays, MRI scans, or laboratory reports related to your condition, along with a list of current medications and details of any previous surgeries."
  },
  {
    q: "What is minimally invasive surgery and what are its benefits?",
    a: "Minimally invasive surgery uses small incisions and specialized instruments, often through arthroscopic 'keyhole' techniques. This approach reduces pain, minimizes scarring, shortens hospital stays, and allows patients to recover faster compared to traditional open surgery."
  },
  {
    q: "How long is recovery after knee replacement surgery?",
    a: "Most patients begin standing or walking with assistance within 24–48 hours after knee replacement surgery. Full recovery generally takes 3–6 months, with physiotherapy playing a crucial role in restoring strength, flexibility, and mobility."
  },
  {
    q: "Does Dr Shoaib treat sports injuries?",
    a: "Yes. Dr Shoaib has extensive experience in treating sports injuries such as ACL tears, meniscus injuries, rotator cuff tears, ligament damage, and joint instability using advanced arthroscopic and minimally invasive techniques."
  },
  {
    q: "Is physiotherapy necessary after orthopaedic surgery?",
    a: "Physiotherapy is strongly recommended after most orthopaedic procedures as it helps restore joint movement, muscle strength, and flexibility, ensuring the best possible recovery and long-term mobility."
  },
  {
    q: "Where do patients come from for treatment?",
    a: "Dr Shoaib treats patients from across Pakistan who seek specialized care for orthopaedic conditions, sports injuries, and joint replacement procedures."
  },
  {
    q: "Will I need a blood transfusion during surgery?",
    a: "Most orthopaedic procedures do not require a blood transfusion. However, major surgeries such as hip or knee replacements may occasionally require it depending on the patient’s condition, and this is always discussed before surgery."
  }
];

const FAQs = () => {
  return (
    <main>
      <section className="bg-primary py-20">
        <div className="container-wide px-4 md:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Find answers to common questions about our services and procedures.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <ScrollReveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl px-6 card-shadow border-none">
                  <AccordionTrigger className="font-heading text-base font-semibold text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default FAQs;
