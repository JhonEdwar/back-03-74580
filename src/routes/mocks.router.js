import { Router } from 'express';
import mockController from '../controllers/mock.controller.js';

const router = Router();

router.get('/mockingusers',mockController.createMockUsers);
router.get('/mokingpets',mockController.createMockPets);
router.post('/generateData',mockController.generateData);

export default router;