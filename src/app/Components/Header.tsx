'use client'
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { LanguageContext } from "../languageController";

export const Header = ()=> {
    const [open, setOpen] = useState(false);
    // @ts-ignore
    const { language } = useContext(LanguageContext);
    return (
        <div className="HeaderContainer">
            <div className="Header">
                <button className="buttonMenu" onClick={ ()=> setOpen(!open) }>
                    <Image src={'/icons/menu.png'} alt="menu icon" width={30} height={30}/>
                </button>
                <div className="imgContainer">
                    <Image className="headerImg" src={'/images/logo.png'} alt="Logo driscolls" width={300} height={91}/>
                </div>
                { open &&
                    <div className="menuScreen" onClick={ ()=> setOpen(false) }>
                        <div className="inner">
                            <div className="header">
                                <Image src={'/images/straw.png'} alt="strawberry" width={40} height={40}/>
                                <h3>{ language.SELECT_MODULE }</h3>
                            </div>
                            <Link className="section" href={'/lang/users'}>
                                <Image src={'/icons/user.png'} alt="user" width={30} height={30}/>
                                { language.USERS }
                            </Link>
                            <Link className="section" href={'/lang/news'}>
                                <Image src={'/icons/news.png'} alt="strawberry" width={30} height={30}/>
                                { language.NEWS }
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}