import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  ChevronDown,
  MessageCircle,
  Mail,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  CreditCard,
  CheckCircle2,
  Star,
  AlertCircle,
  Building2,
  ExternalLink
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function Reveal({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Divider() {
  return <hr className="my-24 border-white/[0.05] md:my-32" />
}

function H1({ children }) {
  return (
    <Reveal>
      <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-[-0.05em] text-white md:text-7xl">
        {children}
      </h1>
    </Reveal>
  )
}

function H2({ children }) {
  return (
    <Reveal className="mt-14">
      <h2 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
        {children}
      </h2>
    </Reveal>
  )
}

function H3({ children }) {
  return (
    <Reveal className="mt-10">
      <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-[#FF3B3B]">
        {children}
      </h3>
    </Reveal>
  )
}

function P({ children, className = "" }) {
  return (
    <Reveal>
      <p className={`mt-6 text-[1.1rem] leading-relaxed text-white/70 md:text-xl ${className}`}>
        {children}
      </p>
    </Reveal>
  )
}

function Bullets({ items, className = "" }) {
  return (
    <Reveal>
      <ul className={`mt-6 space-y-4 text-[1.1rem] leading-relaxed text-white/70 md:text-lg ${className}`}>
        {items.map((item, index) => (
          <li key={index} className="flex gap-4">
            <CheckCircle2 size={20} className="mt-1 text-[#FF3B3B] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return <motion.div className="progress-bar" style={{ scaleX }} />
}

function ProblemSolutionBlock({ title, number, problem, solution }) {
  return (
    <section className="mb-24 overflow-hidden rounded-[2rem] border border-white/[0.08]">
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Problem Side */}
        <div className="flex-1 bg-[#450a0a] p-6 sm:p-10 md:p-16 relative">
          <div className="absolute top-8 left-8 text-white/10 text-6xl sm:text-8xl font-black">{number}</div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <AlertCircle size={20} className="text-white" />
              </div>
              <span className="text-white text-xs font-bold tracking-widest uppercase">The Business Challenge</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 tracking-tight">{title}</h2>

            <div className="space-y-6">
              {problem.content.map((p, i) => <p key={i} className="text-white/80 text-lg leading-relaxed">{p}</p>)}
              {problem.bullets && (
                <ul className="space-y-4">
                  {problem.bullets.map((b, i) => (
                    <li key={i} className="flex gap-4 text-white/70">
                      <div className="mt-2.5 h-1 w-4 shrink-0 bg-white/30" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {problem.impact && (
                <div className="mt-10 pt-10 border-t border-white/10">
                  <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-4 block">Business Impact</span>
                  <ul className="space-y-3">
                    {problem.impact.map((imp, i) => (
                      <li key={i} className="text-white/60 text-base italic leading-relaxed">• {imp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Solution Side */}
        <div className="flex-1 bg-[#065F46] p-6 sm:p-10 md:p-16 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <CheckCircle2 size={20} className="text-white" />
            </div>
            <span className="text-white text-xs font-bold tracking-widest uppercase opacity-80">W3 Studio Strategic Solution</span>
          </div>
          <div className="space-y-6">
            {solution.content && solution.content.map((s, i) => <p key={i} className="text-white/90 text-lg font-medium leading-relaxed">{s}</p>)}
            {solution.bullets && (
              <ul className="space-y-4">
                {solution.bullets.map((b, i) => (
                  <li key={i} className="flex gap-4 text-white font-semibold">
                    <ArrowRight size={20} className="mt-1 shrink-0 opacity-60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {solution.contentAfter && solution.contentAfter.map((s, i) => <p key={i} className="text-white/90 text-lg font-medium leading-relaxed">{s}</p>)}
            {solution.outcome && (
              <div className="mt-10 pt-10 border-t border-white/20">
                <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-4 block">Expected Business Outcome</span>
                <div className="space-y-4">
                  {solution.outcome.map((out, i) => (
                    <p key={i} className="text-white text-base leading-relaxed font-medium">{out}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      className="fixed bottom-8 right-8 z-[200] flex flex-col gap-3 no-print"
    >
      <a
        href="https://wa.me/918086564212?text=Hello%20Shefin%2C%20we%20are%20interested%20in%20the%20digital%20transformation%20proposal%20for%20Binnaji%20Group."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#FF3B3B] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={24} />
      </a>
    </motion.div>
  )
}

function App() {
  const containerRef = useRef(null)

  const subsidiaries = [
    { name: 'Al-Ratqa Paper Bags Factory', desc: 'Premium manufacturing of paper-based packaging solutions.', logo: '/retqalogo.png' },
    { name: 'Bin Naji Printing Materials Company', desc: 'Industrial grade printing materials and distribution.', logo: '/printing.png' },
    { name: 'TNA Integrated Advertising', desc: 'Advertising, strategic marketing and corporate communication services.', logo: '/tna.png' },
    { name: 'Royal Card Wedding Cards', desc: 'Luxury stationery and bespoke wedding invitation design.', logo: '/royalcard.png' },
    { name: 'Zincograph Factory', desc: 'Specialized industrial metalwork and mold production.', logo: '/zinco.png' },
    { name: 'Bin Naji Perfumes Company', desc: 'Premium fragrance production and luxury retail.', logo: '/perfume.jpg' },
  ]

  const trustItems = [
    { icon: Shield, label: 'Zero Risk', sub: 'Pay only on delivery' },
    { icon: Clock, label: '6–8 Weeks', sub: 'Fast turnaround' },
    { icon: CreditCard, label: '650 KWD', sub: 'Total investment' },
    { icon: Sparkles, label: 'Premium', sub: '6 brands unified' },
  ]

  const nextSteps = [
    { title: 'Project Kickoff', desc: 'Strategy alignment & asset collection.' },
    { title: 'Design Phase', desc: 'Custom UI/UX for all 6 brands.' },
    { title: 'Development', desc: 'Building the high-performance ecosystem.' },
    { title: 'Launch', desc: 'Deployment & brand transformation.' },
  ]

  return (
    <main ref={containerRef} className="min-h-screen bg-[#0B0B0D] text-white overflow-x-hidden selection:bg-[#FF3B3B]/30">
      <ScrollProgressBar />
      <FloatingContact />

      <article className="mx-auto max-w-[1200px] px-6 py-16 md:px-12 md:py-32">
        {/* ── Hero Section ── */}
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center text-center mb-32">
          <Reveal>
            <p className="mx-auto mb-10 w-fit border-y border-[#FF0000]/55 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-[#FF0000]">
              Website Modernization Proposal
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold leading-[0.95] tracking-[-0.06em] text-white md:text-[9rem]">
              Binnaji Group
            </h1>
            <p className="mt-8 sm:mt-12 text-lg sm:text-2xl font-light tracking-[-0.02em] text-white/50 md:text-4xl">
              Presented by <span className="text-white font-medium italic">W3 Studio</span>
            </p>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-4 flex flex-col items-center gap-4 no-print"
          >
            <div className="w-7 h-12 rounded-full border border-white/10 flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-1 rounded-full bg-[#FF3B3B]"
              />
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">Explore Proposal</span>
          </motion.div>
        </section>

        {/* ── Overview ── */}
        <section className="mb-40 max-w-[700px] mx-auto relative">
          <H1>Proposal Overview</H1>
          <div className="mt-12 space-y-6">
            {[
              { l: 'Prepared For', v: 'Binnaji Group – Kuwait' },
              { l: 'Contact Person', v: 'Shefin – Founder & Creative Director' },
              { l: 'Email', v: 'shefinptr@gmail.com' },
              { l: 'WhatsApp', v: '+91 8086564212' },
              { l: 'Timeline', v: '6–8 Weeks' },
            ].map((item) => (
              <div key={item.l} className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/40 uppercase text-xs tracking-widest font-bold">{item.l}</span>
                <span className="text-white font-medium">{item.v}</span>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Introduction ── */}
        <section className="mb-40">
          <div className="max-w-[800px] mx-auto">
            <H1>Introduction</H1>
            <P>Binnaji Group has established itself as a trusted and diversified industrial brand in Kuwait through manufacturing, printing, advertising, luxury stationery, packaging, and specialized production services.</P>
            <P>The company’s physical presence, operational scale, and portfolio of subsidiary businesses clearly demonstrate a strong market position and long-standing credibility.</P>
            <P className="text-white font-semibold">However, the current digital presence does not reflect the true scale, quality, professionalism, or premium positioning of the Binnaji Group.</P>
            <P>Today, a company’s website is not just an online brochure. It is a trust-building platform, a lead-generation system, and a representation of brand value working 24/7.</P>
          </div>
        </section>

        {/* ── Subsidiary Grid ── */}
        <section className="mb-40">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <Building2 className="text-[#FF3B3B]" />
              <h2 className="text-3xl font-bold uppercase tracking-tight">The Binnaji Ecosystem</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsidiaries.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-[#FF3B3B]/30 hover:bg-white/[0.05] transition-all"
              >
                <div className="w-20 h-20 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors overflow-hidden p-2">
                  <img src={s.logo} alt={s.name} className="w-full h-full object-contain filter transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{s.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Current Analysis ── */}
        <section className="mb-32 mx-auto max-w-[900px]">
          <H1>Current Website Analysis</H1>
          <div className="mt-12 p-8 rounded-2xl bg-[#FF3B3B]/5 border border-[#FF3B3B]/20 inline-flex items-center gap-6">
            <div className="text-white/60">Current Platform:</div>
            <a href="http://binnaji.net/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white flex items-center gap-2 hover:text-[#FF3B3B] transition-colors">
              binnaji.net <ExternalLink size={18} />
            </a>
          </div>
          <P>After reviewing the existing website structure, user experience, design, functionality, and technical implementation, we identified several areas that are silently affecting credibility, lead generation, and customer experience.</P>
        </section>

        {/* ── Problems vs Solutions ── */}
        <section className="mb-40 space-y-12">
          <ProblemSolutionBlock
            number="01"
            title="Premium Manufacturing Quality Is Not Reflected Digitally"
            problem={{
              content: [
                "Binnaji Group operates across multiple premium manufacturing sectors including luxury wedding cards, industrial printing, perfumes, packaging, and metalwork. However, the current website does not communicate the scale, professionalism, or premium quality of the company.",
                "For many visitors, the website becomes the first impression of the business. When the digital presence feels outdated, customers may unconsciously assume the company itself is less modern, smaller in scale, or less competitive than it actually is."
              ],
              impact: [
                "Premium products lose perceived value online",
                "Corporate trust decreases before inquiry",
                "The company appears smaller than its real manufacturing capability",
                "International-level positioning is weakened",
                "Customers may compare the brand against lower-market competitors"
              ]
            }}
            solution={{
              content: [
                "We will redesign the entire digital experience with a premium corporate identity focused on perception, trust, and authority.",
                "The new platform will visually communicate:"
              ],
              bullets: [
                "Manufacturing strength",
                "Legacy and professionalism",
                "Product quality",
                "Corporate-scale operations",
                "International-standard branding"
              ],
              contentAfter: [
                "The website will use a luxury-industrial design language inspired by modern global manufacturing brands while maintaining the identity of Binnaji Group."
              ],
              outcome: [
                "The new digital presence will position Binnaji Group as a modern, large-scale, premium manufacturing group. Visitors will immediately understand the company’s credibility, professionalism, and production capability, creating stronger trust before the first conversation even begins."
              ]
            }}
          />

          <ProblemSolutionBlock
            number="02"
            title="Mobile Visitors Experience Friction & Trust Loss"
            problem={{
              content: [
                "Today, most customers first interact with businesses through mobile devices. However, the current website experience on phones creates friction through broken layouts, difficult navigation, and manual zooming.",
                "A poor mobile experience silently damages credibility and increases visitor drop-offs."
              ],
              impact: [
                "Potential inquiries leave before exploring services",
                "Trust decreases on first interaction",
                "Lower engagement from modern users",
                "Reduced visibility in Google mobile rankings"
              ]
            }}
            solution={{
              content: [
                "We will rebuild the entire platform using a modern mobile-first architecture designed for seamless experiences across all devices.",
                "The new experience will prioritize:"
              ],
              bullets: [
                "Smooth navigation",
                "Clear readability",
                "Fast interaction",
                "Professional presentation on mobile and tablet"
              ],
              outcome: [
                "The website will create a smooth, premium first impression for modern customers, increasing engagement, improving inquiry conversion, and strengthening customer confidence across all devices."
              ]
            }}
          />

          <ProblemSolutionBlock
            number="03"
            title="Website Security Issues Reduce Corporate Credibility"
            problem={{
              content: [
                "The current website displays security-related trust issues due to outdated HTTP infrastructure. Modern customers immediately associate “Not Secure” warnings with unprofessional or inactive businesses.",
                "For a manufacturing group operating at scale, digital trust is critical."
              ],
              impact: [
                "Reduced customer confidence",
                "Lower credibility during first interaction",
                "Negative perception of operational professionalism",
                "Reduced visibility in search engines"
              ]
            }}
            solution={{
              content: [
                "We will implement modern security infrastructure with full HTTPS protection, optimized hosting configuration, and secure platform standards.",
                "This includes:"
              ],
              bullets: [
                "SSL security implementation",
                "Modern hosting standards",
                "Secure inquiry handling",
                "Long-term technical reliability"
              ],
              outcome: [
                "The platform will communicate professionalism, reliability, and modern operational standards — helping customers feel confident interacting with the business online."
              ]
            }}
          />

          <ProblemSolutionBlock
            number="04"
            title="Visitors Are Not Clearly Guided Toward Inquiry"
            problem={{
              content: [
                "The current website lacks strong conversion-focused communication pathways. Important customer actions such as WhatsApp inquiries, quote requests, and direct communication are either unclear or missing.",
                "This creates friction between customer interest and actual business inquiries."
              ],
              impact: [
                "Missed business opportunities",
                "Lower inquiry conversion",
                "Customers leaving without taking action",
                "Reduced lead generation potential"
              ]
            }}
            solution={{
              content: [
                "We will strategically design the user journey around conversion and customer interaction.",
                "The platform will include:"
              ],
              bullets: [
                "Direct WhatsApp communication triggers",
                "Sticky inquiry actions",
                "Quote request systems",
                "Clear call-to-action placement throughout the website"
              ],
              outcome: [
                "The website will actively encourage customer interaction, helping transform more visitors into real business inquiries and increasing overall conversion opportunities."
              ]
            }}
          />

          <ProblemSolutionBlock
            number="05"
            title="Confusing Navigation Weakens Professional Perception"
            problem={{
              content: [
                "The current website structure contains inconsistent navigation, incorrect linking, and disconnected user journeys. This creates confusion and prevents visitors from properly understanding the company structure and services."
              ],
              impact: [
                "Reduced customer confidence",
                "Difficulty exploring services",
                "Unclear understanding of business divisions",
                "Lower perceived professionalism"
              ]
            }}
            solution={{
              content: [
                "We will restructure the entire information architecture to create a clean, logical, and scalable corporate navigation system.",
                "This includes:"
              ],
              bullets: [
                "Organized subsidiary hierarchy",
                "Clear service categorization",
                "Structured user journeys",
                "Simplified navigation flow"
              ],
              outcome: [
                "Visitors will experience a clear and professional digital journey that improves understanding, strengthens trust, and reinforces the scale and organization of Binnaji Group."
              ]
            }}
          />

          <ProblemSolutionBlock
            number="06"
            title="The Subsidiary Structure & Digital Experience Are Not Properly Organized"
            problem={{
              content: [
                "Binnaji Group operates multiple specialized subsidiaries, but the current digital experience does not clearly present each business under a unified and professional corporate structure.",
                "Several subsidiary pages have unclear navigation, inconsistent presentation, and limited showcase quality, making it difficult for visitors to properly explore and understand each business division.",
                "As a result, the overall strength, professionalism, and manufacturing capability of the group are not being communicated effectively."
              ],
              impact: [
                "Confusing navigation between subsidiaries",
                "Some subsidiary pages are not functioning clearly",
                "Inconsistent digital experience across businesses",
                "Quality and capabilities of each subsidiary are underrepresented",
                "Reduced perception of overall group scale and professionalism",
                "Lost opportunity for stronger corporate positioning"
              ]
            }}
            solution={{
              content: [
                "We will build a unified “Mother Brand” digital platform for Binnaji Group, where each subsidiary will have its own dedicated webpage under a professionally structured corporate ecosystem.",
                "This approach allows every business division to maintain its individual identity while strengthening the overall presence and credibility of Binnaji Group.",
                "This will include:"
              ],
              bullets: [
                "Dedicated webpages for each subsidiary",
                "Unified mother brand presentation",
                "Clear group structure & navigation",
                "Premium product & manufacturing showcases",
                "Consistent branding across all businesses",
                "Centralized corporate positioning"
              ],
              outcome: [
                "The new platform will clearly communicate the full scale, structure, and industrial capabilities of Binnaji Group.",
                "By professionally presenting all subsidiaries under one strong corporate identity, the company will build greater market trust, stronger brand authority, and a more premium perception among clients, partners, and investors."
              ]
            }}
          />

          <ProblemSolutionBlock
            number="07"
            title="Inconsistent Bilingual Experience Damages Professionalism"
            problem={{
              content: [
                "The current multilingual experience creates layout inconsistencies and mixed-language elements that reduce clarity and professionalism for both Arabic and English users."
              ],
              impact: [
                "Reduced user confidence",
                "Inconsistent brand experience",
                "Lower international presentation quality",
                "Weak multilingual usability"
              ]
            }}
            solution={{
              content: [
                "We will develop a true bilingual platform with dedicated Arabic RTL support and professionally structured English layouts.",
                "The experience will focus on:"
              ],
              bullets: [
                "Native Arabic usability",
                "Consistent bilingual presentation",
                "Smooth language switching",
                "Clean cross-language design systems"
              ],
              outcome: [
                "The platform will provide a polished multilingual experience that reflects professionalism, improves accessibility, and strengthens both local and international brand perception."
              ]
            }}
          />

          <ProblemSolutionBlock
            number="08"
            title="Products Lack Premium Digital Presentation"
            problem={{
              content: [
                "Many products currently lack the level of presentation required to communicate their actual quality and value. Outdated visuals and weak organization reduce the perceived premium nature of the products."
              ],
              impact: [
                "Reduced perceived product value",
                "Lower customer confidence",
                "Weaker premium positioning",
                "Missed conversion opportunities"
              ]
            }}
            solution={{
              content: [
                "We will create a modern digital showroom experience focused on premium visual presentation and organized product communication.",
                "This includes:"
              ],
              bullets: [
                "High-quality product visuals",
                "Organized product categorization",
                "Professional product presentation",
                "Modern showcase layouts"
              ],
              outcome: [
                "The website will elevate how customers perceive the company’s products, helping strengthen premium positioning and improve inquiry quality."
              ]
            }}
          />

          <ProblemSolutionBlock
            number="09"
            title="Technical Issues Create the Impression of an Inactive Business"
            problem={{
              content: [
                "Existing technical errors, broken systems, and inconsistent functionality reduce trust and create the impression of an outdated or poorly maintained company."
              ],
              impact: [
                "Negative first impressions",
                "Reduced operational trust",
                "Customer frustration",
                "Inquiry reliability concerns"
              ]
            }}
            solution={{
              content: [
                "We will rebuild the platform using modern, stable, and scalable development standards focused on reliability and long-term maintainability.",
                "This includes:"
              ],
              bullets: [
                "Stable platform architecture",
                "Reliable inquiry systems",
                "Error-free navigation",
                "Optimized website performance"
              ],
              outcome: [
                "The platform will communicate operational reliability and modern professionalism, helping customers trust the business with greater confidence from the very first interaction."
              ]
            }}
          />
        </section>

        {/* Client Concerns / Custom Requirements */}
        <section className="mb-40 max-w-[900px] mx-auto">
          <Reveal>
            <div className="p-8 md:p-12 rounded-[2rem] border border-white/10 bg-white/[0.02] text-center backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF3B3B]/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0E9F6E]/10 rounded-full blur-[80px] -z-10 -translate-x-1/2 translate-y-1/2" />

              <MessageCircle size={40} className="text-[#FF3B3B] mx-auto mb-6 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Your Vision, Our Blueprint</h2>
              <p className="text-white/70 text-[1.1rem] md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                While our analysis covers the fundamental strategic improvements, we understand that Binnaji Group may have specific operational requirements, technical challenges, or unique business goals. We are fully open to discussing any concerns and tailoring this solution to perfectly align with your exact needs.
              </p>

              <a
                href="https://wa.me/918086564212?text=Hello%20Shefin%2C%20we%20have%20some%20additional%20requirements%20for%20the%20digital%20transformation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#FF3B3B] hover:bg-[#D62E2E] text-white font-bold transition-all hover:scale-105 shadow-[0_10px_30px_rgba(255,59,59,0.2)]"
              >
                Discuss Additional Requirements
                <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </section>


        <Divider />

        {/* ── Rest of Content (Vision, Features, etc.) ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-40">
          <div>
            <H1>Our Vision</H1>
            <Bullets items={[
              'Represents the true scale of the company',
              'Builds trust instantly',
              'Generates business inquiries',
              'Showcases manufacturing quality',
              'Strengthens brand authority',
              'Improves customer experience',
              'Creates a modern international image'
            ]} />
          </div>
          <div>
            <H1>Proposed Features</H1>
            <H2>Corporate & Business Structure</H2>
            <Bullets items={[
              'Dedicated webpages for all subsidiaries',
              'Unified Mother Brand architecture',
              'Modern premium UI/UX design',
              'Fully responsive mobile-first experience',
              'Bilingual Arabic & English support',
              'Professional corporate group presentation'
            ]} />
            <H2>Product & Customer Experience</H2>
            <Bullets items={[
              'Premium product showcase system',
              'Manufacturing capability presentation',
              'WhatsApp & Call integration',
              'Inquiry & lead generation forms',
              'Admin content management system',
              'SEO-optimized page structure'
            ]} />
          </div>
        </section>

        <section className="mb-40">
          <H1>Project Process</H1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {[
              { t: 'Research', d: 'Strategy & Brand Analysis' },
              { t: 'UI/UX Design', d: 'Custom Modern Layouts' },
              { t: 'Development', d: 'High Performance Build' },
              { t: 'Testing', d: 'Quality & SEO Audit' },
              { t: 'Launch', d: 'Deployment & Support' },
            ].map((step, i) => (
              <div key={step.t} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-[#FF3B3B] font-bold mb-4">0{i + 1}</div>
                <div className="text-white font-bold mb-2">{step.t}</div>
                <div className="text-white/40 text-xs">{step.d}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-40 text-center max-w-[800px] mx-auto">
          <H1>Estimated Timeline</H1>
          <div className="mt-12 p-10 rounded-[3rem] border border-[#FF3B3B]/20 bg-[#FF3B3B]/5">
            <div className="text-8xl font-bold text-white mb-4">6–8</div>
            <div className="text-xl text-[#FF3B3B] font-bold uppercase tracking-[0.4em]">Weeks to Launch</div>
          </div>
        </section>

        {/* ── Conclusion Section (Beautiful Last Portion) ── */}
        <section className="mt-20">
          <Reveal className="max-w-3xl mx-auto text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF3B3B]/30 bg-[#FF3B3B]/5 mb-10">
              <Star size={12} className="text-[#FF3B3B]" />
              <span className="text-[#FF3B3B] text-[10px] font-bold tracking-widest uppercase">Final Note</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-[-0.05em] text-white md:text-8xl mb-12">
              The Missing Piece <br />
              <span className="text-[#FF3B3B] italic">In Your Legacy</span>
            </h2>

            <p className="text-white/50 text-xl md:text-2xl leading-relaxed mb-24 max-w-3xl">
              Binnaji Group has built a foundation of manufacturing power over decades. We are here to ensure
              your digital presence finally reflects that same level of authority and prestige.
            </p>
          </Reveal>

          {/* Path Forward Roadmap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-40">
            <div className="space-y-12">
              <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF3B3B]/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF3B3B]" />
                </div>
                The Path Forward
              </h3>
              <div className="space-y-12">
                {nextSteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm text-white/40 group-hover:border-[#FF3B3B]/50 group-hover:text-[#FF3B3B] transition-colors bg-white/5 font-bold">
                        {i + 1}
                      </div>
                      {i !== nextSteps.length - 1 && <div className="w-px h-full bg-white/5 my-4" />}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-[#FF3B3B] transition-colors mb-2">{step.title}</h4>
                      <p className="text-white/40 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Investment & Trust Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF3B3B]/10 blur-[120px] -z-10" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-6 sm:p-10 md:p-16 rounded-[2.5rem] sm:rounded-[4rem] backdrop-blur-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                  <CheckCircle2 size={300} className="text-[#FF3B3B]" />
                </div>

                <div className="mb-10 sm:mb-12">
                  <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-4 font-bold">Project Investment</div>
                  <div className="flex items-baseline gap-2 sm:gap-4">
                    <span className="text-[3.5rem] sm:text-[6rem] font-bold text-white leading-none tracking-tighter">650</span>
                    <span className="text-xl sm:text-3xl font-bold text-[#FF3B3B] uppercase">KWD</span>
                  </div>
                  <div className="text-[#FF3B3B] text-[9px] sm:text-xs mt-6 flex items-center gap-3 font-bold tracking-[0.2em] uppercase">
                    <div className="w-2 h-2 rounded-full bg-[#FF3B3B] animate-pulse" />
                    Zero Risk • Pay on Delivery
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
                  {trustItems.map((item) => (
                    <div key={item.label} className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/5">
                      <item.icon size={18} className="text-[#FF3B3B] mb-2 sm:mb-3 opacity-60" />
                      <div className="text-white text-xs sm:text-sm font-bold">{item.label}</div>
                      <div className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-widest mt-1 font-bold">{item.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <motion.a
                    href="https://wa.me/918086564212?text=Hello%20Shefin%2C%20we%20are%20interested%20in%20the%20digital%20transformation%20proposal%20for%20Binnaji%20Group."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-4 w-full h-16 rounded-2xl bg-[#FF3B3B] text-white font-bold shadow-[0_20px_50px_rgba(255,59,59,0.3)] group hover:bg-[#D62E2E] transition-all"
                  >
                    <MessageCircle size={20} />
                    <span>Start via WhatsApp</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform opacity-50" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Signature Closing ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-32 border-t border-white/5 pb-20"
          >
            <div className="inline-flex items-center gap-4 mb-12">
              <div className="w-16 h-px bg-white/10" />
              <div className="text-[#FF3B3B] text-xs font-bold tracking-[0.4em] uppercase italic opacity-70">W3 Studio Commitment</div>
              <div className="w-16 h-px bg-white/10" />
            </div>
            <p className="text-white text-3xl md:text-5xl font-light italic mb-16 leading-tight tracking-tight max-w-4xl mx-auto">
              "We don't just build websites; we architect digital legacies. For Binnaji Group,
              every pixel will be crafted to <span className="text-white font-bold">command respect.</span>"
            </p>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF3B3B] to-[#FF8080] mb-8 p-1 shadow-[0_20px_60px_rgba(255,59,59,0.4)]">
                <div className="w-full h-full rounded-full bg-[#0B0B0D] flex items-center justify-center text-3xl font-black italic">S</div>
              </div>
              <div className="text-white text-2xl font-bold">Shefin</div>
              <div className="text-white/30 text-[10px] tracking-[0.5em] uppercase mt-2 font-black">Founder & Creative Director</div>
            </div>
          </motion.div>
        </section>
      </article>
    </main>
  )
}

export default App
