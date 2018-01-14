import React from 'react';

export const Preloader = () => (
  <svg
    viewBox="0 0 100 100"
    width="20px"
    height="20px"
    style={{ marginRight: 5 + 'px' }}
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#bcbcbc"
      stroke-width="13"
      r="35"
      stroke-dasharray="165 40"
      transform="rotate(200 50 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        calcMode="linear"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
        dur="2s"
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);
export default Preloader;
