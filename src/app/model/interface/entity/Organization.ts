import { Dto } from "../Dto";
import { Employee } from "./Employee";


export interface Organization extends Dto{
    name : string;
    physicalAdress : string;
    legalAddress : string;
    supervisor : Employee;
}