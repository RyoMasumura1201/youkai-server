export interface BasicYokai {
    id: number,
}

export interface Yokai extends BasicYokai {
    name: string;
    place: string;
    image: string;
    description: string;
    lat: number;
    lng: number;
}