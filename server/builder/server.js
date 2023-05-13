const path = require("path");
const { build } = require("esbuild");

async function Build() {
    try {
        
        const result = await build({
            entryPoints: [path.resolve("server/src/index.tsx")],
            bundle: false,
            outfile: path.resolve("server/dist/final.mjs"),
        });

        return result;

    } catch (error) {
        console.log(error);
    }
};

module.exports = Build;