'use client'
import { getUsers } from "@/data/users";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { UserForm } from "./UserForm";
import { DeleteUserModal } from "./DeleteUserModal";

export default function UsersPage() {
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState<number|null>(null);
    const [deletingId, setDeletingId] = useState<number|null>(null);
    const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false);
    const users = getUsers();

    const handleClickCreateNewUser = () => {
        setShowForm(true);
        setEditingId(null);
    }
    const handleClickEditUser = (id: number) => {
        setShowForm(true);
        setEditingId(id);
    }

    const handleClickDeleteUser = (id: number) => {
        setIsOpenDeleteUserModal(true);
        setDeletingId(id);
    }
    
    return (
        <div className="UsersPage">
            <h1>Users page</h1>
            <div className="newStyleTableContainer">
                <div className="innerNewStyleTable">
                    <div className="inner">
                        <button className="createNewUserButton" onClick={ () => handleClickCreateNewUser() }>Create a new user</button>
                        { users.map( (user, index) => 
                            <div className="userInner" key={index}>
                                <Image className="userImage" src={user.srcImage} alt="user image" width={50} height={50}/>
                                <div className="leftSection">
                                    <div>
                                        <div className="name">{user.name}</div>
                                        <div>
                                            <button className="buttonColumn" title="Edit user" onClick={ () => handleClickEditUser(user.id) }>
                                                <Image src={'/icons/edit.png'} alt="Edit icon" width={30} height={30}/>
                                            </button>
                                            <Link  className="buttonColumn" href={'/lang/users/' + user.id} title="View user">
                                                <Image src={'/icons/goTo.png'} alt="View icon" width={30} height={30}/>
                                            </Link>
                                            <button className="buttonColumn" title="Delete user" onClick={ () => handleClickDeleteUser(user.id) }>
                                                <Image src={'/icons/delete.png'} alt="Delete icon" width={30} height={30}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            { showForm &&
                <UserForm setShowForm = { setShowForm } editingId = { editingId }/>
            }
            { isOpenDeleteUserModal && 
                <DeleteUserModal deletingId = { deletingId } setIsOpenDeleteUserModal = { setIsOpenDeleteUserModal }/>
            }
        </div>
    )
}