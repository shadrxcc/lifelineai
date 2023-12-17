import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.tsx";
import { BrowserRouter } from "react-router-dom";
import ConversationProvider from "./context/conversationcontext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ConversationProvider>
          <Toaster />
          <App />
        </ConversationProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
