import express from "express";
import { createUser, getUsers, updateUser } from "../controllers/users.js";

const router = express.Router();

// Create new user
router.post('/create', createUser);

// Fetch all users
router.get('/', getUsers);

// Update user
router.put('/update/:id', updateUser);

export default router;
