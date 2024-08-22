// components/FeatureCard.tsx
import React from 'react';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconContainer}>
        <i className={`${styles.icon} ${styles[icon]}`}></i>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeatureCard;