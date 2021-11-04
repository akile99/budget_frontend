import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const DropDownMenu = () => (
  <div className="menu">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div>
          <Dropdown.Item>Add Transaction</Dropdown.Item>
          <Dropdown.Item>Bills</Dropdown.Item>
          <Dropdown.Item>Bills</Dropdown.Item>
          <Dropdown.Item>Accounts</Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default DropDownMenu;
