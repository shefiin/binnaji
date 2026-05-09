import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

const analysisItems = [
  ['Outdated Brand Presentation', 'The current website does not visually represent the premium quality, manufacturing capability, or business scale of Binnaji Group. This can make the company appear less modern and less premium than it is in reality.'],
  ['Non-Responsive Mobile Experience', 'On mobile devices, users experience broken layouts, horizontal overflow, manual zooming, and difficult navigation. This directly affects trust, inquiry rates, and search performance.'],
  ['Website Security Warning', 'The website currently runs on HTTP, causing browsers to display a “Not Secure” warning. This weakens customer confidence and corporate credibility.'],
  ['Weak Calls-To-Action', 'Important actions such as WhatsApp inquiry, direct quote requests, phone calls, and product inquiries are either unclear, missing, or not functioning effectively.'],
  ['Confusing Navigation', 'Several pages and links create user confusion, including incorrect routes, repeated destinations, and disconnected subsidiary journeys.'],
  ['Weak Subsidiary Presentation', 'The group’s companies are not presented with enough clarity, strength, identity, or product depth to communicate the full scale of operations.'],
  ['Bilingual Experience Issues', 'Language switching creates inconsistent layouts, mixed labels, and weak Arabic support, affecting both local and international perception.'],
  ['Poor Product Presentation', 'Premium products such as perfumes, paper bags, wedding cards, and printing products require stronger visuals, clearer details, and better inquiry paths.'],
  ['Technical Errors', 'Broken forms, routing issues, SMTP failures, and inconsistent footer behavior create the impression that the website is not actively maintained.'],
]

const solutionItems = [
  'Premium modern visual identity',
  'Mobile-first responsive experience',
  'Secure HTTPS implementation',
  'True bilingual English and Arabic architecture',
  'Clear subsidiary structure under one master brand',
  'Product showcase system for perfumes, paper bags, cards, and printing products',
  'WhatsApp, call, quote request, and lead generation flows',
  'SEO-friendly and performance-optimized architecture',
  'Stable inquiry systems with reliable routing and testing',
]

const features = [
  ['Corporate Features', ['Modern premium UI/UX design', 'Fully responsive mobile-first layouts', 'Bilingual Arabic and English support', 'Secure HTTPS setup', 'Fast-loading optimized pages', 'Modern navigation structure', 'SEO-friendly architecture']],
  ['Business Features', ['Product showcase system', 'Subsidiary company pages', 'WhatsApp integration', 'Click-to-call integration', 'Request quote forms', 'Lead generation forms', 'Featured products and promotional sections']],
  ['Technical Features', ['Admin management system', 'Easy content management', 'Product management dashboard', 'Secure hosting setup', 'Performance optimization', 'SEO setup', 'Scalable structure for future expansion']],
]

const process = [
  ['Phase 1', 'Research & Strategy', 'Brand structure analysis, competitor research, UX planning, and website architecture planning.'],
  ['Phase 2', 'UI/UX Design', 'Homepage design, corporate page layouts, mobile responsive design, and Arabic and English UI systems.'],
  ['Phase 3', 'Development', 'Frontend development, backend integration, inquiry system setup, and performance optimization.'],
  ['Phase 4', 'Testing & Optimization', 'Mobile testing, speed optimization, browser compatibility checks, SEO setup, and security implementation.'],
  ['Phase 5', 'Launch', 'Final deployment, HTTPS setup, live optimization, and post-launch support.'],
]

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

