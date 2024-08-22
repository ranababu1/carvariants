import React from 'react';
import ManufacturerCard from './components/ManufacturerCard';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Compare Car Variants with Confidence</h1>
        <p className={styles.heroSubtitle}>Make informed decisions on your next vehicle purchase</p>
      </header>

      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeading}>Why Compare Car Variants?</h2>
        <p className={styles.paragraph}>
          Whether you're looking to buy a new car or just exploring your options, comparing car variants is essential. Each variant offers unique features, pricing, and specifications that can significantly impact your driving experience and overall satisfaction with your purchase.
        </p>
        <p className={styles.paragraph}>
          Our platform provides comprehensive comparisons across various aspects, including:
        </p>
        <ul className={styles.featureList}>
          <li>Performance specifications</li>
          <li>Fuel efficiency</li>
          <li>Safety features</li>
          <li>Interior comfort and technology</li>
          <li>Price and value for money</li>
        </ul>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeading}>How It Works</h2>
        <div className={styles.stepGrid}>
          <FeatureCard 
            title="Select Manufacturers" 
            description="Choose from a wide range of car manufacturers" 
            icon="select-icon"
          />
          <FeatureCard 
            title="Pick Models" 
            description="Browse and select specific car models" 
            icon="model-icon"
          />
          <FeatureCard 
            title="Compare Variants" 
            description="View detailed comparisons of different variants" 
            icon="compare-icon"
          />
          <FeatureCard 
            title="Make Informed Decisions" 
            description="Use our insights to choose the right car for you" 
            icon="decision-icon"
          />
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeading}>Featured Car Manufacturers</h2>
        <div className={styles.cardGrid}>
          <ManufacturerCard name="Toyota" description="Discover the latest models from Toyota, known for reliability and efficiency" />
          <ManufacturerCard name="Honda" description="Explore Honda's range of vehicles, blending performance with practicality" />
          <ManufacturerCard name="Ford" description="Find your perfect Ford model, from rugged trucks to sleek sedans" />
          <ManufacturerCard name="BMW" description="Experience luxury and performance with BMW's diverse lineup" />
          <ManufacturerCard name="Tesla" description="Dive into the future of electric vehicles with Tesla's innovative models" />
          <ManufacturerCard name="Volkswagen" description="Explore Volkswagen's range of practical and stylish vehicles for every need" />
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeading}>What Our Users Say</h2>
        <div className={styles.testimonialGrid}>
          <TestimonialCard 
            quote="This comparison tool saved me hours of research. I found the perfect car for my family!"
            author="Sarah M."
          />
          <TestimonialCard 
            quote="The detailed variant comparisons helped me understand the value of different features. Highly recommended!"
            author="John D."
          />
          <TestimonialCard 
            quote="As a car enthusiast, I love how comprehensive the comparisons are. It's my go-to resource now."
            author="Mike R."
          />
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeading}>Stay Informed</h2>
        <p className={styles.paragraph}>
          The automotive industry is constantly evolving. Stay up-to-date with the latest news, reviews, and comparisons by subscribing to our newsletter.
        </p>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder="Enter your email" className={styles.emailInput} />
          <button type="submit" className={styles.submitButton}>Subscribe</button>
        </form>
      </section>
    </div>
  );
}