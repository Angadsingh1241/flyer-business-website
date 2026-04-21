export type NavLink = {
  href: string;
  label: string;
};

export type ServiceArea = {
  slug: string;
  name: string;
  citySlug: string;
  homes: number;
  notes: string;
  landmarks: string[];
  postalPrefixes: string[];
  center: [number, number];
  radiusKm: number;
  featured?: boolean;
};

export type CityOption = {
  slug: string;
  name: string;
  note: string;
  areaSlugs: string[];
};

export type PostalCodeOption = {
  slug: string;
  prefix: string;
  label: string;
  citySlug: string;
  notes: string;
  homes: number;
  areaSlugs: string[];
};

export type ServiceDetail = {
  slug: string;
  title: string;
  summary: string;
  whoItsFor: string;
  whenToChoose: string;
  whatIsIncluded: string[];
  howItHelps: string[];
};

export type PricingPlan = {
  slug: string;
  title: string;
  deliveryType: "standard-bundle" | "door-hanger" | "custom-targeted";
  startingAt: number;
  description: string;
  idealFor: string;
  includes: string[];
  ctaLabel: string;
};

export type PricingPackage = {
  slug: string;
  title: string;
  priceFrom: number;
  summary: string;
  audience: string;
  includes: string[];
  ctaLabel: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  format: "Single-Sided" | "Front + Back";
  summary: string;
  sides: Array<{
    label: "Front Preview" | "Back Preview" | "Preview";
    src: string;
    alt: string;
  }>;
};

