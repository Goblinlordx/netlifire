const post = require("./src/post/node")

exports.onPostBuild = async ({ reporter }) => {
  reporter.info("Build successful")
}

exports.createPages = async (...args) => {
  await post(...args)
}
