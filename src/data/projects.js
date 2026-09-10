// Central place for project content — keeps components free of hardcoded copy.
// Replace `github` and `demo` with your real links, and swap the description
// text once each project is live.

export const projects = [
  {
    id: 'itinerary-planner',
    icon: 'MapPin',
    title: 'Itinerary Planner',
    description:
      'A React-based travel itinerary planner. Users enter a destination, dates, stay type, budget, and travel preferences, and the app generates a structured day-by-day itinerary with a cost breakdown.',
    tech: ['React', 'JavaScript', 'CSS', 'Mock REST API'],
    features: [
      'Multi-step form with controlled inputs and validation',
      'Parent-child component communication via props',
      'State management with React Hooks (useState, useEffect)',
      'Conditional rendering based on trip preferences',
      'API integration to fetch destination and activity data',
      'Dynamic itinerary generation with a cost breakdown',
      'Pagination for longer activity lists',
    ],
    problem:
      'Planning a multi-day trip usually means juggling separate notes for budget, stay type, and daily activities.',
    solution:
      'A single guided form captures trip preferences once, then renders a day-by-day itinerary with estimated costs so the whole plan lives in one place.',
    challenges:
      'Keeping itinerary state in sync across nested form steps while avoiding unnecessary re-renders.',
    learned:
      'Structuring component communication cleanly (lifting state up, passing callbacks down) made the multi-step flow much easier to reason about than it looked at first.',
    github: 'https://github.com/ashrith-rao/itinerary-planner',
    demo: 'https://itinerary-planner.demo',
  },
  
  {
    id: 'beauty-saloon',
    icon: 'Sparkles',
    title: 'Beauty Saloon',
    description:
      'A responsive, mobile-first static site built using only semantic HTML and modern CSS. The site showcases services, a gallery, pricing, and contact information — no JavaScript required.',
    tech: ['HTML', 'CSS', 'Responsive Design'],
    features: [
      'Mobile-first responsive layout using CSS Grid and Flexbox',
      'Semantic HTML5 structure with accessible markup',
      'Responsive image gallery and service cards',
      'CSS-only interactive patterns (hover effects, simple tab-like panels)',
      'Optimized for fast load times with minimal assets',
    ],
    problem:
      'Many small business sites rely on heavy JavaScript and slow asset loads for simple informational pages.',
    solution:
      'A lightweight HTML/CSS implementation that delivers fast, accessible content and responsive design without JS.',
    challenges:
      'Implementing interactive patterns (gallery, tabs) with only CSS while keeping accessibility in mind.',
    learned:
      'How far semantic HTML and CSS can go to build real-world, responsive sites with good UX and performance.',
    github: 'https://github.com/ashrith-rao/beauty-saloon',
    demo: 'https://beauty-saloon.demo',
  },
]
