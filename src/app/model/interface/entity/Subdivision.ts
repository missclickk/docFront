import { Dto } from "../Dto";
import { Employee } from "./Employee";

export interface Subdivision extends Dto{
    name : string,
    contactData : string,
    organizationId : number,
    supervisor : Employee,
    employees? : Employee[]

}