import { app } from "./app";
import { env } from "./config/env";
import pino from "pino";

const logger = pino();

const PORT = env.PORT;

app.listen(PORT, () => {
  logger.info(`🚀 Server running on http://localhost:${PORT}`);
});
