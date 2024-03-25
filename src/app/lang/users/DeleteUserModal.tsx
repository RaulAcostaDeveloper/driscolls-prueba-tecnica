import { deleteUserById, getUserById } from "@/data/users"
import { useEffect, useState } from "react"

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
    return (
        <div className="containerDeleteUserModal">
            <div className="inner">
                <h3>¿You want to delete the user "{ userName }"?</h3>
                <div className="containerButtons">
                    <button className="yesButton" onClick={ () => handleYes() }>Yes</button>
                    <button className="noButton" onClick={ () => setIsOpenDeleteUserModal(false) }>No</button>
                </div>
            </div>
        </div>
    )
}