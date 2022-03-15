export const ArrowLeft = () => {
  return (
    <svg
      style={{
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
      }}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
};

export const ArrowRight = () => {
  return (
    <svg
      style={{
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
      }}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
};
