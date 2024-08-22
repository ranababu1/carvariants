// components/TestimonialCard.tsx
import React from 'react';
import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className={styles.testimonialCard}>
      <blockquote className={styles.quote}>{quote}</blockquote>
      <p className={styles.author}>- {author}</p>
    </div>
  );
};

export default TestimonialCard;