export default function excuseGenerator() {
  return (
    <div className="h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-white w-80 shadow-lg rounded p-6">
        <div className="text-lg font-bold mb-4">Excuse Generator</div>
        <div className="text-sm text-gray-600 mb-2">How can I help?</div>
        <input className="p-2 rounded w-full border mb-4" />
        <div>
          <button className="bg-blue-500 rounded font-bold text-white p-4 w-full">Generate Excuse</button>
        </div>
      </div>
    </div>
  );
}