import React from "react";
import { Slider } from "./ui/slider";
import { Card, CardContent } from "./ui/card";

interface AnimationControlsProps {
  speed: number;
  intensity: number;
  onSpeedChange: (value: number) => void;
  onIntensityChange: (value: number) => void;
}

const AnimationControls: React.FC<AnimationControlsProps> = ({
  speed,
  intensity,
  onSpeedChange,
  onIntensityChange,
}) => {
  return (
    <Card className="fixed bottom-4 right-4 w-64 bg-white/95 backdrop-blur-sm shadow-lg border z-50">
      <CardContent className="p-4 space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Animation Speed: {speed}%
          </label>
          <div className="relative z-10">
            <Slider
              value={[speed]}
              onValueChange={(value) => onSpeedChange(value[0])}
              max={100}
              min={1}
              step={1}
              className="w-full cursor-pointer"
            />
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Movement Intensity: {intensity}%
          </label>
          <div className="relative z-10">
            <Slider
              value={[intensity]}
              onValueChange={(value) => onIntensityChange(value[0])}
              max={100}
              min={1}
              step={1}
              className="w-full cursor-pointer"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimationControls;