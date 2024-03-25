// NOTA: se podría usar la librería next-i18next en caso de querer una traducción más global
// También se puede usar un CMS para almacenar traducciones

export type StringMap = {
    [key: string]: string;
};
export const spanishCopys: StringMap = {
    CLOSE: 'Cerrar',
    CREATE_USER: 'Crear un nuevo usuario',
    DELETE_USER: 'Eliminar usuario',
    EDIT_AN_USER: 'Eliminar un usuario',
    EDIT_USER: 'Editar usuario',
    NAME: 'Nombre del usuario',
    NEWS_MODULE: 'Módulo de noticias',
    NEWS: 'Noticias',
    NOT: 'NO',
    OPEN_MENU: 'Abrir menú',
    PLEASE_PROVIDE_NAME: 'Por favor escribe un nombre',
    SELECT_MODULE: 'Seleccionar módulo',
    USERS_MODULE: 'Módulo de usuarios',
    USERS: 'Usuarios',
    VIEW_NEW: 'Ver noticia',
    VIEW_USER: 'Ver usuario',
    WANT_TO_DELETE: 'Quieres eliminar al usuario ',
    YES: 'SI',
    USER_DETAILS: 'Detalle del usuario',
    PUB_DATE: 'Fecha de publicación',
    SHOW_MORE: 'Mostrar más',
    HIDE_INFO: 'Ocultar información',
}
export const englishCopys: StringMap = {
    CLOSE: 'Close',
    CREATE_USER: 'Create a new user',
    DELETE_USER: 'Delete user',
    EDIT_AN_USER: 'Edit an user',
    EDIT_USER: 'Edit user',
    NAME: 'User name',
    NEWS_MODULE: 'News module',
    NEWS: 'News',
    NOT: 'NOT',
    OPEN_MENU: 'Open menu',
    PLEASE_PROVIDE_NAME: 'Please provide a name',
    SELECT_MODULE: 'Select module',
    USERS_MODULE: 'Users module',
    USERS: 'Users',
    VIEW_NEW: 'View new',
    VIEW_USER: 'View user',
    WANT_TO_DELETE: 'You want to delete the user',
    YES: 'YES',
    USER_DETAILS: 'User details',
    PUB_DATE: 'Publication date',
    SHOW_MORE: 'Show more',
    HIDE_INFO: 'Hide info',
}