import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
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
  Star
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

function Reveal({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Divider() {
  return <hr className="my-20 border-white/[0.08] md:my-28" />
}

function H1({ children }) {
  return (
    <Reveal>
      <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
        {children}
      </h1>
    </Reveal>
  )
}

function H2({ children }) {
  return (
    <Reveal className="mt-14">
      <h2 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-4xl">
        {children}
      </h2>
    </Reveal>
  )
}

function H3({ children }) {
  return (
    <Reveal className="mt-10">
      <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">
        {children}
      </h3>
    </Reveal>
  )
}

function P({ children }) {
  return (
    <Reveal>
      <p className="mt-6 text-[1.05rem] leading-8 text-[#F5F5F5] md:text-lg md:leading-9">
        {children}
      </p>
    </Reveal>
  )
}

function Bullets({ items }) {
  return (
    <Reveal>
      <ul className="mt-6 space-y-3 text-[1.05rem] leading-8 text-[#F5F5F5] md:text-lg">
        {items.map((item, index) => (
          <li key={index} className="flex gap-4">
            <span className="mt-4 h-px w-5 shrink-0 bg-[#FF0000]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

function Numbered({ items }) {
  return (
    <Reveal>
      <ol className="mt-6 list-decimal space-y-3 pl-6 text-[1.05rem] leading-8 text-[#F5F5F5] md:text-lg">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </Reveal>
  )
}

function LabelBlock({ lines }) {
  return (
    <Reveal>
      <div className="mt-8 border-y border-white/[0.08] py-8 text-[1.05rem] leading-8 text-[#F5F5F5] md:text-lg md:leading-9">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </Reveal>
  )
}

function App() {
  const containerRef = useRef(null)

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
      <article className="mx-auto max-w-[900px] px-5 py-16 md:px-8 md:py-24">
        {/* ── Hero Section ── */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center text-center">
          <Reveal>
            <p className="mx-auto mb-10 w-fit border-y border-[#FF0000]/55 py-3 text-xs font-medium uppercase tracking-[0.38em] text-[#FF0000]">
              Website Modernization Proposal
            </p>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white md:text-8xl">
              Binnaji Group
            </h1>
            <p className="mt-8 text-xl font-light tracking-[-0.02em] text-[#F5F5F5] md:text-3xl">
              Presented by W3 Studio
            </p>
          </Reveal>

          {/* ── Scroll indicator ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-4 flex flex-col items-center gap-4 cursor-default"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-[#FF3B3B]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-7 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center py-2 overflow-hidden shadow-2xl">
                <motion.div
                  animate={{
                    y: [0, 16, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 rounded-full bg-[#FF3B3B]"
                  style={{ boxShadow: '0 0 10px #FF3B3B' }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-white/30 text-[8px] font-bold tracking-[0.4em] uppercase">
                Scroll to Explore
              </span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown size={12} className="text-[#FF3B3B]/50" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        <Divider />

        <section>
          <H1>Proposal Overview</H1>
          <LabelBlock
            lines={[
              'Prepared For: Binnaji Group – Kuwait',
              'Prepared By: W3 Studio',
              'Contact Person: Shefin – Founder & Creative Director',
              'Email: shefinptr@gmail.com',
              'WhatsApp: +91 8086564212',
              'Project Timeline: 6–8 Weeks',
              'Project Investment: 650 KWD (Domain & third-party charges excluded)',
            ]}
          />
        </section>

        <Divider />

        <section>
          <H1>Introduction</H1>
          <P>Binnaji Group has established itself as a trusted and diversified industrial brand in Kuwait through manufacturing, printing, advertising, luxury stationery, packaging, and specialized production services.</P>
          <P>The company’s physical presence, operational scale, and portfolio of subsidiary businesses clearly demonstrate a strong market position and long-standing credibility.</P>
          <P>However, the current digital presence does not reflect the true scale, quality, professionalism, or premium positioning of the Binnaji Group.</P>
          <P>Today, a company’s website is not just an online brochure.</P>
          <P>It is:</P>
          <Bullets
            items={[
              'A trust-building platform',
              'A lead-generation system',
              'A digital showroom',
              'A representation of brand value',
              'A sales tool working 24/7',
            ]}
          />
          <P>For many potential clients, distributors, and corporate buyers, the website becomes the first impression of the company.</P>
          <P>At the moment, the current website creates friction instead of confidence.</P>
          <P>Our goal is to transform the Binnaji Group website into a modern, premium, bilingual corporate platform that properly showcases the company’s legacy, subsidiaries, manufacturing quality, and business scale.</P>
        </section>

        <Divider />

        <section>
          <H1>Current Website Analysis</H1>
          <P>
            Current Website:{' '}
            <a className="text-[#FF3B3B] underline decoration-[#FF0000]/40 underline-offset-4" href="http://binnaji.net/" target="_blank" rel="noopener noreferrer">
              http://binnaji.net/
            </a>
          </P>
          <P>After reviewing the existing website structure, user experience, design, functionality, and technical implementation, we identified several areas that are silently affecting credibility, lead generation, and customer experience.</P>
        </section>

        <Divider />

        <section>
          <H1>Key Business Problems & Their Impact</H1>

          <H2>1. Outdated Brand Presentation</H2>
          <H3>Current Situation</H3>
          <P>The current website design feels outdated and does not visually represent the premium quality of Binnaji Group’s products and services.</P>
          <P>The business manufactures:</P>
          <Bullets items={['Premium paper bags', 'Luxury wedding cards', 'Corporate branding materials', 'Industrial printing products', 'Perfumes', 'Metalwork and molds']} />
          <P>However, the current website experience does not communicate luxury, trust, or industrial excellence.</P>
          <H3>Business Impact</H3>
          <P>When visitors compare Binnaji Group with modern competitors, the website may unintentionally create the impression that:</P>
          <Bullets items={['The business is not actively modernized', 'The company is less premium than competitors', 'The operations are smaller than they actually are', 'Product quality may not match expectations']} />
          <P>This silently reduces trust before a customer even contacts the company.</P>
          <H3>Our Solution</H3>
          <P>We will redesign the entire website with:</P>
          <Bullets items={['Premium modern visual identity', 'Clean luxury-focused design system', 'Professional layout structure', 'High-quality product presentation', 'Strong visual hierarchy', 'Corporate-style branding inspired by large industrial groups']} />
          <P>The new website will visually communicate:</P>
          <Bullets items={['Legacy', 'Scale', 'Manufacturing capability', 'Professionalism', 'Premium quality', 'International business presence']} />

          <H2>2. Non-Responsive Mobile Experience</H2>
          <H3>Current Situation</H3>
          <P>The current website is not properly responsive.</P>
          <P>On mobile devices:</P>
          <Bullets items={['Users need to zoom manually', 'Content overflows horizontally', 'Navigation becomes difficult', 'Layout breaks on smaller screens']} />
          <H3>Why This Is Important</H3>
          <P>Today, most users discover businesses through mobile devices.</P>
          <P>A poor mobile experience causes:</P>
          <Bullets items={['Visitors leaving quickly', 'Lower inquiry rates', 'Reduced trust', 'Poor Google ranking performance']} />
          <H3>Our Solution</H3>
          <P>We will build the website using a modern mobile-first approach.</P>
          <P>The new platform will:</P>
          <Bullets items={['Work perfectly across all screen sizes', 'Provide smooth navigation on phones and tablets', 'Improve readability and usability', 'Create a seamless experience for all users']} />
          <P>This ensures customers can easily browse products, view company information, and contact the sales team instantly.</P>

          <H2>3. Website Security & “Not Secure” Warning</H2>
          <H3>Current Situation</H3>
          <P>The website currently runs on HTTP instead of HTTPS.</P>
          <P>Browsers display the website as:</P>
          <P>“Not Secure”</P>
          <H3>Business Impact</H3>
          <P>This affects:</P>
          <Bullets items={['Customer trust', 'Corporate credibility', 'Search engine rankings', 'Inquiry confidence']} />
          <P>Modern users associate security warnings with outdated or unsafe websites.</P>
          <H3>Our Solution</H3>
          <P>We will implement:</P>
          <Bullets items={['SSL security certificates', 'Secure HTTPS setup', 'Modern security standards', 'Optimized hosting configuration']} />
          <P>The website will become:</P>
          <Bullets items={['Secure', 'Trusted', 'Professionally compliant', 'Better optimized for search engines']} />

          <H2>4. Lack of Strong Call-To-Actions (CTA)</H2>
          <H3>Current Situation</H3>
          <P>The current website lacks clear actions for visitors.</P>
          <P>Important customer actions such as:</P>
          <Bullets items={['WhatsApp communication', 'Direct inquiry', 'Product quote requests', 'Phone call integration']} />
          <P>are either missing, unclear, or not functioning properly.</P>
          <H3>Business Impact</H3>
          <P>Even interested customers may leave the website without contacting the company.</P>
          <P>This results in:</P>
          <Bullets items={['Lost leads', 'Reduced inquiries', 'Missed opportunities', 'Lower conversion rates']} />
          <H3>Our Solution</H3>
          <P>We will strategically place:</P>
          <Bullets items={['WhatsApp inquiry buttons', 'Call Now buttons', 'Request Quote forms', 'Product inquiry systems', 'Sticky contact options', 'Quick lead capture forms']} />
          <P>We can also create:</P>
          <Bullets items={['Pre-filled WhatsApp templates', 'Product-based inquiry messages', 'Instant contact workflows']} />
          <P>This makes it easier for customers to contact the correct department immediately.</P>

          <H2>5. Confusing Navigation & User Flow</H2>
          <H3>Current Situation</H3>
          <P>Several pages and navigation links are:</P>
          <Bullets items={['Repetitive', 'Incorrectly linked', 'Confusing to users', 'Leading to wrong sections']} />
          <P>Examples found:</P>
          <Bullets items={['Zincograph links redirecting incorrectly', 'Perfume links connected to wedding card pages', 'Equipment pages not functioning', 'Multiple menu items leading to identical destinations']} />
          <H3>Business Impact</H3>
          <P>This creates confusion and frustration.</P>
          <P>Visitors may:</P>
          <Bullets items={['Leave the website quickly', 'Fail to understand company structure', 'Lose confidence in the business', 'Fail to discover important services']} />
          <H3>Our Solution</H3>
          <P>We will create a fully structured information architecture for the group.</P>
          <P>The new website will include:</P>
          <Bullets items={['Clear navigation hierarchy', 'Organized subsidiary structure', 'Easy service discovery', 'Smooth user journeys', 'Proper internal linking', 'Logical product categorization']} />
          <P>Users will clearly understand:</P>
          <Bullets items={['What Binnaji Group does', 'The role of each subsidiary', 'Which department fits their needs', 'How to contact the correct team']} />

          <H2>6. Weak Showcase of Subsidiary Companies</H2>
          <H3>Current Situation</H3>
          <P>Binnaji Group operates multiple specialized companies:</P>
          <Numbered items={['Al-Ratqa Paper Bags Factory', 'Bin Naji Printing Materials Company', 'TNA Integrated Advertising Services Company', 'Royal Card Wedding Cards Company', 'Zinkograph Factory', 'Bin Naji Perfumes Company']} />
          <P>However, the current website does not properly showcase:</P>
          <Bullets items={['Their strengths', 'Their scale', 'Their identity', 'Their products', 'Their expertise']} />
          <H3>Business Impact</H3>
          <P>Potential clients may not fully understand:</P>
          <Bullets items={['The scale of operations', 'Manufacturing capability', 'Product diversity', 'Group strength']} />
          <H3>Our Solution</H3>
          <P>We will create a “Mother Brand” corporate structure inspired by premium enterprise groups.</P>
          <P>The website will present Binnaji Group as a unified corporate ecosystem while allowing each subsidiary to maintain its own identity.</P>
          <P>Each company will have:</P>
          <Bullets items={['Dedicated sections', 'Premium presentation', 'Product showcases', 'Service highlights', 'Inquiry systems', 'Visual branding consistency']} />

          <H2>7. Bilingual Experience Issues</H2>
          <H3>Current Situation</H3>
          <P>The current website uses translation-based switching that creates:</P>
          <Bullets items={['Inconsistent layouts', 'Mixed language elements', 'Translation errors', 'UI inconsistencies']} />
          <H3>Business Impact</H3>
          <P>This affects professionalism and creates confusion for both local and international visitors.</P>
          <H3>Our Solution</H3>
          <P>We will develop a true bilingual system using modern standards.</P>
          <P>Benefits:</P>
          <Bullets items={['Proper Arabic RTL support', 'Consistent English layouts', 'Unified design system', 'Clean language switching', 'Better user experience', 'Professional multilingual presentation']} />
          <P>The design will remain visually consistent in both languages.</P>

          <H2>8. Poor Product Presentation</H2>
          <H3>Current Situation</H3>
          <P>Several products currently:</P>
          <Bullets items={['Lack clear information', 'Use outdated imagery', 'Do not showcase quality properly', 'Lack product specifications', 'Have no strong inquiry options']} />
          <H3>Business Impact</H3>
          <P>Premium products require premium presentation.</P>
          <P>Weak presentation reduces:</P>
          <Bullets items={['Perceived value', 'Customer confidence', 'Inquiry conversion', 'Brand positioning']} />
          <H3>Our Solution</H3>
          <P>We will create modern product showcase systems with:</P>
          <Bullets items={['High-quality visuals', 'Product details', 'Clean layouts', 'Category organization', 'Product inquiry buttons', 'WhatsApp integration', 'Featured product sections', 'Promotional banners', 'New arrivals sections']} />
          <P>The website will become a digital showroom instead of just an information page.</P>

          <H2>9. Technical Errors & Broken Functionality</H2>
          <H3>Current Situation</H3>
          <P>Several technical issues exist:</P>
          <Bullets items={['Registration system errors', 'SMTP/contact form failures', 'Broken links', 'Non-working pages', 'Incorrect routing', 'Footer inconsistencies']} />
          <H3>Business Impact</H3>
          <P>Technical errors create a negative impression and reduce trust.</P>
          <H3>Our Solution</H3>
          <P>We will rebuild the platform using modern development standards with:</P>
          <Bullets items={['Stable architecture', 'Proper testing', 'Reliable inquiry systems', 'Error-free routing', 'Functional forms', 'Optimized performance']} />
        </section>

        <Divider />

        <section>
          <H1>Our Vision For Binnaji Group</H1>
          <P>Our objective is not simply to redesign a website.</P>
          <P>Our objective is to create a digital corporate presence that:</P>
          <Bullets items={['Represents the true scale of the company', 'Builds trust instantly', 'Generates business inquiries', 'Showcases manufacturing quality', 'Strengthens brand authority', 'Improves customer experience', 'Creates a modern international image']} />
          <P>The final platform will position Binnaji Group as:</P>
          <Bullets items={['A premium industrial group', 'A trusted manufacturing partner', 'A modern enterprise brand', 'A scalable regional business']} />
        </section>

        <Divider />

        <section>
          <H1>Proposed Website Features</H1>
          <H2>Corporate Features</H2>
          <Bullets items={['Modern premium UI/UX design', 'Fully responsive mobile-first experience', 'Bilingual Arabic & English support', 'Secure HTTPS implementation', 'Fast-loading optimized pages', 'Modern navigation structure', 'SEO-friendly architecture']} />
          <H2>Business Features</H2>
          <Bullets items={['Product showcase system', 'Subsidiary company pages', 'WhatsApp integration', 'Click-to-call integration', 'Request Quote forms', 'Lead generation forms', 'Inquiry management system', 'Featured products section', 'Promotional banners']} />
          <H2>Technical Features</H2>
          <Bullets items={['Admin management system', 'Easy content management', 'Product management dashboard', 'Secure hosting setup', 'Optimized performance', 'SEO optimization setup', 'Structured architecture for scalability']} />
        </section>

        <Divider />

        <section>
          <H1>Website Structure Recommendation</H1>
          <H2>Main Sections</H2>
          <Bullets items={['Home', 'About Binnaji Group', 'Our Companies', 'Products & Services', 'Manufacturing Facilities', 'Portfolio / Showcase', 'Contact & Inquiry']} />
          <H2>Subsidiary Sections</H2>
          <P>Each subsidiary will have:</P>
          <Bullets items={['Dedicated landing section', 'Product/service showcase', 'Inquiry options', 'Brand identity integration', 'Gallery system']} />
        </section>

        <Divider />

        <section>
          <H1>Design Direction</H1>
          <P>The new website design will focus on:</P>
          <Bullets items={['Luxury presentation', 'Industrial professionalism', 'Corporate trust', 'Clean layouts', 'Strong typography', 'Premium visuals', 'High-end user experience']} />
          <P>The design language will be inspired by modern enterprise groups and premium manufacturing brands.</P>
        </section>

        <Divider />

        <section>
          <H1>Project Process</H1>
          <H2>Phase 1 – Research & Strategy</H2>
          <Bullets items={['Brand structure analysis', 'Competitor research', 'UX planning', 'Website architecture planning']} />
          <H2>Phase 2 – UI/UX Design</H2>
          <Bullets items={['Homepage design', 'Corporate page layouts', 'Mobile responsive design', 'Arabic & English UI systems']} />
          <H2>Phase 3 – Development</H2>
          <Bullets items={['Frontend development', 'Backend integration', 'Inquiry system setup', 'Performance optimization']} />
          <H2>Phase 4 – Testing & Optimization</H2>
          <Bullets items={['Mobile testing', 'Speed optimization', 'Browser compatibility testing', 'SEO setup', 'Security implementation']} />
          <H2>Phase 5 – Launch</H2>
          <Bullets items={['Final deployment', 'HTTPS setup', 'Live optimization', 'Post-launch support']} />
        </section>

        <Divider />

        <section>
          <H1>Estimated Timeline</H1>
          <P>Estimated Completion Time:</P>
          <P>6 – 8 Weeks</P>
          <P>This includes:</P>
          <Bullets items={['Design approval stages', 'Development', 'Testing', 'Optimization', 'Launch preparation']} />
        </section>

        <Divider />

        <section>
          <H1>Investment</H1>
          <P>Project Cost:</P>
          <P>650 KWD</P>
          <P>Excluded:</P>
          <P>Payment Terms:</P>
          <P>No advance payment required.</P>
          <P>Full payment after successful project completion and approval.</P>
        </section>

        <Divider />

        <section>
          <H1>Why W3 Studio</H1>
          <P>At W3 Studio, we focus on creating modern digital experiences that help businesses:</P>
          <Bullets items={['Build trust', 'Improve brand perception', 'Generate more inquiries', 'Present themselves professionally online']} />
          <P>Our team includes:</P>
          <Bullets items={['Experienced designers', 'Professional developers', 'Research-driven strategists', 'UI/UX specialists']} />
          <P>We believe a website should not simply exist.</P>
          <P>It should actively contribute to business growth.</P>
        </section>

        <Divider />

        {/* ── Conclusion Section (Beautiful Last Portion) ── */}
        <section className="mt-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF3B3B]/30 bg-[#FF3B3B]/5 mb-10">
              <Star size={12} className="text-[#FF3B3B]" />
              <span className="text-[#FF3B3B] text-[10px] font-bold tracking-widest uppercase">Conclusion</span>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-7xl mb-10">
              Your Brand Legacy <br />
              <span className="text-[#FF3B3B] italic">Deserves Excellence</span>
            </h2>

            <p className="text-[#A1A1AA] text-lg md:text-xl leading-relaxed mb-20 max-w-2xl">
              Binnaji Group has built a foundation of manufacturing power. We are here to ensure
              your digital presence reflects that same level of authority and prestige.
            </p>
          </Reveal>

          {/* Path Forward Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-32">
            <div className="space-y-10">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF3B3B]/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
                </div>
                The Path Forward
              </h3>
              <div className="space-y-8">
                {nextSteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/40 group-hover:border-[#FF3B3B]/50 group-hover:text-[#FF3B3B] transition-colors bg-white/5">
                        {i + 1}
                      </div>
                      {i !== nextSteps.length - 1 && <div className="w-px h-full bg-white/5 my-2" />}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-[#FF3B3B] transition-colors">{step.title}</h4>
                      <p className="text-[#71717A] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Investment & Trust Card */}
            <div className="relative pt-10">
              <div className="absolute inset-0 bg-[#FF3B3B]/5 blur-[80px] -z-10" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <CheckCircle2 size={160} className="text-[#FF3B3B]" />
                </div>

                <div className="mb-10">
                  <div className="text-[#71717A] text-xs uppercase tracking-[0.2em] mb-3 font-bold">Total Investment</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-6xl font-bold text-white tracking-tighter">650</span>
                    <span className="text-2xl font-bold text-[#FF3B3B]">KWD</span>
                  </div>
                  <div className="text-[#FF3B3B] text-[10px] mt-4 flex items-center gap-2 font-bold tracking-wide uppercase">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF3B3B] animate-pulse" />
                    Pay on Delivery
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {trustItems.map((item) => (
                    <div key={item.label} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <item.icon size={16} className="text-[#FF3B3B] mb-2 opacity-70" />
                      <div className="text-white text-[11px] font-bold">{item.label}</div>
                      <div className="text-[#71717A] text-[9px] uppercase tracking-wider mt-0.5">{item.sub}</div>
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
                    className="flex items-center justify-center gap-3 w-full h-14 rounded-2xl bg-[#FF3B3B] text-white font-bold text-sm shadow-[0_10px_30px_rgba(255,59,59,0.3)] group hover:bg-[#D62E2E] transition-all"
                  >
                    <MessageCircle size={18} />
                    <span>Start via WhatsApp</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    href="mailto:shefinptr@gmail.com"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 w-full h-14 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all"
                  >
                    <Mail size={18} />
                    <span>Email W3 Studio</span>
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
            className="text-center pt-24 border-t border-white/5"
          >
            <div className="inline-flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-white/10" />
              <div className="text-[#FF3B3B] text-[10px] font-bold tracking-widest uppercase italic">The W3 Studio Commitment</div>
              <div className="w-12 h-px bg-white/10" />
            </div>
            <p className="text-white text-xl md:text-2xl font-light italic mb-12 leading-relaxed">
              "We don't just build websites; we architect digital legacies. <br className="hidden md:block" /> For Binnaji Group,
              every pixel will be crafted to command respect."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF3B3B] to-[#FF8080] mb-6 p-0.5 shadow-2xl">
                <div className="w-full h-full rounded-full bg-[#0B0B0D] flex items-center justify-center text-lg font-bold">S</div>
              </div>
              <div className="text-white text-lg font-bold">Shefin</div>
              <div className="text-[#71717A] text-xs tracking-[0.3em] uppercase mt-1">Founder & Creative Director</div>
            </div>
          </motion.div>
        </section>
      </article>
    </main>
  )
}

export default App
