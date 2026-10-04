/* Content for Shruti Mishra's portfolio */
window.PROJECTS = [
  {
    id: "ledger",
    name: "Ledger",
    nameEm: "Cashflow",
    tagline: "Making cash flow legible for 40,000 small-business owners.",
    desc: "A redesigned finance dashboard that turns invoices, bills and bank feeds into one honest answer: can I pay everyone this month?",
    role: "Lead Product Designer",
    team: "1 PM, 5 Eng, 1 Researcher",
    time: "6 months · 2025",
    platform: "Web app",
    tags: ["Fintech", "B2B SaaS", "Dashboard"],
    color: "var(--cobalt)", ink: "#fff",
    mock: "desk",
    overview: "Ledger is accounting software for Indian small businesses: kirana wholesalers, design studios, clinics. Owners kept churning in the first 90 days. I led the redesign of the core dashboard and the invoicing flow, from discovery to launch.",
    problem: "Owners opened Ledger to answer one question, “am I okay this month?”, and couldn't find the answer. The dashboard showed 14 widgets, three different “balance” numbers and accounting jargon most of them had never been taught.",
    problemQuote: "“I have to call my CA just to understand my own dashboard.”",
    context: [
      ["Who", "Owner-operators with 2–30 employees, mostly mobile-first and with little formal finance training."],
      ["Constraint", "We couldn't remove any reports, because accountants depended on them for GST filing."],
      ["Business goal", "Cut 90-day churn from 34% and grow the number of invoices sent per account."]
    ],
    research: "I ran 18 contextual interviews in shops and offices across Pune and Bengaluru, reviewed 600 support tickets and ran a card sort to see how owners grouped financial concepts.",
    methods: ["Contextual inquiry ×18", "Support ticket analysis", "Card sorting", "Funnel analytics", "Competitive teardown"],
    insights: [
      ["Owners think in weeks, not months", "Cash anxiety follows payroll and supplier cycles. Month-end reports arrived too late to be useful."],
      ["“Balance” meant three things", "Bank balance, receivables and profit were all labelled ‘balance’. That broke trust on day one."],
      ["Chasing payments is emotional", "Owners delayed reminders because they worried about the relationship, not because the feature was hard to use."]
    ],
    approach: "One primary question per screen. I reorganised the product around a single forward-looking view, “Cash in the next 4 weeks”, and moved accountant reports into a separate, clearly labelled workspace. Reminders were reframed as polite, editable nudges that the system schedules for you.",
    before: ["14 widgets, no hierarchy", "Three numbers called ‘balance’", "Reports mixed with daily tasks", "Manual payment reminders"],
    after: ["One forecast with drill-downs", "Plain-language labels, tested ×3", "Owner and accountant modes", "Scheduled, friendly nudges"],
    solution: "The new dashboard leads with a 4-week cash forecast and flags the weeks that look tight. Each flag links to the one action that fixes it: chase an invoice, delay a bill or move money. All of it is built on a new token-based design system shared with the mobile app.",
    screens: [["Forecast", "4-week cash view"], ["Chase", "Polite reminder composer"], ["Modes", "Owner ↔ Accountant"]],
    outcome: [["−41%", "90-day churn"], ["2.3×", "invoices sent / account"], ["−58%", "‘what does this mean’ tickets"]],
    learnings: [
      "Language is interface. Our biggest gain came from renaming three things, not from redrawing them.",
      "Separating owner and accountant modes worked better than a compromise screen that served neither well.",
      "Next time I'd bring accountants into research sooner. We found their edge cases late."
    ]
  },
  {
    id: "kin",
    name: "Kin",
    nameEm: "Care",
    tagline: "Helping families share the care of an ageing parent.",
    desc: "A calm, shared care app for siblings coordinating medicines, appointments and check-ins, often from different cities.",
    role: "Product Designer (0→1)",
    team: "Founders + 3 Eng",
    time: "4 months · 2024",
    platform: "iOS & Android",
    tags: ["Health", "Mobile", "0→1"],
    color: "var(--butter)", ink: "var(--ink)",
    mock: "care",
    overview: "Kin is an early-stage startup building tools for families who care for elderly parents. I joined as the first designer to define the MVP, the brand's interaction language and a design system the team could grow into.",
    problem: "Care for an ageing parent is usually spread across siblings, a part-time helper and the parent themselves. Information lived in WhatsApp threads, pill boxes and memory, and doses were missed, duplicated or argued over.",
    problemQuote: "“Our family group chat has 4,000 messages. None of them tell me if Papa took his 2pm tablet.”",
    context: [
      ["Who", "Adult children aged 30–50, often abroad, plus helpers with low smartphone literacy and parents with low vision."],
      ["Constraint", "It had to work for a helper on a ₹6,000 Android phone with patchy data."],
      ["Business goal", "Prove weekly retention with 200 pilot families before raising a seed round."]
    ],
    research: "I ran diary studies with 12 families over three weeks, shadowed 4 helpers during their shifts and ran accessibility tests with parents aged 68–84.",
    methods: ["Diary study ×12 families", "Shift shadowing", "Accessibility testing", "Co-design workshops", "Prototype tests ×5 rounds"],
    insights: [
      ["The helper is the real user", "Siblings plan the care, but helpers deliver it. If the helper's flow failed, the whole product failed."],
      ["Guilt drives engagement, and burnout", "Constant alerts made distant siblings anxious. They wanted reassurance, not a live feed."],
      ["Parents want dignity, not monitoring", "Parents rejected anything that felt like surveillance. They wanted to be part of the circle."]
    ],
    approach: "I designed three role-specific surfaces on one shared timeline: a big-button, icon-led “Today” view for helpers, a calm daily digest for siblings and a simple “I'm okay” check-in for parents. Alerts escalate only when something is actually missed.",
    before: ["Group chats & paper notes", "Everyone sees every update", "One-size-fits-all UI", "Alert on every event"],
    after: ["One shared care timeline", "Role-based views", "56px targets, voice & icons", "Escalate only on a miss"],
    solution: "The MVP launched with a shared timeline, one-tap dose logging for helpers (works offline and syncs later), an evening digest for family and a weekly ‘care huddle’ summary that cut down on sibling friction.",
    screens: [["Today", "Helper's big-tap view"], ["Digest", "Evening family summary"], ["Check-in", "Parent's ‘I'm okay’"]],
    outcome: [["71%", "week-8 retention"], ["94%", "doses logged on time"], ["Seed", "round closed on pilot data"]],
    learnings: [
      "Design for the person doing the work, not the person paying for the app.",
      "Calm is a feature. Turning down notification volume increased trust and retention.",
      "Accessibility tests with parents changed our type scale more than any style guide did."
    ]
  },
  {
    id: "metro",
    name: "Metro",
    nameEm: "Pass",
    tagline: "One tap from home to platform for 1.2M daily riders.",
    desc: "A redesigned ticketing and journey-planning flow for a city metro, shaped by riders at turnstiles, not boardrooms.",
    role: "Senior UX Designer",
    team: "Agency team of 7",
    time: "5 months · 2023",
    platform: "Mobile + kiosk",
    tags: ["Mobility", "Public sector", "Service design"],
    color: "var(--mint)", ink: "var(--ink)",
    mock: "transit",
    overview: "With a design agency, I led UX for a city metro's ticketing app and its station kiosks. The aim was to move riders off paper tokens and long queues without leaving anyone behind.",
    problem: "Buying a QR ticket took 9 steps and about 2 minutes. At peak hour, riders gave up and joined the token queue, which defeated the point of the app. First-time and older riders struggled the most.",
    problemQuote: "“By the time the QR loads, my train has left.”",
    context: [
      ["Who", "Daily commuters, tourists and older riders. Used in 5 languages, often one-handed, on a moving platform."],
      ["Constraint", "Legacy fare-gate scanners and government accessibility standards."],
      ["Business goal", "Shift 40% of single-journey tickets to digital within a year."]
    ],
    research: "We ran intercept interviews at 9 stations, timed ticket purchases at the turnstile and audited the kiosks for accessibility with a group of visually impaired riders.",
    methods: ["Station intercepts ×120", "Timed task studies", "Kiosk accessibility audit", "Journey mapping", "A/B tests"],
    insights: [
      ["Most trips are repeat trips", "78% of journeys were the same 2–3 routes. Riders shouldn't have to search every time."],
      ["Gates set the deadline", "The real moment of stress is the last 10 metres before the gate, so the ticket has to be ready before then."],
      ["Language is accessibility", "Station names in a single script excluded a large share of riders."]
    ],
    approach: "Predict instead of asking. The home screen offers your likely next trip with one-tap purchase, prepares the QR before you reach the gate and lets you switch language from any screen. Kiosks reuse the same patterns, so learning one teaches you the other.",
    before: ["9 steps to a ticket", "Search every journey", "QR generated at the gate", "English-first UI"],
    after: ["1 tap for repeat trips", "Smart route suggestions", "Pre-loaded offline QR", "5 languages, switch anywhere"],
    solution: "We shipped a predictive home screen, an offline-ready ticket wallet, a high-contrast mode and a kiosk redesign with audio guidance, all built on a shared bilingual component library.",
    screens: [["Home", "Predicted next trip"], ["Ticket", "Gate-ready QR"], ["Route", "Live journey"]],
    outcome: [["11s", "median purchase time (from 2m)"], ["46%", "digital ticket share"], ["AA", "WCAG 2.1 compliance"]],
    learnings: [
      "Observing in the field beat every survey. The turnstile taught us more than the dashboard did.",
      "Public services have to design for the edge of the edge case, and that work helps every rider.",
      "I'd prototype the kiosk earlier. Physical constraints set software limits we didn't expect."
    ]
  }
];

