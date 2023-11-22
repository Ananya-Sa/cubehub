"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import useWebSocket from "react-use-websocket";
import Webcam from "react-webcam";
import { Socket, io } from "socket.io-client";

function page() {
  const webCamRef = useRef<Webcam | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { sendMessage, getWebSocket } = useWebSocket("ws://localhost:8000/ws");

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const socket = getWebSocket();

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
            sendMessage(blob);
          }
        });
      }
    };

    const intervalId = setInterval(captureFrame, 100); // Capture frames every 100ms

    return () => {
      clearInterval(intervalId);
      socket?.close();
    };
  }, []);

  const startCamera = () => {
    if (webCamRef.current) {
      webCamRef.current.video?.play();
      setIsPlaying(true);
    }
  };

  const stopCamera = () => {
    if (webCamRef.current) {
      webCamRef.current.video?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="max-w-[90%] mx-auto mt-6">
      <div>
        <Webcam
          audio={false}
          ref={webCamRef}
          mirrored={true}
          className={`rounded-md border border-white ${
            isPlaying ? "" : "hidden"
          }`}
          videoConstraints={{
            height: 600,
            width: 1000,
          }}
        />

        <p className={`${isPlaying ? "hidden" : ""} `}>No video</p>
      </div>
      <Button onClick={startCamera}>Start Camera</Button>
      <Button onClick={stopCamera}>Stop Camera</Button>
      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
        width={16 * 50}
        height={9 * 50}
      />
    </div>
  );
}

export default page;
