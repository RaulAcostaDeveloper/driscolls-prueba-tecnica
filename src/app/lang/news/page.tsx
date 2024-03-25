'use client'
import { LanguageContext } from "@/app/languageController";
import { getNews } from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function NewsPage() {
    const news = getNews();
    // @ts-ignore
    const { language } = useContext(LanguageContext);    
    return (
        <div className="NewsPage">
            <h1>{ language.NEWS_MODULE }</h1>
            <div className="newStyleTableContainer">
                <div className="innerNewStyleTable">
                    <div className="inner">
                        { news.map ( (newData, index)=>
                            <div className="userInner" key={index}>
                                <Image className="userImage" src={'/images/news.png'} alt="news image" width={50} height={50}/>
                                <div className="leftSection">
                                    <div>
                                        <div className="name">{newData.title}</div>
                                        <div>{newData.date}</div>
                                        <div>
                                            <Link className="buttonColumn" href={'/lang/news/' + newData.id} title={ language.VIEW_NEW }>
                                                <Image src={'/icons/goTo.png'} alt="View icon" width={30} height={30}/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}