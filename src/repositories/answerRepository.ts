// TODO

import {prisma} from "../config/database.js";
import { CreateAnswerData } from "../services/answerService.js";

async function create (createAnswerData: CreateAnswerData){
    await prisma.answer.create({data: createAnswerData})
}


export const answerRepository = {
    create
}
