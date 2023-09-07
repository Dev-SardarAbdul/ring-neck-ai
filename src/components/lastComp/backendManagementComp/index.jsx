import React, { useState } from "react";
import {
  BottomBtn,
  DrodpownDiv,
  FrontendDeskDiv,
  ManagementCompWrapper,
  RoomServiceDiv,
  StatusBtn,
} from "./element";
import { Image } from "react-bootstrap";
import { bellIcon, roomServiceGroup } from "../../../assets";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ManagementComp() {
  const [showTopDropdown, setShowTopDropdown] = useState(false);
  const [showBottomDropdown, setShowBottomDropdown] = useState(false);
  return (
    <ManagementCompWrapper>
      <FrontendDeskDiv className="frontService">
        <Image src={bellIcon} width={70} height={70} className="bell-icon" />
        <h2 className="main-text">Front Desk</h2>
        <p className="sub-text">Room number 478 </p>
        <p className="sub-text">Late check-out: 3:00pm</p>
      </FrontendDeskDiv>
      <div className="dropdown-div-wrapper">
        <StatusBtn onClick={() => setShowTopDropdown(!showTopDropdown)}>
          Status: Confirmed
          {showTopDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </StatusBtn>

        {showTopDropdown && (
          <DrodpownDiv>
            <p className="option">Option 1</p>
            <p className="option">Option 2</p>
            <p className="option">Option 3</p>
            <p className="option">Option 4</p>
          </DrodpownDiv>
        )}
        <BottomBtn>Pending</BottomBtn>
      </div>
      <RoomServiceDiv>
        <Image
          src={roomServiceGroup}
          width={70}
          height={70}
          className="bell-icon"
        />
        <h2 className="main-text">Room Service</h2>
        <p className="sub-text">Room number 478 </p>
        <p className="sub-text">Order: Club Sandwich & Orange juice </p>
      </RoomServiceDiv>
      <div className="dropdown-div-wrapper">
        <StatusBtn onClick={() => setShowBottomDropdown(!showBottomDropdown)}>
          Status: Confirmed
          {showBottomDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </StatusBtn>

        {showBottomDropdown && (
          <DrodpownDiv>
            <p className="option">Option 1</p>
            <p className="option">Option 2</p>
            <p className="option">Option 3</p>
            <p className="option">Option 4</p>
          </DrodpownDiv>
        )}

        <BottomBtn>Pending</BottomBtn>
      </div>
    </ManagementCompWrapper>
  );
}

export default ManagementComp;
