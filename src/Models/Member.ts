import { Evt } from "./Evenement";

export interface Member {
    id: string,
    cin: string,
    name: string,
    type: string,
    createdDate: string,
    tabEvent: Evt[],
    
}