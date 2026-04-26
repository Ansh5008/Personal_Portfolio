import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Shield, 
  Cpu, 
  Code, 
  Network, 
  Server, 
  Lock, 
  Eye, 
  Search, 
  Database,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

// Image imports
import imgSmartIds from "@/assets/projects/smart-ids.png";
import imgLunarLandslide from "@/assets/projects/lunar-landslide.png";
import imgImageCaptioning from "@/assets/projects/image-captioning.png";
import imgCyberSurveillance from "@/assets/projects/cyber-surveillance.png";
import imgReverseEngineering from "@/assets/projects/reverse-engineering.png";
import imgSecurityAutomation from "@/assets/projects/security-automation.png";

const FADE_IN: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message received. Protocol initiated.", {
        description: "I will review your inquiry and respond shortly."
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b-2 border-foreground bg-background/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter">AK.</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Capabilities</a>
            <a href="#projects" className="hover:text-primary transition-colors">Deployments</a>
            <a href="#experience" className="hover:text-primary transition-colors">Log</a>
          </div>
          <Button asChild variant="default" className="border-2 border-foreground rounded-none shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
            <a href="#contact">Initiate Contact</a>
          </Button>
        </div>
      </nav>

      <main className="pt-16">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 border-b-2 border-foreground overflow-hidden">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-primary/5 blur-3xl rounded-full -z-10 pointer-events-none" />
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="col-span-1 lg:col-span-8 flex flex-col justify-center">
              <motion.div variants={FADE_IN} className="flex items-center gap-4 mb-6">
                <div className="h-2 w-2 bg-primary animate-pulse" />
                <span className="font-mono text-sm font-bold tracking-widest text-primary uppercase">Status: Online</span>
              </motion.div>
              
              <motion.h1 variants={FADE_IN} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
                ANSH<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70" style={{ WebkitTextStroke: "2px currentColor" }}>KUMAR</span>
              </motion.h1>
              
              <motion.div variants={FADE_IN} className="flex flex-wrap gap-4 mb-8 text-lg md:text-xl font-medium tracking-tight">
                <span className="bg-foreground text-background px-4 py-1 border-2 border-foreground">AI Security Researcher</span>
                <span className="border-2 border-foreground px-4 py-1">CTF Enthusiast</span>
                <span className="bg-primary text-primary-foreground px-4 py-1 border-2 border-primary">Security Tool Builder</span>
              </motion.div>
              
              <motion.p variants={FADE_IN} className="text-xl md:text-2xl max-w-2xl text-muted-foreground mb-12 leading-relaxed">
                I build AI security systems and offensive-security tooling. At the intersection of adversarial machine learning and practical cyber defense — shipping tools that detect, test, and harden real-world systems.
              </motion.p>
              
              <motion.div variants={FADE_IN} className="flex flex-wrap gap-6">
                <Button size="lg" className="h-14 px-8 text-lg border-2 border-foreground bg-primary hover:bg-primary/90 text-primary-foreground shadow-md rounded-none hover:-translate-y-1 hover:shadow-lg transition-all group" asChild>
                  <a href="#projects">
                    View Deployments <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-foreground rounded-none shadow-sm hover:-translate-y-1 hover:shadow-md transition-all" asChild>
                  <a href="/resume.txt" download>
                    <Download className="mr-2" /> Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
            
            <div className="col-span-1 lg:col-span-4 hidden lg:flex flex-col justify-end pb-12">
              <div className="border-l-2 border-foreground pl-6 space-y-8">
                <div>
                  <h3 className="font-mono text-xs text-muted-foreground mb-1 uppercase tracking-widest">Location</h3>
                  <p className="font-bold">New Delhi, India</p>
                </div>
                <div>
                  <h3 className="font-mono text-xs text-muted-foreground mb-1 uppercase tracking-widest">CTF Rank</h3>
                  <p className="font-bold">#21 Worldwide</p>
                </div>
                <div>
                  <h3 className="font-mono text-xs text-muted-foreground mb-1 uppercase tracking-widest">Specialty</h3>
                  <p className="font-bold">LLM Security</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <div className="w-[2px] h-16 bg-foreground/20 overflow-hidden">
              <div className="w-full h-1/2 bg-primary animate-[shimmer_2s_infinite]" />
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-6 border-b-2 border-foreground">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <motion.h2 variants={FADE_IN} className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
                  DECONSTRUCT.<br />
                  <span className="text-primary">RECONSTRUCT.</span><br />
                  SECURE.
                </motion.h2>
                <motion.div variants={FADE_IN} className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Security is not a product — it's a mindset. In a world where AI is woven into critical systems, the only researchers who matter are those who understand both the attack and the intelligence behind it.
                  </p>
                  <p>
                    I'm Ansh Kumar, an AI Security Researcher and CTF enthusiast based in New Delhi. I build tools at the intersection of Machine Learning and Cybersecurity — from ML-powered intrusion detection systems to vulnerability assessment CLIs and RAG retrieval audit frameworks.
                  </p>
                  <p>
                    My methodology: map the adversary, model the threat, then build intelligent defenses that adapt. I don't just use tools — I engineer the systems that power tomorrow's security operations.
                  </p>
                </motion.div>
                
                <motion.div variants={FADE_IN} className="mt-12 flex items-center gap-8 border-y-2 border-foreground py-6">
                  <div>
                    <div className="text-4xl font-bold">#21</div>
                    <div className="text-sm font-mono text-muted-foreground uppercase mt-1">Global CTF Rank</div>
                  </div>
                  <div className="w-[2px] h-12 bg-foreground" />
                  <div>
                    <div className="text-4xl font-bold">26+</div>
                    <div className="text-sm font-mono text-muted-foreground uppercase mt-1">Projects Built</div>
                  </div>
                  <div className="w-[2px] h-12 bg-foreground" />
                  <div>
                    <div className="text-4xl font-bold">EC-Council</div>
                    <div className="text-sm font-mono text-muted-foreground uppercase mt-1">Nexus AI CTF</div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div variants={FADE_IN} className="relative h-[600px] border-2 border-foreground bg-secondary/50 p-8 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 border-b-2 border-l-2 border-foreground bg-primary/10" />
                <Terminal className="w-12 h-12 text-primary" />
                
                <div className="font-mono text-sm space-y-2">
                  <p className="text-muted-foreground"># Execution Log</p>
                  <p><span className="text-primary">{`>`}</span> init user_profile</p>
                  <p className="text-green-600">[OK] Profile loaded</p>
                  <p><span className="text-primary">{`>`}</span> fetch research_focus</p>
                  <p>-- LLM Security & Adversarial ML</p>
                  <p>-- Exploit Development & Vuln Analysis</p>
                  <p><span className="text-primary">{`>`}</span> fetch affiliations</p>
                  <p>-- EC-Council Nexus CTF Community</p>
                  <p><span className="text-primary">{`>`}</span> scan current_projects</p>
                  <p className="animate-pulse">-- Scanning...</p>
                  <p>-- Smart IDS/IPS (ML-powered detection)</p>
                  <p>-- VulnScope CLI (vulnerability assessment)</p>
                  <p><span className="text-primary">{`>`}</span> _</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS / CAPABILITIES */}
        <section id="skills" className="py-24 px-6 border-b-2 border-foreground bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="flex justify-between items-end mb-16 border-b-2 border-foreground pb-8"
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">CAPABILITIES.</h2>
              <p className="font-mono text-sm hidden md:block">/// TACTICAL ARSENAL</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={STAGGER}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border-2 border-foreground bg-foreground gap-[2px] p-[2px]"
            >
              {[
                { name: "Reverse Engineering", icon: Terminal },
                { name: "AI / Machine Learning", icon: Cpu },
                { name: "Red Teaming", icon: Shield },
                { name: "Python / Rust", icon: Code },
                { name: "Vulnerability Research", icon: Search },
                { name: "Cloud Security", icon: Server },
                { name: "Threat Intelligence", icon: Eye },
                { name: "Network Architecture", icon: Network },
                { name: "Cryptography", icon: Lock },
                { name: "OSINT", icon: Database },
              ].map((skill, i) => (
                <motion.div 
                  key={i}
                  variants={FADE_IN}
                  className="bg-background p-6 aspect-square flex flex-col justify-center items-center text-center hover:bg-primary hover:text-primary-foreground transition-colors group cursor-crosshair"
                >
                  <skill.icon className="w-10 h-10 mb-4 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
                  <h3 className="font-bold font-mono text-sm uppercase tracking-tight">{skill.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 border-b-2 border-foreground">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="mb-16"
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">DEPLOYMENTS.</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">High-impact engineering across offensive security and artificial intelligence.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "CyberShield IDS/IPS",
                  desc: "ML-powered Network Intrusion Detection System built with Streamlit. Features real-time packet capture, attack simulation, CICIDS2017 analytics, RandomForest classifier (99.87% accuracy), and Supabase authentication.",
                  tags: ["Python", "Streamlit", "Supabase", "ML", "CICIDS2017"],
                  img: imgSmartIds,
                  github: "https://github.com/Ansh5008/Smart_IntrusionDetectionSystem"
                },
                {
                  title: "VulnScope",
                  desc: "High-speed modular vulnerability assessment CLI inspired by RustScan and Gobuster. Features async port scanning, directory brute-force, subdomain enumeration, SQLi detection, and plugin-based extensibility.",
                  tags: ["Python", "asyncio", "CLI", "Security"],
                  img: imgLunarLandslide,
                  github: "https://github.com/Ansh5008/vulnscope"
                },
                {
                  title: "RAG Retrieval Auditor",
                  desc: "Retrieval integrity audit framework that evaluates quality, completeness, and trustworthiness of document retrieval in RAG pipelines — validating evidence before LLM answer generation.",
                  tags: ["Python", "LLMs", "Ollama", "sentence-transformers"],
                  img: imgReverseEngineering,
                  github: "https://github.com/Ansh5008/rag_retrieval_audit"
                },
                {
                  title: "RoadRescue Platform",
                  desc: "Premium full-stack on-road vehicle breakdown assistance platform with real-time SOS location sharing, OpenStreetMap reverse geocoding, and mechanic distance sorting using the Haversine formula.",
                  tags: ["HTML/CSS/JS", "Supabase", "Geolocation API"],
                  img: imgCyberSurveillance,
                  github: "https://github.com/Ansh5008/OnRoad-Vehicle-Breakdown-Assitance"
                }
              ].map((project, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={FADE_IN}
                  className="group relative border-2 border-foreground bg-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] border-b-2 border-foreground overflow-hidden bg-muted">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold tracking-tight mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="rounded-none border-foreground font-mono text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button className="rounded-none border-2 border-foreground shadow-sm bg-foreground text-background hover:bg-foreground/90" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" /> Source
                        </a>
                      </Button>
                      <Button variant="outline" className="rounded-none border-2 border-foreground shadow-sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" /> Details
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & TIMELINE */}
        <section id="experience" className="py-24 px-6 border-b-2 border-foreground bg-foreground text-background">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="mb-16"
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-background">OPERATIONAL LOG.</h2>
            </motion.div>
            
            <div className="relative border-l-2 border-background/20 pl-8 ml-4 space-y-16">
              {[
                {
                  year: "2024",
                  role: "CTF Competitor — #21 Worldwide",
                  org: "EC-Council Nexus AI Security CTF",
                  details: "Achieved global rank #21 in the EC-Council Nexus AI Security CTF, competing against security researchers worldwide. Demonstrated expertise in AI-driven attack strategies and adversarial ML exploitation techniques."
                },
                {
                  year: "2023 — PRESENT",
                  role: "Security Tool Developer",
                  org: "Independent / Open Source",
                  details: "Built and published VulnScope, a modular vulnerability assessment CLI. Developed CyberShield IDS/IPS as an ML-powered network intrusion detection system with Streamlit and Supabase, and created the RAG Retrieval Audit framework for LLM security research."
                }
              ].map((exp, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_IN}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-4 h-4 bg-primary border-2 border-background" />
                  <div className="font-mono text-primary font-bold tracking-widest text-sm mb-2">{exp.year}</div>
                  <h3 className="text-3xl font-bold tracking-tight mb-1">{exp.role}</h3>
                  <h4 className="text-xl text-background/70 font-medium mb-4">{exp.org}</h4>
                  <p className="text-background/80 max-w-3xl leading-relaxed text-lg">
                    {exp.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* TRUST / RECOGNITION */}
        <section className="py-16 px-6 border-b-2 border-foreground bg-primary text-primary-foreground overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="font-bold text-2xl tracking-tighter shrink-0">RECOGNIZED BY:</div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 font-mono text-xl md:text-3xl font-bold opacity-80 uppercase tracking-widest">
              <span>EC-COUNCIL</span>
              <span>NEXUS CTF</span>
              <span>GITHUB</span>
              <span>OPEN SOURCE</span>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">INITIATE<br/>PROTOCOL.</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-md">
                Available for AI security research collaborations, open-source security tooling, and CTF team engagements.
              </p>
              
              <div className="space-y-6 font-mono">
                <div className="flex items-center gap-4 border-2 border-foreground p-4 bg-card">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>anshkumar5008@github.com</span>
                </div>
                <div className="flex items-center gap-4 border-2 border-foreground p-4 bg-card">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Base: New Delhi, India 🇮🇳</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-12">
                <Button size="icon" variant="outline" className="w-12 h-12 border-2 border-foreground rounded-none" asChild>
                  <a href="https://github.com/Ansh5008" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="w-12 h-12 border-2 border-foreground rounded-none" asChild>
                  <a href="https://linkedin.com/in/ansh-kumar008" target="_blank" rel="noopener noreferrer">
                    <Network className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="w-12 h-12 border-2 border-foreground rounded-none" asChild>
                  <a href="https://x.com/anshkumar5008" target="_blank" rel="noopener noreferrer">
                    <Terminal className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="border-2 border-foreground bg-card p-8 shadow-xl"
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="font-mono text-sm font-bold uppercase tracking-widest">Identifier</label>
                  <Input required className="rounded-none border-2 border-foreground h-12 focus-visible:ring-primary focus-visible:ring-offset-0 bg-background" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-sm font-bold uppercase tracking-widest">Return Vector</label>
                  <Input required type="email" className="rounded-none border-2 border-foreground h-12 focus-visible:ring-primary focus-visible:ring-offset-0 bg-background" placeholder="Email Address" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-sm font-bold uppercase tracking-widest">Payload</label>
                  <Textarea required className="rounded-none border-2 border-foreground min-h-[150px] focus-visible:ring-primary focus-visible:ring-offset-0 bg-background" placeholder="State your intent..." />
                </div>
                <Button disabled={isSubmitting} type="submit" className="w-full h-14 rounded-none border-2 border-foreground bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg">
                  {isSubmitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
        
        {/* FOOTER */}
        <footer className="border-t-2 border-foreground py-12 px-6 bg-foreground text-background">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-bold text-2xl tracking-tighter">AK.</div>
            <div className="font-mono text-sm text-background/60">
              © {new Date().getFullYear()} ANSH KUMAR. ALL SYSTEMS SECURE.
            </div>
            <div className="font-mono text-sm bg-primary text-primary-foreground px-3 py-1 font-bold">
              SYS_STATUS: NOMINAL
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
