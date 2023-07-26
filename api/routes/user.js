import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/users.js";

const router = express.Router();

// Create new user
router.post('/create', createUser);

// Fetch all users
router.get('/', getUsers);

// Update user
router.put('/update/:id', updateUser);

// Delete user
router.delete('/delete/:id', deleteUser);

export default router;
