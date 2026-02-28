import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, ShieldCheck, Award } from "lucide-react";
import doctorSeated from "@/assets/doctor-seated.jpg";
import doctorSurgery from "@/assets/doctor-surgery-blue.jpg";
import hospitalImage from "@/assets/hospital-interior.webp";

// ─── Credential Badge SVGs (Kept as is) ────────────────────────────────────────
const AIMCBadge = () => (
  
    
    AIMC
    
    Allama Iqbal
    Medical College
    MBBS
);

const FCPSBadge = () => (
  
    
    FCPS
    
    College of Physicians
    & Surgeons Pakistan
    Trauma & Ortho
);

const ATLSBadge = () => (
  
    
    ATLS
    
    Advanced Trauma
    Life Support
    USA Certified
);

const MRCSBadge = () => (
  
    
    MRCS-I
    
    Royal College of
    Surgeons
    Edinburgh, UK
);

const IrishBadge = () => (
  
    
    IRISH
    MEDICAL
    
    Council Member
    Ireland
);

const MayoBadge = () => (
  
    
    MAYO
    HOSPITAL
    
    Ex-Orthopaedic
    Surgeon
    Lahore
);

// Changed PAO to PAS
const PASBadge = () => (
  
    
    PAS
    
    Pakistan
    Arthroplasty
    Society
    Member
);

const PASSBadge = () => (
  
    
    PASSS
    
    Pakistan Arthroscopy
    & Sports Surgery
    Society
    Member
);

const badges = [
  { component: <AIMCBadge />, label: "MBBS", sub: "Allama Iqbal Medical College" },
  { component: <FCPSBadge />, label: "FCPS", sub: "Trauma & Orthopaedics" },
  { component: <ATLSBadge />, label: "ATLS", sub: "USA Certified" },
  { component: <MRCSBadge />, label: "MRCS-I", sub: "Edinburgh, UK" },
  { component: <IrishBadge />, label: "Irish Medical Council", sub: "Registered Member" },
  { component: <MayoBadge />, label: "Mayo Hospital", sub: "Lahore — Ex-Surgeon" },
  { component: <PASBadge />, label: "PAS", sub: "Pakistan Arthroplasty Society" },
  { component: <PASSBadge />, label: "PASSS", sub: "Pakistan Arthroscopy & Sports Surgery" },
];

const About = () => {
  const whatsappUrl = "https://wa.me/923002278796?text=Hello%20Dr.%20Shoaib%2C%20I%20would%20like%20to%20book%20a%20consultation.";

  return (
    
      {/* ─── 1. Clean Hero Banner ─── */}
      

        

          
            Surgical Excellence
          
          
About Our Practice

          

            Meet Dr. Shoaib Aslam Kurerr — a specialist dedicated to restoring mobility through 
            advanced orthopaedic techniques and fellowship-trained precision.
          

        

      


      {/* ─── 2. Bio Section ─── */}
      

        

          

            
              {/* Removed overlay text from image group */}
              

                
              

            

            
              

                

                   Specialist Profile
                

                

                  Dr. Shoaib Aslam Kurerr
                

                

Bringing international surgical excellence to the heart of Punjab, Dr. Shoaib Aslam Kurerr is a specialized Orthopaedic Surgeon with a prestigious Fellowship in Sports Surgery and Arthroscopy. He focuses on advanced 'keyhole' techniques to ensure faster recovery and superior outcomes for patients with knee and shoulder injuries.                

                
                {/* Responsive Stats Grid */}
                

                  {[
                    { val: "5000+", lab: "Patients" },
                    { val: "8+", lab: "Years" },
                    { val: "400+", lab: "Surgeries" }
                  ].map((s, i) => (
                    

                      
{s.val}

                      
{s.lab}

                    

                  ))}
                


                
                  Book Clinical Consultation
                
              

            
          

        

      


      {/* ─── 3. Credential Grid — Updated Pattern ─── */}
      

        

          

            
Verified Qualifications

            

          

          {/* ── NEW PATTERN: Alternating horizontal card rows ── */}
          

            {badges.map((badge, i) => (
              
                {/* Left accent strip */}
                

                {/* Badge icon */}
                

                  
{badge.component}

                

                {/* Divider */}
                

                {/* Text */}
                

                  
{badge.label}

                  
{badge.sub}

                

                {/* Right verified tick */}
                

                  ✓
                

              
            ))}
          

        

      


      {/* ─── 4. Fellowship Highlight (Mobile Optimized) ─── */}
      

        {/* px-0 on mobile for full-bleed effect */}
        

          
            {/* Rounded corners removed on mobile */}
            

              

                

                  
Pinnacle of Training

                  

                    POA Fellowship in Sports Surgery & Arthroscopy
                  

                  

                    This prestigious qualification from the Pakistan Orthopaedic Association certifies advanced competency in complex arthroscopic procedures. It places Dr. Shoaib among an elite group of surgeons capable of performing high-precision "keyhole" repairs.
                  

                  

                    

                       Advanced Arthroscopy
                    

                    

                       Sports Medicine
                    

                    

                       POA — Pakistan Orthopaedic Association
                    

                    

                       Joint Replacement Fellowship of Trauma & Orthopaedics
                    

                    

                       Ex-Surgeon at Mayo Hospital, Lahore
                    

                    

                       King Edward Medical University, Lahore
                    

                  

                

                

                  {/* Added object-top to fix cropping */}
                  
                  

                

              

            

          
        

      


      {/* ─── 5. Facilities Section ─── */}
      

        

          

            
              

                
              

            
            
              
Midwest Hospital Facilities

              

                Operating within Midwest Hospital, Bahawalpur, our practice utilizes high-definition arthroscopic towers and modern sterilization protocols matching international safety standards.
              

              
                {[
                  "Advanced HD Arthroscopic Towers",
                  "Intraoperative C-arm Imaging",
                  "Dedicated Orthopaedic Recovery Wing"
                ].map((item, i) => (
                  
                     {item}
                  
                ))}
              

            
          

        

      
        ); };  export default About;
