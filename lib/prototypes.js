// AI prototypes shown on /prototypes. All names, organizations and data in the
// prototypes are fictional. Files live in /public/prototypes.
const PROTOTYPES = [
  {
    slug: 'tender-connect',
    title: 'Tender Connect',
    tagline: 'AI-powered member networking for a global freight network',
    image: '/assets/prototypes/tender-messages.jpg',
    tags: ['AI feature', 'Desktop + mobile', '4 screens'],
    problem:
      'Members of a large freight network need to find the right partners quickly, then build trust across languages and cultures once they connect.',
    points: [
      'AI-recommended partners, each with a plain-language "why connect" and a risk rating',
      'Tender Coach, an in-chat AI assistant that translates live, suggests replies, and gives cultural advice',
      'A swipe-to-connect mobile experience for fast discovery',
      'A staff renewal call list that prioritizes members by engagement',
    ],
    live: '/prototypes/tender-directory.html',
    screens: [
      { label: 'Member directory', href: '/prototypes/tender-directory.html' },
      { label: 'Messages + Tender Coach', href: '/prototypes/tender-messages.html' },
      { label: 'Mobile swipe', href: '/prototypes/tender-mobile.html' },
      { label: 'Staff renewal list', href: '/prototypes/tender-staff.html' },
    ],
  },
  {
    slug: 'pathfinder',
    title: 'Pathfinder',
    tagline: 'An AI session planner for a multi-day conference',
    image: '/assets/prototypes/event-pathfinder.jpg',
    tags: ['AI feature', 'Desktop', 'Interactive'],
    problem:
      'Attendees face hundreds of sessions and often stick to what they already know, missing labs and topics that would help them grow.',
    points: [
      'Personalized picks based on past attendance and profile, with the reasoning shown on every card',
      '"Stretch picks" that nudge attendees toward new skills',
      'A guided chat that builds a conflict-free, day-by-day schedule in a few questions',
      'Toggle between a returning and a first-time attendee to see how recommendations adapt',
    ],
    live: '/prototypes/event-pathfinder.html',
  },
  {
    slug: 'impersonation-mode',
    title: 'Impersonation Mode',
    tagline: 'Consent-based account access for household and company admins',
    image: '/assets/prototypes/impersonation-mode.jpg',
    tags: ['MemberPlex', 'Desktop', 'Interactive'],
    problem:
      'Admins need to update profiles and applications on behalf of family members or employees without sharing passwords, and members need control over who can do that.',
    points: [
      'Request and approve flow, with an optional auto-approve setting',
      'A Delegated Access tab where members can see and revoke access at any time',
      'A clear impersonation banner and restricted navigation while acting for someone else',
      'Every change is logged under the admin who made it',
    ],
    live: '/prototypes/impersonation-mode.html',
  },
  {
    slug: 'program-budgets',
    title: 'Program Budget Management',
    tagline: 'Budget building and approval tracking inside the member portal',
    image: '/assets/prototypes/program-budgets.jpg',
    tags: ['MemberPlex', 'Desktop', 'Interactive'],
    problem:
      'Program leads need one place to build budgets, submit them for staff review, and see at a glance what has been approved or sent back.',
    points: [
      'Draft budgets that stay editable until submitted',
      'Line-item builder for meetings, airfare, hotels and sponsors',
      'Clear Submitted, Approved and Rejected statuses for every budget',
      'A Program Tracker tab to follow each program through review',
    ],
    live: '/prototypes/program-budgets.html',
  },
]

export default PROTOTYPES
