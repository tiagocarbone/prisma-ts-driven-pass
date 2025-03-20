import { Router } from "express";
import { Request, Response} from "express"

const router = Router();

router.get('/health', (req: Request, res: Response) => {
    res.status(200).send('I’m OK!');
  });




export default router;