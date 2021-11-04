import React from "react";
import { useHistory } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const DropDownMenu = () => {
  const history = useHistory();
  return (
    <div className="menu">
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div>
            <Dropdown.Item onClick={() => history.push("/transactions")}>
              Transactions
            </Dropdown.Item>
            <Dropdown.Item onClick={() => history.push("/bills")}>
              Bills
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDownMenu;
