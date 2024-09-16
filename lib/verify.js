import SemanticReleaseError from '@semantic-release/error';
import fs from 'fs';

export async function verifyCMakeRelease(logger, cwd) {
  // CMakeLists.txt
  logger.log(`checking for CMakeLists.txt....`);
  const listfile = `${cwd}/CMakeLists.txt`;
  if(!fs.existsSync(listfile))
    throw new SemanticReleaseError(`cannot find CMakeLists.txt in: ${cwd}`);

  // build.json
  logger.log(`checking for build.json....`);
  const buildfile = `${cwd}/build.json`;
  if(!fs.existsSync(buildfile))
    throw new SemanticReleaseError(`cannot find build.json in: ${cwd}`);
}