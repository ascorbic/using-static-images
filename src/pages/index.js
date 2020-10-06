import React from "react"
import { StaticImage } from "gatsby-plugin-image"
export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1>Static Images</h1>
      <section style={{ maxWidth: 600, margin: "auto" }}>
        <StaticImage src="../images/paraty-unsplash.jpg" fluid maxWidth={600} />
      </section>

      <section>
        Hi!
        <StaticImage
          src="../images/drink-unsplash.jpg"
          height={250}
          grayscale
        />
        <StaticImage
          src="../images/drink-unsplash.jpg"
          tracedSVG
          height={250}
        />
        <StaticImage
          src="../images/drink-unsplash.jpg"
          width={250}
          height={250}
        />
        <StaticImage
          src="../images/drink-unsplash.jpg"
          height={250}
          webP={false}
          grayscale
        />
        <StaticImage
          src="../images/bicycle-unsplash.jpg"
          rotate={90}
          width={400}
          height={250}
        />
      </section>
    </div>
  )
}
