export interface IGame {
    //_id: string;
    gameId: number;
    isin: string;
    gameTitle: string;    
    releaseDate: string;
    platform: string;
    publisher: string;
    smallImageUrl: string;
    largeImageUrl: string;
    
    edition: string,
    exclusive: string,
    genre: string,
    ageRating: string,    
    
    quantity: number;
    wishcount: number;
    queuecount: number;        
}

