import { LanguageContext } from "@/app/languageController";
import { deleteUserById, getUserById } from "@/data/users"
import { useContext, useEffect, useState } from "react"

type Props = {
    deletingId: number|null,
    setIsOpenDeleteUserModal: (toggle: boolean) => void,
}

export const DeleteUserModal = ({ deletingId, setIsOpenDeleteUserModal }: Props) => {
    const [userName, setUserName] = useState('');

    useEffect(()=>{
        if (deletingId != null) {
            setUserName(getUserById(deletingId).name);
        }
    },[deletingId]);

    const handleYes = ()=> {
        if (deletingId != null) {
            deleteUserById(deletingId);
            setIsOpenDeleteUserModal(false);
        } else {
            console.error('handleYes: Cant delete the user with the id: ' + deletingId);
        }
    }
    // @ts-ignore
    const { language } = useContext(LanguageContext);
    return (
        <div className="containerDeleteUserModal">
            <div className="inner">
                <h3>¿{ language.WANT_TO_DELETE }{ userName }?</h3>
                <div className="containerButtons">
                    <button className="yesButton" onClick={ () => handleYes() }>{ language.YES }</button>
                    <button className="noButton" onClick={ () => setIsOpenDeleteUserModal(false) }>{ language.NOT }</button>
                </div>
            </div>
        </div>
    )
}