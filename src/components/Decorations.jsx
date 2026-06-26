export const LeafTopRight = ({ className = "" }) => (
  <svg
    className={`absolute top-0 right-0 w-32 md:w-48 lg:w-64 h-auto text-green/5 pointer-events-none ${className}`}
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M100 0C100 55.228 55.228 100 0 100V0H100Z" />
  </svg>
);

export const LeafBottomLeft = ({ className = "" }) => (
  <svg
    className={`absolute bottom-0 left-0 w-32 md:w-48 lg:w-64 h-auto text-green/5 pointer-events-none ${className}`}
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 100C0 44.772 44.772 0 100 0V100H0Z" />
  </svg>
);

export const AbstractYogaShape = ({ className = "" }) => (
  <svg
    className={`absolute w-64 md:w-96 lg:w-[500px] h-auto text-gold/5 pointer-events-none ${className}`}
    viewBox="0 0 200 200"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M100 0C155.228 0 200 44.772 200 100C200 155.228 155.228 200 100 200C44.772 200 0 155.228 0 100C0 44.772 44.772 0 100 0Z" opacity="0.5" />
    <circle cx="150" cy="50" r="30" opacity="0.3" />
  </svg>
);

export const AbstractFlowLines = ({ className = "" }) => (
  <svg
    className={`absolute w-64 md:w-96 h-auto text-navy/5 pointer-events-none ${className}`}
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 100C50 100 50 50 100 50C150 50 150 150 200 150" />
    <path d="M0 120C50 120 50 70 100 70C150 70 150 170 200 170" opacity="0.6" />
    <path d="M0 140C50 140 50 90 100 90C150 90 150 190 200 190" opacity="0.3" />
  </svg>
);
