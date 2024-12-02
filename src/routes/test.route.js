import express from "express";
const router = express.Router();

const data = [
  {
    id: 1,
    quote: "The only way to do great work is to love what you do.",
  },
  {
    id: 2,
    quote: "The best preparation for tomorrow is doing your best today.",
  },
  {
    id: 3,
    quote: "We may encounter many defeats but we must not be defeated.",
  },
];

router.get("/test", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    res.status(200).json(randomQuote);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

export default router;
