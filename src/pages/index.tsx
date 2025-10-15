import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A modern research group exploring science and technology."
    >
      <main>
        <section className="hero-banner">
          <div className="hero-bg">
            <video
              className="hero-bg-video"
              src="/video/output_480p.webm"
              autoPlay
              loop
              muted
              playsInline
              poster="/img/random_frame.jpg"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            >
              <img
                src="/img/random_frame.jpg"
                alt="Background"
                className="hero-bg-fallback"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </video>
          </div>
          <div className="hero-content">
            <div className="hero-content-flex">
              <img
                src="/img/CL_logo.png"
                alt="Cairn's Lab Logo"
                className="hero-logo"
              />
              <div className="hero-content-main">
                <h1 className="hero-title">Cairn's Lab</h1>
                <p className="hero-subtitle">
                  The Centre for Complex Disease and Precision Medicine
                </p>
                <div className="hero-actions">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section card card-center">
          <h2>About Us</h2>
          <p>
            Cairn's Lab is dedicated to pushing the boundaries of science and technology. Our team works on cutting-edge projects in bioinformatics, machine learning, and open-source software.
          </p>
        </section>
      </main>
    </Layout>
  );
}
