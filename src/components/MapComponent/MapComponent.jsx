import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import { Button } from '@chakra-ui/react';

// Function to calculate distance
const calculateDistance = (location1, location2) => {
  const R = 6371;
  const dLat = (location2.lat - location1.lat) * Math.PI / 180;
  const dLon = (location2.lng - location1.lng) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(location1.lat * Math.PI / 180) * Math.cos(location2.lat * Math.PI / 180) *
            Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const MapComponent = ({ questions, setLocation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const handleMapClick = (e) => {
    if (!questions.length) return;
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setSelectedLocation({ lat, lng });
    setLocation({ lat, lng });

    const dist = calculateDistance({ lat, lng }, questions[currentQuestionIndex].correctLocation);
    setDistance(dist);

    const calculatedScore = calculateScore(dist);
    setScore(calculatedScore);
    setTotalScore(prev => prev + calculatedScore);
  };

  const calculateScore = (distance) => {
    if (distance < 100) return 100;
    if (distance < 500) return 80;
    if (distance < 1000) return 60;
    if (distance < 2000) return 40;
    if (distance < 5000) return 20;
    return 0;
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedLocation(null);
      setDistance(null);
    } else {
      alert(`Quiz finished! Total score: ${totalScore}`);
    }
  };

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div>
      <p>{questions[currentQuestionIndex]?.question}</p>

      <Button colorScheme="blue" onClick={nextQuestion} mt="10px">
        Next Question
      </Button>

      <Button colorScheme="green" onClick={() => alert(`Your score: ${score}`)} mt="10px">
        Submit Answer
      </Button>

      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: 0, lng: 0 }}
        zoom={2}
        onClick={handleMapClick}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
        {selectedLocation && (
          <InfoWindow 
            position={selectedLocation} 
            key={`${selectedLocation.lat}-${selectedLocation.lng}`}
          >
            <div style={{ color: 'black' }}>
              <p>Distance: {distance !== null ? distance.toFixed(2) : 'N/A'} km</p>
              <p>Score: {score}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;

