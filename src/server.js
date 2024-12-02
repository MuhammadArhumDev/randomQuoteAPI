import express from "express";
import testRoutes from "./routes/test.route.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000 ?? 5003;

app.use(express.json());

app.use("/api", testRoutes);

app.listen(3000, () => {
  console.log("Server is running on port", PORT);
});
