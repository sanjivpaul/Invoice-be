import dotenv from "dotenv";
import { app } from "./app.js";
import sequelize from "./db/index.js";

dotenv.config({
  path: "./.env",
});

sequelize
  .sync()
  .then(() => {
    console.log("Database connected successfully");

    app.listen(process.env.PORT || 5001, () => {
      console.log(
        `server is running on port http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("DB Connection error:", error);
  });

// app.listen(port, () => {
//   console.log(`Server running on port: ${port}`);
// });
