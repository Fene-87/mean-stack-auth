import express from "express";
import { createRole, updateRole } from "../controllers/roles.js";

const router = express.Router();

//create role
router.post('/create', createRole);

//update role
router.put('/update/:id', updateRole);

export default router;
