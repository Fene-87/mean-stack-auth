import express from "express";
import { createRole, getRoles, updateRole } from "../controllers/roles.js";

const router = express.Router();

//create role
router.post('/create', createRole);

//update role
router.put('/update/:id', updateRole);

//get all roles
router.get('/', getRoles);

export default router;
