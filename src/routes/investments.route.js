import express from 'express'
import { v4 as uuidv4 } from 'uuid';
import { escolas } from '../data/schools.js'

const router = express.Router()

router.get('', (req, res) => {
    return res.json(escolas);
});
  
router.post("", (req, res) => {
    const dado = req.body;
  
    const id = uuidv4();
  
    const novoDado = { id, ...dado };
  
    if (dado) {
      escolas.push(novoDado);
  
      res.status(201).json(novoDado);
    } else {
      throw new HTTPError('Unable to create data', 400);
    }
});

export default router