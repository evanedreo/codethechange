// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "#about_us", key: "about_us", label: "About Us" },
  { href: "#projects", key: "projects", label: "What Have We Done" },
];

// Gallery SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// Benefits SECTION
export const FEATURES = [
  {
    title: "Resume",
    icon: "/resume.png",
    description:
      "   You can enrich your resume with hands-on project experience. Also, involvement in these projects not only counts as volunteer work, demonstrating a commitment to community service, but also appealing to employers who value social responsibility. ",
  },
  {
    title: "Experience",
    icon: "/experience.png",
    description:
      "You have the chance to apply as officers, providing you with invaluable leadership experience for your personal and professional growth. Furthermore, direct mentorship from project leaders enhances your technical skills, particularly in website development.",
  },
  {
    title: "Connections",
    icon: "/connection.png",
    description:
      "The club is a hub for students who share a passion for technology and community service. This environment fosters connections with peers who have similar interests and ambitions, leading to lasting professional networks and friendships.",
  },
  {
    title: "Certificate",
    icon: "/certificate.png",
    description:
      "You receive certificates recognizing your contributions to projects for non-profit organizations. This certificate is not only a token of appreciation but also serves as a tangible record of your involvement and skills, which can be beneficial for future academic or career opportunities.",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      {
        label: "About Us",
        url: "/#about_us",
      },
      {
        label: "Our Projects",
        url: "/#projects",
      },
      {
        label: "Join Us",
        url: "https://forms.gle/dm8e1pDQECfDJ9zXA",
      },
      {
        label: "Collaborate With Us",
        url: "https://forms.gle/ZH386SbYDFZskVcE9",
      },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "669-302-5045" },
    { label: "Email Officer", value: "codethechangedvc@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    // {
    //   image: '/facebook.svg',
    //   url: 'https://www.facebook.com'
    // },
    {
      image: "/linkedin.svg",
      url: "https://www.linkedin.com/company/code-the-changedvc/about/",
    },
    {
      image: "/discord.svg",
      url: "https://discord.gg/cAvGBxVwmt",
    },
    {
      image: "/instagram.svg",
      url: "https://www.instagram.com/codethechange_dvc",
    },
    // {
    //   image: '/twitter.svg',
    //   url: 'https://www.twitter.com'
    // },
    // {
    //   image: '/youtube.svg',
    //   url: 'https://www.youtube.com'
    // },
    // {
    //   image: '/wordpress.svg',
    //   url: 'https://www.wordpress.com'
    // }
  ],
};

export const TEAMS = {
  executives: [
    { label: "President ", value: "Evan Honggo Widjojo" },
    { label: "VP of Projects", value: "Nicholas Chan" },
    { label: "VP of Operations", value: "Charlene Lioe" },
    { label: "VP of Finance", value: "Darren Phang" },
    { label: "VP of Communication", value: "Bianca Setiady" },
    { label: "VP of Design", value: "Agatha Santoso" },
    { label: "Marketing Designer", value: "Hanzell Firmansyah" },
    { label: "Marketing Designer", value: "Justine Setiono" },
    { label: "Event Organizer", value: "Servian Husada" },
    { label: "ICC Representative", value: "Rezon Gautama" },
  ],
  projectLeader: [
    { label: "Project Leader", value: "Nicholas Nurwinata" },
    { label: "Project Leader", value: "Andrew Damanik" },
    { label: "Project Leader", value: "Sebastian Silva" },
    { label: "Project Leader", value: "Anupriya Islam" },
    { label: "Project Leader", value: "Angelyne Susanto" },
    { label: "Project Leader", value: "Cameron White" },
  ],
};

//  project descriptions
export const PROJECT_DESCRIPTIONS = {
  team1: {
    title: "Team 1",
    description:
      "Under the supervision of the President and Vice President, project leaders at Code the Change provided direct, hands-on guidance to members in developing a website for The Little House, an initiative that operates five learning centers across Jakarta. Catering to over 200 underprivileged Indonesian children, The Little House provides free education to bridge the educational socioeconomic divide, with programs spanning grades 1 to 12 and supported by over 25 full-time teachers.",
    imageUrl: "/team1.png",
    websiteUrl: "https://thelittlehouse1jkt.netlify.app/",
  },
  team2: {
    title: "Team 2",
    description:
      "Under the supervision of the President and Vice President, project leaders at our organization provided hands-on guidance to members in developing a website for Social Project Bali, a non-profit organization founded on 19 September 2020 in Bali, Indonesia. Focused on education, environmental conservation, and social humanity, the organization engages in educating rural children, cleaning and tree planting for environmental care, and making donations to underprivileged people, aiming to foster community of collaboration and impact in these areas.",
    imageUrl: "/team2.png",
    websiteUrl: "https://socialprojectbali.netlify.app/",
  },
  team3: {
    title: "Team 3",
    description:
      "Under the supervision of the President and Vice President, project leaders at our organization provided hands-on guidance to members in developing a website for Bercerita, an initiative aimed at raising the global competitiveness of Indonesian children by enhancing their self-esteem and cultural pride. Bercerita bridges high school volunteers and rural elementary students through English language education, with a curriculum that promotes cultural understanding and broadens horizons.",
    imageUrl: "/team3.png",
    websiteUrl: "https://bercerita.netlify.app/",
  },
};
