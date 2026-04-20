import React from "react";
import '../assets/styles/Project.scss';

const cardStyle = (gradient: string): React.CSSProperties => ({
    width: '100%', height: '180px', borderRadius: '8px',
    background: gradient,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1.1rem', color: 'white', fontWeight: 600,
    textAlign: 'center', padding: '20px', marginBottom: '0'
});

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>High-Impact Work</h1>
        <div className="projects-grid">
            <div className="project">
                <div style={cardStyle('linear-gradient(135deg, #5000ca 0%, #00b4d8 100%)')}>
                    Clinical &amp; Pharmacy Microservices Platform
                </div>
                <h2>Clinical &amp; Pharmacy Microservices Platform</h2>
                <p>Designed and delivered cloud-native microservices at Evernorth (Cigna) supporting prescriber and patient clinical workflows. Leveraged AWS EventBridge, Kafka, and Step Functions for event-driven, loosely coupled services deployed on Kubernetes (EKS). Integrated AWS Lambda and API Gateway for serverless scalability with HIPAA-compliant PHI handling via IAM and KMS.</p>
            </div>
            <div className="project">
                <div style={cardStyle('linear-gradient(135deg, #0077b6 0%, #48cae4 100%)')}>
                    Healthcare Plan Automation APIs
                </div>
                <h2>Healthcare Plan Automation APIs</h2>
                <p>Built RESTful APIs and Kafka-powered event-driven systems at Elevance Health to automate healthcare plan workflows across distributed services. Implemented high-throughput data pipelines backed by PostgreSQL and MongoDB, with Jenkins/Bitbucket CI/CD pipelines that significantly reduced deployment downtime and accelerated release cycles.</p>
            </div>
            <div className="project">
                <div style={cardStyle('linear-gradient(135deg, #023e8a 0%, #90e0ef 100%)')}>
                    Distributed Real-Time Systems @ Siemens
                </div>
                <h2>Distributed Real-Time Systems</h2>
                <p>Developed backend microservices at Siemens Technology supporting real-time distributed systems using Java, Spring Boot, and ActiveMQ for reliable async messaging. Deployed on Kubernetes with multi-cloud awareness (EKS + GKE), automated infrastructure with Terraform, and secured APIs with OAuth2/JWT. Optimized data layer across PostgreSQL, Redis, and DynamoDB.</p>
            </div>
            <div className="project">
                <div style={cardStyle('linear-gradient(135deg, #7b2d8b 0%, #e040fb 100%)')}>
                    GitOps CI/CD Pipeline Automation
                </div>
                <h2>GitOps CI/CD Pipeline Automation</h2>
                <p>Implemented end-to-end GitOps delivery pipelines at Evernorth using GitHub Actions and Argo CD, enabling automated build, test, and deployment workflows across multiple microservices teams. Reduced release cycle times and enforced infrastructure-as-code practices for reliable, auditable Kubernetes deployments across environments.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
