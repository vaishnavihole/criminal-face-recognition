// import React, { useRef, useEffect } from 'react';
// import { useFaceDetection } from 'react-use-face-detection';

// const FaceDetectionApp = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const startFaceDetection = async () => {
//       try {
//         const video = videoRef.current;

//         // Get access to the user's camera
//         const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
//         video.srcObject = stream;

//         // Initialize face detection
//         const { start, stop, detect } = useFaceDetection(video);

//         // Start face detection
//         start();

//         // Event listener for face detection
//         video.addEventListener('play', () => {
//           const canvas = useFaceDetection.createCanvas(video);
//           document.body.appendChild(canvas);

//           const draw = async () => {
//             const faces = await detect();
//             useFaceDetection.drawFaceDetection(canvas, faces);

//             // Repeat the draw function
//             requestAnimationFrame(draw);
//           };

//           draw();
//         });

//         // Stop face detection when the component unmounts
//         return () => {
//           stop();
//           stream.getTracks().forEach((track) => track.stop());
//         };
//       } catch (error) {
//         console.error('Error accessing camera:', error);
//       }
//     };

//     startFaceDetection();
//   }, []);

//   return <video ref={videoRef} autoPlay playsInline />;
// };

// export default FaceDetectionApp;
