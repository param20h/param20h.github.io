export interface DetailedProject {
  id: string;
  title: string;
  subtitle: string;
  category: "ai-ml" | "fullstack" | "backend" | "research" | "tools";
  categoryLabel: string;
  description: string;
  outcome: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  images?: string[];
  status: "live" | "research" | "open-source";
  telemetry?: {
    type: "benchmarks" | "dag" | "clustering" | "pipeline" | "metrics";
    badge: string;
    stats: { label: string; value: string }[];
    terminalOutput?: string[];
  };
}

export const allProjects: DetailedProject[] = [
  {
    id: "campusiq",
    title: "CampusIQ",
    subtitle: "Concurrency Control & Event Analytics Engine",
    category: "backend",
    categoryLabel: "Backend & Systems",
    description:
      "Full-stack smart campus event lifecycle and real-time analytics platform engineered to resolve database concurrency, polymorphic event schemas, and analytical reporting bottlenecks in university administration. Demonstrates two isolated layers: a Next.js 14 production platform and an academic PyMongo engine.",
    outcome:
      "Guaranteed zero overbooking under peak load using MongoDB single-document conditional atomic updates ($expr with $inc) and sub-10ms department analytics via compound Equality-Sort-Range (ESR) indexing.",
    highlights: [
      "Atomic Single-Document Updates ($expr with $inc) eliminating reservation race conditions",
      "Compound Equality-Sort-Range (ESR) Indexing preventing in-memory sort blowouts",
      "Multi-stage aggregation pipelines ($match → $lookup → $unwind → $group → $project)",
      "19 automated Pytest test cases covering seat depletion, edge scenarios, and concurrency",
    ],
    tech: [
      "Next.js 14",
      "TypeScript",
      "MongoDB Atlas",
      "PyMongo",
      "Python",
      "Recharts",
      "Node.js Driver",
      "Pytest",
    ],
    liveUrl: "https://campusiq-orpin.vercel.app/",
    githubUrl: "https://github.com/param20h/campusiq",
    status: "live",
    telemetry: {
      type: "benchmarks",
      badge: "CONCURRENCY BENCHMARK",
      stats: [
        { label: "Atomic Overbooking", value: "0 Race Conditions" },
        { label: "ESR Query Latency", value: "< 4.2ms" },
        { label: "Automated Pytests", value: "19 / 19 Passed" },
      ],
      terminalOutput: [
        "Running tests/test_concurrency.py ...",
        "✓ test_atomic_seat_depletion ($expr + $inc): PASSED (0.012s)",
        "✓ test_esr_index_execution_stats (IXSCAN without SORT): PASSED",
        "✓ test_multistage_department_aggregations: PASSED (3.8ms)",
        "Result: 19 passed in 0.48s — 0 Overbookings Recorded",
      ],
    },
  },
  {
    id: "zenithflow",
    title: "ZenithFlow",
    subtitle: "Productivity & Wellness SaaS Ecosystem",
    category: "fullstack",
    categoryLabel: "Full-Stack Applications",
    description:
      "Production personal velocity and wellness web platform designed to streamline daily habit tracking and workout analytics. Integrates AI-driven biometric coaching routines, PostgreSQL Row-Level Security (RLS) via Supabase for tenant isolation, and secure Razorpay payment workflows with automated transactional email notifications.",
    outcome:
      "Architected complete SaaS lifecycle including automated subscription webhooks with Razorpay, tenant data isolation via PostgreSQL RLS, and sub-100ms habit dashboard synchronization.",
    highlights: [
      "Tenant isolation via Supabase PostgreSQL Row-Level Security (RLS) policies",
      "End-to-end Razorpay subscription payment webhooks and automated status sync",
      "AI-driven biometric habit coaching suggestions based on user progress velocity",
      "Transactional email confirmations with Resend API and production Next.js 14 stack",
    ],
    tech: [
      "Next.js 14",
      "TypeScript",
      "Supabase Auth",
      "Node.js",
      "Express",
      "Razorpay API",
      "Resend API",
      "PostgreSQL",
    ],
    liveUrl: "https://zenithflow.dev/",
    images: [
      "/media/zenith/1.png",
      "/media/zenith/2.png",
      "/media/zenith/3.png",
      "/media/zenith/4.png",
    ],
    status: "live",
  },
  {
    id: "vesta-ai",
    title: "Vesta AI",
    subtitle: "Investment Research Multi-Agent Platform",
    category: "ai-ml",
    categoryLabel: "AI & LLM Agents",
    description:
      "Agentic financial research platform orchestrating a 3-node directed acyclic graph (DAG) via LangGraph.js: Ticker Resolution & Live Market Retrieval → Structured Signal Extraction → Grounded Decision Synthesis. Delivers an Invest/Watch/Pass verdict with confidence scoring and interactive 5-year financial analytics streamed over NDJSON.",
    outcome:
      "Eliminated hallucination in financial synthesis through strict grounding across live Tavily market searches and Financial Modeling Prep (FMP) balance sheets streamed via real-time NDJSON.",
    highlights: [
      "3-Node Directed Acyclic Graph (DAG) state machine orchestrated with LangGraph.js",
      "Real-time NDJSON token streaming with client-side reactive chunk rendering",
      "Interactive SVG 5-year financial metrics visualizer (revenue, EBITDA, margins)",
      "Zero-cost operational architecture powered by Gemini 2.5 Flash, Tavily, and FMP",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "LangGraph.js",
      "Google Gemini",
      "Tavily API",
      "FMP API",
      "Tailwind CSS",
    ],
    liveUrl: "https://ai-investment-planner-amber.vercel.app",
    githubUrl: "https://github.com/param20h/Ai-investment-planner",
    status: "live",
    telemetry: {
      type: "dag",
      badge: "AGENT GRAPH ORCHESTRATION",
      stats: [
        { label: "Graph Nodes", value: "3 Directed Nodes" },
        { label: "Protocol", value: "NDJSON Stream" },
        { label: "Confidence Weight", value: "Dynamic Scoring" },
      ],
      terminalOutput: [
        "[Node 1: Resolver] Identified ticker AAPL -> Fetching live FMP balance sheets",
        "[Node 2: SignalExtractor] Extracted 5yr free-cash-flow CAGR: +11.4%",
        "[Node 3: DecisionSynthesizer] Grounded analysis against Tavily news feeds",
        "Verdict: INVEST (Confidence Score: 88%) -> Streaming NDJSON payload...",
      ],
    },
  },
  {
    id: "parkcontrol",
    title: "ParkControl Sentinel",
    subtitle: "AI Parking Congestion & Spatial Telemetry Dashboard",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    description:
      "Municipal traffic congestion dashboard analyzing 298K+ spatial violation logs for urban enforcement. Uses DBSCAN density-based clustering to detect illegal parking hotspots, Pearson correlation mapping for congestion bottlenecks, a What-If enforcement simulator, and a bounded knapsack optimization algorithm for automated officer dispatch.",
    outcome:
      "Engineered an automated dispatch model that processes 298,400+ spatial coordinates to surface highest-impact enforcement zones, reducing manual route planning overhead.",
    highlights: [
      "DBSCAN density clustering (eps=0.04, min_samples=15) discovering illegal parking clusters",
      "Bounded Knapsack optimization algorithm maximizing officer coverage under patrol constraints",
      "Pearson correlation matrices linking spatial parking violations to corridor congestion",
      "Interactive dynamic-downsampling Leaflet heatmaps capable of fluid 60 FPS exploration",
    ],
    tech: [
      "React",
      "FastAPI",
      "Scikit-Learn",
      "Leaflet.js",
      "Recharts",
      "NumPy",
      "Pandas",
    ],
    liveUrl: "https://gridlock-frontend.vercel.app",
    githubUrl: "https://github.com/param20h/Parking-control",
    status: "live",
    telemetry: {
      type: "clustering",
      badge: "SPATIAL DBSCAN TELEMETRY",
      stats: [
        { label: "Spatial Logs", value: "298,402 Coordinates" },
        { label: "Detected Hotspots", value: "14 Dense Clusters" },
        { label: "Dispatch Optimizer", value: "Bounded Knapsack" },
      ],
      terminalOutput: [
        "Ingesting spatial violation telemetry: 298,402 geo-points",
        "Running DBSCAN(eps=0.04, min_samples=15, metric='haversine')",
        "Identified 14 primary illegal parking clusters in high-density corridors",
        "Executing Bounded Knapsack patrol allocation: 10 patrol units assigned optimally",
      ],
    },
  },
  {
    id: "flatmate",
    title: "FlatMate",
    subtitle: "Collaborative Expense Engine & Debt Simplifier",
    category: "fullstack",
    categoryLabel: "Full-Stack Applications",
    description:
      "Collaborative expense-sharing engine featuring a 19-anomaly CSV transaction parser, time-scoped flat membership accounting, and a greedy debt-simplification graph algorithm to minimize peer-to-peer wire transfers. Supported by a 9-table PostgreSQL schema with Knex migrations and 24 automated unit/integration tests.",
    outcome:
      "Reduced peer-to-peer bank transfers by up to 60% through a greedy debt-simplification graph algorithm and prevented accounting bugs via 19 CSV anomaly validation checks.",
    highlights: [
      "Greedy debt-simplification graph algorithm minimizing cyclic settlements between roommates",
      "19-rule CSV validation engine detecting invalid formats, duplicate entries, and zero splits",
      "9-table relational PostgreSQL schema with Knex.js migrations and referential integrity",
      "24 automated unit & integration test cases validating accounting edge cases",
    ],
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "Knex.js",
      "PostgreSQL",
      "JWT",
    ],
    liveUrl: "https://spreetail-six.vercel.app/",
    githubUrl: "https://github.com/param20h/Spreetail",
    status: "live",
    telemetry: {
      type: "benchmarks",
      badge: "GRAPH DEBT ENGINE",
      stats: [
        { label: "CSV Anomaly Rules", value: "19 Verification Checks" },
        { label: "Transfer Reduction", value: "~60% Fewer Transfers" },
        { label: "Test Coverage", value: "24 Tests Passing" },
      ],
      terminalOutput: [
        "Running tests/debt_simplification.test.ts ...",
        "✓ test_cyclic_settlement_elimination (A->B->C->A simplified): PASSED",
        "✓ test_19_csv_anomaly_detection_rules: PASSED (19/19 checks triggered correctly)",
        "✓ test_knex_migration_rollback_and_forward: PASSED",
        "Result: 24 integration tests passed with 0 discrepancies",
      ],
    },
  },
  {
    id: "rag-pdf",
    title: "RAG PDF Assistant",
    subtitle: "Retrieval-Augmented Generation Document Chatbot",
    category: "ai-ml",
    categoryLabel: "AI & LLM Agents",
    description:
      "Document question-answering assistant powered by Retrieval-Augmented Generation (RAG). Ingests PDF, DOCX, and TXT files into tokenized overlapping chunks, creates vector embeddings via Sentence Transformers, and queries an in-memory FAISS vector index to deliver sub-second grounded answers using Groq (Llama 3) and Gemini Pro.",
    outcome:
      "Built a sub-second document question-answering pipeline with sub-400ms vector lookup using in-memory FAISS indices and dynamic fallback routing between Groq and Gemini APIs.",
    highlights: [
      "In-memory FAISS L2 vector index for sub-50ms top-k cosine similarity queries",
      "Sentence Transformers token embedding pipeline with 500-token overlapping chunks",
      "Dynamic model fallbacks between Groq (Llama 3 70B) and Google Gemini 1.5 Pro",
      "Strict conversational context grounding preventing out-of-document hallucinations",
    ],
    tech: [
      "Flask",
      "Python",
      "FAISS",
      "Sentence Transformers",
      "Groq API",
      "Google Gemini",
      "Vanilla JS",
    ],
    liveUrl: "https://pdf-assistant-rag.vercel.app/",
    githubUrl: "https://github.com/param20h/PDF-Assistant-RAG",
    status: "live",
    telemetry: {
      type: "pipeline",
      badge: "VECTOR RETRIEVAL BENCHMARK",
      stats: [
        { label: "Vector Search Time", value: "< 38ms" },
        { label: "Index Dimension", value: "384-dim Embeddings" },
        { label: "Inference Latency", value: "< 420ms (Groq)" },
      ],
      terminalOutput: [
        "Uploaded: architecture_whitepaper.pdf (48 pages)",
        "Chunked into 124 overlapping token windows (size=500, overlap=50)",
        "Generated Sentence Transformer embeddings (all-MiniLM-L6-v2)",
        "FAISS Index Built. Query: 'Explain concurrency model' -> Top-3 chunks retrieved in 32ms",
        "Synthesizing response via Groq Llama-3-70B in 392ms",
      ],
    },
  },
  {
    id: "deepfake-detector",
    title: "DeepFake Detector",
    subtitle: "Real-Time AI Media Forensics System",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    description:
      "Comprehensive media forensics platform combining a Next.js inspection dashboard and a Chrome extension (Manifest v3) for one-click browser verification. Leverages PyTorch deep learning models to inspect facial boundary artifacts, blending seams, and frequency inconsistencies to identify synthetic media in real time.",
    outcome:
      "Provided one-click deepfake image/video scanning right in the browser via a Manifest v3 Chrome extension communicating with an asynchronous PyTorch FastAPI inference microservice.",
    highlights: [
      "PyTorch neural boundary artifact detector trained on synthetic facial blends",
      "Manifest v3 Chrome browser extension for on-the-fly right-click media scanning",
      "FastAPI backend microservice with asynchronous batch request processing",
      "Frequency-domain FFT artifact inspection surfacing synthetic generation signatures",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PyTorch",
      "OpenCV",
      "Chrome Extension",
      "Python",
    ],
    liveUrl: "https://deep-fake-mu.vercel.app",
    githubUrl: "https://github.com/param20h/Deep-Fake",
    status: "live",
    telemetry: {
      type: "metrics",
      badge: "FORENSIC ARTIFACT DETECTION",
      stats: [
        { label: "Detection Engine", value: "PyTorch CNN + FFT" },
        { label: "Extension Architecture", value: "Manifest v3" },
        { label: "API Response Time", value: "< 180ms" },
      ],
      terminalOutput: [
        "Inbound verification payload: media_frame_749.jpg",
        "Running FFT high-frequency spectral consistency check...",
        "Analyzing facial boundary blending seams via PyTorch ResNet backbone",
        "Confidence score: 94.2% Synthetic (Synthetic Artifacts Detected) -> Rendered badge",
      ],
    },
  },
  {
    id: "depression-biomarker",
    title: "Depression Biomarker Discovery",
    subtitle: "Unsupervised Clinical ML Research",
    category: "research",
    categoryLabel: "Machine Learning & Research",
    description:
      "Applied K-Means clustering and PCA dimensionality reduction on the DAIC-WOZ clinical dataset to identify distinct speech and text feature subgroups. Discovered two clusters that associate significantly with PHQ-8 clinical benchmark scores (chi-square = 6.44, p = 0.0112).",
    outcome:
      "Published empirical research demonstrating statistically significant association between unsupervised acoustic/textual cluster assignments and validated PHQ-8 psychiatric assessment scores.",
    highlights: [
      "Statistically validated acoustic and textual feature clustering on DAIC-WOZ dataset",
      "Chi-square test of independence confirming cluster correlation with PHQ-8 scores (p = 0.0112)",
      "PCA dimensionality reduction analyzing acoustic pitch variability and linguistic markers",
      "Full academic reproducibility with Jupyter notebooks, dataset pipelines, and interactive docs",
    ],
    tech: [
      "Python",
      "Scikit-learn",
      "K-Means",
      "PCA",
      "NLP",
      "Statistical Analysis",
    ],
    liveUrl: "https://param20h.me/MDD-biomarker-discovery-project/",
    githubUrl: "https://github.com/param20h/MDD-biomarker-discovery-project",
    status: "research",
    telemetry: {
      type: "clustering",
      badge: "CLINICAL STATISTICAL METRICS",
      stats: [
        { label: "Dataset", value: "DAIC-WOZ Multimodal" },
        { label: "Cluster Separation", value: "k = 2 Subtypes" },
        { label: "P-Value (PHQ-8)", value: "p = 0.0112 (χ² = 6.44)" },
      ],
      terminalOutput: [
        "Dataset: DAIC-WOZ clinical depression benchmark (audio + interview transcripts)",
        "Feature scaling via StandardScaler; PCA dimension reduction (variance retained: 84%)",
        "K-Means clustering (k=2) evaluated against PHQ-8 binary clinical cutoffs (≥10)",
        "Contingency Table Chi-Square Test: χ² = 6.44, df = 1, p-value = 0.0112",
        "Conclusion: Statistically significant feature clustering corresponding to clinical benchmark.",
      ],
    },
  },
  {
    id: "sih-dropout",
    title: "AI Dropout Prediction & Early Warning System",
    subtitle: "Institutional Student Academic Risk Predictor (SIH 2025)",
    category: "research",
    categoryLabel: "Machine Learning & Research",
    description:
      "Academic early-warning platform built for the Smart India Hackathon (SIH 2025). Employs an ensemble machine learning architecture (Random Forest + Logistic Regression) evaluating 14,000+ multi-year student demographic and academic records to flag students at risk of dropouts before semester finals.",
    outcome:
      "Built predictive pipeline with 88.4% F1-score across 14,000+ student records, providing university counselors with early alert dashboards and risk intervention recommendations.",
    highlights: [
      "Ensemble ML classifier combining Random Forest and regularized Logistic Regression",
      "Trained on 14,000+ multi-year historical student records with demographic & grade inputs",
      "Interactive counselor dashboard built with React and lightweight Flask REST API",
      "Explainable AI feature attribution surfacing primary academic and attendance stress points",
    ],
    tech: [
      "Python",
      "Scikit-learn",
      "Flask",
      "React.js",
      "Random Forest",
      "Logistic Regression",
      "Pandas",
      "NumPy",
    ],
    githubUrl: "https://github.com/param20h/sih-dropout-prediction-system",
    status: "open-source",
    telemetry: {
      type: "metrics",
      badge: "ENSEMBLE MODEL METRICS",
      stats: [
        { label: "Student Records", value: "14,200 Records" },
        { label: "Ensemble F1-Score", value: "0.884" },
        { label: "Inference Latency", value: "< 24ms" },
      ],
      terminalOutput: [
        "Dataset ingested: 14,200 multi-semester student records",
        "Feature Engineering: Attendance trends, semester credit deltas, socio-demographic indicators",
        "Random Forest + Logistic Regression Stacking Ensemble trained with 5-fold cross-validation",
        "Test Set Evaluation: Accuracy: 89.1%, Precision: 87.8%, Recall: 89.0%, F1: 0.884",
      ],
    },
  },
  {
    id: "image-caption",
    title: "Image Caption Generator",
    subtitle: "Deep Learning Vision-Language Encoder-Decoder",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    description:
      "Deep learning computer vision and natural language processing model that automatically generates descriptive English captions for uploaded images. Combines a convolutional neural network (CNN) feature extractor with a recurrent long short-term memory (LSTM) sequence generation decoder.",
    outcome:
      "Trained an end-to-end vision-language pipeline that extracts dense feature embeddings from images and generates fluent, contextually accurate sentence descriptions.",
    highlights: [
      "CNN-LSTM encoder-decoder architecture bridging computer vision and sequence generation",
      "Feature transfer learning using pre-trained convolutional backbones",
      "Beam search decoding strategy generating natural multi-word descriptive captions",
      "OpenCV image pre-processing and tokenized linguistic vocabulary mapping",
    ],
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "LSTM",
      "OpenCV",
      "NLP",
    ],
    githubUrl: "https://github.com/param20h/Image_Caption_Generator",
    status: "open-source",
    telemetry: {
      type: "pipeline",
      badge: "VISION-LANGUAGE MODEL",
      stats: [
        { label: "Encoder", value: "Deep CNN Feature Extractor" },
        { label: "Decoder", value: "Stacked LSTM Cells" },
        { label: "Decoding Strategy", value: "Beam Search (k=3)" },
      ],
      terminalOutput: [
        "Loading image tensor: test_sample_091.jpg (shape: 224, 224, 3)",
        "Forward pass through CNN encoder -> Feature vector extracted (2048-dim)",
        "Decoder step 1: <start> a dog is running through green grass <end>",
        "Generated Caption: 'A brown dog runs happily across an open green field.'",
      ],
    },
  },
  {
    id: "mooc-feedback",
    title: "MOOC Feedback Mining for MSMEs",
    subtitle: "Large-Scale Educational Sentiment Analysis (SIH 2021)",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    description:
      "Intelligent review mining and sentiment classification platform created for the Smart India Hackathon (SIH 2021). Processes 140K+ course reviews across massive open online courses (MOOCs) to extract actionable curriculum feedback for Micro, Small, and Medium Enterprises.",
    outcome:
      "Achieved 87% multi-class sentiment classification accuracy across 140,000+ course reviews, delivering automated feedback aggregation via a Streamlit and FastAPI dashboard.",
    highlights: [
      "87% sentiment classification accuracy across benchmark student review datasets",
      "Multi-model experimental evaluation (Logistic Regression, Naive Bayes, Random Forest, BERT)",
      "FastAPI backend microservice handling real-time NLP text vectorization and inference",
      "Interactive Streamlit visualization dashboard for MSME training course organizers",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Streamlit",
      "BERT",
      "NLP",
      "Machine Learning",
    ],
    liveUrl: "https://mooc-msme.streamlit.app/",
    githubUrl: "https://github.com/param20h/mooc-feedback-mining-msme",
    status: "live",
    telemetry: {
      type: "benchmarks",
      badge: "SENTIMENT MINING BENCHMARK",
      stats: [
        { label: "Reviews Ingested", value: "140,000+ Reviews" },
        { label: "Validation Accuracy", value: "87.0% Accuracy" },
        { label: "Inference Engine", value: "FastAPI + Streamlit" },
      ],
      terminalOutput: [
        "Corpus: 140,000+ MOOC course reviews across vocational and tech subjects",
        "Preprocessing: TF-IDF n-grams + sub-word tokenization via HuggingFace BERT",
        "Classification benchmark: BERT (87.2%), Random Forest (83.5%), Naive Bayes (79.1%)",
        "Deployment: FastAPI REST endpoints served to Streamlit analytics dashboard",
      ],
    },
  },
  {
    id: "realtime-chat",
    title: "Real-time Chat App",
    subtitle: "Node.js & Socket.IO Event-Driven Messaging Suite",
    category: "backend",
    categoryLabel: "Backend & Systems",
    description:
      "Full-featured bidirectional real-time chat application built with Node.js, Express, and Socket.IO. Supports multi-room creation, live online participant indicators, file sharing attachments, emoji reactions, and responsive mobile-friendly layouts.",
    outcome:
      "Implemented low-latency WebSocket communication handling concurrent active chat rooms, broadcast messaging, and instant notification delivery.",
    highlights: [
      "Event-driven WebSocket architecture built with Socket.IO and Express.js",
      "Multi-room channels and private peer-to-peer chat functionality",
      "Real-time user typing indicators and dynamic presence management",
      "Client-side message encryption and file sharing attachments",
    ],
    tech: ["Node.js", "Socket.IO", "Express.js", "WebSocket", "JavaScript"],
    liveUrl: "https://chat-app-fkk3.onrender.com",
    githubUrl: "https://github.com/param20h/chat-app",
    images: ["/media/char.png"],
    status: "live",
  },
  {
    id: "dsa-visualizer",
    title: "DSA Visualizer",
    subtitle: "Interactive Algorithm Execution & Data Structure Simulator",
    category: "tools",
    categoryLabel: "Full-Stack Applications",
    description:
      "Interactive computer science education tool built with React and modern JavaScript. Visualizes sorting routines, graph traversals, and dynamic programming algorithms in real time with step-by-step playback, speed throttle controls, and comparative complexity metrics.",
    outcome:
      "Created an interactive visual simulation environment rendering algorithms step-by-step to assist university students in learning time and space complexity.",
    highlights: [
      "Visual step-by-step simulation of Bubble, Merge, Quick, and Insertion sorts",
      "Graph traversal animations including Breadth-First Search (BFS) and Depth-First Search (DFS)",
      "Interactive array generator with custom sizing, speed controls, and step stepping",
      "Modular React component hierarchy designed for educational clarity and performance",
    ],
    tech: ["React", "JavaScript", "Algorithms", "Tailwind CSS"],
    liveUrl: "https://dsa-visualizer-hazel-two.vercel.app/",
    githubUrl: "https://github.com/param20h/DSA-visual",
    images: ["/media/Dsav.png"],
    status: "live",
  },
  {
    id: "ai-financial",
    title: "AI Financial Identification System",
    subtitle: "Machine Learning Demographic & Economic Data Pipeline",
    category: "research",
    categoryLabel: "Machine Learning & Research",
    description:
      "Machine learning data pipeline and exploratory classification project exploring demographic and economic data patterns for financial services identification. Built using Python, Scikit-learn, and TensorFlow to evaluate feature correlations in structured socioeconomic records.",
    outcome:
      "Developed end-to-end data processing and feature engineering pipelines analyzing demographic metrics for financial pattern recognition.",
    highlights: [
      "Feature engineering and preprocessing on high-cardinality socioeconomic datasets",
      "Exploratory data analysis uncovering statistical correlations in access to services",
      "Multi-model baseline comparisons between Logistic Regression and Random Forests",
      "Clean automated Python data cleaning, one-hot encoding, and imputation pipeline",
    ],
    tech: ["Python", "Machine Learning", "TensorFlow", "Scikit-learn", "Pandas"],
    githubUrl: "https://github.com/param20h",
    status: "open-source",
    telemetry: {
      type: "metrics",
      badge: "DATA PIPELINE METRICS",
      stats: [
        { label: "Workflow", value: "ETL + ML Pipeline" },
        { label: "Data Transformations", value: "Robust Imputation & Scaling" },
        { label: "Models Evaluated", value: "TensorFlow & Sklearn" },
      ],
      terminalOutput: [
        "Ingesting structured demographic survey datasets...",
        "Executing automated categorical encoding and missing-value imputation",
        "Computing Pearson correlation coefficients across income and service access features",
        "Pipeline complete: Cleaned feature matrices generated for downstream modeling",
      ],
    },
  },
  {
    id: "ai-summarizer",
    title: "AI Summarizer",
    subtitle: "Google Gemini Long-Form Contextual Document Summarizer",
    category: "ai-ml",
    categoryLabel: "AI & LLM Agents",
    description:
      "AI-powered content condensation web application built with modern JavaScript and Google Gemini API. Offers multiple summary density modes (executive bullets, key highlights, or full synthesis) to digest lengthy articles and documents in seconds.",
    outcome:
      "Built a lightweight, responsive web tool delivering real-time LLM document summarization with multiple abstraction levels via Google Gemini.",
    highlights: [
      "Direct integration with Google Gemini Pro Generative AI endpoints",
      "Multiple configurable summary modes: Key Bullet Points, Executive Brief, or Deep Analysis",
      "Clean, responsive user interface with instant one-click markdown clipboard export",
      "Asynchronous client-side state handling with smooth loading animations",
    ],
    tech: ["Google Gemini AI", "JavaScript", "GenAI API", "CSS3"],
    liveUrl: "https://ai-sum-two.vercel.app/",
    githubUrl: "https://github.com/param20h/ai-sum",
    images: ["/media/ai.png"],
    status: "live",
  },
  {
    id: "weather-app",
    title: "Weather App",
    subtitle: "Next.js Real-Time Meteorological Dashboard",
    category: "fullstack",
    categoryLabel: "Full-Stack Applications",
    description:
      "Modern Next.js weather dashboard built with React and OpenWeather API integration. Features real-time weather reports, 5-day forecasts, geolocation search, unit toggles (Celsius/Fahrenheit), and cached server-side rendering for optimal load speed.",
    outcome:
      "Delivered a responsive server-rendered weather dashboard with automatic browser geolocation and instant location-based forecast retrieval.",
    highlights: [
      "Next.js Server-Side Rendering (SSR) for fast initial weather data hydration",
      "Automatic HTML5 browser geolocation lookup and global city search",
      "Dynamic weather condition theme backgrounds and animated meteorological icons",
      "Deployed and cached on Netlify Edge for global sub-second availability",
    ],
    tech: ["Next.js", "React", "JavaScript", "OpenWeather API"],
    liveUrl: "https://weather-sum.netlify.app/",
    githubUrl: "https://github.com/param20h/weather",
    images: ["/media/weather.png"],
    status: "live",
  },
  {
    id: "space-invaders",
    title: "Python Space Invaders Game",
    subtitle: "Object-Oriented Pygame Arcade Game Engine",
    category: "tools",
    categoryLabel: "Backend & Systems",
    description:
      "Classic 2D arcade game built from the ground up in Python using the Pygame framework. Implements object-oriented architecture, axis-aligned bounding box (AABB) collision detection, progressive wave spawning mechanics, sound synthesis, and local high-score tracking.",
    outcome:
      "Built a stateful 60 FPS arcade game loop emphasizing object-oriented design, custom collision math, and progressive difficulty algorithms.",
    highlights: [
      "Object-oriented design patterns with isolated Player, Enemy, Bullet, and Wave classes",
      "Axis-Aligned Bounding Box (AABB) mathematical collision detection algorithms",
      "Stateful game loop maintaining fluid 60 FPS rendering and sound effect triggers",
      "Dynamic difficulty scaling with accelerating enemy patterns and score persistence",
    ],
    tech: ["Python", "Pygame", "Game Development", "OOP"],
    githubUrl: "https://github.com/param20h/space-invade",
    status: "open-source",
    telemetry: {
      type: "benchmarks",
      badge: "GAME ENGINE LOOP",
      stats: [
        { label: "Target Frame Rate", value: "Solid 60 FPS" },
        { label: "Collision Engine", value: "AABB Math" },
        { label: "Architecture", value: "OOP Stateful Loop" },
      ],
      terminalOutput: [
        "Initializing Pygame 2.5 video display (800x600, 32-bit color)...",
        "Instantiating PlayerShip at (400, 520); loading sprite textures",
        "Spawning Wave 1: 24 Invaders in formation with AABB collision bounds",
        "Game loop running: 60 FPS locked, delta-time physics processing active",
      ],
    },
  },
];
