"use strict";
const fastify = require("fastify")({
  logger: true,
});

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
  console.log(`Server is now listening on ${address}`);
});
