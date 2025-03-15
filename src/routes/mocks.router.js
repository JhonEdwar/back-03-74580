import { Router } from 'express';
import mockController from '../controllers/mock.controller.js';

const router = Router();

router.get('/mockingusers',mockController.create50Users);
router.get('/mokingpets',mockController.create50Pets);

// router.post('/generateData',);

export default router;