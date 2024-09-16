import { publishCMakeRelease } from './publish';
import { verifyCMakeRelease } from './verify';

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

export async function publish(config, context) {
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
  await publishCMakeRelease(logger, cwd, version);
}