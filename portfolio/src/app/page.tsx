"use client";

import { Container, Row, Col, Card, Badge, Image } from 'react-bootstrap';

export default function Home() {
  const projects = [
    {
      title: "AKCMM Website",
      description: "A TYPO3-based CMS website. Implemented Figma designs into HTML/CSS using SwiperJS, Bootstrap, and Chart.js.",
      link: "https://akcmm.org"
    },
    {
      title: "Student Management System",
      description: "Comprehensive student management for the Ministry of Education, Cambodia. Built with Django and React for enrollment and grading.",
      link: "https://sts.moeys.gov.kh/"
    },
    {
      title: "CS Citizen Budget System",
      description: "Public feedback system on government budget allocation. Built with Laravel, Next.js, and Expo with data visualization tools.",
      link: "https://cscitizenbudget.interior.gov.kh/"
    },
    {
      title: "Food Ordering Webapp",
      description: "Restaurant ordering app with admin dashboard. Built with Next.js and NestJS for browsing menus and processing payments.",
      link: "https://shawarma.arian.my/"
    },
  ];

  const blogs = [
    { 
      title: "Building an Audio Waveform in Expo Audio", 
      description: "A practical guide to implementing a fully functional audio waveform using expo-audio, avoiding deprecated APIs.",
      link: "https://arian.my/blog/expo-audio-waveform"
    },
  ];

  // Visual Styles
  const bgGradient = {
    background: "linear-gradient(180deg, #86EFAC 0%, #34D399 40%, #2DD4BF 70%, #14B8A6 100%)",
    minHeight: "100vh",
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  };

  const cardStyle = {
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
    border: 'none',
  };

  const logoMap: Record<string, string> = {
    "Next.js": "nextdotjs", "React": "react", "Expo": "expo", "Bootstrap": "bootstrap",
    "MaterialUI": "mui", "Django": "django", "Node.js": "nodedotjs", "Nestjs": "nestjs",
    "Laravel": "laravel", "TYPO3": "typo3", "Statamic": "statamic"
  };

  return (
    <div style={bgGradient} className="py-5 text-dark">
      <Container style={{ maxWidth: '850px' }}>

        {/* Hero Section */}
        <section className="text-center mb-5 pt-3">
          <div className="mx-auto mb-4">
            <Image
              src="/me/arian.jpg"
              alt="Arian Khadem"
              roundedCircle
              className="profile-img shadow-sm"
              width={130}
              height={130}
            />
          </div>

          <h1 className="display-6 fw-bold mb-3">Hi, It's Arian</h1>
          
          <p className="lead mx-auto mb-3 fw-medium" style={{ maxWidth: '550px', opacity: 0.9 }}>
            Software developer architecting business systems that make life easier.
          </p>

          <p className="small text-dark opacity-75 fst-italic">
            "When not coding, I play guitar. Music and coding is where we go beyond our limits."
          </p>
        </section>

        {/* Tech Stack */}
        <section className="text-center mb-5">
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
            {["Next.js", "React", 'Expo', "Bootstrap", "MaterialUI"].map(skill => (
              <SkillBadge key={skill} skill={skill} logoMap={logoMap} />
            ))}
          </div>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {["Django", "Node.js", "Nestjs", "Laravel", "TYPO3", "Statamic"].map(skill => (
              <SkillBadge key={skill} skill={skill} logoMap={logoMap} />
            ))}
          </div>
        </section>

        {/* Selected Work */}
        <section className="mb-5">
          <h3 className="h6 fw-bold mb-4 text-uppercase text-center opacity-75 ls-1">Selected Works</h3>
          <Row className="g-4">
            {projects.map((project, idx) => (
              <Col key={idx} md={6}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <Card className="h-100 shadow-sm p-2 custom-card rounded-4" style={cardStyle}>
                    <Card.Body>
                      <h5 className="h6 fw-bold mb-2 text-dark">{project.title}</h5>
                      <Card.Text className="small text-secondary lh-sm">
                        {project.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </section>

        {/* Blog */}
        <section className="mb-5">
          <h3 className="h6 fw-bold mb-4 text-uppercase text-center opacity-75 ls-1">Blogs</h3>
          <Row className="justify-content-center">
            {blogs.map((blog, idx) => (
              <Col key={idx} md={12}>
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <Card className="shadow-sm p-2 custom-card rounded-4" style={cardStyle}>
                    <Card.Body>
                      <h5 className="h6 fw-bold mb-2 text-dark">{blog.title}</h5>
                      <Card.Text className="small text-secondary lh-sm">
                        {blog.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </section>

        <footer className="text-center py-4">
          <p className="small text-dark opacity-50 m-0">© 2026 Arian</p>
        </footer>

      </Container>
    </div>
  );
}

// Small helper for cleaner code
function SkillBadge({ skill, logoMap }: { skill: string, logoMap: any }) {
  return (
    <Badge
      pill
      bg="light"
      className="text-dark shadow-sm px-3 py-2 fw-normal d-flex align-items-center gap-2 border border-white"
    >
      <img
        src={`https://cdn.simpleicons.org/${logoMap[skill]}`}
        alt=""
        width="14"
        height="14"
        style={{ opacity: 0.8 }}
      />
      {skill}
    </Badge>
  );
}
