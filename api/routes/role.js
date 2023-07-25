import express from "express";
import { createRole } from "../controllers/roles.js";

const router = express.Router();

router.post('/create', createRole);

export default router;