import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
// import { CalendarIcon } from "@chakra-ui/icons";
import  "./Calendar.css"
function Calendar() {
  return (

    <div style={{marginRight:"12.5%",marginLeft:"12.5%"}}>
    
    <div className="gitstats">
        <img
          className="gitimg"
          src={
            "https://github-readme-stats.vercel.app/api?username=sradhe545&theme=react&hide_border=false&include_all_commits=true&count_private=true"
          }
        />
        <img
          className="gitimg"
          src={
            "https://github-readme-streak-stats.herokuapp.com/?user=sradhe545&theme=react&hide_border=false&include_all_commits=true&count_private=true"
          }
        />
                
      </div>
    <Row style={{ justifyContent: "center" }}>
      <h2 className="project-heading" style={{ color:"#008080" ,dispaly:"flex", marginLeft:"37.5%", paddingBottom: "20px",paddingTop: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h2>
      <GitHubCalendar
        username="sradhe545"
        blockSize={15}
        blockMargin={5}
        color="#008080"
        fontSize={16}
      />
    </Row>
    </div>
  );
}
export default Calendar