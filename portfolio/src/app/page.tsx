"use client";

import { Container, Row, Col, Card, Badge, Image } from 'react-bootstrap';

export default function Home() {
  const projects = [
    { title: "E-Commerce Platform", description: "Full-stack online store with payment integration, inventory management, and admin dashboard", image: "🛍️", color: "#4F46E5" },
    { title: "Task Management App", description: "Collaborative project management tool with real-time updates and team collaboration features", image: "✓", color: "#7C3AED" },
    { title: "Portfolio Builder", description: "No-code platform for creating beautiful portfolio websites with customizable templates", image: "🎨", color: "#2563EB" },
    { title: "Learning Platform", description: "Educational platform with video courses, quizzes, and progress tracking for students", image: "📚", color: "#DC2626" },
    { title: "Restaurant Booking", description: "Restaurant reservation system with table management and customer notifications", image: "🍽️", color: "#EA580C" },
    { title: "Fitness Tracker", description: "Health and fitness app for tracking workouts, nutrition, and personal goals", image: "💪", color: "#16A34A" },
    { title: "Chat Application", description: "Real-time messaging platform with group chats, file sharing, and video calls", image: "💬", color: "#0891B2" },
    { title: "Weather Dashboard", description: "Interactive weather forecasting app with detailed metrics and location-based alerts", image: "🌤️", color: "#0EA5E9" },
    { title: "Blog Platform", description: "Modern blogging platform with markdown support, SEO optimization, and analytics", image: "📝", color: "#8B5CF6" }
  ];

  const blogs = [
    { title: "The Invisible Secret That Fast-Tracked My Developer Career", description: "5 time-tested tips I learned that helped me advance faster in my career without burning out" },
    { title: "Concurrency Without the Pain: A Guide for Beginners", description: "Understanding async programming without the complexity and confusion" },
    { title: "Technical Debt vs Math: Choosing the Best Approaches", description: "Why tech debt isn't always bad and how to balance it with perfect code" }
  ];

  const bgGradient = {
    background: "linear-gradient(180deg, #86EFAC 0%, #34D399 40%, #2DD4BF 70%, #14B8A6 100%)",
    minHeight: "100vh"
  };

  const logoMap = {
    "Next.js": "nextdotjs",
    "React": "react",
    "Expo": "expo",
    "Bootstrap": "bootstrap",
    "MaterialUI": "mui",
    "Django": "django",
    "Node.js": "nodedotjs",
    "Nestjs": "nestjs",
    "Laravel": "laravel",
    "TYPO3": "typo3",
    "Statamic": "statamic"
  };
  return (
    <div style={bgGradient} className="py-5">
      <Container style={{ maxWidth: '900px' }}>
        
        {/* Hero Section */}
        <section className="text-center mb-5">
          <div className="mx-auto mb-4 d-flex align-items-center justify-content-center">
            <Image 
              src="/me/arian.png" 
              alt="Arian Khadem" 
              style={{ width: '128px', height: '128px' }}
            />
          </div>
          
          <h1 className="display-5 fw-bold mb-2 text-dark">Hi, It's Arian</h1>
          
          <p className="lead text-muted mx-auto mb-2" style={{ maxWidth: '600px' }}>
            Software developer that builds business systems.
          </p>

          <p className="text-muted mx-auto mb-2" style={{ maxWidth: '600px' }}>
            I architect and build solutions that make life easier, working with clients across multiple industries.          
          </p>

          <p className="small text-muted fst-italic">
            When not coding, I play guitar. Music and coding is where we go beyond our limits.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="text-center mb-5">
          <h3 className="h6 text-uppercase fw-bold mb-4 tracking-wider">Tech Stack</h3>
          
          <div className="mb-4">
            <p className="fw-bold text-secondary mb-2">Frontend</p>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {["Next.js", "React", 'Expo', "Bootstrap", "MaterialUI"].map(skill => (
                <Badge 
                  key={skill} 
                  pill 
                  bg="white" 
                  className="text-dark shadow-sm px-3 py-2 fw-normal d-flex align-items-center gap-2"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${logoMap[skill]}`} 
                    alt="" 
                    width="16" 
                    height="16" 
                  />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <p className="fw-bold text-secondary mb-2">Backend</p>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {["Django", "Node.js", "Nestjs", "Laravel", "TYPO3", "Statamic"].map(skill => (
                <Badge 
                  key={skill} 
                  pill 
                  bg="white" 
                  className="text-dark shadow-sm px-3 py-2 fw-normal d-flex align-items-center gap-2"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${logoMap[skill]}`} 
                    alt="" 
                    width="16" 
                    height="16" 
                  />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        {/* Selected Work */}
        <section className="mb-5">
          <h3 className="h6 text-uppercase fw-bold mb-4 text-center tracking-wider">Selected Works</h3>
          <Row className="g-4">
            {projects.map((project, idx) => (
              <Col key={idx} md={6} lg={4}>
                <Card className="h-100 border-0 shadow-sm p-4 hover-lift">
                  <div className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                       style={{ width: '60px', height: '60px', background: project.color, fontSize: '1.8rem' }}>
                    {project.image}
                  </div>
                  <h4 className="h6 fw-bold mb-2 text-dark">{project.title}</h4>
                  <Card.Text className="small text-muted leading-relaxed">
                    {project.description}
                  </Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Blog */}
        <section className="mb-5">
          <h3 className="h6 text-uppercase fw-bold mb-4 text-center tracking-wider">Latest Blogs</h3>
          <Row className="g-4">
            {blogs.map((blog, idx) => (
              <Col key={idx} md={6} lg={4}>
                <Card className="h-100 border-0 shadow-sm p-4 hover-lift">
                  <h4 className="h6 fw-bold mb-2 text-dark lh-base">{blog.title}</h4>
                  <Card.Text className="small text-muted leading-relaxed">
                    {blog.description}
                  </Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <footer className="text-center text-secondary py-4">
          <p className="m-0">© 2026 Arian</p>
        </footer>
      </Container>
    </div>
  );
}
