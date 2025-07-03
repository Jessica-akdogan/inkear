import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Loader } from "./components/ui/Spinner.tsx";

const helmetContext = {};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
