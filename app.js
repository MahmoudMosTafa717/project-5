const express = require("express");
const userRoute = require("./routes/userRoute");
const reviewRoute = require("./routes/reviewRoute");
const globalErrorHandler = require("./controllers/errorController");
const app = express();

app.use(express.json());
// const requestTimeout = (req, res, next) => {
//   // Set request timeout
//   req.setTimeout(15000, () => {
//     const err = new Error("Request Timeout");
//     err.status = 408;
//     next(err);
//   });

//   // Set response timeout
//   res.setTimeout(15000, () => {
//     if (!res.headersSent) {
//       res.status(408).json({
//         status: "error",
//         message: "Request timeout",
//       });
//     }
//   });

//   next();
// };
// add versions for future updates
app.use("/api/v1/users", userRoute);
app.use("/api/v1/reviews", reviewRoute);

app.use(globalErrorHandler);
module.exports = app;
