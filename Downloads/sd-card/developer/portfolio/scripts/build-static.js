const fs = require("node:fs/promises");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");
const outputDirectory = path.join(projectRoot, "dist");
const publicFiles = ["index.html", "styles.css", "app.js"];

async function build() {
  await fs.rm(outputDirectory, { recursive: true, force: true });
  await fs.mkdir(outputDirectory, { recursive: true });

  for (const filename of publicFiles) {
    await fs.copyFile(path.join(projectRoot, filename), path.join(outputDirectory, filename));
  }

  console.log(`Built ${publicFiles.length} public files into ${outputDirectory}`);
}

build().catch((error) => {
  console.error(`Portfolio build failed: ${error.message}`);
  process.exitCode = 1;
});
