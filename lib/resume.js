// Content of the /resume page. Keep in sync with public/assets/resume/Resume.pdf.
const RESUME = {
  name: 'Sydney Pittman',
  title: 'AI-Native Product Manager',
  location: 'Wilmington, NC',
  email: 'sydney.m.pittman@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sydneympittman',
  pdf: '/assets/resume/Resume.pdf',
  summary:
    'AI-native Product Manager with 6 years of experience in Agile product development, product design, and cross-functional execution. Builds GenAI into both the product and the process, from AI-powered features in NetSuite-based SaaS products to AI-assisted backlog refinement, QA, and release automation that help teams ship faster with less manual work. Experienced turning enterprise data and tools like Amazon Bedrock into customer-facing solutions, and thrives where technology and user needs evolve quickly.',
  skills: {
    'Professional skills': [
      'Roadmap Development', 'Backlog Management', 'Requirements Gathering', 'Stakeholder Alignment',
      'Cross-Functional Team Management', 'Product Design', 'Agile Methodologies', 'Mentorship', 'GenAI',
    ],
    'Technical skills': [
      'Azure DevOps', 'Jira', 'Confluence', 'Zapier', 'Scrum', 'Figma', 'Generative AI', 'Amazon Bedrock',
      'QA & Release Management', 'Usability Testing',
    ],
  },
  certifications: [
    { name: 'A-CSPO: Advanced Certified Scrum Product Owner', org: 'Scrum Alliance', year: '2023' },
    { name: 'CSPO: Certified Scrum Product Owner', org: 'Scrum Alliance', year: '2022' },
    { name: 'Foundations of User Experience (UX) Design', org: 'Coursera', year: '2023' },
  ],
  experience: [
    {
      role: 'Product Owner',
      company: 'Aura Innovative Technology',
      place: 'Remote, USA',
      dates: 'June 2023 – Present',
      blurb:
        'Aura Innovative Technologies builds MemberPlex, a member portal platform for not-for-profits. This role owns the MemberPlex product end to end.',
      bullets: [
        'Own the MemberPlex product roadmap, backlog, and development priorities, gathering and refining requirements from clients, Project Managers, and leadership.',
        'Write user stories, acceptance criteria, and bug tickets that translate business and client needs into clear, prioritized development work.',
        'Lead UX/UI design in Figma, delivering 40+ mockups, workflows, and feature designs, including a GenAI-powered campaign module that lets users generate donation campaigns with AI-assisted names, logos, descriptions, and images.',
        'Own QA, release validation, and sign-off; coordinate deployments with pre- and post-deployment testing across client staging and production environments, and built a release notes process that reduced deployment inquiries.',
        'Serve as primary liaison between leadership and a global team of seven developers, leading roadmapping sessions and Scrum to align priorities, resolve blockers, and ensure successful delivery.',
        'Mentor and manage summer interns, owning day-to-day assignments, delegation, and prioritization; a 2024 intern achieved 100% task completion and a 30% improvement in documentation clarity.',
      ],
      extra: {
        heading: 'AI & process improvement initiatives',
        bullets: [
          'Drive company-wide AI adoption, introducing AI-assisted backlog reviews that surface requirement gaps and sharpen prioritization, and AI-driven QA workflows that cut repetitive manual testing and shorten QA turnaround.',
          'Built tools and automations for standups, developer workload visibility, and progress tracking, and automated parts of release management for more consistent deployments and clearer production-readiness communication.',
          'Leading an Amazon Bedrock initiative using GenAI to automate feedback summarization and RFP response generation with AWS-hosted models.',
        ],
      },
    },
    {
      role: 'Associate Product Manager',
      company: 'Corevist',
      place: 'Remote, USA',
      dates: 'January 2022 – June 2023',
      bullets: [
        'Orchestrated Scrum ceremonies for an 11-person engineering team, streamlining workflows and enhancing efficiency.',
        'Led the implementation of BuyBot, an automated purchase order system, reducing CSR workload by 50%.',
        'Revamped the Retrospective process, boosting team engagement and improving feedback quality.',
        'Collaborated with UX consultants to validate mockups, ensuring customer-focused solutions.',
      ],
    },
    {
      role: 'Enablement & Outreach Lead',
      company: 'Red Hat',
      place: 'Raleigh, NC',
      dates: 'December 2020 – December 2021',
      bullets: [
        'Led agile sprints and scrum ceremonies, ensuring smooth collaboration and feedback integration.',
        'Worked with marketing and sales to demonstrate product capabilities and address inquiries.',
        'Conducted market research, launching a CRM integration that boosted user engagement by 25% via Adobe Analytics.',
      ],
    },
    {
      role: 'Data Analyst Intern',
      company: 'Red Hat',
      place: 'Raleigh, NC',
      dates: 'May 2020 – December 2020',
      bullets: [
        'Managed the product backlog with the Product Owner, writing and prioritizing tickets to streamline workflows and alignment.',
      ],
    },
  ],
  education: {
    degree: 'B.S. in Business Administration with a Finance Concentration',
    school: 'North Carolina State University',
    place: 'Raleigh, NC',
  },
}

export default RESUME
