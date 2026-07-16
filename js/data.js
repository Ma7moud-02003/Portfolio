/**
 * data.js
 * Single source of truth for portfolio content.
 * Keeping data separate from rendering logic (ui.js) makes the site
 * easy to update without touching markup or DOM code.
 */

export const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'fa-solid fa-display',
    accent: 'red',
    skills: [
      { name: 'Angular', icon: 'fa-brands fa-angular' },
      { name: 'TypeScript', icon: 'fa-solid fa-file-code' },
      { name: 'JavaScript (ES6+)', icon: 'fa-brands fa-js' },
      { name: 'RxJS & Signals', icon: 'fa-solid fa-bolt' },
      { name: 'HTML5', icon: 'fa-brands fa-html5' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-wind' },
      { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'fa-solid fa-server',
    accent: 'emerald',
    skills: [
      { name: 'NestJS', icon: 'fa-solid fa-cubes' },
      { name: 'Node.js', icon: 'fa-brands fa-node-js' },
      { name: 'Express', icon: 'fa-solid fa-route' },
      { name: 'REST APIs', icon: 'fa-solid fa-plug' },
      { name: 'JWT Authentication', icon: 'fa-solid fa-key' },
      { name: 'Authorization (RBAC)', icon: 'fa-solid fa-user-shield' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: 'fa-solid fa-database',
    accent: 'blue',
    skills: [
      { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
      { name: 'SQL', icon: 'fa-solid fa-table' },
      { name: 'TypeORM', icon: 'fa-solid fa-diagram-project' },
      { name: 'Firebase (Firestore)', icon: 'fa-solid fa-fire' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    icon: 'fa-solid fa-screwdriver-wrench',
    accent: 'amber',
    skills: [
      { name: 'Git', icon: 'fa-brands fa-git-alt' },
      { name: 'GitHub', icon: 'fa-brands fa-github' },
      { name: 'VS Code', icon: 'fa-solid fa-code' },
      { name: 'Postman', icon: 'fa-solid fa-paper-plane' },
      { name: 'Docker', icon: 'fa-brands fa-docker' },
    ],
  },
];

export const projects = [
  {
    id: 'fixit',
    title: 'FixIt — Handyman Booking Platform',
    summary: 'Graduation project connecting homeowners with verified handymen for on-demand repair services.',
    description:
      'FixIt is a service-marketplace platform built as my graduation project. It connects people who need home repairs with nearby handymen, handling service browsing, booking requests, and provider profiles in a clean, responsive interface.',
    role: 'Built the complete front-end: routing, state handling, and UI architecture.',
    stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS', 'Firebase'],
    features: [
      'Service category browsing with search and filtering',
      'Handyman profile pages with ratings and contact details',
      'Booking request flow with form validation',
      'Fully responsive layout across mobile, tablet, and desktop',
    ],
    challenges:
      'Coordinating multiple data relationships (users, services, bookings) on the front end while keeping components small and reusable was the main challenge — solved by structuring shared services and typed interfaces around each domain entity.',
    images: [
      './images/work/Fixit/1 (1).png',
      './images/work/Fixit/1 (2).png',
      './images/work/Fixit/1 (3).png',
      './images/work/Fixit/1 (4).png',
      './images/work/Fixit/1 (5).png',
      './images/work/Fixit/1 (6).png',
      './images/work/Fixit/1 (7).png',
    ],
    github: 'https://github.com/Ma7moud-02003/FixIt.git',
    link: 'https://fix-it-bay.vercel.app/',
  },

{
  id: 'hefza',
  title: 'حفظه — منصة القرآن الكريم',
  summary: 'منصة متكاملة لقراءة القرآن الكريم وحفظه مع عرض التفسير في واجهة بسيطة وسهلة الاستخدام.',
  description:
    'تطبيق قرآن كريم تم تطويره باستخدام Angular وFirebase، يوفر تجربة سلسة لقراءة القرآن الكريم، تصفح السور، عرض التفسير، والتنقل السريع بين الآيات، مع تصميم متجاوب يعمل بكفاءة على مختلف الأجهزة.',
  role:
    'قمت بتصميم وتطوير التطبيق بالكامل، بدءًا من واجهات المستخدم وحتى ربط البيانات باستخدام Firebase وتحسين تجربة الاستخدام.',
  stack: ['Angular', 'TypeScript', 'Firebase', 'Bootstrap'],
  features: [
    'عرض القرآن الكريم كاملًا',
    'إظهار تفسير الآيات',
    'التنقل السريع بين السور والآيات',
    'تصميم متجاوب يدعم جميع الأجهزة',
    'واجهة قراءة مريحة وسهلة الاستخدام',
    'إدارة البيانات وربطها باستخدام Firebase',
  ],
  challenges:
    'كان التحدي الرئيسي هو تحسين أداء تحميل بيانات القرآن الكريم والتفسير مع الحفاظ على سرعة التنقل بين السور والآيات، وتم ذلك من خلال تنظيم البيانات وتقليل عمليات التحميل غير الضرورية.',
  images: [
    './images/work/Quran/main.png',
    './images/work/Quran/1.png',
    './images/work/Quran/2.png',
    './images/work/Quran/3.png',
    './images/work/Quran/4.png',
  ],
  github: 'https://github.com/Ma7moud-02003/Ramadan.git',
  link: 'https://ramadan-beta-taupe.vercel.app/',
},
  {
    id: 'burgur',
    title: 'Burgur — Restaurant Ordering Site',
    summary: 'A dynamic restaurant website with a live menu and a smooth, responsive ordering experience.',
    description:
      'A customer-facing restaurant site built with Angular, Tailwind CSS, and Firebase. It features a real-time menu, category navigation, and a responsive design tuned for both desktop browsing and mobile ordering.',
    role: 'Designed and built the full customer-facing application, including data integration with Firebase.',
    stack: ['Angular', 'Tailwind CSS', 'Firebase'],
    features: [
      'Real-time menu updates powered by Firestore',
      'Category-based navigation with smooth transitions',
      'Mobile-first ordering flow',
      'Reusable component library for menu cards and modals',
    ],
    challenges:
      'Keeping the menu in sync in real time without over-fetching required careful use of Firestore listeners scoped to the active category rather than the whole collection.',
    images: [
      './images/work/Burgur/main.png',
      './images/work/Burgur/1.png',
      './images/work/Burgur/2.png',
      './images/work/Burgur/3.png',
      './images/work/Burgur/4.png',
      './images/work/Burgur/5.png',
      './images/work/Burgur/6.png',
    ],
    github: 'https://github.com/Ma7moud-02003/Burgur.git',
    link: 'https://burgur-nu.vercel.app/User',
  },

  {
  id: 'furnizone',
  title: 'FurniZone — Furniture E-Commerce Platform',
  summary:
    'A full-featured furniture e-commerce platform with a customer storefront and an advanced admin dashboard.',
  description:
    'FurniZone is a graduation project developed as part of the Digital Egypt Pioneers Initiative (DEPI). Built collaboratively with my team, the platform provides a complete online furniture shopping experience, including product browsing, secure authentication, order management, and a powerful admin dashboard for managing the entire store.',
  role:
    'Collaborated with the team to develop both the customer-facing platform and the admin dashboard, contributing to frontend development, Firebase integration, and core application features.',
stack: [
  'Angular',
  'ASP.NET Core',
  'MongoDB',
  'TypeScript',
  'Tailwind CSS',
],
  features: [
    'User authentication ',
    'Product categories and advanced search',
    'Shopping cart and checkout system',
    'Wishlist functionality',
    'Order management and tracking',
    'Product reviews and ratings',
    'Responsive design for all devices',
    'Comprehensive admin dashboard',
    'Product, category, and inventory management',
    'Real-time database synchronization',
  ],
  challenges:
    'One of the main challenges was coordinating development across multiple team members while maintaining a consistent architecture and integrating customer and admin features into a seamless, scalable application.',
  images: [
    './images/work/FurniZone/main.png',
    './images/work/FurniZone/1.png',
    './images/work/FurniZone/2.png',
    './images/work/FurniZone/3.png',
    './images/work/FurniZone/4.png',
    './images/work/FurniZone/5.png',
    './images/work/FurniZone/6.png',
    './images/work/FurniZone/7.png',
    './images/work/FurniZone/8.png',
    './images/work/FurniZone/9.png',
    './images/work/FurniZone/10.png',
    './images/work/FurniZone/11.png',
    './images/work/FurniZone/12.png',
    './images/work/FurniZone/13.png',
    './images/work/FurniZone/14.png',
    './images/work/FurniZone/15.png',
    './images/work/FurniZone/16.png',
  ],
  github: 'https://github.com/Basant-Ali/FurniZone.git',
  link: 'https://furni-zone-ten.vercel.app/',
},
  {
    id: 'burgur-admin',
    title: 'Burgur — Admin Dashboard',
    summary: 'An internal dashboard for managing menu items, orders, and customer data for the Burgur platform.',
    description:
      'The companion admin panel for the Burgur restaurant platform. Built with Angular, Tailwind CSS, and Firebase, it gives staff a single interface to manage the live menu, track incoming orders, and review customer activity.',
    role: 'Built the dashboard UI, the menu/order management screens, and the Firebase data layer.',
    stack: ['Angular', 'Tailwind CSS', 'Firebase'],
    features: [
      'CRUD interface for menu items with image uploads',
      'Order tracking view with status updates',
      'Customer activity overview',
      'Role-gated admin login',
    ],
    challenges:
      'Designing a data layer that two separate Angular apps (customer site + admin panel) could both read and write safely meant being deliberate about Firestore security rules and data shape.',
    images: [
      './images/work/burgur_admin/main.png',
      './images/work/burgur_admin/1.png',
      './images/work/burgur_admin/2.png',
      './images/work/burgur_admin/3.png',
      './images/work/burgur_admin/4.png',
      './images/work/burgur_admin/5.png',
      './images/work/burgur_admin/6.png',
    ],
    github: 'https://github.com/Ma7moud-02003/Burgur-Admin.git',
    link: 'https://myburgur.netlify.app/Admin-Login',
  },
];
