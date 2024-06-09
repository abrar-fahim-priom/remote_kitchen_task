import withMT from "@material-tailwind/html/utils/withMT";

const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('/bg.png')",
      },
    },
  },
};

export default withMT(tailwindConfig);