window.PROCESS = [
  { k: "Understand", q: "What is actually going on here — and for whom?", d: "I start by listening. I sit with users where the problem happens, read the support tickets, check the data and try to understand the business before I suggest anything.", m: ["Interviews", "Field visits", "Analytics", "Stakeholder maps"], o: ["Research plan", "Problem framing"], c: "var(--tomato)" },
  { k: "Explore", q: "How many ways could this possibly work?", d: "I go wide on purpose: sketches, crazy-eights, competitor teardowns and analogies from completely different industries. Quantity first, quality later.", m: ["Sketching", "Workshops", "Teardowns", "How-might-we's"], o: ["Concept wall", "Opportunity map"], c: "var(--cobalt)" },
  { k: "Define", q: "Which problem, if solved, changes everything?", d: "I narrow down to the decisions that matter. We agree on success metrics, principles and scope so the team builds toward the same target.", m: ["Journey maps", "Prioritisation", "Design principles"], o: ["Product brief", "Success metrics"], c: "#1C8A4A" },
  { k: "Design", q: "What's the simplest thing that fully works?", d: "Flows first, then structure, then craft. I design in real content, check edge cases early and build on the system rather than around it.", m: ["User flows", "Wireframes", "UI design", "Design systems"], o: ["Hi-fi screens", "Interactive prototype"], c: "var(--tomato)" },
  { k: "Validate", q: "Does it hold up in front of real people?", d: "Usability tests, accessibility audits and, where possible, A/B tests. I treat every “huh?” from a participant as a gift.", m: ["Usability tests", "A11y audits", "A/B tests", "Heuristic review"], o: ["Findings report", "Iteration list"], c: "var(--cobalt)" },
  { k: "Refine", q: "What's left to sweat, and what can ship?", d: "I pair with engineers through build, polish motion and microcopy, write handoff docs and keep measuring after launch. Shipping is when the learning starts.", m: ["Dev pairing", "QA passes", "Motion polish", "Post-launch metrics"], o: ["Specs & tokens", "Launch review"], c: "#1C8A4A" }
];

