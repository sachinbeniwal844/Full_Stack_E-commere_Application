import express from "express";
import { getBook } from "../Controller/book.js";

const router = express.Router();

router.get("/all-book", getBook);

export default router;