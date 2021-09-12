import React from "react"
import { ProfileType } from "../../types"

const About = ({ about }) => (
  <>
    <h5 className="font-header font-semibold text-xl text-sm uppercase mb-3">
      About
    </h5>
    <div className="font-text text-lg pb-12 leading-normal whitespace-pre-line">
      {about}
    </div>
  </>
)

About.propTypes = {
  about: ProfileType.about,
}

export default About
