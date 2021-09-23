import React from "react";
import Router from './routes'
import { UserContextProvider } from "./contexts/usercontext";
function App() {
  
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  )

}

export default App;
