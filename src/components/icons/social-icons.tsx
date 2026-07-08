import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="7.5" cy="7.2" r="1" fill="currentColor" />
      <path
        d="M11.5 16.5v-3.6c0-1.3.9-2.2 2.1-2.2s2 .9 2 2.2v3.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 4.5h3.6l4 5.6 4.6-5.6H19l-6 7.3 6.6 8.7h-3.6l-4.4-6-5 6H5l6.4-7.7L5 4.5Z"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="currentColor"
      />
    </svg>
  );
}
