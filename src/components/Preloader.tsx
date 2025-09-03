import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [showDigital, setShowDigital] = useState(false);
  const [showCtrl, setShowCtrl] = useState(false);
  const [showControl, setShowControl] = useState(false);
  const [showUnlocked, setShowUnlocked] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      // Fade in "Digital"
      setTimeout(() => setShowDigital(true), 500);
      
      // Fade in "CTRL"
      setTimeout(() => setShowCtrl(true), 1200);
      
      // Transform "CTRL" to "Control"
      setTimeout(() => setShowControl(true), 2000);
      
      // Fade in "Unlocked"
      setTimeout(() => setShowUnlocked(true), 2500);
      
      // Complete animation
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800);
      }, 3500);
    };

    sequence();
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-all duration-800 ${
      isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      <div className="text-left space-y-2 max-w-md">
        {/* Digital */}
        <div className={`transition-all duration-800 ${showDigital ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-5xl md:text-6xl font-outfit font-extralight text-foreground">
            Digital
          </h1>
        </div>
        
        {/* CTRL / Control */}
        <div className={`relative transition-all duration-800 ${showCtrl ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-5xl md:text-6xl text-foreground relative">
            <span className={`transition-all duration-500 font-moonwalk font-bold ${showControl ? 'opacity-0' : 'opacity-100'}`}>
              CTRL
            </span>
            <span className={`absolute left-0 top-0 transition-all duration-500 font-outfit font-extralight ${showControl ? 'opacity-100' : 'opacity-0'}`}>
              Control
            </span>
          </h1>
        </div>
        
        {/* Unlocked */}
        <div className={`transition-all duration-800 ${showUnlocked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-5xl md:text-6xl font-outfit font-extralight text-foreground">
            Unlocked
          </h1>
        </div>
      </div>
    </div>
  );
};