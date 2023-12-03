import express from "express";

import * as converterController from '../controllers/converterController';

const converterRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Converter
 *   description: The converter API
 * /converter:
 *   get:
 *     summary: Get default message to check if the server is up
 *     tags: [Converter]
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: The server is up.
 *       500:
 *         description: Some server error
 *
 */
converterRouter.get("/", converterController.defaultPingAction);

converterRouter.post("/hal-to-json", converterController.convertHalToJsonAction);

export default converterRouter;