import SemanticReleaseError from '@semantic-release/error';
import fs from 'fs';

let verified = false;

export async function verifyConditions(config, context) {
  const {
    cwd,
    options: {},
    logger,
  } = context;
  const listfile = `${cwd}/CMakeLists.txt`;
  if(!fs.existsSync(listfile))
    throw new SemanticReleaseError(`cannot find root CMakeLists.txt`);
  verified = true;
}

export async function publish(config, context) {
  const {
    options: {},
    logger,
  } = context;
  logger.log(`publish`);
}

export async function success(config, context) {
  const {
    options: {},
    logger,
    releases,
  } = context;
  logger.log(`success, releases:`);
  for(let release in releases) {
    logger.log(`- ${release}`);
  }
}

export async function fail(config, context) {
  const {
    options: {},
    logger,
    errors,
  } = context;
  logger.log(`failed, errors:`);
  for(let error in errors) {
    logger.log(`- ${error}`);
  }
}