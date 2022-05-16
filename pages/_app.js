import * as React from "react";

import "../styles/globals.css";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
// import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
// import 'katex/dist/katex.min.css'



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;


// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-GJMWP982E6"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-GJMWP982E6');
// </script>