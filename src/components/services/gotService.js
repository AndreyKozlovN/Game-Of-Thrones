export  default class GoTservice {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResourse(url) {
        const result = await fetch(`${this._apiBase}${url}`);
    
        if (!result.ok) throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        // если у нас ошибка, создадим кастомную ошибку и выведем ее в консоль и покажем какая ошибка (status)
        return await result.json();
    };
    getAllCharacters() {
        return this.getResourse(`/characters?page=5&pageSize=10`);
    }
    getCharacter(id) {
        return this.getResourse(`/characters/${id}`);
    }
    getAllBooks() {
        return this.getResourse(`/books/`);
    }
    getBook(id) {
        return this.getResourse(`/books/${id}/`)
    }
    getAllHouses() {
        return this.getResourse(`/houses/`);
    }
    getHouse(id){
        return this.getResourse(`/houses/${id}/`) 
    }
}