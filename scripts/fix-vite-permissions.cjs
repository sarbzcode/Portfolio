const fs = require("fs");
const path = require("path");

/**
 * Ensure the Vite CLI shims are executable in environments (like Vercel)
 * that strip the execute bit from files inside node_modules/.bin.
 */
const targets = [
  "node_modules/.bin/vite",
  "node_modules/vite/bin/vite.js",
];

for (const target of targets) {
  const fullPath = path.join(__dirname, "..", target);

  try {
    if (!fs.existsSync(fullPath)) {
      continue;
    }

    fs.chmodSync(fullPath, 0o755);
    console.log(`[fix-vite-permissions] ensured executable: ${target}`);
  } catch (error) {
    console.warn(
      `[fix-vite-permissions] could not update permissions for ${target}:`,
      error.message,
    );
  }
}
