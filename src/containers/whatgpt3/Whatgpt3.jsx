import React from "react";
import "./Whatgpt3.css";
import { Feature } from "../../components/index";

const Whatgpt3 = () => {
  return (
    <div className="gpt3__whatgpt3-outside"  id="wgpt3">
      <div className="gpt3__whatgpt3 section__padding">
        <div className="gpt3__whatgpt3-feature">
          <Feature
            title="What is GPT3"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />
        </div>

        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">
            The possibilities are beyond <br /> your imagination
          </h1>
          <p className="gradient__text">Explore the library</p>
        </div>

        <div className="gpt3__whatgpt3-container">
          <Feature
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  );
};

export default Whatgpt3;
