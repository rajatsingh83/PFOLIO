/* Lightweight SVG icon library — stroke-based, currentColor */
const Icon = ({ children, size = 18, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
       viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </svg>
);

const Icons = {
  Github: (p) => <Icon {...p}><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/></Icon>,
  Linkedin: (p) => <Icon {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0 -4 0v7h-4v-7a6 6 0 0 1 6 -6z"/><rect x="2" y="9" width="4" height="12" rx="0"/><circle cx="4" cy="4" r="2"/></Icon>,
  Mail: (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6l9 -6"/></Icon>,
  Phone: (p) => <Icon {...p}><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2A16 16 0 0 1 3 6a2 2 0 0 1 2 -2"/></Icon>,
  MapPin: (p) => <Icon {...p}><path d="M12 21s-8 -7 -8 -12a8 8 0 0 1 16 0c0 5 -8 12 -8 12z"/><circle cx="12" cy="9" r="3"/></Icon>,
  Download: (p) => <Icon {...p}><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><polyline points="7 11 12 16 17 11"/><line x1="12" y1="4" x2="12" y2="16"/></Icon>,
  ExternalLink: (p) => <Icon {...p}><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2V8a2 2 0 0 1 2 -2h6"/></Icon>,
  ArrowRight: (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Icon>,
  ArrowUp: (p) => <Icon {...p}><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></Icon>,
  Sparkles: (p) => <Icon {...p}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5 -4.5L6 9l4.5 -1.5z"/><path d="M19 15l.7 2.3L22 18l-2.3 .7L19 21l-.7 -2.3L16 18l2.3 -.7z"/></Icon>,
  Sun: (p) => <Icon {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4 -1.4M17.7 6.3l1.4 -1.4"/></Icon>,
  Moon: (p) => <Icon {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></Icon>,
  Menu: (p) => <Icon {...p}><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></Icon>,
  X: (p) => <Icon {...p}><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></Icon>,
  Code: (p) => <Icon {...p}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></Icon>,
  Database: (p) => <Icon {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></Icon>,
  Terminal: (p) => <Icon {...p}><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></Icon>,
  Brain: (p) => <Icon {...p}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15A2.5 2.5 0 0 1 9.5 22A2.5 2.5 0 0 1 7 19.5a2.5 2.5 0 0 1 -2 -2.5a2.5 2.5 0 0 1 -.5 -4.9A2.5 2.5 0 0 1 4.5 8a2.5 2.5 0 0 1 2 -4A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 17 19.5a2.5 2.5 0 0 0 2 -2.5a2.5 2.5 0 0 0 .5 -4.9A2.5 2.5 0 0 0 19.5 8a2.5 2.5 0 0 0 -2 -4A2.5 2.5 0 0 0 14.5 2z"/></Icon>,
  Trophy: (p) => <Icon {...p}><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1 -10 0z"/><path d="M17 4h3v3a3 3 0 0 1 -3 3"/><path d="M7 4h-3v3a3 3 0 0 0 3 3"/></Icon>,
  Award: (p) => <Icon {...p}><circle cx="12" cy="8" r="6"/><path d="M15.5 12.5L17 22l-5 -3l-5 3l1.5 -9.5"/></Icon>,
  Briefcase: (p) => <Icon {...p}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></Icon>,
  Cap: (p) => <Icon {...p}><path d="M2 9l10 -4l10 4l-10 4z"/><path d="M6 11v4c3 2 9 2 12 0v-4"/></Icon>,
  Send: (p) => <Icon {...p}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></Icon>,
  Check: (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>,
  Tool: (p) => <Icon {...p}><path d="M14.7 6.3a5 5 0 0 0 -6.4 6.4l-6 6l2 2l6 -6a5 5 0 0 0 6.4 -6.4l-3 3l-2.4 -.6l-.6 -2.4z"/></Icon>,
  Layers: (p) => <Icon {...p}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></Icon>,
  Server: (p) => <Icon {...p}><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><line x1="6" y1="6.5" x2="6.01" y2="6.5"/><line x1="6" y1="17.5" x2="6.01" y2="17.5"/></Icon>,
  Cpu: (p) => <Icon {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="15" x2="22" y2="15"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="15" x2="4" y2="15"/></Icon>,
};

window.Icons = Icons;
