import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import React, { useState, useEffect } from "react"
import {
  FaReact,
  FaHtml5,
  FaJsSquare,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa"
import Loader from "react-loaders"
import GlitchText from "react-glitch-effect/core/GlitchText"

import Typewritter from "typewriter-effect"

export default function About() {
  return (
    <>
      <section className="container about-page">
        <div className="text-zone">
          <GlitchText component="h1" color1={"green"} color2={"red"}>
            <Typewritter
              onInit={(typewritter) => {
                typewritter.pauseFor(500).typeString("About").start()
              }}
            />
          </GlitchText>
          <p className="text">
            Im Santiago Velasquez -- a Frontend web developer based in
            Medellin-Colombia with a big passion for programming and learning
            new exciting things.
          </p>

          <p className="text">
            I have worked in customer service for a few months where i was able
            to improve my english and communicate, I also worked as a boiler
            techinician at Zenu for half a year which is where i first made my
            first phone application and decided to go further and learn web
            development
          </p>
          <div className="skills">
            <h5 className="subtitle">Skills</h5>
            <div className="flex-container">
              <div className="left text">
                <p>Javascript</p>
                <p>Html</p>
                <p>Css</p>
                <p>React</p>
              </div>
              <div className="right text">
                <p>Express</p>
                <p>Mongodb</p>
                <p>Git</p>
                <p>Redux</p>
              </div>
            </div>
          </div>
        </div>
        <div className="stage-cube-cont">
          <div className="scene">
            <div className="cube">
              <div className="cube__face cube__face--front"></div>
              <div className="cube__face cube__face--back"></div>
              <div className="cube__face cube__face--right"></div>
              <div className="cube__face cube__face--left"></div>
              <div className="cube__face cube__face--top"></div>
              <div className="cube__face cube__face--bottom"></div>
            </div>
          </div>
        </div>
      </section>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}
