import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import anime from 'animejs';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .typing-container {
    display: inline;
    white-space: nowrap;
  }

  .typing-text {
    position: relative;
    width: auto;
    display: inline;
    min-height: 1.2em;
  }
  
  .typing-cursor {
    display: inline-block;
    position: relative;
    margin-left: 2px;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const TypeAnimation = ({ phrases }) => {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = phrases[phraseIndex];
      
      if (isDeleting) {
        setCurrentPhrase(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(40);
      } else {
        setCurrentPhrase(prev => current.substring(0, prev.length + 1));
        setTypingSpeed(100);
      }
      
      if (!isDeleting && currentPhrase === current) {
        // Start deleting after a pause
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentPhrase === '') {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
        // Short pause after deleting before typing next phrase
        setTypingSpeed(500);
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentPhrase, isDeleting, phraseIndex, phrases, typingSpeed]);
  
  return (
    <span className="typing-container">
      <span className="typing-text">{currentPhrase}</span>
      <span className="typing-cursor">|</span>
    </span>
  );
};

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Phrases to cycle through in the typing animation
  const typingPhrases = [
    "build things.",
    "explore new tech.",
    "code with GenAI.",
    "think outside the box.",
    "embrace the future."
  ];

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi! My name is</h1>;
  const two = <h2 className="big-heading">Anna Bauer.</h2>;
  const three = (
    <h3 className="big-heading">
      <span style={{ fontSize: '0.85em', opacity: 0.95 }}>
        I like to <span style={{ color: 'var(--green)', fontStyle: 'italic' }}><TypeAnimation phrases={typingPhrases} /></span>
      </span>
    </h3>
  );
  const four = (
    <>
      <p>
        I'm a Bay Area data enthusiast excited to help shape the future of GenAI and ML.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://www.linkedin.com/in/annabauer726/"
      target="_blank"
      rel="noreferrer">
      Let's connect!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
