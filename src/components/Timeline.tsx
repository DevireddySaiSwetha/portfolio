import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Apr 2024 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Evernorth (Cigna)</h4>
            <ul style={{marginTop: '10px', paddingLeft: '20px'}}>
              <li>Designed cloud-native microservices with Java Spring Boot for scalable clinical and pharmacy workflows across prescriber and patient domains</li>
              <li>Built and optimized REST APIs and GraphQL-ready data models for flexible, client-driven data retrieval</li>
              <li>Implemented event-driven architecture using AWS EventBridge, Kafka, and Step Functions for loosely coupled, scalable services</li>
              <li>Deployed containerized services on Kubernetes (EKS) with GKE deployment patterns for multi-cloud portability</li>
              <li>Automated CI/CD pipelines using GitHub Actions and Argo CD, enabling GitOps-based deployments</li>
              <li>Applied HIPAA-aligned cloud security: IAM, KMS encryption, and secure PHI handling</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2021 – Aug 2022"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Elevance Health</h4>
            <ul style={{marginTop: '10px', paddingLeft: '20px'}}>
              <li>Designed scalable microservices architecture with Spring Boot for healthcare plan automation workflows</li>
              <li>Built RESTful APIs for distributed systems and implemented event-driven processing with Kafka</li>
              <li>Developed high-performance backend services using PostgreSQL and MongoDB</li>
              <li>Automated CI/CD pipelines with Jenkins and Bitbucket, reducing deployment downtime</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2017 – Aug 2021"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer & Cloud Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Siemens Technology</h4>
            <ul style={{marginTop: '10px', paddingLeft: '20px'}}>
              <li>Developed backend microservices with Java and Spring Boot supporting distributed real-time systems</li>
              <li>Built event-driven messaging systems with ActiveMQ for reliable service communication</li>
              <li>Deployed containerized applications on Kubernetes (EKS) with exposure to GCP (GKE, Pub/Sub)</li>
              <li>Implemented OAuth2 and JWT authentication; automated infrastructure with Terraform and Jenkins/GitLab CI</li>
              <li>Optimized backend performance using PostgreSQL, Redis, and DynamoDB</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Education"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Science in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Clark University, Worcester, MA</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
