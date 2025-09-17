import { useState, useEffect } from "react";
import axios from "axios";

export default function PsychometricTest() {
  const [questions, setQuestions] = useState([]);
  const [startTest, setStartTest] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState(null);

  // Fetch questions from backend on component mount
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("token"); // JWT from login
        const { data } = await axios.get(
          "http://localhost:5000/api/psychometric/questions",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setQuestions(data);
      } catch (err) {
        console.error("Error fetching questions:", err.response?.data || err.message);
      }
    };
    fetchQuestions();
  }, []);

  const handleStartTest = () => setStartTest(true);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = { questionId: questions[currentQuestion]._id, answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitAnswers(newAnswers);
    }
  };

  // Submit answers to backend
  const handleSubmitAnswers = async (answers) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.post(
        "http://localhost:5000/api/psychometric/submit",
        { answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResultData(data);
      setShowResult(true);
    } catch (err) {
      console.error("Error submitting answers:", err.response?.data || err.message);
      alert("Failed to submit test. Try again.");
    }
  };

  const handleRestart = () => {
    setStartTest(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResultData(null);
  };

  const progressPercent = questions.length ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <div className="max-w-4xl p-6 mx-auto mt-10">
      {!startTest && !showResult && (
        <div className="p-10 text-center shadow-xl bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-500 rounded-3xl animate-fade-in">
          <h2 className="mb-6 text-4xl font-bold text-white drop-shadow-lg">
            Ready to Discover Your Strengths?
          </h2>
          <p className="mb-6 text-white/90">
            Take our professional psychometric test and gain insights about your skills and personality.
          </p>
          <button
            onClick={handleStartTest}
            className="px-8 py-4 text-lg font-semibold text-white transition-transform duration-300 bg-yellow-500 rounded-full shadow-lg hover:scale-105 hover:bg-yellow-400 animate-bounce"
          >
            Start Test
          </button>
        </div>
      )}

      {startTest && !showResult && questions.length > 0 && (
        <div className="p-8 bg-white shadow-xl rounded-2xl animate-fade-in">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <div className="h-2 mb-6 bg-gray-200 rounded-full">
            <div
              className="h-2 transition-all duration-300 bg-indigo-600 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <p className="mb-6 text-lg text-gray-700">{questions[currentQuestion].question}</p>

          <div className="flex flex-col space-y-4">
            {questions[currentQuestion].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="px-6 py-3 text-white transition-transform duration-300 bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {showResult && resultData && (
        <div className="p-8 text-center text-white shadow-xl bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-500 rounded-2xl animate-fade-in">
          <h2 className="mb-6 text-3xl font-bold drop-shadow-lg">Your Test Results</h2>
          <p className="mb-4 text-lg">
            You have completed the psychometric test! Here's your career suggestion:
          </p>
          <ul className="max-w-md mx-auto mb-6 text-left">
            {resultData.recommendations.map((rec, idx) => (
              <li key={idx} className="mb-2">
                <strong>Course:</strong> {rec.courseName} <br />
                <strong>Degree:</strong> {rec.degree} <br />
                <strong>College:</strong> {rec.college} <br />
                <strong>Field:</strong> {rec.careerField}
              </li>
            ))}
          </ul>
          <button
            onClick={handleRestart}
            className="px-8 py-3 text-lg font-semibold text-purple-700 transition-transform duration-300 bg-white rounded-full shadow-lg hover:scale-105 hover:bg-gray-100"
          >
            Restart Test
          </button>
        </div>
      )}
    </div>
  );
}
