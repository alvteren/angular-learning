export interface Flat {
    id: number;
    category: {
        id:number;
        name: string;
    };
    city: {
        id:number;
        name: string;
    };
    address: string;
    square: number;
    price: number;   
}

export interface FlatList {
    items: Flat[];
    count: number;
}

export namespace FlatResponse {
    interface Flat {
        id: number;
        category: {
            id:number;
            name: string;
        };
        city: {
            id:number;
            name: string;
        };
        images: Image[];
        address: string;
        square: number | null;
        squareLot: number | null;
        floor: number;
        floorsHouse: number;
        price: number;
        builtYear: string;
        constructionCompany: string;
        contactPerson: string;
        contactPhone: string;
        contactEmail: string;
        /** дата в формате iso-8601 */
        createdAt: string;
        updatedAt: string;
        description: string;
        district: number;
        cityId: number;
    }

    interface Image {
        /** в данный момент всегда приходит пустая строка */
        name: string;
        /** полный урл картинки */
        image: string;
        isPlanImage: boolean;
    }
    
    export interface Palyload {
        count: number;
        results: Flat[];
    }
}

