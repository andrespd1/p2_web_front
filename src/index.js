import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import localeEnMessages from "./locales/en.json";
import localeEsMessages from "./locales/es.json";
import BandList from "./components/BandList";
import { IntlProvider } from "react-intl";
import BandDetail from "./components/BandDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function language(language) {
  if (navigator.language === "es-US") {
    return localeEsMessages;
  } else {
    return localeEnMessages;
  }
}

root.render(
  <IntlProvider
    locale={navigator.language}
    messages={language(navigator.language)}>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BandList />} />
        <Route path="/band/:idBand" element={<BandDetail />} />
      </Routes>
    </BrowserRouter>
  </IntlProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
