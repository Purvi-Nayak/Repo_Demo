import React from "react";
import { createContext } from "react";
export const AppContext = createContext();
const ContexProvider = (props) => {
  const phone = "3456789076";
  return (
    <div>
      <AppContext.Provider value={phone}>{props.childeren}</AppContext.Provider>
    </div>
  );
};

export default ContexProvider;