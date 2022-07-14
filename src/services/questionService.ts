// TODO
import { Question } from "@prisma/client";
import { questionRepository } from "../repositories/questionRepository.js"

export type CreateQuestionData = Omit<Question, "id">

async function createQuestion(createQuestionData: CreateQuestionData) {
    await questionRepository.create(createQuestionData);
}

async function getQuestions() {
    const questions = await questionRepository.getAllQuestions();
    return questions
}

async function getById(id: number) {
    const question = await questionRepository.getQuestionById(id)
    return question
}

export const questionService = {
    createQuestion,
    getQuestions,
    getById
}