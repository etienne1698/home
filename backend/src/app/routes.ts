import { app } from "./app";

import { appAuthRouter, appRecipeRouter } from "./composition-root";

app.route("/api/auth", appAuthRouter);
app.route("recipes", appRecipeRouter);
