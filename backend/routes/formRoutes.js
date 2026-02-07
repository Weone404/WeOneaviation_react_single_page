import express from "express";
import Form from "../models/Form.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { fullName, whatsapp, interest } = req.body;

        // ✅ Backend validation
        if (!fullName || !whatsapp || !interest) {
            return res.status(400).json({
                success: false,
                error: "Missing required fields",
            });
        }

        const formData = await Form.create(req.body);

        res.status(201).json({
            success: true,
            data: formData,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
});

export default router;
