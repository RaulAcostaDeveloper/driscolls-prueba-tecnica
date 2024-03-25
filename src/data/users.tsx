// Los mensajes de error los puse en inglés
export interface User {
    readonly id: number,
    name: string,
    srcImage: string,
    // el modelo podría soportar más tipos de datos
}

const users: User[] = [];

export const addUser  = (dataUser: User): void => {
    users.push(dataUser);
}

export const getUsers = (): User[] => {
    return users;
}

export const getUserById = (id: number): User => {
    const user = users.filter(user => user.id === id);    
    return user[0];
}

export const deleteUserById = (id: number): void => {
    const indexUser = getIdUser(id);    
    if (indexUser != -1) {
        users.splice(indexUser, 1);
    } else {
        console.error('deleteUserById: Cant find user with the id: ', id);
    }
}

export const editUserById = (id: number, name: string): void => {
    const indexUser = getIdUser(id);
    if (indexUser != -1) {
        users[indexUser] = {
            id,
            name,
            srcImage: users[indexUser].srcImage,
        };
    } else {
        console.error('editUserById: Cant find user with the id: ', id)
        
    }
} 

const getIdUser = (id: number): number => {
    const isUser = (element: User) => element.id === id;
    return users.findIndex(isUser);
}
// -----------
// Inicialización para mostrar usuarios al inicio de la aplicación
( () => {
    for (let index = 0; index < 5; index++) {
        addUser({
            id: index,
            name: 'User name ' + index,
            srcImage: `${ index % 2 === 0 ? '/images/user2.png': '/images/user1.png'}`,
        })
    }
} )();