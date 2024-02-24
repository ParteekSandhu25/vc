import { useEffect, useRef } from "react";

const App = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef != null && videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <video ref={videoRef} autoPlay playsInline muted className="border w-3/5 aspect-video"/>
    </div>
  );
};

export default App;
