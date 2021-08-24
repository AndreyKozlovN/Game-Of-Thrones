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

    async getAllCharacters() {
        const result = await this.getResourse(`/characters?page=5&pageSize=10`);
        return result.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character);
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

    _transformCharacter(char) {
        return {
            name: char.name || 'no information',
            gender: char.gender || 'no information',
            born: char.born || 'no information',
            died: char.died || 'no information',
            culture: char.culture || 'no information'
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}