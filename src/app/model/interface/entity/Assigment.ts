import { AssigmentAction } from "../../enum/AssigmentAction";
import { Dto } from "../Dto";

export interface Assigment extends Dto{
    subject : string;
    periodOfExecution : string;
    text : string;
    signOfExecution : boolean;
    signOfControl : boolean;
    authorId : number;
    executorsId : number[];
    action : AssigmentAction

}