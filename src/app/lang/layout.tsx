'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { englishCopys, spanishCopys } from "../constants/copys";

type StringMap = {
  [key: string]: string;
};

const MyContext = createContext(false);

export const useMyContext = () => useContext(MyContext);

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  // Manejo del lenguaje (En este caso solo 2 así que se puede usar un toggle)
  const [english, setEnglish] = useState(true); // Podría soportar más lenguajes
  return (
    <MyContext.Provider value = { english }>
      {/* <button title="Change language">lang</button> */}
      {children}
    </MyContext.Provider>
  );
}
