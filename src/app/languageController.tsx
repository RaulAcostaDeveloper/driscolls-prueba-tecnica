'use client'
import { createContext, useEffect, useState } from "react";
import { StringMap, englishCopys, spanishCopys } from "./constants/copys";
import Image from "next/image";
// @ts-ignore
export const LanguageContext = createContext();
export const LanguageController = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const [english, setEnglish] = useState(false);
    const [language, setLanguage ] = useState<StringMap>(englishCopys);

    useEffect(()=>{
        if (english) {
            setLanguage(englishCopys);
        } else {
            setLanguage(spanishCopys);
        }
    },[english]);

    return (
        <LanguageContext.Provider value = {{ language }}>
            <button className="languageButton" onClick={ ()=> setEnglish(!english) }>
                <Image src={'/icons/language.png'} alt="language icon" width={32} height={32}/>
                { english ? <span>Español</span> : <span>English</span> }
            </button>
            {children}
        </LanguageContext.Provider>
    )
}