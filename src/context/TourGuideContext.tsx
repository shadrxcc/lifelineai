// // TourGuideContext.js
// import React, { createContext, useContext, useState } from "react";

// type Props = {
//   children: React.ReactNode;
// };

// type TourGuideContextType = {
//     currentStep: number;
//     startTour: () => void;
//     nextStep: () => void;
//     finishTour: () => void;
//   };

//   const TourGuideContext = createContext<TourGuideContextType | undefined>(undefined);

// const TourGuideProvider: React.FC<Props> = ({ children }) => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const startTour = () => {
//     setCurrentStep(1);
//   };

//   const nextStep = () => {
//     setCurrentStep((prevStep) => prevStep + 1);
//   };

//   const finishTour = () => {
//     setCurrentStep(0);
//   };

//   return (
//     <TourGuideContext.Provider
//       value={{ currentStep, startTour, nextStep, finishTour }}
//     >
//       {children}
//     </TourGuideContext.Provider>
//   );
// };

// const useTourGuide = () => {
//   const context = useContext(TourGuideContext);
//   if (!context) {
//     throw new Error("useTourGuide must be used within a TourGuideProvider");
//   }
//   return context;
// };

// export { TourGuideProvider, useTourGuide };
