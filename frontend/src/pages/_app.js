import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { GlobalStyle, theme, } from "@/config/styles";
import store from "@/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}
