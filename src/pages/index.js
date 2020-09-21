import React from "react"
import { StaticImage as Img } from "gatsby-plugin-static-image"

export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1>Static Images</h1>
      <section style={{ maxWidth: 600, margin: "auto" }}>
        <Img src="paraty-unsplash.jpg" webP fluid maxWidth={600} />
      </section>

      <section>
        <Img src="drink-unsplash.jpg" webP height={250} />
        <Img src="drink-unsplash.jpg" tracedSVG height={250} />
        <Img src="drink-unsplash.jpg" webP width={250} height={250} />
        <Img src="drink-unsplash.jpg" webP height={250} grayscale />
        <Img
          src="bicycle-unsplash.jpg"
          webP
          rotate={90}
          width={400}
          height={250}
        />
      </section>
    </div>
  )
}
