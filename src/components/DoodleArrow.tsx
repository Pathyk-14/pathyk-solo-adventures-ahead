
const DoodleArrow = () => {
  return (
    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 rotate-12 animate-bounce hidden md:block">
      <svg
        width="100"
        height="80"
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-teal-600"
      >
        {/* Hand-drawn style curved arrow */}
        <path
          d="M15 35C25 25 35 20 45 25C55 30 65 35 75 30C78 28 80 26 82 24"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="4,3"
          className="animate-pulse"
        />
        {/* Arrow head with hand-drawn feel */}
        <path
          d="M75 24L85 30L78 35L82 32"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Decorative dots */}
        <circle cx="20" cy="45" r="2" fill="currentColor" className="animate-pulse" />
        <circle cx="70" cy="15" r="1.5" fill="currentColor" className="animate-pulse delay-500" />
      </svg>
      <div className="absolute -bottom-8 right-2 text-teal-600 font-playful text-base font-bold animate-pulse transform -rotate-12">
        Join here!
      </div>
    </div>
  );
};

export default DoodleArrow;
