import * as path from "path";
import moduleAlias from "module-alias";

const files = path.resolve(__dirname, "../..");

moduleAlias.addAliases({
    "@app": path.join(files, "app")
});
