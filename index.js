import app from "./src/app/index.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;


app.listen(PORT , () => {
    console.log(`Servidor no ar: linkDaAplicação`);
});