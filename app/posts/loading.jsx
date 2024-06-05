import React from 'react'

const Spinner = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-10 w-10 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.86 0-7.27-1.653-9.697-4.299l1.414-1.414z"
            ></path>
          </svg>
          <h2 className="ml-2 text-2xl text-gray-500">Loading...</h2>
        </div>
      </div>
    </section>
  );
};

export default Spinner;
