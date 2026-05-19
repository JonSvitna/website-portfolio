export function SkylineSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        fillOpacity="0.92"
        d="M0 220V140l40-8 28 18 32-24 44 14 36-30 52 22 48-36 60 28 44-20 56 34 40-26 72 40 64-44 80 52 72-38 96 46 88-50 120 58 100-42 140 48 120-36 180 52V220H0Z"
      />
    </svg>
  );
}
