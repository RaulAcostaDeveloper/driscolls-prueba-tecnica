'use client'
import { ErrorScreen } from "@/app/Components/ErrorScreen";
import { User, getUserById } from "@/data/users";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { LanguageContext } from "@/app/languageController";

interface DynamicRouteProps {
    id: string;
}
type Props = {
    params: DynamicRouteProps
}
export default function UserPage({ params }: Props) {
    const [user, setUser] = useState<User>();
    const [openDetails, setOpenDetail] = useState(false);

    useEffect(()=>{
        const { id } = params;
        const userData = getUserById(Number(id));
        setUser(userData);
    },[]);

    // @ts-ignore
    const { language } = useContext(LanguageContext);
    return (
        <div className="UserPage">
            <div className="portadaContainer">
                <Image src={'/images/portada.png'} alt="portada driscolls" width={1500} height={665}/>
            </div>
            { user ? 
                <>
                    <div className="fotoContainer">
                        <Image src={user.srcImage} alt="portada driscolls" width={100} height={100}/>
                        <h2>{ user.name }</h2>
                    </div>
                    <div className="details">
                        <div className="inner">
                            <button className="buttonForSomething" onClick={ ()=> setOpenDetail(!openDetails) }>{ language.USER_DETAILS }</button>
                            { openDetails &&
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Dolorem molestiae ipsa, deleniti voluptates nesciunt nobis. 
                                    Molestiae, provident. Cumque nam inventore velit laborum? 
                                    Suscipit delectus placeat tempora quibusdam quis deleniti aliquam?</p>
                            }
                        </div>
                    </div>
                </>
                :
                <ErrorScreen errorName={ 'User not found' }/>
            }
        </div>
    )
}
