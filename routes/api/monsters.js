import { Router } from 'express'
const router = Router()
import * as monstersApiController from '../../controllers/monsters.js'

/* GET users listing. */
router.get('/', monstersApiController.index)

export {
  router
}
