import express from 'express';
const router = express.Router();
import mapController from '../controllers/maps.controller.js';
import authMiddleware from "../middlewares/auth.middleware.js";

router.get('/get-coordinates',authMiddleware.authUser,getCordinates);

module.exports = router;