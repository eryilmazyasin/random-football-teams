import "<src>/styles/globals.css";
import type { AppProps } from "next/app";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
