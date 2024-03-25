import { LanguageContext } from "@/app/languageController";
import { addUser, editUserById, getUserById, getUsers } from "@/data/users";
import { useContext, useEffect, useState } from "react";

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
    // @ts-ignore
    const { language } = useContext(LanguageContext);
    return (
        <div className="userForm">
            <div className="inner">
                <button className="buttonClose" onClick={ () => setShowForm(false) }>X</button>
                { editingId != null ? 
                    <h3>{ language.EDIT_AN_USER}</h3>
                    :
                    <h3>{ language.CREATE_USER }</h3>
                }
                <div className="form">
                    <h4>{ language.NAME }</h4>
                    <input
                        type="text"
                        placeholder={language.PLEASE_PROVIDE_NAME }
                        value={ nameForm }
                        onChange={ (e) => setNameForm(e.target.value) }/>
                    { nameError && <p className="error">{ language.PLEASE_PROVIDE_NAME }</p>}
                </div>
                <div className="containerButton">
                    { editingId != null ? 
                        <button onClick={ () => handleEditUser() } disabled = { nameError? true : false }>{ language.EDIT_USER }</button>
                        :
                        <button onClick={ () => handleCreateUser() } disabled = { nameError? true : false }>{ language.CREATE_USER }</button>
                    }
                </div>
            </div>
        </div>
    )
}