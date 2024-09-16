

export async function verifyConditions(config, context) {
  const {
    options: {},
    logger,
  } = context;
  logger.log(`verifyConditions`);
}

export async function publish(config, context) {
  const {
    options: {},
    logger,
  } = context;
  logger.log(`publish`);
}

export async function addChannel(config, context) {
  const {
    options: {},
    logger,
  } = context;
  logger.log(`addChannel`);
}

export async function success(config, context) {
  const {
    options: {},
    logger,
  } = context;
  logger.log(`success`);
}

export async function fail(config, context) {
  const {
    options: {},
    logger,
  } = context;
  logger.log(`fail`);
}