import { useState } from "react";

export default function FileUploader() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    setError("");
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(file => file.type === "application/pdf");
    
    if (validFiles.length === 0) {
      setError("Only PDF files are allowed.");
      return;
    }

    setFiles([...files, ...validFiles]);
  };

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    const validFiles = uploadedFiles.filter(file => file.type === "application/pdf");

    if (validFiles.length === 0) {
      setError("Only PDF files are allowed.");
      return;
    }

    setFiles([...files, ...validFiles]);
    setError("");
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <div
        className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <p className="text-gray-600">Drag & drop your PDF here</p>
        <p className="text-gray-400 mt-2">or</p>
        <label
          className="text-primary cursor-pointer underline hover:text-secondary"
          htmlFor="fileInput"
        >
          click to upload
        </label>
        <input
          id="fileInput"
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="mt-6">
        {files.map((file, index) => (
          <div key={index} className="flex justify-between items-center mt-2">
            <p className="text-gray-700">{file.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
