/**
 * Executes the Vite build via the Node API so we do not rely on the
 * executable bit of the `.bin/vite` shim (which Vercel sometimes strips).
 * We also attempt to fix the permissions proactively for local dev parity.
 */

try {
  require("./fix-vite-permissions.cjs");
} catch (error) {
  console.warn("[run-vite-build] permissions fix skipped:", error.message);
}

(async () => {
  try {
    const { build } = await import("vite");
    await build();
    console.log("[run-vite-build] build completed");
  } catch (error) {
    console.error("[run-vite-build] build failed");
    console.error(error);
    process.exitCode = 1;
  }
})();
