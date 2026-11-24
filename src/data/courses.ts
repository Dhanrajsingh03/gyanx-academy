export type CurriculumSection = {
  title: string;
  lessons: { title: string; duration: string }[];
};

export type Course = {
  id: string;
  title: string;
  slug: string;
  category: string;
  short_description: string;
  description: string;
  level: string;
  price: number;
  original_price: number | null;
  duration_hours: number;
  lessons_count: number;
  students_count: number;
  rating: number;
  image_url: string | null;
  instructor_name: string;
  instructor_title: string | null;
  curriculum: CurriculumSection[];
  is_featured: boolean;
  created_at: string;
};

export const CATEGORIES = [
  "Stock Market",
  "Forex Market",
  "Digital Marketing",
  "Artificial Intelligence",
] as const;

const img = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export const COURSES: Course[] = [
  {
    id: "1",
    title: "Stock Market Fundamentals",
    slug: "stock-market-fundamentals",
    category: "Stock Market",
    short_description:
      "Learn how the stock market works, how to read charts and build your first portfolio.",
    description:
      "A complete beginner-friendly course covering how stock exchanges work, types of orders, fundamental analysis, reading financial statements, and the basics of technical analysis. By the end you will be able to research companies, evaluate stocks, and build a diversified long-term portfolio with confidence.",
    level: "Beginner",
    price: 49,
    original_price: 99,
    duration_hours: 12,
    lessons_count: 9,
    students_count: 3240,
    rating: 4.8,
    image_url: img(6801648),
    instructor_name: "Rahul Verma",
    instructor_title: "Equity Research Analyst, 10+ years",
    is_featured: true,
    created_at: "2026-01-10T00:00:00Z",
    curriculum: [
      {
        title: "Introduction to Markets",
        lessons: [
          { title: "What is the Stock Market?", duration: "12:30" },
          { title: "NSE, BSE & How Exchanges Work", duration: "15:10" },
          { title: "Opening a Demat & Trading Account", duration: "10:45" },
        ],
      },
      {
        title: "Fundamental Analysis",
        lessons: [
          { title: "Reading a Balance Sheet", duration: "18:20" },
          { title: "P/E, EPS & Key Ratios", duration: "16:05" },
          { title: "Evaluating a Company", duration: "20:00" },
        ],
      },
      {
        title: "Building a Portfolio",
        lessons: [
          { title: "Diversification Basics", duration: "14:15" },
          { title: "Risk Management", duration: "13:40" },
          { title: "Your First Portfolio", duration: "22:10" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Advanced Technical Analysis & Price Action",
    slug: "advanced-technical-analysis",
    category: "Stock Market",
    short_description:
      "Master candlestick patterns, indicators and price action strategies for swing and intraday trading.",
    description:
      "Go beyond the basics with professional technical analysis. Learn support and resistance, trend structure, candlestick patterns, volume analysis, moving averages, RSI, MACD and complete price-action trading systems for intraday and swing trading, along with strict risk and money management rules.",
    level: "Advanced",
    price: 89,
    original_price: 179,
    duration_hours: 20,
    lessons_count: 9,
    students_count: 1980,
    rating: 4.9,
    image_url: img(7567443),
    instructor_name: "Rahul Verma",
    instructor_title: "Equity Research Analyst, 10+ years",
    is_featured: false,
    created_at: "2026-01-15T00:00:00Z",
    curriculum: [
      {
        title: "Chart Structure",
        lessons: [
          { title: "Support & Resistance", duration: "18:00" },
          { title: "Trends & Market Structure", duration: "16:30" },
          { title: "Candlestick Patterns", duration: "24:10" },
        ],
      },
      {
        title: "Indicators",
        lessons: [
          { title: "Moving Averages", duration: "15:20" },
          { title: "RSI & MACD", duration: "19:45" },
          { title: "Volume Analysis", duration: "14:50" },
        ],
      },
      {
        title: "Trading Systems",
        lessons: [
          { title: "Intraday Strategy", duration: "26:00" },
          { title: "Swing Trading Strategy", duration: "23:30" },
          { title: "Risk & Money Management", duration: "17:15" },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Forex Trading for Beginners",
    slug: "forex-trading-for-beginners",
    category: "Forex Market",
    short_description:
      "Understand currency pairs, pips, leverage and start trading the forex market safely.",
    description:
      "This course introduces you to the world's largest financial market. You will learn how currency pairs work, what pips, lots and leverage mean, how to use a trading platform, and how global news moves currencies. The course focuses heavily on risk management so you can start trading safely.",
    level: "Beginner",
    price: 59,
    original_price: 119,
    duration_hours: 10,
    lessons_count: 9,
    students_count: 2650,
    rating: 4.7,
    image_url: img(6801874),
    instructor_name: "Amit Sharma",
    instructor_title: "Professional Forex Trader",
    is_featured: true,
    created_at: "2026-02-01T00:00:00Z",
    curriculum: [
      {
        title: "Forex Basics",
        lessons: [
          { title: "What is Forex?", duration: "11:00" },
          { title: "Currency Pairs Explained", duration: "13:20" },
          { title: "Pips, Lots & Leverage", duration: "16:40" },
        ],
      },
      {
        title: "Using a Trading Platform",
        lessons: [
          { title: "MetaTrader Walkthrough", duration: "18:30" },
          { title: "Placing Orders", duration: "12:15" },
          { title: "Stop Loss & Take Profit", duration: "14:00" },
        ],
      },
      {
        title: "Market Drivers",
        lessons: [
          { title: "Economic News & Calendar", duration: "15:30" },
          { title: "Trading Sessions", duration: "10:50" },
          { title: "Your First Trade Plan", duration: "19:20" },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Professional Forex Strategies",
    slug: "professional-forex-strategies",
    category: "Forex Market",
    short_description:
      "Smart money concepts, supply & demand zones and proven strategies used by professional traders.",
    description:
      "Learn how institutional traders approach the forex market. This course covers smart money concepts, liquidity, order blocks, supply and demand zones, multi-timeframe analysis and trading psychology, ending with a complete trading plan you can apply to any currency pair.",
    level: "Intermediate",
    price: 99,
    original_price: 199,
    duration_hours: 18,
    lessons_count: 9,
    students_count: 1420,
    rating: 4.8,
    image_url: img(5833771),
    instructor_name: "Amit Sharma",
    instructor_title: "Professional Forex Trader",
    is_featured: false,
    created_at: "2026-02-10T00:00:00Z",
    curriculum: [
      {
        title: "Smart Money Concepts",
        lessons: [
          { title: "Liquidity & Stop Hunts", duration: "20:10" },
          { title: "Order Blocks", duration: "18:40" },
          { title: "Break of Structure", duration: "16:30" },
        ],
      },
      {
        title: "Supply & Demand",
        lessons: [
          { title: "Identifying Zones", duration: "17:20" },
          { title: "Multi-Timeframe Analysis", duration: "21:00" },
          { title: "Entry Confirmation", duration: "15:45" },
        ],
      },
      {
        title: "Trader Mindset",
        lessons: [
          { title: "Trading Psychology", duration: "14:30" },
          { title: "Journaling & Review", duration: "12:10" },
          { title: "Building Your Trading Plan", duration: "22:00" },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Complete Digital Marketing Masterclass",
    slug: "digital-marketing-masterclass",
    category: "Digital Marketing",
    short_description:
      "SEO, social media, content and email marketing — everything you need to grow any business online.",
    description:
      "A complete, practical digital marketing program. Learn SEO, content marketing, social media marketing on Instagram, Facebook and YouTube, email marketing and analytics. Each module includes hands-on projects so you build a real portfolio you can show clients or employers.",
    level: "Beginner",
    price: 69,
    original_price: 149,
    duration_hours: 16,
    lessons_count: 9,
    students_count: 4120,
    rating: 4.8,
    image_url: img(6476589),
    instructor_name: "Priya Singh",
    instructor_title: "Digital Marketing Strategist",
    is_featured: true,
    created_at: "2026-03-01T00:00:00Z",
    curriculum: [
      {
        title: "Marketing Foundations",
        lessons: [
          { title: "Digital Marketing Overview", duration: "12:00" },
          { title: "Understanding Your Audience", duration: "14:30" },
          { title: "Building a Brand Online", duration: "16:10" },
        ],
      },
      {
        title: "SEO & Content",
        lessons: [
          { title: "Keyword Research", duration: "18:20" },
          { title: "On-Page & Off-Page SEO", duration: "20:40" },
          { title: "Content That Converts", duration: "15:50" },
        ],
      },
      {
        title: "Social & Email",
        lessons: [
          { title: "Instagram & Facebook Growth", duration: "19:30" },
          { title: "YouTube Marketing", duration: "17:00" },
          { title: "Email Marketing Funnels", duration: "16:20" },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Performance Marketing & Paid Ads",
    slug: "performance-marketing-paid-ads",
    category: "Digital Marketing",
    short_description:
      "Run profitable Google Ads and Meta Ads campaigns with tracking, optimisation and scaling.",
    description:
      "Learn to run paid advertising campaigns that actually make money. This course covers Google Search and Display Ads, Meta (Facebook & Instagram) Ads, pixel and conversion tracking, audience targeting, A/B testing and scaling campaigns profitably.",
    level: "Intermediate",
    price: 79,
    original_price: 159,
    duration_hours: 14,
    lessons_count: 9,
    students_count: 2210,
    rating: 4.7,
    image_url: img(905163),
    instructor_name: "Priya Singh",
    instructor_title: "Digital Marketing Strategist",
    is_featured: false,
    created_at: "2026-03-10T00:00:00Z",
    curriculum: [
      {
        title: "Google Ads",
        lessons: [
          { title: "Search Campaign Setup", duration: "20:00" },
          { title: "Keywords & Bidding", duration: "17:30" },
          { title: "Display & YouTube Ads", duration: "15:40" },
        ],
      },
      {
        title: "Meta Ads",
        lessons: [
          { title: "Ads Manager Walkthrough", duration: "18:10" },
          { title: "Audience Targeting", duration: "16:20" },
          { title: "Creatives That Convert", duration: "14:50" },
        ],
      },
      {
        title: "Tracking & Scaling",
        lessons: [
          { title: "Pixel & Conversion Tracking", duration: "19:00" },
          { title: "A/B Testing", duration: "13:30" },
          { title: "Scaling Profitable Campaigns", duration: "18:45" },
        ],
      },
    ],
  },
  {
    id: "7",
    title: "AI for Everyone: ChatGPT & Generative AI",
    slug: "ai-for-everyone",
    category: "Artificial Intelligence",
    short_description:
      "Use ChatGPT and modern AI tools to boost productivity, create content and automate work.",
    description:
      "A practical introduction to artificial intelligence for non-programmers. Understand how modern AI works, master prompt engineering, and use AI tools for writing, images, presentations, research and everyday automation in your work or business.",
    level: "Beginner",
    price: 49,
    original_price: 99,
    duration_hours: 8,
    lessons_count: 9,
    students_count: 5310,
    rating: 4.9,
    image_url: img(8386440),
    instructor_name: "Dr. Neha Gupta",
    instructor_title: "AI Researcher & Educator",
    is_featured: true,
    created_at: "2026-04-01T00:00:00Z",
    curriculum: [
      {
        title: "Understanding AI",
        lessons: [
          { title: "What is AI?", duration: "10:30" },
          { title: "How Large Language Models Work", duration: "14:20" },
          { title: "AI Tools Landscape", duration: "12:00" },
        ],
      },
      {
        title: "Prompt Engineering",
        lessons: [
          { title: "Writing Great Prompts", duration: "16:40" },
          { title: "Advanced Prompt Techniques", duration: "18:10" },
          { title: "AI for Content Creation", duration: "15:30" },
        ],
      },
      {
        title: "AI at Work",
        lessons: [
          { title: "AI for Research & Analysis", duration: "13:50" },
          { title: "Image & Video Generation", duration: "14:40" },
          { title: "Automating Daily Tasks", duration: "17:20" },
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Machine Learning with Python",
    slug: "machine-learning-with-python",
    category: "Artificial Intelligence",
    short_description:
      "Build real machine learning models with Python, pandas and scikit-learn from scratch.",
    description:
      "A hands-on course that takes you from Python basics to building and deploying machine learning models. Learn data analysis with pandas, visualisation, regression, classification, model evaluation and an introduction to neural networks, with real-world projects throughout.",
    level: "Advanced",
    price: 99,
    original_price: 199,
    duration_hours: 24,
    lessons_count: 9,
    students_count: 1760,
    rating: 4.8,
    image_url: img(8438918),
    instructor_name: "Dr. Neha Gupta",
    instructor_title: "AI Researcher & Educator",
    is_featured: false,
    created_at: "2026-04-15T00:00:00Z",
    curriculum: [
      {
        title: "Python for Data",
        lessons: [
          { title: "Python Refresher", duration: "20:00" },
          { title: "Data Analysis with pandas", duration: "24:30" },
          { title: "Data Visualisation", duration: "18:40" },
        ],
      },
      {
        title: "Core Machine Learning",
        lessons: [
          { title: "Linear Regression", duration: "22:10" },
          { title: "Classification Models", duration: "25:00" },
          { title: "Model Evaluation", duration: "19:30" },
        ],
      },
      {
        title: "Going Further",
        lessons: [
          { title: "Intro to Neural Networks", duration: "26:20" },
          { title: "Real-World Project", duration: "35:00" },
          { title: "Deploying Your Model", duration: "21:15" },
        ],
      },
    ],
  },
];
