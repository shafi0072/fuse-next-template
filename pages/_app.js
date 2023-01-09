import React from "react";
import "../styles/globals.css";
import "../styles/app-base.css";
import "../styles/app-components.css";
import "../styles/app-utilities.css";
import "../styles/print.css";
import "../styles/prism.css";
import "../styles/tables.css";
import "../public/assets/tailwind-base.css";
import '../public/assets/fonts/inter/inter.css'
import '../public/assets/fonts/material-design-icons/MaterialIcons.css'
import '../public/assets/fonts/material-design-icons/MaterialIconsOutlined.css'
import '../public/assets/fonts/material-design-icons/MaterialIconsRound.css'
import '../public/assets/fonts/material-design-icons/MaterialIconsSharp.css'
import '../public/assets/fonts/material-design-icons/MaterialIconsTwoTone.css'
import { ThemeProvider } from "@mui/material";
import themeConfig from "../src/config/themeConfig";
import Layout from "../src/components/layout";
// import { Provider } from "react-redux";
// import store from '../src/store'
export default function App({ Component, pageProps }) {
  return (
 
    <ThemeProvider theme={themeConfig}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  
  );
}
