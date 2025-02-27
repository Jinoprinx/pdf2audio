export default function ProgressBar({ progress }) {
    return (
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-primary h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  }
  