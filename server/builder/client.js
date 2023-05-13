const path = require("path");
const { build } = require("esbuild");

async function Build() {
    try {
        
        const result = await build({
            entryPoints: [path.resolve("client/src/app.tsx")],
            bundle: false,
            outfile: path.resolve("client/dist/final.mjs"),
        });

        return result;

    } catch (error) {
        console.log(error);
    }
};

async function clientBuild() {
    try {
        
        const result = await build({
            entryPoints: [path.resolve("client/src/index.tsx")],
            bundle: true,
            outfile: path.resolve("client/dist/client.js"),
        });

        return result;

    } catch (error) {
        console.log(error);
    }
};

module.exports = {Build, clientBuild};