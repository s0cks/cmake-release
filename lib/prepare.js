import { promises as fs } from 'fs';

export async function prepareCMakeRelease(logger, cwd, new_version) {
  const filename = `${cwd}/build.json`; //TODO: make this a config option
  const build = JSON.parse(await fs.readFile(filename, `utf8`));
  logger.log(`updating build version from ${build[`version`]} to ${new_version}`);
  build[`version`] = new_version;
  await fs.writeFile(filename, JSON.stringify(build, null, 2));
}