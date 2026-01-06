'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = window.localStorage.getItem('language');
    if (stored === 'en' || stored === 'ja') {
      setLanguageState(stored);
      return;
    }

    const browserLang = navigator.language || (Array.isArray(navigator.languages) && navigator.languages[0]);
    if (browserLang && browserLang.toLowerCase().startsWith('ja')) {
      setLanguageState('ja');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('language', lang);
    }
  };

  const translations = {
    // Navigation
    home: { en: './home', ja: './ホーム' },
    projects: { en: './projects', ja: './プロジェクト' },
    about: { en: './about', ja: './私について' },
    cv: { en: './cv', ja: './履歴書' },
    contact: { en: './contact', ja: './連絡先' },

    // Hero Section (project/product/bridge-focused)
    founderEngineer: { en: 'Technical Product Manager', ja: 'テクニカルプロダクトマネージャー' },
    building: { en: 'Building', ja: '構築' },
    dataDriven: { en: 'Bridge Systems', ja: 'ブリッジシステム' },
    solutionsAt: { en: 'for Data & AI', ja: 'データ & AI向け' },
    scale: { en: 'Scale', ja: 'スケール' },
    heroBio: {
      en: "I'm Thong — Bilingual technical leader bridging IT and Japanese Studies. As Associate Founder in AI SaaS, I translate complex data/AI requirements into high-value product roadmaps. Business-level Japanese and professional English enable me to coordinate global teams and deliver reliable solutions.",
      ja: 'Thongです。ITと日本研究の二つの学士号を持つ、ハイブリッド型のブリッジSE / テクニカルプロダクトマネージャーです。スタートアップの共同創業者として、AI SaaS製品の「0から1」の立ち上げを経験しました。ビジネスレベルの日本語とプロフェッショナルな英語を駆使し、ビジネス側の抽象的な要望を正確な技術仕様に翻訳し、開発チームを牽引することを得意としています。'
    },
    viewProjects: { en: 'View_Projects', ja: 'プロジェクトを見る' },
    downloadCV: { en: 'Download CV', ja: '履歴書ダウンロード' },
    dataEngineering: { en: 'Bridge & Delivery', ja: 'ブリッジ & デリバリー' },
    aiMlIntegration: { en: 'Product Management', ja: 'プロダクトマネジメント' },
    fullStack: { en: 'Data & AI Systems', ja: 'データ & AIシステム' },

    // About Page
    beforeDownloadCV: { en: 'Before You Download My CV', ja: '履歴書をダウンロードする前に' },
    importantNotice: { en: 'Important Notice', ja: '重要なお知らせ' },
    cvNotice: {
      en: 'I believe that a CV is just a summary of achievements and skills. To truly understand who I am and what drives me, I want you to read my personal story first. This journey has shaped me into what I am today.',
      ja: '履歴書は単なる成果とスキルの要約に過ぎないと私は信じています。本当に私が何者で何が私を駆り立てているかを理解するためには、まず私の個人的な物語を読んでほしいと思います。この旅が現在の私を形作りました。'
    },
    readMyStory: { en: 'Read My Story', ja: '私の物語を読む' },
    proceedToDownload: { en: 'Proceed to Download CV', ja: '履歴書のダウンロードへ進む' },
    myJourney: { en: 'My Journey', ja: 'これまでの歩み' },
    journeySubtitle: { en: 'From Japanese Studies to Information Technology, from self-taught to dual degrees', ja: '日本語学科から情報技術へ。独学から二つの学位へ。' },

    // About Page Story Sections
    earlyDaysTitle: { en: 'The Beginning: From Pascal to Japanese Studies', ja: '始まり：パスカルから日本語学科へ' },
    earlyDaysContent1: {
      en: 'My journey into technology wasn\'t straightforward. In high school for the gifted, I was exposed to programming with Pascal, but I wasn\'t particularly interested or good at it. It took me a while to even get familiar with basic concepts like for loops and programming terminology in general.',
      ja: 'テクノロジーへの道は一直線ではありませんでした。特別な高校でパスカルプログラミングに触れましたが、特に興味を持ったり、上手くできたりしませんでした。forループやプログラミング用語などの基本概念に慣れるのに時間がかかりました。'
    },
    earlyDaysContent2: {
      en: 'I graduated high school with a strong interest in Japanese cultures, which led me to pursue a Japanese Studies major at USSH-HCM VNU (University of Social Sciences and Humanities, Ho Chi Minh City, Vietnam National University). Looking back, this was one of my best decisions - it gave me a much-needed break from IT and allowed me to explore social subjects.',
      ja: '高校を卒業する頃、日本文化に強い興味を持ち、USSH-HCM VNU（ベトナム国家大学ホーチミン市人文社会科学大学）で日本語学科を専攻することになりました。振り返ってみると、これは私のベストな決断の一つでした。ITから必要な休憩を取らせ、社会的な科目を探求する機会を与えてくれました。'
    },
    earlyDaysContent3: {
      en: 'I earned my first bachelor\'s degree in Japanese Studies in 2020 during the height of the COVID-19 pandemic. Today, I hold two bachelor\'s degrees - one in Japanese Studies from USSH and another in Information Technology from UIT, both part of the Vietnam National University Ho Chi Minh City system, that I\'m completing in June 2026. This unique combination gives me both cultural understanding and technical expertise, particularly valuable for international collaborations.',
      ja: '2020年、COVID-19パンデミックの最中に日本語学科の最初の学士号を取得しました。現在、私は二つの学士号を持っています。一つはUSSHの日本語学科、もう一つはUITの情報技術で、どちらもベトナム国家大学ホーチミン市システムに属し、2026年6月に修了予定です。このユニークな組み合わせは、文化的な理解と技術的な専門知識の両方を提供し、特に国際的なコラボレーションにおいて価値があります。'
    },

    // Self-Taught Journey Section
    selfTaughtTitle: { en: 'Rediscovering Programming: From Games to Code', ja: 'プログラミングの再発見：ゲームからコードへ' },
    selfTaughtContent1: {
      en: 'During my second and third years of university, I started dabbling in programming again, driven by my love for playing games and game development in general. This passion led me to create my first games, which are still live and playable on itch.io.',
      ja: '大学の2年目と3年目に、ゲームをプレイすることとゲーム開発全般への愛情から、再びプログラミングに手を出し始めました。この情熱が、私の最初のゲームを作成するきっかけとなり、今でもitch.ioでライブプレイ可能です。'
    },
    tryMyGames: { en: '🎮 Try my games:', ja: '🎮 私のゲームを試してみてください：' },
    gameTimeKiller: { en: 'They might help you kill some time during breaks!', ja: '休憩中に時間を潰すのに役立つかもしれません！' },
    pSLiamNote: { en: 'P.S. Liam Vessalius is actually an anime character name - a nod to my deep dive into Japanese culture that eventually led me to study Japanese formally.', ja: 'P.S. Liam Vessaliusは実際のアニメキャラクターの名前です - 最終的に日本語を正式に勉強するきっかけとなった日本文化への深い没入へのオマージュです。' },
    selfTaughtContent2: {
      en: 'After graduation, the real world hit hard. With my Japanese Studies degree, I tried to find work in the gaming industry within Japanese environments, but despite my best efforts, I couldn\'t get noticed - my humanities background wasn\'t seen as relevant for technical gaming roles. I had to take whatever work I could find to put food on the table - teaching English and Japanese at private centers.',
      ja: '卒業後、現実世界が厳しく襲ってきました。日本語学科の学位を持って、日本語環境でのゲーム業界での仕事を求めましたが、懸命の努力にもかかわらず注目されることができませんでした - 私の人文科学の背景は技術的なゲームの役割には関連性がないと見なされました。食卓に食べ物を並べるために、プライベートセンターで英語と日本語を教える仕事を何でも引き受けなければなりませんでした。'
    },
    selfTaughtContent3: {
      en: "While I've transitioned fully into tech and haven't actively used my Japanese studies professionally, I maintain my language skills and cultural understanding. This background could be valuable for Japanese companies or international projects requiring cross-cultural communication and understanding of Japanese business practices.",
      ja: '完全にテクノロジーに移行し、日本語学習を積極的に職業的に使用していませんが、言語スキルと文化的理解を維持しています。この背景は、日本企業や異文化間コミュニケーションと日本のビジネス慣行の理解を必要とする国際プロジェクトにとって価値があるかもしれません。'
    },

    // About Page - Japanese Ability Note (final section)
    japaneseAbilityNote: {
      en: "I retain strong reading and listening comprehension in Japanese. My spoken Japanese is currently rusty and would benefit from regular use. I'm comfortable supporting written translation, documentation review, and stakeholder coordination between English and Japanese. With daily practice or immersion (roughly six months), I can regain business-level spoken fluency and serve effectively as a bridge between technical teams and Japanese stakeholders.",
      ja: '読む・聞く力は比較的保たれていますが、話す力は現在錆びついており、定期的な運用で回復が必要です。書面での翻訳、ドキュメント確認、関係者間の調整などの業務サポートには対応可能です。日常的に日本語を使う環境（概ね半年程度）をいただければ、ビジネスレベルの会話力を取り戻し、技術チームと日本側の橋渡しとして効果的に貢献できるようになります。'
    },
    selfTaughtContent4: {
      en: 'When COVID hit Vietnam severely, I was forced to stay home. During this time, I dedicated myself to learning SEO and WordPress. I tried my hand at affiliate marketing and Amazon dropshipping, though I quickly learned it wasn\'t as easy as it seemed.',
      ja: 'COVIDがベトナムを深刻に襲ったとき、私は家に閉じ込められました。この期間、私はSEOとWordPressの学習に専念しました。アフィリエイトマーケティングとAmazonドロップシッピングに手を出しましたが、思ったほど簡単ではないことをすぐに学びました。'
    },
    selfTaughtContent5: {
      en: 'With my basic WordPress and SEO skills, I applied for related jobs and landed my first unofficial freelance gig as a WordPress Developer. This marked the beginning of my professional journey in tech, and I continue to hold this title as a freelancer until 2022 when I got my first official full time job as WordPress developer.',
      ja: '基本的なWordPressとSEOのスキルで、関連する仕事に応募し、WordPress開発者としての最初の非公式フリーランスの仕事を獲得しました。これはテクノロジーでの私のプロフェッショナルな旅の始まりを示し、2022年に最初の公式フルタイムのWordPress開発者の仕事を得るまでフリーランサーとしてこのタイトルを維持し続けました。'
    },

    // Professional Growth Section
    professionalGrowthTitle: { en: 'From Freelance to Product Leadership', ja: 'フリーランスからプロダクトリーダーへ' },
    professionalGrowthContent1: {
      en: 'My freelance WordPress work opened doors into product and delivery roles. Over time I moved from implementation to coordinating teams, clarifying requirements, and ensuring releases met business goals. This hands-on progression gave me both technical credibility and a practical understanding of product delivery.',
      ja: 'フリーランスでのWordPress業務が、プロダクトとデリバリーの役割への扉を開きました。実装からチームの調整、要件の明確化、リリースがビジネス目標を満たすことの保証へと役割が変化しました。この実務を通じて、技術的信頼性とプロダクトデリバリーに関する実践的な理解を得ました。'
    },
    professionalGrowthContent2: {
      en: 'At Nexus Tech Global I served as Associate Founder, Dev Lead, and Product Owner — I wore many hats. I defined the product vision, wrote user stories, prioritized the backlog, implemented key features as dev lead, and coordinated a cross-functional team of four to deliver a production SaaS chatbot platform. I balanced stakeholder needs, technical constraints, and release timelines to ship usable features quickly.',
      ja: 'Nexus Tech Globalでは、共同創業者であり開発リード兼プロダクトオーナーとして多くの役割を兼務しました。プロダクトのビジョンを定義し、ユーザーストーリーを作成し、バックログの優先順位を決め、開発リードとして主要機能の実装も行い、4人のクロスファンクショナルチームを調整して本番運用のSaaSチャットボットプラットフォームを提供しました。ステークホルダーの要望、技術的制約、リリーススケジュールのバランスを取りながら、迅速に価値ある機能を提供しました。'
    },
    professionalGrowthContent3: {
      en: 'My interest in moving into the Product Management space comes primarily from my experience building the startup SiteBotic. That was the first time I managed not only technical implementation, but also task planning, team coordination, and stakeholder communication—balancing trade-offs and delivering product versions iteratively until reaching a stable release. This process genuinely excited me in a way I hadn\'t experienced before, which is why I want to further pursue the PM path. These experiences taught me how to make pragmatic trade-offs, communicate clearly with both engineers and business stakeholders, and use data to validate product decisions. My background in humanities and technology helps me bridge cultural and technical gaps when working with international teams.',
      ja: 'プロダクトマネジメントの分野に移行したいという私の興味は、主にスタートアップSiteBoticを構築した経験から来ています。それは、技術的な実装だけでなく、タスク計画、チーム調整、ステークホルダーコミュニケーションを管理した初めての機会でした—トレードオフのバランスを取り、安定したリリースに達するまでプロダクトバージョンを反復的に提供しました。このプロセスは、私がこれまで経験したことのない方法で私を本当に興奮させました。それが、PMの道をさらに追求したい理由です。これらの経験から、実用的なトレードオフの判断、エンジニアとビジネスの両方の関係者への明確なコミュニケーション、製品意思決定の検証にデータを用いる方法を学びました。人文系と技術のバックグラウンドは、国際チームでの文化的・技術的ギャップを埋めるのに役立ちます。'
    },

    // Future Goals Section
    futureGoalsTitle: { en: 'Looking Ahead: Completing the Circle', ja: 'これから：旅の締めくくりへ' },
    futureGoalsContent1: {
      en: 'I\'m currently at the final stage of my second bachelor\'s degree in Information Technology at UIT (University of Information Technology), part of the same Vietnam National University Ho Chi Minh City system as USSH. I\'ve completed all coursework and achieved a "Very Good" degree classification, and I\'m now awaiting my official academic transcript and bachelor\'s degree certificate in June 2026.',
      ja: '現在、UIT（情報技術大学）で情報技術の第二学士号の最終段階にいます。これはUSSHと同じベトナム国家大学ホーチミン市システムの一部です。すべてのコースワークを完了し、「Very Good」の学位分類を達成し、現在2026年6月に公式の成績証明書と学士号証明書を待っています。'
    },
    futureGoalsContent2: {
      en: 'Completing my IT degree complements my product experience by strengthening my technical literacy. With dual degrees in Japanese Studies and Information Technology, I can both coordinate technical teams and communicate effectively with Japanese stakeholders — a valuable combination for international product delivery.',
      ja: 'ITの学位を修了することで、プロダクト経験に技術的理解が補完されます。日本語学と情報技術の二つの学位により、技術チームを調整し、日本の関係者と効果的にコミュニケーションを取ることができ、国際的なプロダクトデリバリーにおいて価値のある組み合わせを提供します。'
    },
    futureGoalsContent3: {
      en: 'I aim to transition into full-time product or project leadership roles where I can apply my technical background, bilingual communication, and hands-on delivery experience to help teams ship valuable software. I am particularly interested in roles that require coordinating between Japanese stakeholders and engineering teams.',
      ja: '私は技術的背景、バイリンガルのコミュニケーション能力、実践的なデリバリー経験を活かして、プロダクトまたはプロジェクトのフルタイムのリーダーシップ職に移行することを目指しています。特に日本の関係者とエンジニアリングチームの間を調整する役割に興味があります。'
    },

    // Call to Action
    storyCTA: { en: 'Now that you\'ve read my story, feel free to download my CV or get in touch.', ja: 'ここまで読んでいただきありがとうございます。履歴書のダウンロードや、ご相談のご連絡もぜひお待ちしています。' },
    getInTouch: { en: 'Get In Touch', ja: '連絡する' },

    // Footer
    initializeCollaboration: { en: 'Initialize collaboration?', ja: 'コラボレーションを開始しますか？' },
    availableForFreelance: { en: 'Available for product/project leadership roles, freelance PM/PO work, and open to full-time opportunities.', ja: 'プロダクト/プロジェクトのリーダーシップ、フリーランスのPM/PO業務に対応可能で、フルタイムの機会にもオープンです。' },
    sitemap: { en: 'Sitemap', ja: 'サイトマップ' },
    contactInfo: { en: 'Contact_Info', ja: '連絡先情報' },
    location: { en: 'Ho Chi Minh City, VN', ja: 'ホーチミン市、ベトナム' },
    systemRightsReserved: { en: 'System_All_Rights_Reserved.', ja: 'システム_全著作権所有。' },
    executedWith: { en: 'Executed with Logic & Caffeine', ja: '論理とカフェインで実行' },

    // Home - Selected Works
    selectedWorksHeading: { en: 'Selected Works', ja: '選抜プロジェクト' },
    productLeadershipHeading: { en: 'Product Leadership', ja: 'プロダクトリーダーシップ' },
    handsOnTechnicalHeading: { en: 'Hands‑On Technical', ja: '実務（ハンズオン）' },
    viewAllProjects: { en: 'view_all_projects()', ja: 'view_all_projects()' },
    productionBadge: { en: 'Production', ja: '本番環境' },
    nexusSelectedDescription: {
      en: 'Founder & Product Manager - Leading product strategy, stakeholder communication, and delivery for AI-driven SaaS solutions.',
      ja: '創業者兼プロダクトマネージャーとして、AI搭載SaaSソリューションのプロダクト戦略、ステークホルダーコミュニケーション、デリバリーを主導。'
    },
    siteboticSelectedDescription: {
      en: 'Associate Founder & Product Owner — led product development and delivery for SiteBotic, a no-code AI chatbot SaaS.',
      ja: '共同創業者・プロダクトオーナー — ノーコードAIチャットボットSaaS「SiteBotic」の開発とデリバリーを主導。'
    },
    tagAiPlatforms: { en: 'AI Platforms', ja: 'AIプラットフォーム' },
    tagEtlPipelines: { en: 'ETL Pipelines', ja: 'ETLパイプライン' },
    tagDataProduct: { en: 'Data Product', ja: 'データプロダクト' },
    tagSaas: { en: 'SaaS', ja: 'SaaS' },
    tagAiPlatform: { en: 'AI Platform', ja: 'AIプラットフォーム' },
    visitLiveSite: { en: 'Visit live site', ja: '本番サイトを見る' },

    // Projects Page
    projectsHeroTitleLine1: { en: 'From AI Platforms to', ja: 'AIプラットフォームから' },
    projectsHeroTitleLine2: { en: 'Data Pipelines.', ja: 'データパイプラインまで。' },
    projectsHeroDescription: {
      en: 'Product strategy, cross-functional delivery, and technical coordination for software and AI products. From roadmap to release, I help teams deliver reliable, user-focused solutions.',
      ja: 'プロダクト戦略、クロスファンクショナルなデリバリー、ソフトウェアやAIプロダクトの技術調整。ロードマップからリリースまで、ユーザーに価値ある信頼できるソリューションを提供するためにチームを支援します。'
    },
    statsCompanyFounded: { en: 'Company Founded', ja: '設立した会社' },
    statsProjectsBuilt: { en: 'Projects Built', ja: '構築したプロジェクト' },
    statsSaaSPlatform: { en: 'SaaS Platform', ja: 'SaaSプラットフォーム' },
    projectsCTAHeading: { en: 'Need a Project Manager, Product Owner, or Bridge Engineer (Japanese)?', ja: 'プロジェクトマネージャー、プロダクトオーナー、またはブリッジエンジニア（日本語）をお探しですか？' },
    projectsCTADescription: {
      en: "I coordinate teams, define product strategy, and bridge technical and Japanese stakeholders to deliver value.",
      ja: 'チーム調整、プロダクト戦略の定義、技術と日本のステークホルダーの橋渡しを通じて価値を届けます。'
    },
    projectsCTAButton: { en: "Let's_Talk()", ja: '話しましょう()' },
    visitLiveApp: { en: 'Visit live app', ja: '本番アプリを見る' },
    visitWebsite: { en: 'Visit website', ja: 'ウェブサイトを見る' },
    viewOnGithub: { en: 'View on GitHub', ja: 'GitHubで見る' },
    viewDetails: { en: 'View details', ja: '詳細を見る' },

    // Projects Page - Project Descriptions
    projectNexusDescription: {
      en: 'AI technology company specializing in custom chatbot solutions, software development, and AI-driven business solutions.',
      ja: 'カスタムチャットボットソリューション、ソフトウェア開発、AI駆動のビジネスソリューションを専門とするAIテクノロジー企業。'
    },
    projectNexusLongDescription: {
      en: 'Associate Founder of Nexus Tech Global, an AI technology company delivering enterprise-grade chatbot solutions, custom software development, and AI integration services. Leading technical strategy and product development for innovative AI-powered business solutions.',
      ja: 'Nexus Tech Globalの共同創業者として、エンタープライズ向けチャットボットソリューション、カスタムソフトウェア開発、AI統合サービスを提供。革新的なAI駆動ビジネスソリューションの技術戦略とプロダクト開発をリード。'
    },
    projectSiteboticDescription: {
      en: 'AI-Powered Chatbot Platform - No-code SaaS enabling websites to deploy intelligent chatbots trained on their content.',
      ja: 'AI搭載チャットボットプラットフォーム。ノーコードSaaSとして、ウェブサイトコンテンツで学習したインテリジェントチャットボットを簡単に導入可能。'
    },
    projectSiteboticLongDescription: {
      en: 'Dev Lead for SiteBotic at Nexus Tech Global. Built from scratch by our dev team - a production SaaS platform that automatically crawls websites, trains AI chatbots on content, and deploys with one-click embed. Features RAG pipeline with pgvector, async processing with Dramatiq + Redis, customizable UI, analytics dashboard, and microservices architecture.',
      ja: 'Nexus Tech GlobalにてSiteBoticの開発リードを担当。ウェブサイトを自動クロールし、コンテンツでAIチャットボットを学習させ、ワンクリックで埋め込み配信できる本番運用SaaSプラットフォームをゼロから構築。pgvectorを用いたRAGパイプライン、Dramatiq + Redisによる非同期処理、カスタマイズ可能なUI、分析ダッシュボード、マイクロサービスアーキテクチャを備える。'
    },
    projectPALTechDescription: {
      en: 'Software Engineer specializing in data-intensive systems, bridging frontend and data platform teams for high-traffic applications.',
      ja: '大規模データシステムを専門とするソフトウェアエンジニア。フロントエンドとデータプラットフォームチームの橋渡しを担当し、高トラフィックアプリケーションの開発を支援。'
    },
    projectPALTechLongDescription: {
      en: 'Software Engineer at PALTech focusing on data-intensive systems. Optimized real-time data delivery for high-concurrency systems by bridging platform engineers and business logic. Contributed to sprint efficiency by proactively identifying technical dependencies and infrastructure constraints early in planning phases.',
      ja: 'PALTechにて大規模データシステムを担当するソフトウェアエンジニア。高トラフィック・高リアルタイム性が求められるシステムにおいて、プラットフォームエンジニアとビジネスロジックの橋渡しを担当。スプリントプランニングにて技術的依存関係やインフラ制約を事前に特定し、開発遅延リスクを最小化。'
    },
    projectBeSmarteeDescription: {
      en: 'Web Engineer translating complex FinTech requirements into technical specifications for international development teams.',
      ja: '複雑なFinTech要件を技術仕様に翻訳し、国際開発チーム向けに明確化するウェブエンジニア。'
    },
    projectBeSmarteeLongDescription: {
      en: 'Web Engineer at BeSmartee specializing in FinTech solutions. Translated complex Digital Mortgage logic into clean, manageable technical requirements for international delivery teams. Focused on requirement elicitation and clear communication between business stakeholders and engineering teams.',
      ja: 'BeSmarteeにてFinTechソリューションを専門とするウェブエンジニア。複雑な住宅ローン業務を理解し、国際的な開発チームに向けて仕様の明確化を実施。ビジネスステークホルダーとエンジニアリングチーム間の要件定義と明確なコミュニケーションに注力。'
    },
    projectCustomer360Description: {
      en: 'End-to-end data engineering solution building Customer 360 views and risk analytics with ETL pipelines.',
      ja: 'ETLパイプラインによりCustomer 360ビューとリスク分析を実現するエンドツーエンドのデータエンジニアリングソリューション。'
    },
    projectCustomer360LongDescription: {
      en: 'Data engineering platform with ETL pipelines for data extraction & transformation, Apache Spark for distributed analytics, Airflow for workflow orchestration, and Metabase BI dashboards.',
      ja: 'データ抽出・変換のためのETLパイプライン、分散分析のためのApache Spark、ワークフロー管理のAirflow、BIダッシュボードのMetabaseを組み合わせたデータエンジニアリングプラットフォーム。'
    },
    projectBookRecDescription: {
      en: 'Full-stack ML platform implementing collaborative filtering, content-based filtering, and hybrid algorithms.',
      ja: '協調フィルタリング、コンテンツベースフィルタリング、ハイブリッドアルゴリズムを実装したフルスタック機械学習プラットフォーム。'
    },
    projectBookRecLongDescription: {
      en: 'Machine learning recommendation system with collaborative filtering (SVD), content-based filtering (TF-IDF), hybrid engine combining algorithms, and FastAPI REST API with React frontend.',
      ja: '協調フィルタリング（SVD）、コンテンツベースフィルタリング（TF-IDF）、それらを組み合わせたハイブリッドエンジンを備えた機械学習レコメンドシステム。FastAPIによるREST APIとReactフロントエンドで構成。'
    },
    projectPetClinicDescription: {
      en: 'Java desktop application with complete CRUD operations for veterinary clinic management using DAO pattern.',
      ja: 'DAOパターンを用いて動物病院の管理機能を実装した、完全なCRUD操作対応のJavaデスクトップアプリケーション。'
    },
    projectPetClinicLongDescription: {
      en: 'Desktop application implementing DAO pattern for clean architecture, event-driven GUI with Java Swing, CRUD operations for clinic management, and MySQL database integration.',
      ja: 'クリーンアーキテクチャ実現のためDAOパターンを採用し、Java Swingによるイベント駆動GUI、クリニック管理用CRUD機能、MySQLデータベース連携を備えたデスクトップアプリケーション。'
    },
    projectPriceTrackerDescription: {
      en: 'Real-time data ingestion platform tracking Bitcoin, gold, and USD-VND rates with automated ETL pipeline.',
      ja: 'ビットコイン、金、USD-VNDレートを追跡する自動ETLパイプライン付きリアルタイムデータ収集プラットフォーム。'
    },
    projectPriceTrackerLongDescription: {
      en: 'Data pipeline with async API calls using httpx for concurrent data fetching, SQLite with SQLModel ORM for time-series data, React + Chart.js for visualizations, and integration with multiple external APIs.',
      ja: 'httpxによる非同期API呼び出しで同時データ取得を行い、SQLite + SQLModel ORMで時系列データを管理、React + Chart.jsで可視化し、複数の外部APIと連携するデータパイプライン。'
    },

    // Projects Page - Tag translations (conceptual tags translated, tech tools left as-is)
    tag_AISolutions: { en: 'AI Solutions', ja: 'AIソリューション' },
    tag_SoftwareDevelopment: { en: 'Software Development', ja: 'ソフトウェア開発' },
    tag_Enterprise: { en: 'Enterprise', ja: 'エンタープライズ' },
    tag_Leadership: { en: 'Leadership', ja: 'リーダーシップ' },
    tag_ApacheSpark: { en: 'Apache Spark', ja: 'Apache Spark' },
    tag_PySpark: { en: 'PySpark', ja: 'PySpark' },
    tag_ApacheAirflow: { en: 'Apache Airflow', ja: 'Apache Airflow' },
    tag_PostgreSQL: { en: 'PostgreSQL', ja: 'PostgreSQL' },
    tag_Metabase: { en: 'Metabase', ja: 'Metabase' },
    tag_Scikitlearn: { en: 'Scikit-learn', ja: 'Scikit-learn' },
    tag_FastAPI: { en: 'FastAPI', ja: 'FastAPI' },
    tag_React: { en: 'React', ja: 'React' },
    tag_TypeScript: { en: 'TypeScript', ja: 'TypeScript' },
    tag_Vite: { en: 'Vite', ja: 'Vite' },
    tag_Java: { en: 'Java', ja: 'Java' },
    tag_JavaSwing: { en: 'Java Swing', ja: 'Java Swing' },
    tag_MySQL: { en: 'MySQL', ja: 'MySQL' },
    tag_JDBC: { en: 'JDBC', ja: 'JDBC' },
    tag_DAOPattern: { en: 'DAO Pattern', ja: 'DAOパターン' },
    tag_Python: { en: 'Python', ja: 'Python' },
    tag_httpx: { en: 'httpx', ja: 'httpx' },
    tag_SQLite: { en: 'SQLite', ja: 'SQLite' },
    tag_SQLModel: { en: 'SQLModel', ja: 'SQLModel' },
    tag_Chartjs: { en: 'Chart.js', ja: 'Chart.js' },
    tag_pgvector: { en: 'pgvector', ja: 'pgvector' },
    tag_Dramatiq: { en: 'Dramatiq', ja: 'Dramatiq' },
    tag_Redis: { en: 'Redis', ja: 'Redis' },
    tag_Docker: { en: 'Docker', ja: 'Docker' },

    // Home - Core Competencies
    capabilitiesLabel: { en: 'Capabilities', ja: '得意分野' },
    coreCompetenciesHeading: { en: 'Core Competencies', ja: '主な専門領域' },
    statusActive: { en: 'Active', ja: '稼働中' },

    // PM-focused short cards for homepage
    pmCardTitle1: { en: 'Product Strategy', ja: 'プロダクト戦略' },
    pmCardDesc1: {
      en: 'Define roadmaps, prioritize features, and set product vision to align stakeholders.',
      ja: 'ロードマップの策定、機能の優先順位付け、プロダクトビジョンで関係者を整合させます。'
    },
    pmCardTitle2: { en: 'Delivery Management', ja: 'デリバリ管理' },
    pmCardDesc2: {
      en: 'Manage releases, timelines, and quality to deliver software predictably.',
      ja: 'リリース・スケジュール・品質を管理し、確実なソフトウェア提供を実現します。'
    },
    pmCardTitle3: { en: 'Stakeholder & Japan Liaison', ja: 'ステークホルダー・日本担当連携' },
    pmCardDesc3: {
      en: 'Translate technical requirements between English and Japanese and keep stakeholders aligned.',
      ja: '技術要件を英日で翻訳し、関係者の整合性を維持します。'
    },
    pmCardTitle4: { en: 'Team Leadership', ja: 'チームリーダーシップ' },
    pmCardDesc4: {
      en: 'Coordinate small cross-functional teams, mentor engineers, and contribute hands-on when required.',
      ja: '小規模なクロスファンクショナルチームを調整し、エンジニアのメンターや必要に応じたハンズオンで貢献します。'
    },

    // Contact Page
    contactInitialize: { en: 'Initialize Contact', ja: 'コンタクトを開始' },
    contactHeroTitleLine1: { en: "Let's build something", ja: '一緒に何かを' },
    contactHeroTitleHighlight: { en: 'future-proof.', ja: '将来に強いものに。' },
    contactHeroDescription: {
      en: 'Project Manager and Product Owner experienced in coordinating engineering teams and Japanese stakeholders. I translate business needs into technical requirements, keep delivery on schedule, and ensure alignment across teams. Let\'s discuss how I can support your product or project.',
      ja: 'プロジェクトマネージャー兼プロダクトオーナーとして、エンジニアチームと日本のステークホルダーの調整に豊富な経験があります。ビジネスの要件を技術要件に翻訳し、納期を守りつつチーム間の連携を確保します。あなたのプロダクトやプロジェクトをどのように支援できるか、ぜひお話しましょう。'
    },
    contactDirectLine: { en: 'Direct Line', ja: 'ダイレクトライン' },
    contactSyncUp: { en: 'Sync Up', ja: '打ち合わせ' },
    contactBookSlot: { en: 'Book a 30m slot', ja: '30分の枠を予約' },
    comingSoon: { en: 'Coming Soon', ja: '近日公開' },
    contactFormTitle: { en: 'Send a Message', ja: 'メッセージを送信' },
    labelName: { en: 'Name_', ja: '名前_' },
    labelEmail: { en: 'Email_', ja: 'メール_' },
    labelSector: { en: 'Sector_', ja: '分野_' },
    labelMessage: { en: 'Message_', ja: 'メッセージ_' },
    placeholderName: { en: 'Enter your name', ja: 'お名前を入力してください' },
    placeholderEmail: { en: 'name@domain.com', ja: 'name@domain.com' },
    placeholderMessage: { en: 'Describe your project requirements...', ja: 'プロジェクトの要件をご記入ください…' },
    sectorOptionEtl: { en: 'Project Management', ja: 'プロジェクト管理' },
    sectorOptionBackend: { en: 'Product Ownership', ja: 'プロダクトオーナーシップ' },
    sectorOptionDataPlatform: { en: 'Bridge Software Engineer (Japanese)', ja: 'ブリッジエンジニア（日本語）' },
    sectorOptionConsulting: { en: 'Project Coordination', ja: 'プロジェクトコーディネーション' },
    sectorOptionOther: { en: 'Other', ja: 'その他' },
    buttonSending: { en: 'Sending...', ja: '送信中…' },
    buttonSendTransmission: { en: 'Send Transmission', ja: '送信する' },
    successTitle: { en: 'Message Sent Successfully!', ja: 'メッセージが送信されました！' },
    successBody: {
      en: "Thank you for reaching out. I'll get back to you within 24 hours.",
      ja: 'ご連絡ありがとうございます。24時間以内に返信いたします。'
    },
    successSendAnother: { en: 'Send Another Message', ja: '別のメッセージを送る' },

    // CV Page
    cvBadge: { en: 'Download CV', ja: '履歴書をダウンロード' },
    cvHeroTitleLine1: { en: 'Access My', ja: '私の' },
    cvHeroTitleHighlight: { en: 'Professional CV', ja: '職務経歴書にアクセス' },
    cvHeroParagraph1: {
      en: "Let's connect first - I'd love to know who you are before sharing my CV.",
      ja: 'まずは簡単に自己紹介を交わしてから、履歴書をお渡しできればと思っています。'
    },
    cvHeroParagraph2: {
      en: "Fill out the form below and I'll send you my latest CV. I'm always interested in connecting with product managers, project leads, and engineering teams.",
      ja: '下のフォームにご入力いただければ、最新の履歴書をお送りします。プロダクトマネージャー、プロジェクトリード、エンジニアリングチームの皆さまとつながれるのを楽しみにしています。'
    },
    cvFormTitle: { en: 'Get My CV', ja: '履歴書を受け取る' },
    labelCompanyOptional: { en: 'Company_ (Optional)', ja: '会社名_（任意）' },
    labelMessageOptional: { en: 'Message_ (Optional)', ja: 'メッセージ_（任意）' },
    placeholderCompany: { en: 'Your company or organization', ja: '会社名または組織名' },
    cvPlaceholderMessage: {
      en: 'Any specific questions or context about my CV?',
      ja: '履歴書についてのご質問や背景があればご記入ください。'
    },
    cvButtonProcessing: { en: 'Processing...', ja: '処理中…' },
    cvButtonGet: { en: 'Get My CV', ja: '履歴書を受け取る' },

    // CV Thank You Page
    cvThanksTitle: { en: 'Thanks for your interest!', ja: 'ご関心をお寄せいただきありがとうございます！' },
    cvThanksBody: {
      en: "I've received your request and sent you my CV. You can also download it directly below.",
      ja: 'ご依頼を受け取り、履歴書をお送りしました。以下から直接ダウンロードすることもできます。'
    },
    backToHome: { en: 'Back to Home', ja: 'ホームに戻る' },
  };

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    return translation ? translation[language] : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};