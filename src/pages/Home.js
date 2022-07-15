import React from "react";
import classes from "./Home.module.css";
import image from "../assets/self.jpeg";
import Wrapper from "../UI/Wrapper";
import Card from "../UI/Card";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
      <Wrapper>
        <Card>
          <div className={classes.wrapper}>
            <div className={classes["left-div"]}>
              <div className={classes.heading}>
                I'm <span className={classes["span-text"]}>Alakhvir</span> Singh
              </div>
              <div className={classes["intro-text"]}>
                I am a front-end developer with experience in designing
                beautiful responsive websites
              </div>
            </div>
            <div className={classes["right-div"]}>
              <img src={image} alt="Alakhvir" />
            </div>
          </div>
        </Card>
      </Wrapper>
    </motion.div>
  );
};

export default Home;
