import fs from "fs"
import matter from "gray-matter"

export default file =>
  new Promise((resolve, reject) =>
    fs.readFile(file, "utf-8", async (err, raw) => {
      if (err) return reject(err)
      try {
        const { data } = matter(raw)
        return resolve(data)
      } catch (e) {
        return reject(e)
      }
    })
  )
