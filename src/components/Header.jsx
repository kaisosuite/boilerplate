import { useState, useEffect } from 'react';

export default function Header({}) {
  const [symbolColour, setSymbolColour] = useState('');
  const [backgroundColour, setBackgroundColour] = useState('');

  const logoTheme = async () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setSymbolColour('#1F293B');
      setBackgroundColour('#ffffff');
    } else {
      setSymbolColour('#D7DBE1');
      setBackgroundColour('#1F293B');
    }
  };

  useEffect(() => {
    logoTheme();
  }, []);
  return (
    <div className="p-5 flex flex-row justify-between items-center gap-5 mg:w-3/5 lg:w-5/12 w-11/12 m-2">
      <svg
        width="50"
        height="50"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="250" cy="250" r="250" fill={backgroundColour} />
        <path
          d="M167.192 329.165C172.984 326.371 179.349 325.076 185.039 322.115C190.184 319.438 193.996 315.363 196.915 310.322C201.654 302.14 207.464 291.102 207.486 281.341C207.515 267.784 195.299 257.712 199.525 243.572C203.402 230.6 216.188 225.586 225.116 217.015C232.697 209.738 234.811 197.97 237.062 187.998C240.19 174.145 241.016 159.719 244.268 146"
          stroke={symbolColour}
          stroke-width="30"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M212.121 339.52C217.913 336.726 224.278 335.431 229.968 332.47C235.113 329.794 238.925 325.718 241.844 320.677C246.583 312.495 252.393 301.457 252.415 291.696C252.444 278.14 240.228 268.067 244.454 253.928C248.331 240.955 261.117 235.941 270.045 227.37C277.626 220.093 279.74 208.325 281.991 198.353C285.119 184.501 285.945 170.074 289.197 156.355"
          stroke={symbolColour}
          stroke-width="30"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M255.211 353.696C261 350.903 267.365 349.608 273.053 346.648C278.195 343.972 282.001 339.897 284.913 334.859C289.638 326.679 295.431 315.645 295.434 305.889C295.439 292.337 283.199 282.27 287.401 268.136C291.256 255.169 304.039 250.156 312.955 241.587C320.526 234.312 322.62 222.549 324.854 212.581C327.957 198.734 328.758 184.313 331.985 170.6"
          stroke={symbolColour}
          stroke-width="30"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-lg weight font-semibold dark:text-white">Example</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">A Kaiso Service</span>
      </div>
    </div>
  );
}
