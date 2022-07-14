// TODO

import { Answer } from "@prisma/client"
import { answerRepository } from "../repositories/answerRepository.js"

export type CreateAnswerData = Omit<Answer, "id">

async function createAnswer(createAnswerData: CreateAnswerData) {
    
    await answerRepository.create(createAnswerData)
}


export const answerService = {
    createAnswer
}