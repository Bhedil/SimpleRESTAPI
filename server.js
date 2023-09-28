import express from "express";
import appRoutes from "./routes.js";
import helmet from "helmet";

const app = express();
const port = 8000;

app.use(express.json());
app.use(helmet());

app.use('/api', appRoutes);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});