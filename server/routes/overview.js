import express from "express";
import { getStudents } from "../controllers/overview";

const router = express.Router();

router.get("/student/:id", getStudents);
export default  router;