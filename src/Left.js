import React from "react"
import data from "./data"

import Camera from "./Camera/Camera"

const Left = () => (
  <div className="left">
    {data.cameras.map((camera, index) => (
      <Camera
        title={data.cameras[index].title}
        temperature={data.cameras[index].temperature}
        oximeter={data.cameras[index].oximeter}
      />
    ))}
  </div>
)

export default Left
