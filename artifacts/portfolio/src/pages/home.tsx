import React, { useState } from "react";
import { motion } from "framer-motion";
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

const FADE_IN = {
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
          <div className="font-bold text-xl tracking-tighter">JD.</div>
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
                JOHN<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70" style={{ WebkitTextStroke: "2px currentColor" }}>DOE</span>
              </motion.h1>
              
              <motion.div variants={FADE_IN} className="flex flex-wrap gap-4 mb-8 text-lg md:text-xl font-medium tracking-tight">
                <span className="bg-foreground text-background px-4 py-1 border-2 border-foreground">Cybersecurity Researcher</span>
                <span className="border-2 border-foreground px-4 py-1">AI Developer</span>
                <span className="bg-primary text-primary-foreground px-4 py-1 border-2 border-primary">Security Engineer</span>
              </motion.div>
              
              <motion.p variants={FADE_IN} className="text-xl md:text-2xl max-w-2xl text-muted-foreground mb-12 leading-relaxed">
                I dissect binaries, build neural networks, and fortify architectures. Bridging the gap between offensive security and artificial intelligence to construct resilient systems of tomorrow.
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
                  <p className="font-bold">San Francisco, CA</p>
                </div>
                <div>
                  <h3 className="font-mono text-xs text-muted-foreground mb-1 uppercase tracking-widest">Clearance</h3>
                  <p className="font-bold">Level 3 / Active</p>
                </div>
                <div>
                  <h3 className="font-mono text-xs text-muted-foreground mb-1 uppercase tracking-widest">Specialty</h3>
                  <p className="font-bold">Adversarial ML</p>
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
                    The perimeter is an illusion. In an era where machine learning models dictate critical infrastructure, the intersection of AI and security is the only frontier that matters.
                  </p>
                  <p>
                    I spent my early career reverse-engineering legacy banking systems, discovering zero-days that could crash economies. Then, I pivoted to AI, building the very detection systems I used to bypass.
                  </p>
                  <p>
                    My methodology is simple: assume breach, model the adversary, and build intelligent defenses that adapt faster than the attacker. I don't just run tools; I build the tools that run the security operations of tomorrow.
                  </p>
                </motion.div>
                
                <motion.div variants={FADE_IN} className="mt-12 flex items-center gap-8 border-y-2 border-foreground py-6">
                  <div>
                    <div className="text-4xl font-bold">14+</div>
                    <div className="text-sm font-mono text-muted-foreground uppercase mt-1">CVEs Assigned</div>
                  </div>
                  <div className="w-[2px] h-12 bg-foreground" />
                  <div>
                    <div className="text-4xl font-bold">5</div>
                    <div className="text-sm font-mono text-muted-foreground uppercase mt-1">Models Deployed</div>
                  </div>
                  <div className="w-[2px] h-12 bg-foreground" />
                  <div>
                    <div className="text-4xl font-bold">Defcon</div>
                    <div className="text-sm font-mono text-muted-foreground uppercase mt-1">Finalist 2023</div>
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
                  <p><span className="text-primary">{`>`}</span> fetch academic_records</p>
                  <p>-- MS Computer Science (AI/ML), Stanford Univ.</p>
                  <p>-- BS Computer Engineering, MIT</p>
                  <p><span className="text-primary">{`>`}</span> scan current_focus</p>
                  <p className="animate-pulse">-- Scanning...</p>
                  <p>-- Adversarial robustness in LLMs</p>
                  <p>-- Automated vulnerability discovery via RL</p>
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
                  title: "Smart IDS Architecture",
                  desc: "Next-generation Intrusion Detection System utilizing transformer models to identify zero-day network anomalies with 99.4% precision and near-zero false positives.",
                  tags: ["PyTorch", "Rust", "eBPF", "Network"],
                  img: imgSmartIds
                },
                {
                  title: "Lunar Landslide Vision",
                  desc: "Computer vision pipeline analyzing Chandrayaan-2 satellite imagery to detect and predict lunar landslides, deployed for ongoing astronomical research.",
                  tags: ["TensorFlow", "OpenCV", "Python", "Space"],
                  img: imgLunarLandslide
                },
                {
                  title: "Zero-Shot Exploit Gen",
                  desc: "Research platform utilizing large language models to autonomously generate exploit primitives from raw crash dumps and binary analysis.",
                  tags: ["LLMs", "C++", "Assembly", "Ghidra"],
                  img: imgReverseEngineering
                },
                {
                  title: "Panopticon SOC",
                  desc: "A centralized security operations platform integrating disparate threat feeds into a cohesive, actionable brutalist interface for rapid response.",
                  tags: ["React", "Go", "Kafka", "Elastic"],
                  img: imgCyberSurveillance
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
                      <Button className="rounded-none border-2 border-foreground shadow-sm bg-foreground text-background hover:bg-foreground/90">
                        <Github className="w-4 h-4 mr-2" /> Source
                      </Button>
                      <Button variant="outline" className="rounded-none border-2 border-foreground shadow-sm">
                        <ExternalLink className="w-4 h-4 mr-2" /> Details
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
                  year: "2022 — PRESENT",
                  role: "Senior Security Engineer",
                  org: "Palantir Technologies",
                  details: "Lead red team operator for critical infrastructure endpoints. Developed proprietary fuzzing framework resulting in 40+ zero-day discoveries in vendor appliances. Architected adversarial ML training pipeline."
                },
                {
                  year: "2020 — 2022",
                  role: "AI Research Scientist",
                  org: "OpenAI",
                  details: "Focused on alignment and security of large language models. Developed jailbreak evaluation suites and contributed to the safety architecture of GPT-3. Published 3 papers on prompt injection vectors."
                },
                {
                  year: "2018 — 2020",
                  role: "Vulnerability Researcher",
                  org: "Offensive Security",
                  details: "Core contributor to Kali Linux toolchain. Discovered and documented exploitation techniques for complex heap overflows. Taught advanced exploitation masterclasses."
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
              <span>DEFCON</span>
              <span>DARPA</span>
              <span>BLACKHAT</span>
              <span>MITRE</span>
              <span>SYNACK</span>
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
                Available for elite red team engagements, AI security consulting, and high-impact research collaborations.
              </p>
              
              <div className="space-y-6 font-mono">
                <div className="flex items-center gap-4 border-2 border-foreground p-4 bg-card">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>secure.comm@johndoe.tech</span>
                </div>
                <div className="flex items-center gap-4 border-2 border-foreground p-4 bg-card">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Base: San Francisco, CA / Global</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-12">
                <Button size="icon" variant="outline" className="w-12 h-12 border-2 border-foreground rounded-none">
                  <Github className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="outline" className="w-12 h-12 border-2 border-foreground rounded-none">
                  <Terminal className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="outline" className="w-12 h-12 border-2 border-foreground rounded-none">
                  <Network className="w-5 h-5" />
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
            <div className="font-bold text-2xl tracking-tighter">JD.</div>
            <div className="font-mono text-sm text-background/60">
              © {new Date().getFullYear()} JOHN DOE. ALL SYSTEMS SECURE.
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