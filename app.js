import express from "express";
import morgan from "morgan";
import cors from "cors";
import employeeRouter from "./Routes/routes.js";

/**Import Router and Models when created */

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors("*"));
app.use(morgan("dev"));
app.use(express.json());
/** app.use (filepath + module export name)
 * Needed for both routes & models
 */
app.use("/employee", employeeRouter);

// app.use(function (req, res, next) {
//   res.status(404).json({
//     success: false,
//     error:
//       "We couldn't find what you were looking for 😞. Did you send the request to the right path?",
//   });
// });

// app.use(function (err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     error: "Something went wrong, please try again later",
//   });
// });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

export default app;
