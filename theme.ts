import {createSystem, defaultBaseConfig, defineConfig} from "@chakra-ui/react";

const config = defineConfig({
  cssVarsRoot: ":where(:root, :host)",
  cssVarsPrefix: "ck",
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
  theme: {
    tokens: {
      colors: {
        primary: {
          DEFAULT: { value: '#797ddb' },
          50: { value: '#f1f3fc'},
          100: { value: '#e5eafa' },
          200: { value: '#d0d7f5' },
          300: { value: '#b3bdee' },
          400: { value: '#949ce5' },
          500: { value: '#797ddb' },
          600: { value: '#645fcc' },
          700: { value: '#564fb3' },
          800: { value: '#464291' },
          900: { value: '#3d3b74' },
          950: { value: '#29274c' },
        }
      },
      fonts: {
        body: { value: "'Outfit Variable', system-ui, sans-serif" },
      }
    }
  }
})

export const system = createSystem(defaultBaseConfig, config)