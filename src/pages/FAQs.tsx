import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I book an appointment with Dr Shoaib?", a: "You can book an appointment by calling +92 3002278796, clicking the WhatsApp button on this website, or visiting the clinic directly in Bahawalpur during consultation hours (Mon–Sat, 9:00 AM – 11:00 PM)." },
  { q: "What should I bring for my first consultation?", a: "Bring your medical records, test reports, X-rays or MRIs related to your condition, a list of current medications, and details of any past surgeries or allergies." },
  { q: "What is minimally invasive surgery and what are its benefits?", a: "Minimally invasive surgery uses small incisions instead of large cuts. This reduces pain, minimizes scarring, shortens hospital stays, and speeds up recovery compared to traditional open surgery." },
  { q: "How long is the recovery after knee replacement?", a: "Most patients begin walking with assistance within 24–48 hours after surgery. Full recovery typically takes 3–6 months, with physiotherapy playing a crucial role in restoring strength and mobility." },
  { q: "Does Dr Shoaib treat sports injuries?", a: "Yes. Dr Shoaib specializes in sports injury treatment including ACL tears, meniscus injuries, rotator cuff tears, and other athletic injuries. He uses both surgical and non-surgical approaches." },
  { q: "Is physiotherapy mandatory after surgery?", a: "Physiotherapy is highly recommended as it helps restore movement, strength, and flexibility. Skipping physiotherapy can slow healing and may lead to joint stiffness or reduced function." },
  { q: "What areas does the clinic serve?", a: "The clinic is based in Bahawalpur and serves patients from nearby cities including Rahim Yar Khan, Multan, Lodhran, Bahawalnagar, and surrounding areas." },
  { q: "Will I need a blood transfusion during surgery?", a: "Most orthopaedic surgeries do not require blood transfusion. However, major procedures like hip or knee replacements may require it depending on individual circumstances. This will be discussed before surgery." },
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
