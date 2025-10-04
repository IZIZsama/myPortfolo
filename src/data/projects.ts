import imgKtc from '../images/KTC.png';
import imgPortfolio from '../images/MyP.png';
import imgAws from '../images/AWS.jpg';
import imgFoodAi from '../images/MS.jpg';

export type Project = {
  id: number;
  slug: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  image: string;
  technologies: string[];
  category: 'web';
  demoUrl?: string;
  githubUrl?: string;
  details?: {
    overview: string;
    overview_en?: string;
    features: string[];
    features_en?: string[];
    techStack: string[];
    challenges?: string[];
    outcomes?: string[];
  };
};

export const projects: Project[] = [
  {
    id: 2,
    slug: 'food-waste-detector-ai',
    title: '残飯検知AI',
    title_en: 'Leftover Detection AI',
    description: '画像から残飯量を推定・可視化するAIプロトタイプ。Microsoft様から最優秀賞を受賞。',
    description_en: 'A prototype that estimates and visualizes leftover amounts from images. Awarded the Grand Prize by Microsoft.',
    image: imgFoodAi,
    technologies: ['Python', 'OpenCV', 'PyTorch', 'Azure Custom Vision'],
    category: 'web',
    details: {
      overview: '画像処理と学習済みモデルを用いて、残飯の検知と推定量の可視化を行うデモ。Microsoft様から最優秀賞を受賞。',
      overview_en: 'A demo that detects leftovers and visualizes estimated amounts using image processing and pre-trained models. Awarded the Grand Prize by Microsoft.',
      features: ['画像アップロード', '推定結果の可視化'],
      features_en: ['Image upload', 'Visualization of estimation results'],
      techStack: ['Python', 'OpenCV', 'PyTorch', 'Azure Custom Vision'],
      outcomes: ['Microsoft様より最優秀賞を受賞']
    },
  },
  {
    id: 3,
    slug: 'aws-architecture',
    title: '混雑可視化システム',
    title_en: 'Classroom Congestion Visualization',
    description: 'AWSを用いて教室内の混雑状況を可視化。自身は主にDBを担当。',
    description_en: 'Visualized classroom congestion using AWS. I was primarily responsible for the database.',
    image: imgAws,
    technologies: ['AWS', 'EC2', 'S3', 'RDS'],
    category: 'web',
    details: {
      overview: '教室内の混雑度データを収集・蓄積し、可視化するシステム。担当領域: データベース設計・運用（スキーマ設計、正規化、インデックス/クエリ最適化、バックアップ）。',
      overview_en: 'A system to collect, store, and visualize classroom congestion data. Role: database design and operations (schema design, normalization, index/query optimization, backups).',
      features: ['データ収集と蓄積', '混雑度の集計と可視化', '基本構成図と権限設計'],
      features_en: ['Data ingestion and storage', 'Aggregation and visualization of congestion', 'Architecture diagram and access control'],
      techStack: ['AWS'],
    },
  },
  {
    id: 1,
    slug: 'ktc-market',
    title: 'KTCマーケット',
    title_en: 'KTC Market',
    description: 'LaravelとReactで構築した学内ECサイト。独自通貨「IZ」に対応。',
    description_en: 'An in-school e-commerce site built with Laravel and React. Supports custom currency "IZ".',
    image: imgKtc,
    technologies: ['React', 'Java', 'Spring Boot', 'MySQL'],
    category: 'web',
    demoUrl: '#',
    githubUrl: 'https://github.com/IZIZsama/KTC-MARKET',
    details: {
      overview: '学内向けのECプラットフォーム。独自通貨「IZ」での決済に対応。',
      overview_en: 'An in-school e-commerce platform supporting payments with the custom currency "IZ".',
      features: ['商品一覧・検索', 'カート・決済', '管理画面', 'ユーザー認証'],
      features_en: ['Product listing and search', 'Cart and payment', 'Admin dashboard', 'User authentication'],
      techStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Tailwind CSS', 'MySQL']
    },
  },
  {
    id: 5,
    slug: 'my-portfolio',
    title: 'myPortfolio',
    title_en: 'myPortfolio',
    description: '個人ポートフォリオサイト（Vite + React + TypeScript + Tailwind）。',
    description_en: 'Personal portfolio site (Vite + React + TypeScript + Tailwind).',
    image: imgPortfolio,
    technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'web',
    demoUrl: 'https://izizsama.github.io/myPortfolo',
    githubUrl: 'https://github.com/IZIZsama/myPortfolo',
    details: {
      overview: '自身の作品を掲載するためのポートフォリオサイト。',
      overview_en: 'A portfolio site showcasing my work.',
      features: ['多言語対応', 'ダークモード', 'アニメーション'],
      features_en: ['Multilingual support', 'Dark mode', 'Animations'],
      techStack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    },
  },
];

export const findProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);


