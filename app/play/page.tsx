"use client";

import { useEffect, useRef } from "react";
import Webcam from "react-webcam";

function page() {
  const webCamRef = useRef<Webcam | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    const captureFrame = () => {
      if (webCamRef.current && context) {
        context.drawImage(
          webCamRef.current.video!,
          0,
          0,
          canvas!.width,
          canvas!.height
        );

        // Convert the captured frame to a Blob
        canvas!.toBlob(async (blob) => {
          if (blob) {
            // Send the Blob to the backend
            const formData = new FormData();
            formData.append("videoFrame", blob);

            const response = await fetch(
              "http://localhost:8000/api/upload-video-frame",
              {
                method: "POST",
                body: formData,
              }
            );

            console.log(response);
          }
        });
      }
    };

    const intervalId = setInterval(captureFrame, 100); // Capture frames every 100ms

    return () => clearInterval(intervalId);
  }, []);

  const startCamera = () => {
    if (webCamRef.current) {
      webCamRef.current.video?.play();
    }
  };

  const stopCamera = () => {
    if (webCamRef.current) {
      webCamRef.current.video?.pause();
    }
  };

  return (
    <div>
      <h1 className="text-4xl">Play</h1>
      <Webcam audio={false} ref={webCamRef} mirrored={true} />
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={stopCamera}>Stop Camera</button>
      <canvas
        ref={canvasRef}
        style={{ display: "none" }} // Hide the canvas element
        width={640}
        height={480}
      />
    </div>
  );
}

export default page;
