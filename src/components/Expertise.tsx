import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java (Core, 21)", "Go",
    "Spring Boot", "Spring Cloud", "Hibernate",
    "JUnit", "Mockito",
    "REST APIs", "GraphQL",
    "Microservices", "Distributed Systems"
];

const labelsSecond = [
    "AWS Lambda", "API Gateway", "EventBridge", "EKS", "Step Functions",
    "Azure", "GCP (GKE, Pub/Sub)",
    "Docker", "Kubernetes",
    "GitHub Actions", "Jenkins", "Argo CD", "GitOps",
    "Kafka", "ActiveMQ"
];

const labelsThird = [
    "PostgreSQL", "MongoDB", "DynamoDB", "Redis",
    "OAuth2", "SAML", "IAM", "KMS",
    "HIPAA-aligned Architecture",
    "Dynatrace", "Splunk", "OpenTelemetry",
    "Agile (Scrum, Kanban)"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Backend Engineering & APIs</h3>
                    <p>7+ years building scalable, cloud-native microservices with Java Spring Boot. Deep expertise in REST and GraphQL APIs, event-driven architecture, and distributed systems across healthcare and pharmacy domains.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud Platforms & DevOps</h3>
                    <p>Proven track record deploying containerized services on AWS EKS and Azure, with hands-on GCP (GKE, Pub/Sub) knowledge. Automated CI/CD pipelines with GitHub Actions and Argo CD for GitOps-based delivery at scale.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data, Security & Observability</h3>
                    <p>Experienced with polyglot persistence (PostgreSQL, MongoDB, DynamoDB) and cloud security best practices — IAM, KMS encryption, OAuth2/SAML — in HIPAA-compliant healthcare environments. Full observability via Dynatrace, Splunk, and OpenTelemetry.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
