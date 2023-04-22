import "<src>/styles/globals.css";
import type { AppProps } from "next/app";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { GlobalStateProvider } from "<src>/contexts/GlobalStateProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
}
