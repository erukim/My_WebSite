import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          저의 <strong className="purple">프로젝트 </strong> 목록이에요!
        </h1>
        <p style={{ color: "white" }}>
          진행되거나 이미 완료된 프로젝트를 아래에 보여드릴게요!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Mora"
              description="다양한 API와 Discord Bot을 제작하는 팀이자 프로젝트 입니다."
              ghLink="https://github.com/Mora-Team"
              weblink="https://mora-bot.kr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Archive"
              ghLink="https://github.com/Archive-Discord"
              demoLink="https://archiver.me"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