window.SKILLS = [
  { k: "UI Design", d: "Typography-led, grid-strict interfaces with real hierarchy. I care about the 2px details and the 20-second first impression.", t: ["Figma", "Type systems", "Layout", "Visual QA"], c: "var(--butter)" },
  { k: "UX Design", d: "Flows, information architecture and the paths a product doesn't put on display: errors, empty states, the second visit.", t: ["User flows", "IA", "Wireframes", "Edge cases"], c: "var(--blush)" },
  { k: "User Research", d: "Mixed methods, run lean. I plan, recruit, moderate and synthesise, and I turn findings into decisions rather than decks.", t: ["Interviews", "Diary studies", "Usability tests", "Dovetail"], c: "var(--mint)" },
  { k: "Interaction Design", d: "Motion and feedback that explain what just happened. Every transition should answer a question the user is asking.", t: ["Micro-interactions", "Motion specs", "Principle", "Rive"], c: "#C9D1FF" },
  { k: "Prototyping", d: "From paper to code-adjacent prototypes. I choose the lowest fidelity that can answer the question at hand.", t: ["Figma", "ProtoPie", "HTML/CSS", "Framer"], c: "var(--butter)" },
  { k: "Design Systems", d: "Token-based systems with good documentation and real adoption. I've built two from scratch and rescued one.", t: ["Tokens", "Components", "Docs", "Governance"], c: "var(--blush)" },
  { k: "Product Thinking", d: "I connect design decisions to business outcomes and can argue for or against a feature with evidence.", t: ["Metrics", "Roadmapping", "Prioritisation", "Experiments"], c: "var(--mint)" },
  { k: "Accessibility", d: "WCAG 2.1 AA as a minimum. I design for screen readers, low vision, low literacy and low bandwidth from day one.", t: ["WCAG", "Screen readers", "Contrast", "Inclusive copy"], c: "#C9D1FF" }
];

