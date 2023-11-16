/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    colors: {
      "fondo": "#060B27",
      "primary": "#7235EC",
      "navBarColor": "#e3f2fd",
      "btm-color": "#5E17EB",
      "border-color": "#bdc4c7",
      "color-icon-web": "#EFEAFF",
      "color-icon-branding": "#DAE6FF",
      "color-icon-movil": "#FFE5DA",
      "bg-contact": "#E8F4FA",
      "bg-btn-whatsapp": "#00bb2d",
      "happy-bg": "#08D3BB",
      "happy-bg1": "#1090CB",
      "happy-bg2": "#9208D3",
      "red-color": "#DC2626"


    },
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      Hero: "url('assets/fondohome.jpg')",
    },
  },
  plugins: [],
};
