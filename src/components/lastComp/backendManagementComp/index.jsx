import React from "react";
import {
  BottomBtn,
  FrontendDeskDiv,
  ManagementCompWrapper,
  RoomServiceDiv,
  StatusBtn,
} from "./element";
import { Image } from "react-bootstrap";
import { bellIcon, roomServiceGroup } from "../../../assets";
import { IoIosArrowDown } from "react-icons/io";

function ManagementComp() {
  return (
    <ManagementCompWrapper>
      <FrontendDeskDiv  className="frontService">
        <Image src={bellIcon} width={70} height={70} className="bell-icon" />
        <h2 className="main-text">Front Desk</h2>
        <p className="sub-text">Room number 478 </p>
        <p className="sub-text">Late check-out: 3:00pm</p>
      </FrontendDeskDiv>
      <StatusBtn>
        Status: Confirmed
        <IoIosArrowDown />
      </StatusBtn>
      <BottomBtn>Pending</BottomBtn>
      <RoomServiceDiv>
        <Image src={roomServiceGroup} width={70} height={70}  className="bell-icon" />
        <h2 className="main-text">Room Service</h2>
        <p className="sub-text">Room number 478 </p>
        <p className="sub-text">Order: Club Sandwich & Orange juice </p>
      </RoomServiceDiv>
      <StatusBtn>
        Status: Confirmed
        <IoIosArrowDown />
      </StatusBtn>
      <BottomBtn>Pending</BottomBtn>
    </ManagementCompWrapper>
  );
}

export default ManagementComp;
