import React from "react"
import { Link } from "gatsby"
import { BASE_URL as POSTS_BASE_URL } from "../post/constants"

const WIDTH = "10rem";

export default () => (
  <div
    style={{
      minWidth: WIDTH,
    }}
  >
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: WIDTH,
        padding: "1rem",
        textAlign: "right",
        color: "#FFF",
      }}
    >
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to={POSTS_BASE_URL}>Posts</Link>
      </div>
    </div>
  </div>
)
