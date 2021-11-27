import { Router } from 'express'
const router = Router()
import * as monstersApiController from '../../controllers/monsters.js'

/* GET users listing. */
router.get('/', monstersApiController.index)
router.get('/:id', monstersApiController.show)
router.post('/', monstersApiController.create)
router.delete('/:id', monstersApiController.delete)
router.put('/:id', monstersApiController.update)

export {
  router
}
