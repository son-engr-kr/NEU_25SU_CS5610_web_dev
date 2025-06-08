import "dotenv/config";
import express from "express";
import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js"; // Import CourseRoutes
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
import cors from "cors";
import session from "express-session";

const app = express();

// Configure CORS before session
app.use(
  cors({
    credentials: true,
    origin: [
      process.env.NETLIFY_URL,
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ],
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}

// Configure session before express.json
app.use(session(sessionOptions));

// Configure express.json before all routes
app.use(express.json());

// Define routes
UserRoutes(app);
CourseRoutes(app); // Add CourseRoutes
EnrollmentRoutes(app);
Lab5(app);

app.listen(4000); // Use fixed port 4000