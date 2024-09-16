import { prepareCMakeRelease } from './lib/prepare.js';
import { verifyCMakeRelease } from './lib/verify.js';

let verified = false;

export async function verifyConditions(config, context) {
  const {
    cwd,
    options: {},
    logger,
  } = context;
  if(!verified)
    await verifyCMakeRelease(logger, cwd);
  verified = true;
}

export async function prepare(config, context) {
  const {
    cwd,
    options: {},
    nextRelease: {
      version,
    },
    logger,
  } = context;
   if(!verified) {
    await verifyCMakeRelease(logger, cwd);
    verified = true;
  }
  await prepareCMakeRelease(logger, cwd, version);
}