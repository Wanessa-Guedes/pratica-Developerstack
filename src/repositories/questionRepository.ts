// TODO
import {prisma} from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";

async function create(createQuestionData: CreateQuestionData) {
    await prisma.question.create({data: createQuestionData})
}

async function getAllQuestions() {
    const allQuestions = await prisma.question.findMany({
        select:{
            id: true,
            question: true
        }
    })

    return allQuestions
}

async function getQuestionById(id: number) {
    const question = await prisma.question.findUnique({
        where : {
            id, 
        },
        select: {
            id: true,
            question: true,
            answers : {
                select: {
                    answer: true
                }
            }
        }
    })

    return question
}

export const questionRepository = {
    create,
    getAllQuestions,
    getQuestionById
}