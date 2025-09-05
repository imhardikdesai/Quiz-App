import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Button } from '@chakra-ui/react';

// Function to calculate the distance between two points
const calculateDistance = (location1, location2) => {
  const R = 6371; // radius of the earth in kilometers
  const dLat = (location2.lat - location1.lat) * Math.PI / 180;
  const dLon = (location2.lng - location1.lng) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(location1.lat * Math.PI / 180) * Math.cos(location2.lat * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

// List of questions with exact locations and descriptions
const questions = [
  { 
    question: "Where is the Eiffel Tower located?", 
    correctLocation: { name: 'Paris', lat: 48.8566, lng: 2.3522 }
  },
  { 
    question: "Where is the Statue of Liberty?", 
    correctLocation: { name: 'New York', lat: 40.7128, lng: -74.0060 }
  },
  { 
    question: "Where is the Tokyo Tower?", 
    correctLocation: { name: 'Tokyo', lat: 35.6762, lng: 139.6503 }
  },
  { 
    question: "Where is the Big Ben located?", 
    correctLocation: { name: 'London', lat: 51.5074, lng: -0.1278 }
  }
];

// A component that displays a map and allows users to mark a location
const MapComponent = ({ setLocation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null); 
  const [distance, setDistance] = useState(null); 
  const [score, setScore] = useState(0); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  // eslint-disable-next-line no-unused-vars
  const [totalScore, setTotalScore] = useState(0);

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setSelectedLocation({ lat, lng });

    setLocation({ lat, lng });

    const calculatedDistance = calculateDistance({ lat, lng }, questions[currentQuestionIndex].correctLocation);
    setDistance(calculatedDistance);
    
    addScore(calculatedDistance);
  
  };
  
  const addScore = (distance) => {
    if (distance !== null && !isNaN(distance)) {
      const calculatedScore = calculateScore(distance); 
      console.log('Calculated Score:', calculatedScore); 
      setTotalScore(prevTotalScore => prevTotalScore + calculatedScore);
      setScore(calculatedScore);
    } else {
      console.log('Invalid distance');
    }
  };
  
  const calculateScore = (distance) => {
    let score = 0;
    if (distance < 100) {
      score = 100;
    } else if (distance < 500) {
      score = 80;
    } else if (distance < 1000) {
      score = 60;
    } else if (distance < 2000) {
      score = 40;
    } else if (distance < 5000) {
      score = 20;
    } else {
      score = 0;
    }
   return score;
  };

 
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedLocation(null); 
      setDistance(null); 
    } else {
      alert(`You completed the quiz! Your total score is: ${totalScore}`);
    }
  };

  return (
    <div>
      <div style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
        <p>{questions[currentQuestionIndex].question}</p>
      </div>

      <Button colorScheme="blue" onClick={nextQuestion} mt="10px">
        Next Question
      </Button>

      <Button colorScheme="green" onClick={() => alert(`Your score: ${score}`)} mt="10px">
        Submit your answer
      </Button>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={{ lat: 0, lng: 0 }}
          zoom={2}
          onClick={handleMapClick}
        >
          {selectedLocation && (
            <Marker position={selectedLocation} />
          )}

          {selectedLocation && (
            <InfoWindow position={selectedLocation}>
              <div style={{ color: 'black' }}>
                <p>Distance: {distance ? distance.toFixed(2) : 0} km</p>
                <p>Score: {score}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      
    </div>
  );
};

export default MapComponent;