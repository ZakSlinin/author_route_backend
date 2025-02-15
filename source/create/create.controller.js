import { json, Router } from "express";
import { CreateMessages } from "./create.service.js";

const router = Router();

const createMessagesService = new CreateMessages();

router.post('/', (req, res) => {

    if (!req.body?.text?.length) {
        return res.status(400).json({message: 'Text is not required' })
    }

    const messages = createMessagesService.createMessages(req.body);
    res.status(201).json(messages);
});

export const messagesRouter = router;