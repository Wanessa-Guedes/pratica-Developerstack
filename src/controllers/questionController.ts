import { Request, Response } from "express";
import {answerService} from "../services/answerService.js";
import {questionService}  from "../services/questionService.js";
import { CreateQuestionData } from "../services/questionService.js";

export async function create(req: Request, res: Response) {

  const {question} = req.body;

  await questionService.createQuestion({question});

  res.sendStatus(201)
}

export async function answer(req: Request, res: Response) {
  
  const {answer} = req.body;
  const id = +req.params.id;

  await answerService.createAnswer({answer: answer, questionId: id});

  res.sendStatus(201)

}

export async function get(req: Request, res: Response) {
    const questions = await questionService.getQuestions();

    res.send({questions}).status(200)
}

export async function getById(req: Request, res: Response) {
  
  const id: number = +req.params.id;

  const question = await questionService.getById(id)

  res.send(question).status(200);
}
