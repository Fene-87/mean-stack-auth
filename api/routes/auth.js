import express from "express";
import { deleteUser, getUsers, login, registerUser, updateUser } from "../controllers/auth.js";

const router = express.Router();

// Create new user
router.post('/register', registerUser);

// Login user
router.post('/login', login);

// Fetch all users
router.get('/', getUsers);

// Update user
router.put('/update/:id', updateUser);

// Delete user
router.delete('/delete/:id', deleteUser);

export default router;
