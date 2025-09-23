import React, { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import MapComponent from '../../components/MapComponent/MapComponent';

const MapQuizPage = () => {
  const [questions, setQuestions] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch('https://map-api-production.up.railway.app/questions');
        const data = await res.json();
        setQuestions(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchQuestions();
  }, []);

  if (!questions.length) return <div>Loading Questions...</div>;

  return (
    <div className="container my-3">
      <Text mb={4} fontSize="4xl">Map Quiz</Text>
      <hr />
      <MapComponent questions={questions} setLocation={setLocation} />
    </div>
  );
};

export default MapQuizPage;
