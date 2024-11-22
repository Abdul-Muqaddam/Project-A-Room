/** @type {import('tailwindcss').Config} */
export const content = ["./Actual_code/**/*.{html,js}"];
export const theme = {
  extend: {
    screens: {
      "mq-950": { max: "950px" },
      "mq-750": { max: "750px" },
      "mq-1050": { max: "1050px" },
      "mq-500": { max: "500px" },
      "mq-600": { max: "600px" },
      "mq-1130": { max: "1130px" },
      "mq-1060": { max: "1060px" },
      "mq-360": { max: "360px" }
    }
  },
};
export const plugins = [];