export const siteContent = {
  business: {
    name: "Hamilton Flyer Delivery",
    shortName: "Hamilton Flyer Delivery",
    tagline:
      "Flyer design, print, and delivery for local businesses across Hamilton and nearby areas.",
    phoneDisplay: "(365) 275-2440",
    phoneHref: "tel:+13652752440",
    textHref:
      "sms:+13652752440?&body=Hi%2C%20I%20want%20a%20quote%20for%20flyer%20delivery.",
    whatsappNumber: "13652752440",
    whatsappHref:
      "https://wa.me/13652752440?text=Hi%2C%20I%20want%20a%20quote%20for%20flyer%20delivery.",
    email: "aulakh888881@gmail.com",
    location: "Hamilton, Ontario",
    region: "Ontario",
    country: "Canada",
    serviceRadius:
      "Hamilton, Ancaster, Dundas, Stoney Creek, Waterdown, Binbrook, and nearby neighbourhoods",
    siteUrl: "https://www.hamiltonflyerdelivery.com",
    responsePromise: "Local service, clear pricing, and quick replies.",
    proofNote:
      "Sample designs are shown for demonstration while real campaign photos are being added.",
  },
  seo: {
    defaultTitle: "Hamilton Flyer Delivery | Design, Print and Door-to-Door Distribution",
    defaultDescription:
      "Hamilton Flyer Delivery helps local businesses with flyer design, printing, flyer delivery, and door hanger distribution across Hamilton and nearby areas.",
    keywords: [
      "Hamilton flyer delivery",
      "Hamilton flyer distribution",
      "Hamilton door hanger delivery",
      "Hamilton flyer printing",
      "Hamilton flyer design",
      "Hamilton flyer marketing",
      "Hamilton local advertising",
    ],
  },
  navigation: {
    main: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/templates", label: "Templates" },
      { href: "/pricing", label: "Pricing" },
      { href: "/areas-served", label: "Areas" },
    ] satisfies NavLink[],
  },
  home: {
    hero: {
      eyebrow: "Hamilton flyer delivery",
      headline:
        "Flyer design, print, and delivery for Hamilton businesses.",
      description:
        "Reach homes across Hamilton with flyer delivery, door hanger campaigns, and design + print support in one simple local service.",
      primaryCta: "Get a Quote",
      secondaryCta: "View Pricing",
      tertiaryCta: "Message on WhatsApp",
      supportingPoints: [
        "Flyer delivery",
        "Door hanger delivery",
        "Target by area or postal code",
      ],
      stats: [
        {
          label: "Coverage",
          value: "Hamilton + nearby",
          detail: "Choose the areas that fit your business",
        },
        {
          label: "Services",
          value: "Design, print, delivery",
          detail: "Handled together or quoted separately",
        },
        {
          label: "Quote flow",
          value: "Fast and simple",
          detail: "Send a quote request straight to WhatsApp",
        },
      ],
    },
    servicesIntro: {
      eyebrow: "Services",
      title: "Simple flyer marketing services for local businesses.",
      description:
        "Everything is built around getting your offer into the right homes without making the process complicated.",
    },
    pricingIntro: {
      eyebrow: "Pricing",
      title: "Clear starting rates and example campaign packages.",
      description:
        "See the base rates first, then use the example packages to get a better feel for what a campaign could look like.",
    },
    areasIntro: {
      eyebrow: "Areas we cover",
      title: "Choose your target area in the way that feels easiest.",
      description:
        "Start with city or area selection, use postal codes if you prefer, and open advanced targeting only if you need extra detail.",
    },
    samplesIntro: {
      eyebrow: "Template gallery",
      title: "Real flyer template previews organized in a clean, client-ready gallery.",
      description:
        "Browse single-sided flyers and grouped front-and-back templates. Each template opens in a larger preview for a closer look.",
    },
    howItWorksIntro: {
      eyebrow: "How it works",
      title: "A simple process from targeting to delivery.",
      description:
        "You choose the service and area. We handle the campaign setup and delivery details.",
    },
    finalCta: {
      title: "Ready to get your business in front of local homes?",
      description:
        "Send a quick quote request with your service, target area, and quantity. We will reply with the right next step.",
      primary: "Get a Quote",
      secondary: "Message on WhatsApp",
    },
  },
  services: [
    {
      slug: "flyer-delivery",
      title: "Flyer Delivery",
      summary: "Neighbourhood flyer delivery for local promotions, menus, launches, and repeat campaigns.",
      whoItsFor:
        "Restaurants, salons, gyms, clinics, local promotions, and businesses that want consistent household reach.",
      whenToChoose:
        "Choose this when you want efficient local coverage with a simple flyer drop.",
      whatIsIncluded: [
        "Route planning by neighbourhood",
        "Bundled flyer delivery options",
        "Quantity guidance by area",
        "Flexible campaign scheduling",
      ],
      howItHelps: [
        "Keeps your offer visible in real homes",
        "Works well for repeat local awareness",
        "Makes offline marketing easier to run consistently",
      ],
    },
    {
      slug: "door-hanger-delivery",
      title: "Door Hanger Delivery",
      summary: "Premium door hanger distribution for campaigns that need more visibility at the door.",
      whoItsFor:
        "Contractors, roofers, landscapers, realtors, premium service businesses, and higher-ticket offers.",
      whenToChoose:
        "Choose this when you want stronger visibility than a standard flyer bundle.",
      whatIsIncluded: [
        "Door hanger route planning",
        "Premium placement format",
        "Proof of delivery available",
        "Targeted area recommendations",
      ],
      howItHelps: [
        "Stands out better at the doorstep",
        "Fits premium local campaigns",
        "Works well when visibility matters more than volume alone",
      ],
    },
    {
      slug: "design-print",
      title: "Design + Print",
      summary: "Professional flyer design and print coordination handled in one place.",
      whoItsFor:
        "Businesses that need artwork created, updated, or prepared properly before delivery starts.",
      whenToChoose:
        "Choose this when you want the campaign handled from concept to print-ready production.",
      whatIsIncluded: [
        "Custom flyer layout",
        "Clear offer and CTA structure",
        "Print-ready file setup",
        "Print planning tied to your delivery route",
      ],
      howItHelps: [
        "Makes the flyer look more credible",
        "Avoids mismatched design and print handoffs",
        "Keeps the campaign easier to manage",
      ],
    },
    {
      slug: "targeted-area-distribution",
      title: "Targeted Area Distribution",
      summary: "Choose by city, neighbourhood, or postal code instead of using a generic city-wide drop.",
      whoItsFor:
        "Businesses that care about service radius, higher-value neighbourhoods, or specific local pockets.",
      whenToChoose:
        "Choose this when area selection matters as much as the flyer itself.",
      whatIsIncluded: [
        "Selection by city, area, or postal code",
        "Home count planning",
        "Route guidance based on your offer",
        "Custom quotes for targeted campaigns",
      ],
      howItHelps: [
        "Puts budget into the places that matter",
        "Supports more relevant local targeting",
        "Makes the campaign feel more intentional",
      ],
    },
  ] satisfies ServiceDetail[],
  pricing: {
    intro: {
      eyebrow: "Pricing",
      title: "Straightforward pricing for local flyer campaigns.",
      description:
        "Start with the delivery rate, then add design or printing if you need them. Final pricing depends on quantity, area, print specs, and delivery type.",
    },
    plans: [
      {
        slug: "standard-bundle",
        title: "Standard Flyer Bundle",
        deliveryType: "standard-bundle",
        startingAt: 0.35,
        description:
          "Cost-efficient flyer delivery for broad neighbourhood coverage.",
        idealFor:
          "Restaurants, promotions, menus, salons, gyms, and repeat local campaigns.",
        includes: [
          "Bundled flyer delivery",
          "Neighbourhood route planning",
          "Lower starting rate per home",
          "Optional design and print add-ons",
        ],
        ctaLabel: "Get a Quote",
      },
      {
        slug: "door-hanger",
        title: "Door Hanger Delivery",
        deliveryType: "door-hanger",
        startingAt: 0.7,
        description:
          "Premium delivery format for more visibility at the door.",
        idealFor:
          "Contractors, realtors, premium services, launches, and standout offers.",
        includes: [
          "Door hanger distribution",
          "Targeted route planning",
          "Premium placement style",
          "Proof of delivery available",
        ],
        ctaLabel: "Get a Quote",
      },
    ] satisfies PricingPlan[],
    packages: [
      {
        slug: "starter-campaign",
        title: "Starter Campaign",
        priceFrom: 595,
        summary: "A simple first campaign for smaller local coverage.",
        audience: "Good for local promotions, menus, openings, and service launches.",
        includes: [
          "Standard flyer delivery",
          "Approx. 1,500-home route",
          "Basic area planning",
        ],
        ctaLabel: "Get a Quote",
      },
      {
        slug: "growth-campaign",
        title: "Growth Campaign",
        priceFrom: 1250,
        summary: "A larger campaign for stronger reach across selected areas.",
        audience: "Good for businesses that want more consistent local visibility.",
        includes: [
          "Standard flyer delivery",
          "Approx. 3,500-home route",
          "Area targeting support",
        ],
        ctaLabel: "Get a Quote",
      },
      {
        slug: "door-hanger-campaign",
        title: "Door Hanger Campaign",
        priceFrom: 1495,
        summary: "A premium campaign built around stronger door-to-door presence.",
        audience: "Good for higher-value services and premium local offers.",
        includes: [
          "Door hanger delivery",
          "Approx. 2,000 homes",
          "Proof of delivery available",
        ],
        ctaLabel: "Get a Quote",
      },
      {
        slug: "bundle-design-print-delivery",
        title: "Design + Print + Delivery Bundle",
        priceFrom: 895,
        summary: "A practical bundled option when you need everything handled together.",
        audience: "Good for first-time campaigns and businesses without ready artwork.",
        includes: [
          "Flyer design",
          "Print coordination",
          "Delivery planning and route setup",
        ],
        ctaLabel: "Get a Quote",
      },
    ] satisfies PricingPackage[],
    addOns: {
      designStartingAt: 95,
      printMinimum: 85,
      printPerHomeEstimate: 0.12,
      customTargetedStartingAt: 0.55,
    },
    comparisonRows: [
      {
        feature: "Starting price",
        standard: "From 35 cents per home",
        doorHanger: "From 70 cents per home",
      },
      {
        feature: "Format",
        standard: "Bundled flyer delivery",
        doorHanger: "Premium door hanger placement",
      },
      {
        feature: "Best for",
        standard: "Broader reach and repeat campaigns",
        doorHanger: "Higher visibility and premium offers",
      },
      {
        feature: "Proof of delivery",
        standard: "Available on selected custom campaigns",
        doorHanger: "Available",
      },
      {
        feature: "Planning style",
        standard: "Efficient route coverage",
        doorHanger: "More selective premium route planning",
      },
    ],
    disclaimer:
      "Example package pricing is for planning only. Final quotes depend on quantity, target area, design scope, print specs, and delivery details.",
  },
  serviceAreas: [
    {
      slug: "downtown-hamilton",
      name: "Downtown Hamilton",
      citySlug: "hamilton",
      homes: 7800,
      notes: "Good for restaurants, clinics, local promotions, and downtown visibility.",
      landmarks: ["James Street North", "King William", "Bayfront access"],
      postalPrefixes: ["L8N", "L8P", "L8R"],
      center: [43.2561, -79.8715],
      radiusKm: 1.4,
      featured: true,
    },
    {
      slug: "hamilton-mountain",
      name: "Hamilton Mountain",
      citySlug: "hamilton",
      homes: 18500,
      notes: "Large residential coverage for home services, local offers, and repeat campaigns.",
      landmarks: ["Limeridge area", "Upper James", "Mohawk corridor"],
      postalPrefixes: ["L8T", "L8V", "L8W", "L9A", "L9B", "L9C"],
      center: [43.2276, -79.8844],
      radiusKm: 3.6,
      featured: true,
    },
    {
      slug: "stoney-creek",
      name: "Stoney Creek",
      citySlug: "stoney-creek",
      homes: 14200,
      notes: "Strong suburban coverage for real estate, contractors, clinics, and family services.",
      landmarks: ["Centennial Parkway", "Old Stoney Creek", "Fruitland Road"],
      postalPrefixes: ["L8E", "L8G", "L8H", "L8J"],
      center: [43.2175, -79.7599],
      radiusKm: 3.2,
      featured: true,
    },
    {
      slug: "ancaster",
      name: "Ancaster",
      citySlug: "ancaster",
      homes: 9700,
      notes: "Popular for premium residential targeting and higher-value local services.",
      landmarks: ["Meadowlands", "Wilson Street", "Ancaster Village"],
      postalPrefixes: ["L9G"],
      center: [43.2183, -80.0176],
      radiusKm: 2.9,
      featured: true,
    },
    {
      slug: "dundas",
      name: "Dundas",
      citySlug: "dundas",
      homes: 6900,
      notes: "Community-focused routes for local businesses, clinics, and events.",
      landmarks: ["King Street West", "Dundas Driving Park", "University Plaza edge"],
      postalPrefixes: ["L9H"],
      center: [43.2663, -79.9565],
      radiusKm: 2.1,
    },
    {
      slug: "westdale-ainslie-wood",
      name: "Westdale & Ainslie Wood",
      citySlug: "hamilton",
      homes: 5200,
      notes: "Useful for student-facing offers, food, and neighbourhood promotions.",
      landmarks: ["McMaster University", "Westdale Village", "Main Street West"],
      postalPrefixes: ["L8S"],
      center: [43.2624, -79.9314],
      radiusKm: 1.8,
    },
    {
      slug: "east-hamilton",
      name: "East Hamilton",
      citySlug: "hamilton",
      homes: 8800,
      notes: "Established neighbourhood coverage for repeat delivery campaigns.",
      landmarks: ["Barton Street East", "Kenilworth", "Red Hill corridor"],
      postalPrefixes: ["L8K", "L8L", "L8M"],
      center: [43.2416, -79.8182],
      radiusKm: 2.6,
    },
    {
      slug: "binbrook",
      name: "Binbrook",
      citySlug: "binbrook",
      homes: 3900,
      notes: "Growing residential area for family services and community-focused campaigns.",
      landmarks: ["Binbrook Fairgrounds", "Fall Fair Way", "Binbrook Road"],
      postalPrefixes: ["L0R"],
      center: [43.1219, -79.8103],
      radiusKm: 1.8,
    },
    {
      slug: "waterdown",
      name: "Waterdown",
      citySlug: "waterdown",
      homes: 7900,
      notes: "Good nearby market for home services, health, and real estate offers.",
      landmarks: ["Dundas Street East", "Waterdown Village", "Clappisons Corners"],
      postalPrefixes: ["L8B"],
      center: [43.3319, -79.8944],
      radiusKm: 2.4,
    },
  ] satisfies ServiceArea[],
  locationOptions: {
    cities: [
      {
        slug: "hamilton",
        name: "Hamilton",
        note: "Includes downtown, Hamilton Mountain, East Hamilton, and Westdale.",
        areaSlugs: [
          "downtown-hamilton",
          "hamilton-mountain",
          "westdale-ainslie-wood",
          "east-hamilton",
        ],
      },
      {
        slug: "stoney-creek",
        name: "Stoney Creek",
        note: "Suburban east-end coverage.",
        areaSlugs: ["stoney-creek"],
      },
      {
        slug: "ancaster",
        name: "Ancaster",
        note: "Residential routes and premium service areas.",
        areaSlugs: ["ancaster"],
      },
      {
        slug: "dundas",
        name: "Dundas",
        note: "Community-focused local coverage.",
        areaSlugs: ["dundas"],
      },
      {
        slug: "waterdown",
        name: "Waterdown",
        note: "Nearby residential targeting.",
        areaSlugs: ["waterdown"],
      },
      {
        slug: "binbrook",
        name: "Binbrook",
        note: "Growing suburban coverage.",
        areaSlugs: ["binbrook"],
      },
    ] satisfies CityOption[],
    postalCodes: [
      {
        slug: "l8n-l8p-l8r",
        prefix: "L8N / L8P / L8R",
        label: "Downtown Hamilton",
        citySlug: "hamilton",
        notes: "Downtown and central Hamilton postal code prefixes.",
        homes: 7800,
        areaSlugs: ["downtown-hamilton"],
      },
      {
        slug: "l8t-l8v-l8w-l9a-l9b-l9c",
        prefix: "L8T / L8V / L8W / L9A / L9B / L9C",
        label: "Hamilton Mountain",
        citySlug: "hamilton",
        notes: "Mountain and upper-city coverage.",
        homes: 18500,
        areaSlugs: ["hamilton-mountain"],
      },
      {
        slug: "l8e-l8g-l8h-l8j",
        prefix: "L8E / L8G / L8H / L8J",
        label: "Stoney Creek",
        citySlug: "stoney-creek",
        notes: "Stoney Creek and adjoining east-end routes.",
        homes: 14200,
        areaSlugs: ["stoney-creek"],
      },
      {
        slug: "l8s",
        prefix: "L8S",
        label: "Westdale & Ainslie Wood",
        citySlug: "hamilton",
        notes: "McMaster and Westdale area.",
        homes: 5200,
        areaSlugs: ["westdale-ainslie-wood"],
      },
      {
        slug: "l8k-l8l-l8m",
        prefix: "L8K / L8L / L8M",
        label: "East Hamilton",
        citySlug: "hamilton",
        notes: "Established east Hamilton neighbourhoods.",
        homes: 8800,
        areaSlugs: ["east-hamilton"],
      },
      {
        slug: "l9g",
        prefix: "L9G",
        label: "Ancaster",
        citySlug: "ancaster",
        notes: "Ancaster postal code prefix.",
        homes: 9700,
        areaSlugs: ["ancaster"],
      },
      {
        slug: "l9h",
        prefix: "L9H",
        label: "Dundas",
        citySlug: "dundas",
        notes: "Dundas postal code prefix.",
        homes: 6900,
        areaSlugs: ["dundas"],
      },
      {
        slug: "l8b",
        prefix: "L8B",
        label: "Waterdown",
        citySlug: "waterdown",
        notes: "Waterdown postal code prefix.",
        homes: 7900,
        areaSlugs: ["waterdown"],
      },
      {
        slug: "l0r",
        prefix: "L0R",
        label: "Binbrook",
        citySlug: "binbrook",
        notes: "Binbrook-focused postal code prefix.",
        homes: 3900,
        areaSlugs: ["binbrook"],
      },
    ] satisfies PostalCodeOption[],
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Simple local campaign planning from start to finish.",
    description:
      "The goal is to make the process easy for first-time buyers and repeat local campaigns.",
    steps: [
      {
        number: "01",
        title: "Choose your service",
        description:
          "Pick flyer delivery, door hanger delivery, or design + print support.",
      },
      {
        number: "02",
        title: "Select your target area",
        description:
          "Choose by city, area, or postal code based on who you want to reach.",
      },
      {
        number: "03",
        title: "Approve design and print details",
        description:
          "If you need artwork or printing, those details are confirmed before the campaign moves.",
      },
      {
        number: "04",
        title: "We deliver your campaign",
        description:
          "Your flyer or door hanger campaign is scheduled and delivered to the selected neighbourhoods.",
      },
    ],
  },
  portfolio: {
    note: "Template gallery shown for demonstration. Front and back pairs are grouped together where they belong to the same flyer design.",
    items: [
      {
        slug: "cleaning-service",
        title: "Cleaning Service Flyer Template",
        category: "Home Services",
        format: "Single-Sided",
        summary: "Single-sided cleaning service flyer with a bold offer block and clear service checklist.",
        sides: [
          {
            label: "Preview",
            src: "/flyer-templates/cleaning-service.png",
            alt: "Cleaning service flyer template preview",
          },
        ],
      },
      {
        slug: "renovation-construction",
        title: "Renovation & Construction Flyer Template",
        category: "Construction",
        format: "Single-Sided",
        summary: "Single-sided renovation and construction flyer with a strong headline and service breakdown.",
        sides: [
          {
            label: "Preview",
            src: "/flyer-templates/renovation-construction.png",
            alt: "Renovation and construction flyer template preview",
          },
        ],
      },
      {
        slug: "hvac-repair-services",
        title: "HVAC Repair Flyer Template",
        category: "HVAC",
        format: "Single-Sided",
        summary: "Single-sided HVAC flyer with strong service hierarchy and visible contact details.",
        sides: [
          {
            label: "Preview",
            src: "/flyer-templates/hvac-repair-services.png",
            alt: "HVAC repair flyer template preview",
          },
        ],
      },
      {
        slug: "plumbing-service",
        title: "Plumbing Service Flyer Template",
        category: "Plumbing",
        format: "Single-Sided",
        summary: "Single-sided plumbing flyer with clear service bullets and a strong booking call to action.",
        sides: [
          {
            label: "Preview",
            src: "/flyer-templates/plumbing-service.png",
            alt: "Plumbing service flyer template preview",
          },
        ],
      },
      {
        slug: "pressure-washing",
        title: "Pressure Washing Flyer Template",
        category: "Exterior Cleaning",
        format: "Single-Sided",
        summary: "Single-sided pressure washing flyer with promotional pricing and multi-photo layout.",
        sides: [
          {
            label: "Preview",
            src: "/flyer-templates/pressure-washing.png",
            alt: "Pressure washing flyer template preview",
          },
        ],
      },
      {
        slug: "gutter-cleaning",
        title: "Gutter Cleaning Flyer Template",
        category: "Exterior Maintenance",
        format: "Single-Sided",
        summary: "Single-sided gutter cleaning flyer with price anchor, trust copy, and service callouts.",
        sides: [
          {
            label: "Preview",
            src: "/flyer-templates/gutter-cleaning.png",
            alt: "Gutter cleaning flyer template preview",
          },
        ],
      },
      {
        slug: "car-detailing",
        title: "Car Detailing Flyer Template",
        category: "Automotive",
        format: "Single-Sided",
        summary: "Single-sided car detailing flyer with bold pricing blocks and premium visual contrast.",
        sides: [
          {
            label: "Preview",
            src: "/flyer-templates/car-detailing.png",
            alt: "Car detailing flyer template preview",
          },
        ],
      },
      {
        slug: "real-estate-homeowner",
        title: "Real Estate Home Value Flyer Template",
        category: "Realtor",
        format: "Front + Back",
        summary: "Front-and-back real estate flyer template focused on homeowner intent and home value offers.",
        sides: [
          {
            label: "Front Preview",
            src: "/flyer-templates/real-estate-homeowner-front.png",
            alt: "Front preview of real estate home value flyer template",
          },
          {
            label: "Back Preview",
            src: "/flyer-templates/real-estate-homeowner-back.png",
            alt: "Back preview of real estate home value flyer template",
          },
        ],
      },
      {
        slug: "spice-of-india",
        title: "Spice of India Flyer Template",
        category: "Restaurant",
        format: "Front + Back",
        summary: "Front-and-back restaurant flyer template combining menu highlights, coupons, and contact details.",
        sides: [
          {
            label: "Front Preview",
            src: "/flyer-templates/spice-of-india-front.png",
            alt: "Front preview of Spice of India flyer template",
          },
          {
            label: "Back Preview",
            src: "/flyer-templates/spice-of-india-back.png",
            alt: "Back preview of Spice of India flyer template",
          },
        ],
      },
    ] satisfies PortfolioItem[],
  },
  faq: [
    {
      question: "What areas do you cover?",
      answer:
        "We cover Hamilton and nearby areas including Ancaster, Dundas, Stoney Creek, Waterdown, Binbrook, and selected neighbourhoods across the city.",
    },
    {
      question: "Can I target by postal code?",
      answer:
        "Yes. You can choose by city, area, or postal code prefix depending on how specific you want the campaign to be.",
    },
    {
      question: "Do you design and print the flyers too?",
      answer:
        "Yes. We can handle flyer design and print coordination as part of the same quote.",
    },
    {
      question: "What is the difference between a flyer drop and a door hanger campaign?",
      answer:
        "A standard flyer drop is the more cost-efficient option. Door hangers are a premium format with stronger visibility at the door.",
    },
    {
      question: "Do you provide proof of delivery?",
      answer:
        "Proof of delivery is available for premium routes and selected custom campaigns.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Use the quote form, call, text, or message on WhatsApp. The quote form opens WhatsApp with the details already filled in.",
    },
  ] satisfies FAQ[],
  contact: {
    heading: "Get a quote for flyer delivery in Hamilton.",
    description:
      "Keep it simple. Share the service you need, the target area, and the approximate quantity. The form opens WhatsApp with your request ready to send.",
    preferredContactMethods: [
      { value: "call", label: "Call" },
      { value: "text", label: "Text" },
      { value: "whatsapp", label: "WhatsApp" },
      { value: "email", label: "Email" },
    ],
    serviceNeeds: [
      { value: "flyer-delivery", label: "Flyer Delivery" },
      { value: "door-hanger-delivery", label: "Door Hanger Delivery" },
      { value: "design-print", label: "Design + Print" },
      { value: "targeted-area-distribution", label: "Targeted Area Distribution" },
    ],
    deliveryTypes: [
      { value: "standard-bundle", label: "Standard Flyer Bundle" },
      { value: "door-hanger", label: "Door Hanger" },
      { value: "custom-targeted", label: "Custom Targeted Drop" },
      { value: "not-sure", label: "Not sure yet" },
    ],
    timelineOptions: [
      { value: "asap", label: "As soon as possible" },
      { value: "1-2-weeks", label: "Within 1 to 2 weeks" },
      { value: "this-month", label: "Later this month" },
      { value: "next-month", label: "Next month or later" },
    ],
    budgetRanges: [
      { value: "under-1000", label: "Under $1,000" },
      { value: "1000-2500", label: "$1,000 to $2,500" },
      { value: "2500-5000", label: "$2,500 to $5,000" },
      { value: "5000-plus", label: "$5,000+" },
      { value: "not-sure", label: "Not sure yet" },
    ],
    quoteButtonLabel: "Send on WhatsApp",
  },
} as const;

export type SiteContent = typeof siteContent;
