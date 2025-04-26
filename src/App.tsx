import React from "react";
import { Router } from "./core";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { NuqsAdapter } from "nuqs/adapters/react";
import { Toaster } from "./components/ui/sonner";
import { PersistGate } from "redux-persist/integration/react";

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <NuqsAdapter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
        <Toaster />
      </Provider>
    </NuqsAdapter>
  );
};