window.EXPERIENCE = [
  { yr: "2024 — Now", role: "Senior Product Designer", co: "Plum", coEm: "Health insurance", now: true,
    d: "I lead design for the claims and employee experience, across 3 squads, and mentor two designers.",
    pts: ["Redesigned cashless claims, cutting drop-off by 38%", "Started the team's research repository and weekly critique", "Co-own the Plum design system with the platform team"] },
  { yr: "2022 — 2024", role: "Senior UX Designer", co: "Studio Neem", coEm: "Design agency",
    d: "I led UX for public-sector and mobility clients, working from discovery workshops through to shipped product.",
    pts: ["Metro Pass ticketing: 46% digital ticket adoption", "Ran 40+ discovery workshops with government stakeholders", "Freelanced as founding designer for Kin (health 0→1)"] },
  { yr: "2020 — 2022", role: "Product Designer", co: "Ledger", coEm: "SMB fintech",
    d: "I joined as designer #2 and grew into owning the core dashboard and invoicing experience.",
    pts: ["Led the Cashflow redesign: 90-day churn down 41%", "Built Ledger's first token-based design system", "Started a monthly ‘ride-along’ with customer support"] },
  { yr: "2019 — 2020", role: "Design Intern → Junior Designer", co: "Paperboat Labs", coEm: "Product studio",
    d: "I learned to ship: marketing sites, onboarding flows and a lot of usability testing.",
    pts: ["Designed onboarding for 3 consumer apps", "Moderated my first 50 usability sessions", "B.Des, Communication Design — NID Ahmedabad"] }
];

window.FACTS = [
  "I've filled 7 notebooks with flows before opening Figma.",
  "I trained in Kathak for 12 years. Rhythm and timing show up in my motion work.",
  "My favourite design artefact is a well-labelled empty state.",
  "I shoot on a 1982 Pentax and have the patience to prove it."
];
