'use client'
import { ErrorScreen } from "@/app/Components/ErrorScreen";
import { NewType, getNewById } from "@/data/news";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NewPage({...props}) {
    const [newData, setNewData] = useState<NewType>();
    const [showMore, setShowMore] = useState(false);

    useEffect(()=>{
        const { id } = props.params;        
        const data = getNewById(Number(id));
        setNewData(data);
    },[]);

    return (
        <div className="NewPage">
            <div className="portadaContainer">
                <Image src={'/images/portada2.png'} alt="portada driscolls" width={1500} height={665}/>
            </div>
            { newData ? 
                <div className="newsContainer">
                    <div className="newInside">
                        <div className="infoBlock">
                            <div className="title">
                                <h2>{ newData.title }</h2>
                            </div>
                            <div className="releaseDate">
                                <p>Release date: { newData.date }</p>
                            </div>
                            <div className="buttonContainer">
                                <button onClick={ () => setShowMore(!showMore) }>
                                    { showMore ? <span>Hide info</span>: <span>Show more</span> }
                                </button>
                            </div>
                            { showMore &&
                                <div className="moreInfo">
                                    <p>{ newData.description }</p>
                                </div>
                            }
                        </div>
                        <div className="imageBlock">
                            <Image src={'/images/newImage.png'} alt="portada driscolls" width={500} height={500}/>
                        </div>
                    </div>
                </div>
                :
                <ErrorScreen errorName={ 'New not found' }/>
            }
        </div>
    )
}