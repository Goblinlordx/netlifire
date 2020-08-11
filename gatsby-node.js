const posts = require("./src/posts/node")

exports.onPostBuild = async ({ reporter }) => {
  reporter.info("Build successful")
}

exports.createPages = async (...args) => {
  await posts(...args)
}
