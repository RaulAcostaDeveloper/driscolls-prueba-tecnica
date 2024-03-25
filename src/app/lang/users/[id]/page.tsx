'use client'
import { ErrorScreen } from "@/app/Components/ErrorScreen";
import { User, getUserById } from "@/data/users";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function UserPage({...props}) {
    const [user, setUser] = useState<User>();

    useEffect(()=>{
        const { id } = props.params;        
        const userData = getUserById(Number(id));
        setUser(userData);
    },[]);
    
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
                            <button className="buttonForSomething">User details</button>
                        </div>
                    </div>
                </>
                :
                <ErrorScreen errorName={ 'User not found' }/>
            }
        </div>
    )
}
