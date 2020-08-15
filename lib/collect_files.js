import path from "path"
import fs from "fs"
import collect_file from "./collect_file"

export default async dir => {
  const files = await new Promise((resolve, reject) =>
    fs.readdir(path.resolve(path.join(process.cwd(), dir)), (err, files) =>
      err ? reject(err) : resolve(files)
    )
  )
  return await Promise.all(
    files.map(file => collect_file(path.join(process.cwd(), dir, file)))
  )
}
