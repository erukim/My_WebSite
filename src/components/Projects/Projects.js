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
              imgPath="http://127.0.0.1:5000/img/Mora.png"
              isBlog={false}
              title="Mora"
              description="다양한 API와 Discord Bot을 제작하는 팀이자 프로젝트 입니다."
              ghLink="https://github.com/Mora-Team"
              weblink="https://mora-bot.kr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="http://127.0.0.1:5000/img/Archive.png"
              isBlog={false}
              title="Archive"
              description="각종 다양한 봇을 책임진다!"
              ghLink="https://github.com/Archive-Discord"
              weblink="https://archiver.me"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="http://127.0.0.1:5000/img/inft.png"
              isBlog={false}
              title="Idle Factory"
              description="모바일 게임의 종류인 Idle game 기반으로 개발된 게임봇"
              ghLink="https://github.com/InfiniteTeam/Idle-Factory"
              weblink="https://inft.kr/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="http://127.0.0.1:5000/img/KIOH.png"
              isBlog={false}
              title="KIOH - 한디리"
              description="한국형 익명 글 시스템"
              ghLink="https://github.com/TeamKIOH"
              weblink="https://kioh.kr"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="http://127.0.0.1:5000/img/Korcan.png"
              isBlog={false}
              title="Korcen (코르센)"
              description="한국형 문자 검열 시스템 모듈"
              ghLink="https://github.com/kr-Krocen"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Diskost"
              weblink="https://ko.diskost.site"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
