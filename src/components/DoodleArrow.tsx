
const DoodleArrow = () => {
  return (
    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 rotate-12 animate-bounce hidden lg:block">
      <svg
        width="80"
        height="60"
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-pink-600"
      >
        {/* Curved arrow path */}
        <path
          d="M10 25C15 20 25 15 35 20C45 25 55 30 65 25"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="3,2"
          className="animate-pulse"
        />
        {/* Arrow head */}
        <path
          d="M60 20L68 25L60 30"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute -bottom-6 right-4 text-pink-600 font-playful text-sm font-medium animate-pulse">
        Sign up now!
      </div>
    </div>
  );
};

export default DoodleArrow;
