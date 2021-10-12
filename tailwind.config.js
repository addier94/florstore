module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "s-body": "#ecf0f3",
        "s-gray": "#555",
        "s-gray2": "#aaa",
        "s-transparent": "#0007",
        "s-primary": "#02c8db",
      },
      boxShadow: {
        "s-btn-icon":
          "0px 0px 0px 5px #ecf0f3, 8px 8px 15px #a7aaaf, -8px -8px 15px #fff",
        "s-main": "-9px -9px 16px #f8fafe, 9px 9px 16px #ced2db",
        "s-input":
          "inset -4px -4px 8px #f0f3f9, inset 4px 4px 8px #ced2db, inset -1px -1px 4px #8e8e8e",
        "s-input2": "inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff",
        "s-input-hover": "-4px -4px 8px #f8fafe, 4px 4px 8px #ced2db",
        "s-btn": "3px 3px 8px #b1b1b1, -3px -3px 8px #fff",
      },
      borderRadius: {
        "s-sm": "40px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
