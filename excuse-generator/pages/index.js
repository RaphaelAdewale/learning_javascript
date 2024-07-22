import { useState } from "react";

export default function excuseGenerator() {
  let [userInput, setUserInput] = useState();
  let [generatedExcuse, setgeneratedExcuse] = useState();

  function textReceived(text) {
    setgeneratedExcuse(text);
  }

  function handleResponse(response) {
    response.text().then(textReceived)
  }
  function handleClick() {
    console.log("Generating excuse");

    fetch("/api/generate-excuse?user_input=" + userInput).then(handleResponse);
  }

  function onInputChanged(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-white text-black w-80 shadow-lg rounded p-6">
        <div className="text-lg font-bold mb-4">Excuse Generator</div>
        <div className="text-sm text-gray-600 mb-2">How can I help?</div>
        <input
          onChange={onInputChanged} 
          className="p-2 rounded w-full border mb-4"
        />
        <div>
          <button onClick={handleClick} className="bg-blue-500 rounded font-bold text-white p-4 w-full">Generate Excuse</button>
        </div>
        <div className="mt-4 font-bold text-blue-400"> {generatedExcuse} </div>
      </div>
    </div>
  );
}