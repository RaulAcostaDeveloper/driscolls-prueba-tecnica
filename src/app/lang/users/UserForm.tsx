import { addUser, editUserById, getUserById, getUsers } from "@/data/users";
import { useEffect, useState } from "react";

type Props = {
    editingId: number|null,
    setShowForm: (toggle: boolean) => void,
}

export const UserForm = ({ setShowForm, editingId }: Props) => {
    const [nameForm, setNameForm] = useState('');
    const [nameError, setNameError] = useState(false);

    useEffect(()=>{
        if (editingId != null) {
            setNameForm(getUserById(editingId).name);
        }
    },[]);

    useEffect(()=>{
        if (nameForm.length <1) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    },[nameForm]);

    const handleCreateUser = () => {
        addUser({
            id: getUsers().length,
            name: nameForm,
            srcImage:`${ getUsers().length % 2 === 0 ? '/images/user2.png' : '/images/user1.png' }`
        });
        setShowForm(false);
    }

    const handleEditUser = () => {
        if (editingId != null) {
            editUserById(editingId, nameForm);
            setShowForm(false);
        } else {
            console.error('handleEditUser: Cant edit the user with the id: ' + editingId);
        }
    }

    return (
        <div className="userForm">
            <div className="inner">
                <button className="buttonClose" onClick={ () => setShowForm(false) }>X</button>
                { editingId != null ? 
                    <h3>Edit an user</h3>
                    :
                    <h3>Create new user</h3>
                }
                <div className="form">
                    <h4>Name</h4>
                    <input
                        type="text"
                        placeholder="User name"
                        value={ nameForm }
                        onChange={ (e) => setNameForm(e.target.value) }/>
                    { nameError && <p className="error">Please provide a name</p>}
                </div>
                <div className="containerButton">
                    { editingId != null ? 
                        <button onClick={ () => handleEditUser() } disabled = { nameError? true : false }>Edit user</button>
                        :
                        <button onClick={ () => handleCreateUser() } disabled = { nameError? true : false }>Create user</button>
                    }
                </div>
            </div>
        </div>
    )
}