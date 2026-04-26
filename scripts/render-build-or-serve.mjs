import { existsSync } from "node:fs";
import { spawn } from "node:child_process";

const isRenderRuntime = Boolean(process.env.RENDER_SERVICE_ID);
const hasBuiltPortfolio = existsSync("artifacts/portfolio/dist/public/index.html");
const pnpmCmd = process.platform === "win32" ? "corepack pnpm" : "pnpm";

const command =
  isRenderRuntime && hasBuiltPortfolio
    ? `${pnpmCmd} --filter @workspace/portfolio run serve`
    : `${pnpmCmd} run typecheck && ${pnpmCmd} --filter @workspace/portfolio run build`;

const child = spawn(command, {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
