import pkg from "../package.json" with { type: "json" };
import process from "node:process";

function generate(version) {
  const preview_build = process.env.ORUGA_PREVIEW_BUILD;

  if (preview_build) {
    version = `${version} (build ${preview_build})`;
  }

  return `/*! Oruga v${version} | MIT License | github.com/oruga-ui/oruga */\n\n`;
}

const bannerTxt = generate(pkg.version);

process.stdout.write(bannerTxt);
process.stdin.pipe(process.stdout);
