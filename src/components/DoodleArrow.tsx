
const DoodleArrow = () => {
  return (
    <div className="absolute -right-8 top-8 transform rotate-45 animate-bounce hidden md:block">
      <svg
        width="120"
        height="100"
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-rose-600"
      >
        {/* Hand-drawn style curved arrow pointing down and left */}
        <path
          d="M95 25C85 35 75 45 65 50C55 55 45 58 35 62C32 63 29 64 26 66"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="4,3"
          className="animate-pulse"
        />
        {/* Arrow head pointing toward button */}
        <path
          d="M30 60L20 70L28 72L24 68"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Decorative dots */}
        <circle cx="85" cy="30" r="2" fill="currentColor" className="animate-pulse" />
        <circle cx="50" cy="20" r="1.5" fill="currentColor" className="animate-pulse delay-500" />
      </svg>
      <div className="absolute -top-4 right-8 text-rose-600 font-playful text-base font-bold animate-pulse transform rotate-12">
        Join here!
      </div>
    </div>
  );
};

export default DoodleArrow;
