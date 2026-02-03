import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LandingSection from '../components/sections/LandingSection';
import QuestionSection from '../components/sections/QuestionSection';
import TransitionSection from '../components/sections/TransitionSection';
import InsightSection from '../components/sections/InsightSection';
import BrandSection from '../components/sections/BrandSection';
import PrizesSection from '../components/sections/PrizesSection';
import RegistrationSection from '../components/sections/RegistrationSection';
import ConfirmationSection from '../components/sections/ConfirmationSection';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const ExerciseFlow = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState(0);
  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState({});
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
    // Create session on mount
    createSession();
  }, [sessionId]);

  const createSession = async () => {
    try {
      const response = await axios.post(`${API_URL}/sessions`, {
        sessionId,
        startTime: new Date()
      });
      setSessionData(response.data);
    } catch (error) {
      console.error('Error creating session:', error);
    }
  };

  const handleAnswer = async (questionIndex, optionIndex) => {
    const newAnswers = { ...answers, [questionIndex]: optionIndex };
    setAnswers(newAnswers);

    // Save answer to backend
    try {
      await axios.post(`${API_URL}/sessions/${sessionId}/answer`, {
        questionIndex,
        answer: optionIndex
      });
    } catch (error) {
      console.error('Error saving answer:', error);
    }
  };

  const handleRegistration = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/registrations`, {
        ...data,
        sessionId,
        answers,
        completedAt: new Date()
      });
      
      setFormData(data);
      setCurrentScreen(currentScreen + 1);
    } catch (error) {
      console.error('Error submitting registration:', error);
      alert('Error submitting registration. Please try again.');
    }
  };

  const handleComplete = () => {
    navigate('/');
  };

  const sections = [
    { type: 'landing', component: LandingSection },
    // Questions 1-5
    ...Array.from({ length: 5 }, (_, i) => ({
      type: 'question',
      component: QuestionSection,
      questionData: {
        section: 'A',
        progress: i + 1,
        total: 5,
        question: [
          'Q1. What is the leading cause of mortality in patients on maintenance hemodialysis?',
          'Q2. Which two omega-3 fatty acids were evaluated in the PISCES trial?',
          'Q3. In PISCES, what was the approximate daily dose of omega-3 fatty acids used?',
          'Q4. Which outcome showed significant reduction in the PISCES trial?',
          'Q5. In real-world dialysis practice, which aspect receives LEAST systematic attention?'
        ][i],
        options: [
          ['Infection', 'Malignancy', 'Cardiovascular disease', 'Dialysis-related complications'],
          ['ALA and DHA', 'EPA and DHA', 'EPA only', 'Mixed plant omega-3'],
          ['<1 g/day', '1–2 g/day', '4 g/day (EPA 1.6g + DHA 0.8g)', 'Diet-based intake only'],
          ['Lipid levels only', 'Blood pressure only', 'Serious cardiovascular events', 'Dialysis adequacy'],
          ['Adequacy monitoring (Kt/V)', 'Anemia management', 'Cardiovascular risk & chronic inflammation', 'Bone mineral disorder']
        ][i],
        correct: [2, 1, 2, 2, 2][i],
        feedback: [
          '✓ Correct! Cardiovascular disease accounts for >75% of mortality in dialysis patients (Foley et al.).',
          '✓ Correct! PISCES evaluated EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid).',
          '✓ Correct! PISCES used 4g daily (1600mg EPA + 800mg DHA). This is significantly higher than most available formulations.',
          '✓ Correct! PISCES showed a 43% reduction in serious cardiovascular events (HR 0.57, P<0.001).',
          '✓ Correct! Despite high CV mortality, systematic cardiovascular risk management remains underaddressed in dialysis care.'
        ][i],
        index: i
      }
    })),
    { type: 'transition', component: TransitionSection },
    // Questions 6-8
    ...Array.from({ length: 3 }, (_, i) => ({
      type: 'question',
      component: QuestionSection,
      questionData: {
        section: 'B',
        progress: i + 1,
        total: 3,
        question: [
          'Q6. Which dialysis patients are MOST likely to benefit from anti-inflammatory supportive care?',
          'Q7. In your practice, how often do you encounter persistently elevated CRP or low albumin without obvious infection?',
          'Q8. Do you feel that commonly available omega-3 supplements match doses used in outcome trials?'
        ][i],
        options: [
          ['Young patients with good nutrition', 'Patients with low albumin, high CRP, fatigue, CV risk', 'Only hypertriglyceridemia patients', 'Asymptomatic patients'],
          ['Rare', 'Sometimes', 'Frequently', 'Almost always'],
          ['Yes', 'No', 'Not sure']
        ][i],
        correct: [1, -1, 1][i],
        feedback: [
          '✓ Correct! Patients with markers of inflammation and malnutrition are at highest cardiovascular risk.',
          'Thank you for your response. Chronic inflammation is indeed highly prevalent in dialysis patients.',
          '✓ You\'re right. Most market products contain 300-500mg EPA+DHA per capsule. PISCES used 2400mg total - approximately 5-8x higher.'
        ][i],
        index: i + 5
      }
    })),
    { type: 'insight', component: InsightSection },
    { type: 'brand', component: BrandSection },
    { type: 'prizes', component: PrizesSection },
    { type: 'registration', component: RegistrationSection },
    { type: 'confirmation', component: ConfirmationSection }
  ];

  const currentSection = sections[currentScreen];

  if (!currentSection) {
    return null;
  }

  const commonProps = {
    onNext: () => setCurrentScreen(currentScreen + 1),
    onSkip: (targetScreen) => setCurrentScreen(targetScreen),
    currentScreen,
    totalScreens: sections.length
  };

  const Component = currentSection.component;

  if (currentSection.type === 'question') {
    return (
      <Component
        {...commonProps}
        {...currentSection.questionData}
        answer={answers[currentSection.questionData.index]}
        onAnswer={(optionIndex) => handleAnswer(currentSection.questionData.index, optionIndex)}
      />
    );
  }

  if (currentSection.type === 'registration') {
    return (
      <Component
        {...commonProps}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleRegistration}
      />
    );
  }

  if (currentSection.type === 'confirmation') {
    return (
      <Component
        {...commonProps}
        formData={formData}
        onComplete={handleComplete}
      />
    );
  }

  return <Component {...commonProps} />;
};

export default ExerciseFlow;