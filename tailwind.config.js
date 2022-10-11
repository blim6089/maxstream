module.exports = {
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans"],
        ubuntu: ["Ubuntu"],
      },
      boxShadow: {
        card: "0px 0px 12px rgba(34, 34, 34, 0.08)",
      },
      animation: {
        arrow: "bounce 1s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(8px)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["last"],
    },
  },
  plugins: [],
};
