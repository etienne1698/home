import { app } from "./app";

import { appAuthRouter, appRecipeRouter } from "~/app/composition-root";

app.route("/api/auth", appAuthRouter);
app.route("recipes", appRecipeRouter);
