import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, redirect } from "react-router-dom";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  ChakraProvider,
  ColorModeScript,
  createStandaloneToast,
} from "@chakra-ui/react";

import "./index.css";
import { printVersion } from "./utils/index.ts";
import { App } from "./App.tsx";
import { getAxiosErrorMessage } from "./lib/axios.ts";
import theme from "./theme/index.ts";

printVersion();

const { ToastContainer, toast } = createStandaloneToast({
  theme,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
  queryCache: new QueryCache({
    onError: (err, query) => {
      const { errorMessage, redirectPath } =
        (query?.meta as Partial<{
          errorMessage: string;
          redirectPath: string;
        }>) || {};

      const message = errorMessage || getAxiosErrorMessage(err);

      toast({
        title: typeof message === "string" ? message : "Error",
        description: err?.message,
        status: "error",
        isClosable: true,
      });

      if (redirectPath) {
        redirect(redirectPath);
      }
    },
  }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ToastContainer />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
