import React from "react";
import { DemoCompWrapper, StartBtn } from "./element";
import { Image } from "react-bootstrap";
import { demoBird } from "../../../assets";

function DemoScreenComp() {
  return (
    <DemoCompWrapper>
      <Image src={demoBird} />
      <h4 className="ring-neck-text">Ringneck.ai</h4>
      <h4 className="demo-text">Demo</h4>
      <p className="sub-text">Beyond Voice! Beyond Limits</p>
      <StartBtn>Press enter to start</StartBtn>
    </DemoCompWrapper>
  );
}

export default DemoScreenComp;
