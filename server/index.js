import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import overviewRoutes from "./routes/overview.js";
import logincourseRoutes from "./routes/logincourse.js";
import contentpostedRoutes from "./routes/contentposted.js";
import interactionRoutes from "./routes/interaction.js";
import completionrateRoutes from "./routes/completionrate.js"

// data imports
import Student from "./models/Student.js";
import User from "./models/User.js";
import { dataUser } from "./data/index.js";
import { studentData } from "./data/students.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/overview", overviewRoutes);
app.use("/logincourse", logincourseRoutes);
app.use("/contentposted", contentpostedRoutes);
app.use("/interation", interactionRoutes);
app.use("/completionrate", completionrateRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // Student.insertMany(studentData);
  })
  .catch((error) => console.log(`${error} did not connect`));
