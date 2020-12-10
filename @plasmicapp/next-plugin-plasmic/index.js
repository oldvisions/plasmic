const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const cp = require("child_process");
const path = require("path");
const fs = require("fs");

function generateEntrypoint({ dir, projectIds }) {
  console.log("Syncing plasmic projects: ", projectIds);
  const currentDir = dir;
  const configPath = path.join(currentDir, "plasmic.json");
  const entrypointPath = path.join(__dirname, "PlasmicLoader.js");
  cp.execSync(`plasmic sync --projects ${projectIds.join(" ")}`, {
    cwd: currentDir,
    stdio: "inherit",
  });
  const configData = fs.readFileSync(configPath);
  const config = JSON.parse(configData.toString());
  const componentData = [];

  for (const project of config.projects) {
    for (const component of project.components) {
      const componentPath = path.join(
        currentDir,
        config.srcDir,
        component.renderModuleFilePath
      );
      componentData.push({
        projectId: project.projectId,
        name: component.name,
        path: componentPath,
      });
    }
  }

  const entryPointFile = `
/** This class is auto-generated by Plasmic; please do not edit! */
import * as React from 'react';
${componentData
  .map(
    ({ projectId, name, path }) => `import ${name}${projectId} from '${path}';`
  )
  .join("\n")}
const componentMap = {
  ${componentData
    .map(({ projectId, name }) => `"${name}${projectId}":${name}${projectId}`)
    .join(",\n")}
}

export default function PlasmicLoader({ projectId, component }) {
  const Component = componentMap[component+projectId];
  return <Component />;
}
        `;
  fs.writeFileSync(entrypointPath, entryPointFile);
}

// Check to make sure it only runs once.
let firstTime = true;

module.exports = (plasmicOpt) => {
  const buildPhase = [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD];

  return (nextConfig = {}, composePlugins = {}) => {
    const { nextComposePlugins, phase } = composePlugins;

    function nextConfigMethod(phase, args) {
      if (!firstTime) {
        return;
      }
      firstTime = false;
      if (buildPhase.includes(phase)) {
        generateEntrypoint(plasmicOpt);
      }
      return typeof nextConfig === "function"
        ? nextConfig(phase, args)
        : nextConfig;
    }
    return nextComposePlugins ? nextConfigMethod(phase) : nextConfigMethod;
  };
};
