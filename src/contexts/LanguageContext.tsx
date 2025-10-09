import React, { createContext, useContext, useState } from 'react';

type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ja: {
    // Navigation
    'nav.about': 'プロフィール',
    'nav.skills': 'スキル',
    'nav.portfolio': 'ポートフォリオ',
    'nav.experience': '経歴',
    'nav.contact': 'お問い合わせ',

    // Hero Section
    'hero.greeting': 'こんにちは、',
    'hero.name': '小泉　慶',
    'hero.title': 'フルスタックWebエンジニア',
    'hero.subtitle': '美しく機能的なWebアプリケーションを作ることに情熱を注いでいます',
    'hero.downloadCV': '履歴書をダウンロード',
    'hero.contactMe': 'お問い合わせ',

    // About Section
    'about.title': 'プロフィール',
    'about.description': '約3年のWeb開発経験を持つフルスタックエンジニアです。Laravel、React、TypeScript、MySQLを中心とした現代的な技術スタックで、スケーラブルなWebアプリケーションの開発を得意としています。',
    'about.status': '現在の状況',
    'about.currentStatus': '現在、会社設立に向けた準備を進めています',
    'about.milkTea': '2019年からミルクティー駆動で開発中',

    // Skills Section
    'skills.title': 'スキル',
    'skills.frontend': 'フロントエンド',
    'skills.backend': 'バックエンド',
    'skills.database': 'データベース',
    'skills.tools': 'ツール',
    'skills.otherTechnologies': 'その他の技術',

    // Portfolio Section
    'portfolio.title': 'ポートフォリオ',
    'portfolio.viewProject': 'プロジェクトを見る',
    'portfolio.viewCode': 'コードを見る',
    'portfolio.project1.title': 'KTCマーケット',
    'portfolio.project1.description': 'Java(Spring Boot) と React で構築した学内ECサイト。独自通貨「IZ」に対応。',
    'portfolio.project2.title': '教室内混雑状況検知システム',
    'portfolio.project2.description': 'AWS LambdaとRDS、S3を用いて教室内のリアルタイム混雑状況を検知・表示するWebサービスを構築。',
    'portfolio.project3.title': '残飯検知AI',
    'portfolio.project3.description': 'Microsoft Azureの画像認識APIを用いて、ゴミ分別支援のための残飯検知AIを開発。視覚的UIと音声通知付き。',
    'portfolio.project4.title': '残飯検知AI',
    'portfolio.project4.description': 'AzureのComputer Visionを活用し、AIによる残飯検知アプリを開発。視覚的UIと音声出力を実装し、ゴミ分別支援を実現。',
    'portfolio.project5.title': 'myPortfolo',
    'portfolio.project5.description': '個人ポートフォリオサイト（Vite + React + TypeScript + Tailwind）。',

    // Experience Section
    'experience.title': '職務経歴',
    'experience.job1.title': '残飯検知AI開発',
    'experience.job1.company': 'Microsoft for Startups プロジェクト',
    'experience.job1.period': '2023年',
    'experience.job1.description': 'AzureのComputer Visionを活用し、AIによる残飯検知アプリを開発。視覚的UIと音声出力を実装し、ゴミ分別支援を実現。Microsoft様より最優秀賞（金賞）を受賞。',
    'experience.job1.location': 'Kyoto, Japan',
    'experience.job1.type': 'Part-time / Challenge-based',
    'experience.job1.skills': 'Python Azure Flask OpenCV AI API',
    'experience.job2.title': 'フルスタック開発者',
    'experience.job2.company': '学生プロジェクト / 個人開発',
    'experience.job2.period': '2022年 ～ 現在',
    'experience.job2.description': 'Laravel、React、Tailwind CSSを中心としたWebアプリケーションの開発に従事。KTCマーケット（学内EC）や教室内混雑検知システムなどを開発。UI設計・API設計・DB構築も担当。',
    'experience.job2.location': 'Kyoto, Japan',
    'experience.job2.type': 'Full-time',
    'experience.job2.skills': 'Laravel React Tailwind CSS TypeScript MySQL AWS',
    'experience.job3.title': '教室内混雑可視化システム',
    'experience.job3.company': '学生プロジェクト / チーム開発',
    'experience.job3.period': '2024年',
    'experience.job3.description': 'AWSを用いて教室内の混雑状況を収集・蓄積・可視化。担当: データベース設計・運用（RDSスキーマ設計、正規化、インデックス最適化、バックアップ運用）。',
    'experience.job3.location': 'Kyoto, Japan',
    'experience.job3.type': 'Team project',
    'experience.job3.skills': 'AWS Lambda RDS S3 CloudWatch SQL',

    // Contact Section
    'contact.title': 'お問い合わせ',
    'contact.subtitle': 'プロジェクトについてお聞かせください',
    'contact.name': 'お名前',
    'contact.email': 'メールアドレス',
    'contact.message': 'メッセージ',
    'contact.send': '送信',
    'contact.sending': '送信中...',
    'contact.getInTouch': 'お問い合わせ',
    'contact.phone': '電話番号',
    'contact.location': '所在地',
    'contact.followMe': 'フォローする',
    'contact.successMessage': 'メッセージを送信しました！すぐに返信いたします。',
    'contact.errorMessage': 'メッセージの送信に失敗しました。もう一度お試しください。',
    'contact.goToForm': 'フォームへ'
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Kei Koizumi',
    'hero.title': 'Full-Stack Web Developer',
    'hero.subtitle': 'Passionate about creating beautiful and functional web applications',
    'hero.downloadCV': 'Download CV',
    'hero.contactMe': 'Contact Me',

    // About Section
    'about.title': 'About Me',
    'about.description': 'Full-stack engineer with around 3 years of web development experience. I specialize in building scalable applications using Laravel, React, TypeScript, and MySQL.',
    'about.status': 'Current Status',
    'about.currentStatus': 'Currently preparing to found my own company',
    'about.milkTea': 'Milk tea-driven development since 2019',

    // Skills Section
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.tools': 'Tools',
    'skills.otherTechnologies': 'Other Technologies',

    // Portfolio Section
    'portfolio.title': 'Portfolio',
    'portfolio.viewProject': 'View Project',
    'portfolio.viewCode': 'View Code',
    'portfolio.project1.title': 'KTC Market',
    'portfolio.project1.description': 'An in-school e-commerce platform built with Java (Spring Boot) and React. Supports custom currency "IZ".',
    'portfolio.project2.title': 'Classroom Congestion Detection System',
    'portfolio.project2.description': 'Built with AWS Lambda, RDS, and S3 to monitor and display real-time classroom congestion data.',
    'portfolio.project3.title': 'Leftover Detection AI',
    'portfolio.project3.description': 'Developed with Microsoft Azure image recognition APIs to assist in waste sorting by detecting leftover food. Includes visual UI and audio guidance.',
    'portfolio.project4.title': 'Leftover Detection AI',
    'portfolio.project4.description': 'Developed an AI-powered leftover detection app using Azure Computer Vision. Implemented visual UI and audio output for waste sorting assistance.',
    'portfolio.project5.title': 'myPortfolo',
    'portfolio.project5.description': 'Personal portfolio site (Vite + React + TypeScript + Tailwind).',

    // Experience Section
    'experience.title': 'Experience',
    'experience.job1.title': 'Leftover Detection AI Development',
    'experience.job1.company': 'Microsoft for Startups Project',
    'experience.job1.period': '2023',
    'experience.job1.description': 'Developed an AI-powered leftover detection app using Azure Computer Vision. Implemented visual UI and audio output for waste sorting assistance. Received the Grand Prize (Gold) from Microsoft.',
    'experience.job1.location': 'Kyoto, Japan',
    'experience.job1.type': 'Part-time / Challenge-based',
    'experience.job1.skills': 'Python Azure Flask OpenCV AI API',
    'experience.job2.title': 'Full-Stack Developer',
    'experience.job2.company': 'Student Projects / Personal Development',
    'experience.job2.period': '2022 - Present',
    'experience.job2.description': 'Engaged in web application development using Laravel, React, and Tailwind CSS. Developed KTC Market (in-school e-commerce) and classroom congestion detection system. Responsible for UI design, API design, and database construction.',
    'experience.job2.location': 'Kyoto, Japan',
    'experience.job2.type': 'Full-time',
    'experience.job2.skills': 'Laravel React Tailwind CSS TypeScript MySQL AWS',
    'experience.job3.title': 'Classroom Congestion Visualization System',
    'experience.job3.company': 'Student Project / Team Development',
    'experience.job3.period': '2024',
    'experience.job3.description': 'Built with AWS to collect, store, and visualize classroom congestion data. Role: database design and operations (RDS schema design, normalization, index optimization, backups).',
    'experience.job3.location': 'Kyoto, Japan',
    'experience.job3.type': 'Team project',
    'experience.job3.skills': 'AWS Lambda RDS S3 CloudWatch SQL',

    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s discuss your project',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.sending': 'Sending...',
    'contact.getInTouch': 'Get in Touch',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.followMe': 'Follow Me',
    'contact.successMessage': 'Thank you for your message! I\'ll get back to you soon.',
    'contact.errorMessage': 'Failed to send message. Please try again.',
    'contact.goToForm': 'Go to Form'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ja');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
