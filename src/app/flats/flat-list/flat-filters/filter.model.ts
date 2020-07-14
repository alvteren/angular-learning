import { Params } from '@angular/router';

export interface Filter {
    city?: string;
    category?: string[];
    rooms?: string[];
}

export interface FilterQueryParams extends Params {
    city?: string;
    category?: string | string[];
    room_count?: string | string[];
}