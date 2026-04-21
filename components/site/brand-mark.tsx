type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect width="64" height="64" rx="18" fill="#0D2A52" />
      <path
        d="M19 17.5C19 15.8431 20.3431 14.5 22 14.5H37.4L45 22.2V46.5C45 48.1569 43.6569 49.5 42 49.5H22C20.3431 49.5 19 48.1569 19 46.5V17.5Z"
        fill="white"
      />
      <path d="M37 14.5V22.5H45" fill="#DCE7F8" />
      <path
        d="M26 27.5H38"
        stroke="#0D2A52"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M26 33H38"
        stroke="#0D2A52"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M26 38.5H33.5"
        stroke="#0D2A52"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M41.5 45.5C37.3 45.5 34 42.2 34 38C34 33.8 37.3 30.5 41.5 30.5C45.7 30.5 49 33.8 49 38C49 42.2 45.7 45.5 41.5 45.5Z"
        fill="#F4A43A"
        stroke="#0D2A52"
        strokeWidth="2.5"
      />
      <path
        d="M41.5 34.5V38L44 39.5"
        stroke="#0D2A52"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
