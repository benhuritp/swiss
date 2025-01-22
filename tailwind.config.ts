import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "1200": "1200px",
      },
   
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        lg: "0"
      },
      screens: {
        lg: "1200px",
        DEFAULT: "1200px"
      }
    },
    fontFamily:{
      ibmPlexSans: ["var(--ibm-plex-sans)"],
      spaceGrotesk: ["var(--space-grotesk)"],
    },
    fontSize: {
      "body-mediun": ["18px", {
        lineHeight: "24px",
        fontWeight:500
      }],
      "body-regular": ["18px", {
        lineHeight: "24px"
      }],
      "body-small": ["16px", {
        lineHeight: "20px"
      }],
      "heading1": ["56px", {
        lineHeight: "72px",
        fontWeight:700
      }],
      "heading2Bold": ["25px", {
        lineHeight: "32px",
        fontWeight:700
      }],
      "Heading2Medium": ["25px", {
        lineHeight: "32px",
        fontWeight:500
      }],
      "subheadingRegular": ["20px", {
        lineHeight: "28px",
      }],
      "buttonText": ["18px", {
        lineHeight: "24px",
        fontWeight:700,
        
      }]
    },
    colors:{
      "secondary":"hsl(var(--color-secondary))",
      "brand-dark":"hsl(var(--color-brand-dark))",
      "white":"hsl(var(--color-white))",
      "tier1":"hsl(var(--color-tier1))",
      "brand":"hsl(var(--color-brand))",
      "tier3":"hsl(var(--color-tier3))",
      "tier4":"hsl(var(--color-tier4))"
    },
    minHeight:{
      "header": "var(--header-height)"
    }
  },
  plugins: [],
} satisfies Config;