function Section({ eyebrow, title, children, id }) {
  return (
    <section id={id} className="border-t border-white/[0.08] py-20 md:py-28">
      <Reveal>
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-10 bg-[#FF0000]" />
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#FF0000]">{eyebrow}</p>
        </div>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-10 space-y-7 text-[1.03rem] leading-8 text-[#B3B3B3] md:text-lg md:leading-9">
        {children}
      </div>
    </section>
  )
}

function Quote({ children }) {
  return (
    <Reveal className="my-12 border-l border-[#FF0000] pl-6 md:pl-8">
      <p className="max-w-3xl text-2xl font-medium leading-snug tracking-[-0.02em] text-white md:text-4xl md:leading-tight">
        {children}
      </p>
    </Reveal>
  )
}

function MinimalButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center border border-[#FF0000]/70 px-7 text-sm font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#FF0000] hover:text-white"
    >
      {children}
    </a>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[900px] items-center justify-between px-5 md:px-8">
          <a href="#top" className="text-xs font-medium uppercase tracking-[0.24em] text-white">
            W3 Studio
          </a>
          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.18em] text-[#6E6E73] md:flex">
            <a className="transition hover:text-white" href="#analysis">Analysis</a>
            <a className="transition hover:text-white" href="#solution">Solution</a>
            <a className="transition hover:text-white" href="#investment">Investment</a>
          </nav>
        </div>
      </header>

      <section id="top" className="flex min-h-screen items-center px-5 pt-16 md:px-8">
        <Reveal className="mx-auto max-w-[900px] text-center">
          <p className="mx-auto mb-10 w-fit border-y border-[#FF0000]/50 py-3 text-xs font-medium uppercase tracking-[0.34em] text-[#FF0000]">
            Website Modernization Proposal
          </p>
          <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white md:text-8xl lg:text-9xl">
            Binnaji Group
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-2xl font-light leading-snug tracking-[-0.025em] text-white md:text-4xl">
            A premium digital proposal for a modern corporate presence.
          </p>
          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#B3B3B3] md:text-lg">
            Prepared by W3 Studio for Binnaji Group, Kuwait. A serious, scalable, bilingual website modernization plan built around trust, legacy, manufacturing excellence, and business growth.
          </p>
          <div className="mt-12">
            <MinimalButton href="#introduction">Read Proposal</MinimalButton>
          </div>
          <a href="#introduction" className="mx-auto mt-24 block w-fit text-xs uppercase tracking-[0.24em] text-[#6E6E73] transition hover:text-white">
            Scroll
          </a>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[900px] px-5 md:px-8">
        <Section id="introduction" eyebrow="Introduction" title="Binnaji Group has the operational strength. The website should communicate it with the same authority.">
          <Reveal>
            <p>
              Binnaji Group has established itself as a trusted and diversified industrial brand in Kuwait through manufacturing, printing, advertising, luxury stationery, packaging, and specialized production services.
            </p>
          </Reveal>
          <Reveal>
            <p>
              The company’s physical presence, operational scale, and portfolio of subsidiary businesses clearly demonstrate a strong market position and long-standing credibility. However, the current digital presence does not reflect the true scale, quality, professionalism, or premium positioning of the group.
            </p>
          </Reveal>
          <Quote>
            A company website is no longer an online brochure. It is a trust-building platform, a digital showroom, and a sales tool working every day.
          </Quote>
          <Reveal>
            <p>
              Our goal is to transform the Binnaji Group website into a modern, premium, bilingual corporate platform that properly showcases the company’s legacy, subsidiaries, manufacturing quality, and business scale.
            </p>
          </Reveal>
        </Section>

        <Section id="analysis" eyebrow="Current Website Analysis" title="The existing website creates friction where it should create confidence.">
          <Reveal>
            <p>
              After reviewing the existing website structure, user experience, design, functionality, and technical implementation, we identified several areas that silently affect credibility, lead generation, and customer experience.
            </p>
          </Reveal>
          <div className="space-y-8 pt-4">
            {analysisItems.map(([title, text]) => (
              <Reveal key={title} className="border-t border-white/[0.08] pt-8">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{title}</h3>
                <p className="mt-3 max-w-3xl text-base leading-8 text-[#B3B3B3] md:text-lg md:leading-9">{text}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section eyebrow="Business Impact" title="These issues do not only affect appearance. They affect perception, trust, and lost opportunity.">
          <Reveal>
            <p>
              When visitors compare Binnaji Group with modern competitors, the website may unintentionally create the impression that the business is not actively modernized, less premium than competitors, smaller than its actual operations, or less aligned with corporate buyer expectations.
            </p>
          </Reveal>
          <Reveal>
            <p>
              A weak mobile experience, security warnings, broken inquiry systems, and unclear product presentation can reduce trust before the customer even contacts the company. This creates silent losses: visitors leave, inquiries drop, and premium product value is not fully understood.
            </p>
          </Reveal>
          <Quote>
            The opportunity is not simply to redesign pages. The opportunity is to restore confidence at every digital touchpoint.
          </Quote>
        </Section>

        <Section id="solution" eyebrow="Our Solution" title="A modern corporate platform built with restraint, clarity, and business purpose.">
          <Reveal>
            <p>
              We will redesign the website around a premium corporate identity, clear information architecture, secure technical setup, product-led inquiry paths, and a true bilingual experience for English and Arabic users.
            </p>
          </Reveal>
          <Reveal>
            <ul className="grid gap-x-10 gap-y-4 pt-2 text-base leading-8 text-[#B3B3B3] md:grid-cols-2 md:text-lg">
              {solutionItems.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-4 h-px w-5 shrink-0 bg-[#FF0000]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        <Section eyebrow="Vision For Binnaji Group" title="A unified mother brand ecosystem for every subsidiary.">
          <Reveal>
            <p>
              The website should present Binnaji Group as a premium industrial group while allowing each subsidiary to retain clarity and purpose. Al-Ratqa, TNA, Royal Card, Zinkograph, Bin Naji Perfumes, and Printing Materials should all sit within one refined corporate ecosystem.
            </p>
          </Reveal>
          <Reveal>
            <p>
              The final platform will position Binnaji Group as a trusted manufacturing partner, a modern enterprise brand, and a scalable regional business. Each company will have dedicated presentation, product showcase, service highlights, and inquiry paths.
            </p>
          </Reveal>
        </Section>

        <Section eyebrow="Website Features" title="The proposed platform combines corporate credibility with practical business tools.">
          <div className="space-y-10">
            {features.map(([group, items]) => (
              <Reveal key={group} className="border-t border-white/[0.08] pt-8">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{group}</h3>
                <ul className="mt-5 columns-1 gap-10 space-y-3 text-base leading-7 text-[#B3B3B3] md:columns-2 md:text-lg">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section eyebrow="Design Direction" title="Luxury presentation, industrial professionalism, and strong readability.">
          <Reveal>
            <p>
              The new website design will focus on clean layouts, strong typography, premium visuals, controlled spacing, and a high-end user experience. The visual language will be inspired by modern enterprise groups and premium manufacturing brands, without turning the interface into a decorative or cluttered marketing page.
            </p>
          </Reveal>
          <Reveal>
            <p>
              The experience should communicate legacy, scale, manufacturing capability, professionalism, premium quality, and international business presence.
            </p>
          </Reveal>
        </Section>

        <Section eyebrow="Project Process" title="A structured process from strategy to launch.">
          <div className="space-y-8">
            {process.map(([phase, title, text]) => (
              <Reveal key={phase} className="grid gap-4 border-t border-white/[0.08] pt-8 md:grid-cols-[120px_1fr]">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#FF0000]">{phase}</p>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{title}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-8 text-[#B3B3B3] md:text-lg md:leading-9">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section eyebrow="Timeline" title="Estimated completion time: 6 to 8 weeks.">
          <Reveal>
            <p>
              This includes research, design approval stages, development, testing, optimization, launch preparation, HTTPS setup, and final deployment.
            </p>
          </Reveal>
        </Section>

        <Section id="investment" eyebrow="Investment" title="Project investment: 650 KWD.">
          <Reveal>
            <p>
              Domain charges, hosting or server costs, third-party paid services, and professional photography or videography are excluded if required.
            </p>
          </Reveal>
          <Reveal className="mt-10 border-y border-white/[0.08] py-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[#6E6E73]">Payment Terms</p>
            <p className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              No advance payment required.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#B3B3B3] md:text-lg">
              Full payment is due after successful project completion and approval.
            </p>
          </Reveal>
        </Section>

        <Section eyebrow="Why W3 Studio" title="We create digital experiences that improve trust, perception, and business growth.">
          <Reveal>
            <p>
              At W3 Studio, we focus on creating modern digital experiences that help businesses present themselves professionally online, generate more inquiries, and build stronger brand perception.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Our team includes experienced designers, professional developers, research-driven strategists, and UI/UX specialists. We believe a website should not simply exist. It should actively contribute to business growth.
            </p>
          </Reveal>
        </Section>

        <Section eyebrow="Final Note" title="Binnaji Group’s brand legacy deserves a modern digital presence.">
          <Reveal>
            <p>
              Binnaji Group already has the operational strength, manufacturing capabilities, and business legacy. The missing piece is a digital presence that properly communicates that value.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Our goal is to build a website that reflects the quality of your products, the scale of your operations, the professionalism of your organization, and the legacy of your group.
            </p>
          </Reveal>
          <Reveal className="pt-8">
            <MinimalButton href="mailto:hello@w3studio.com">Start Project</MinimalButton>
          </Reveal>
        </Section>
      </div>

      <footer className="border-t border-white/[0.08] bg-[#0A0A0A] px-5 py-12 md:px-8">
        <div className="mx-auto flex max-w-[900px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-white">W3 Studio</p>
            <p className="mt-3 text-sm leading-7 text-[#6E6E73]">Shefin - Founder & Creative Director</p>
          </div>
          <div className="text-sm leading-7 text-[#6E6E73] md:text-right">
            <p>Prepared for Binnaji Group, Kuwait</p>
            <p>© 2026 W3 Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
