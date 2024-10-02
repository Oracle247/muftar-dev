/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px", // Custom screen size
      },
      backgroundImage: {
        "auth-bg": "url('/public/images/auth-bg.svg')",
        "login-bg": "url('/public/images/login-bg.svg')",
        "signup-bg": "url('/public/images/signup-bg.svg')",
      },
      boxShadow: {
        "custom-focus": "Shadow/xs focused 4px primary-100",
        "custom-shadow-100":
          "  0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
        "custom-shadow-3xl": "0px 32px 64px -12px #10182824",
        "custom-shadow-sm":
          "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A",
        "custom-shadow-lg":
          " 0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
      },
      colors: {
        "app-gray-100": "#101828",
        "app-gray-200": "#475467",
        "app-gray-300": "#344054",
        "app-gray-400": "#1D2939",
        "app-gray-500": "#1D2939",
        "app-gray-600": "#F8FAFA",
        "app-gray-700": "#F9FAFB",
        "app-gray-800": "#F3F4F6",
        "app-gary-900": "#1F2937",
        "app-gray-1000": "#CECECE",
        "app-gray-1100": "#D0D5DD",
        "app-gray-placeholder": "#667085",
        "app-blue-100": "#3A54B4",
        "app-blue-100-10%": "#3A54B4B2",
        "app-blue-200": "#175CD3",
        "app-blue-500": "#2E438F",
        "app-blue-300": "#EFF8FF",
        "app-blue-400": "#E4E8F6",
        "app-border": "#EAECF0",
        "app-gray-bg": "#F2F4F7",
        "black-rgba": "rgba(11,20,26, 0.95)",
        "app-error": "#B42318",
        "muftar-gray-25": "#FCFCFD",
        "muftar-gray-50": "#F9FAFB",
        "muftar-gray-100": "#F2F4F7",
        "muftar-gray-200": "#EAECF0",
        "muftar-gray-300": "#D0D5DD",
        "muftar-gray-400": "#98A2B3",
        "muftar-gray-500": "#667085",
        "muftar-gray-600": "#475467",
        "muftar-gray-700": "#344054",
        "muftar-gray-800": "#1D2939",
        "muftar-gray-900": "#101828",
        "muftar-blue-light-50": "#F0F9FF",
        // "muftar-blue-light-100": "",
        // "muftar-blue-light-200": "",
        // "muftar-blue-light-300": "",
        // "muftar-blue-light-400": "",
        // "muftar-blue-light-500": "",
        // "muftar-blue-light-600": "",
        "muftar-blue-light-700": "#026AA2",
        // "muftar-blue-light-800": "",
        // "muftar-blue-light-900": "",
        // "muftar-blue-100": "",
        // "muftar-blue-200": "",
        // "muftar-blue-300": "",
        // "muftar-blue-400": "",
        // "muftar-blue-500": "",
        // "muftar-blue-700": "",
        // "muftar-blue-700": "",
        // "muftar-blue-800": "",
        "muftar-pri-50": "#E4E9F7",
        "muftar-border": "#E4E8F6",
        "muftar-brown-100": "#F59C42",
        "muftar-error-25": "#FFFBFA",
        "muftar-error-50": "#FEF3F2",
        "muftar-error-300": "#FDA29B",
        "muftar-error-600": "#D92D20",
        "muftar-error-700": "#B42318",
        "muftar-success-25": "#F6FEF9",
        "muftar-success-50": "#ECFDF3",
        "muftar-success-300": "#6CE9A6",
        "muftar-success-700": "#027A48",
        "muftar-warning-50": "#FFFAEB",
        "muftar-warning-700": "#B54708",
        "muftar-blue-50": "#EFF8FF",
        "muftar-blue-700": "#175CD3",
      },
      fontSize: {
        "app-xl": [
          "20px",
          {
            lineHeight: "30px",
          },
        ],
        "app-3xl": [
          "30px",
          {
            lineHeight: "38px",
          },
        ],
        "app-5xl": [
          "48px",
          {
            lineHeight: "60px",
          },
        ],
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
