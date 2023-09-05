import React, { useState, useEffect, useRef } from "react";
import {
  BtnsDiv,
  DropdownDiv,
  IndividualBtns,
  LanguageSelectDiv,
  SideCompWrapper,
} from "./element";
import { Image } from "react-bootstrap";
import { btnsRectangle, fourSeasonImg, usFlag } from "../../../assets";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { data } from "./data";
import { AiOutlineQuestionCircle, AiOutlinePlus } from "react-icons/ai";
import { BsCcCircle } from "react-icons/bs";

function SideComp() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectValue, setSelectValue] = useState("English");
  const [selectedFlag, setSelectedFlag] = useState(usFlag);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (item) => {
    setShowDropdown(false);
    setSelectValue(item.langauge);
    setSelectedFlag(item.flag);
  };

  const filteredData = data.filter((item) => item.langauge !== selectValue);

  return (
    <SideCompWrapper>
      <div className="top-div">
        <Image src={fourSeasonImg} className="four-season-img" />
        <div className="select-div">
          <LanguageSelectDiv onClick={toggleDropdown}>
            <div className="first-div">
              <Image src={selectedFlag} />
              <p className="country-name-text">{selectValue}</p>
            </div>
            {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </LanguageSelectDiv>
          {showDropdown && (
            <DropdownDiv>
              {filteredData?.map((item) => (
                <div
                  className="inner-div"
                  key={item.id}
                  onClick={() => handleOptionClick(item)}
                >
                  <Image src={item.flag} />
                  <p className="language-name">{item.langauge}</p>
                </div>
              ))}
            </DropdownDiv>
          )}
        </div>
      </div>
      <BtnsDiv>
        <IndividualBtns>
          <Image src={btnsRectangle} width={"100%"} fluid />
          <span>
            <AiOutlinePlus /> New Conversation
          </span>
        </IndividualBtns>
        <IndividualBtns>
          <Image src={btnsRectangle} width={"100%"} fluid />
          <span>
            <AiOutlineQuestionCircle /> FAQs
          </span>
        </IndividualBtns>
        <IndividualBtns>
          <Image src={btnsRectangle} width={"100%"} fluid />
          <span>
            {" "}
            <AiOutlineQuestionCircle /> Help
          </span>
        </IndividualBtns>
        <IndividualBtns>
          <Image src={btnsRectangle} width={"100%"} fluid />
          <span>
            <BsCcCircle /> Legal
          </span>
        </IndividualBtns>
      </BtnsDiv>
    </SideCompWrapper>
  );
}

export default SideComp;
