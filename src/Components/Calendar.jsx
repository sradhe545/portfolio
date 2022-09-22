import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { CalendarIcon } from "@chakra-ui/icons";

function Calendar() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "0px" }}>
        Days | <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="sradhe545"
        blockSize={15}
        blockMargin={5}
        color=" #de507a"
        fontSize={16}
      />
    </Row>
  );
}
export default Calendar