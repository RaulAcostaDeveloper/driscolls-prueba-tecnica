// Los mensajes de error los puse en inglés
export interface NewType {
    id: number,
    title: string,
    date: string,
    description: string,
    // el modelo podría soportar más tipos de datos
}

const news: NewType[] = [];

const addNew  = (dataNew: NewType): void => {
    news.push(dataNew);
}

export const getNews = (): NewType[] => {
    return news;
}

export const getNewById = (id: number): NewType => {
    const newInfo = news.filter(newData => newData.id === id);
    return newInfo[0];
}

// -----------
// Inicialización para mostrar news al inicio de la aplicación
const date = new Date();
( () => {
    for (let index = 0; index < 5; index++) {
        const today = date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear();
        addNew({
            id: index,
            title: 'News Title - ' + index,
            date: today,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere voluptates dolorum magnam! Sunt nesciunt laudantium nostrum quia. Quasi minima aspernatur modi officiis, sunt beatae? Veniam adipisci optio eligendi quos.'})
    }
} )();