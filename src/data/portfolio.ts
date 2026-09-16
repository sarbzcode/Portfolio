export const socialLinks = {
  email: "mailto:sarbzcode@gmail.com",
  github: "https://github.com/sarbzcode",
  linkedin: "https://www.linkedin.com/in/sarbzcode/",
};

export type FeaturedProjectData = {
  name: string;
  category: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  architecture: string[];
  status: string;
  image: string;
  imageAlt: string;
  caption: string;
  github: string;
};

export const featuredProjects: FeaturedProjectData[] = [
  {
    name: "CanadaPulse",
    category: "Data engineering · Analytics",
    subtitle: "Canadian Economic & Labour Market Intelligence Platform",
    description:
      "An end-to-end data platform that turns official Canadian labour-market and interest-rate data into a validated analytical warehouse and an interactive Next.js dashboard.",
    highlights: [
      "Ingests Statistics Canada CSV data and Bank of Canada API data with validation, source lineage and atomic PostgreSQL COPY/upsert loads.",
      "Models dimensions, facts and analytics marts across 16 dbt models, including calendar-aware MoM and YoY changes.",
      "Serves read-only FastAPI endpoints for province comparisons, interactive charts, CSV export and pipeline health.",
      "Supports scheduled batch refreshes through GitHub Actions or an optional four-task Airflow DAG.",
    ],
    technologies: [
      "Python",
      "SQL",
      "PostgreSQL",
      "dbt",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Airflow",
    ],
    architecture: [
      "Official sources",
      "Python + validation",
      "PostgreSQL / dbt",
      "Analytics marts",
      "FastAPI",
      "Next.js",
    ],
    status: "Ready for deployment · Public hosting pending",
    image: "/projects/canadapulse-overview.webp",
    imageAlt:
      "CanadaPulse overview showing Canadian labour indicators, an unemployment trend chart and provincial comparisons",
    caption:
      "Actual local dashboard capture; figures reflect the screenshot’s reference periods. Independent project using Statistics Canada table 14-10-0287 and Bank of Canada series V39079; no government affiliation.",
    github: "https://github.com/sarbzcode/CanadaPulse",
  },
  {
    name: "ValleyCabs",
    category: "Full-stack engineering · Web + mobile",
    subtitle: "Full-Stack Booking, Delivery & Dispatch Platform",
    description:
      "A transportation portfolio MVP for scheduled rides, local deliveries and dispatch, connecting customers, drivers and operators through React web and Expo mobile applications backed by FastAPI.",
    highlights: [
      "Locks departure rows before checking reservations and unexpired holds; idempotency keys protect booking retries.",
      "Reconciles Stripe payment state on the backend through signed webhooks.",
      "Authorizes tracking by ownership or assignment, job state and a configured pre-departure window; Redis stores temporary locations.",
      "Shares TypeScript workflow utilities across clients and separates stored notifications from optional Firebase delivery with an inbox/outbox workflow.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Expo",
      "FastAPI",
      "PostgreSQL / PostGIS",
      "Redis",
      "Stripe",
      "WebSockets",
    ],
    architecture: [
      "React + Expo",
      "FastAPI",
      "PostgreSQL / PostGIS",
      "Redis + integrations",
    ],
    status:
      "Active portfolio MVP · Provider, device and deployment verification pending",
    image: "/projects/valleycabs-operator.webp",
    imageAlt:
      "ValleyCabs operator dashboard with departure cards, upcoming routes and dispatch controls using fictional documentation data",
    caption:
      "Implemented operator interface with fictional, intercepted API fixtures. These are documentation examples, not live business activity.",
    github: "https://github.com/sarbzcode/ValleyCabs",
  },
];

export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "Go"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "FastAPI", "Node.js", "Flask", "Streamlit"],
  },
  {
    category: "Data Engineering",
    items: [
      "ETL / ELT",
      "Data Pipelines",
      "dbt",
      "Apache Airflow",
      "PySpark",
      "Data Warehousing",
      "Dimensional Modeling",
      "Batch Processing",
    ],
  },
  {
    category: "Databases & Backend",
    items: [
      "PostgreSQL",
      "PostGIS",
      "MongoDB",
      "MySQL",
      "Redis",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    category: "Data & Machine Learning",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Matplotlib",
      "Tableau",
      "Power BI",
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Jupyter Notebook",
      "Google Cloud Platform",
    ],
  },
];

export const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    provider: "Google / Coursera",
    year: "2025",
    focus:
      "SQL · Tableau · Data Cleaning · Data Validation · Data Visualization · Spreadsheets",
  },
  {
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "IBM / Coursera",
    year: "2025",
    focus:
      "Python · Git/GitHub · Linux/Bash · Flask · REST APIs · Unit Testing · SDLC",
  },
];
