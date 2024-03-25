'use client'

import { useEffect, useState } from "react";
import { englishCopys, spanishCopys } from "../constants/copys";
import { createContext } from "vm";

type StringMap = {
  [key: string]: string;
};

export const LanguageContext = createContext();
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  // Manejo del lenguaje (En este caso solo 2 así que se puede usar un toggle)
  const [english, setEnglish] = useState(true); // Podría soportar más lenguajes
  const [copyData, setCopyData] = useState<StringMap>();

  useEffect(()=>{
    if (english) {
      setCopyData(englishCopys);
    } else {
      setCopyData(spanishCopys);
    }
  },[english]);

  return (
    <LanguageContext.Provider value = {{ copyData }}>
      {/* <button title="Change language">lang</button> */}
      {children}
    </LanguageContext.Provider>
  );
}