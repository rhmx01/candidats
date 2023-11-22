const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/qualities", require("./routes/qualityRoutes"));
app.use("/api/roles", require("./routes/roleRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
