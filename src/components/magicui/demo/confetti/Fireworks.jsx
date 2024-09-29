// Import statement for Button component
import { Button } from "@/components/ui/button";

// Import statement for confetti from canvas-confetti
import confetti from "canvas-confetti";

// Function component definition
export function ConfettiFireworks() {
  const handleClick = () => {
    const duration = 5 * 1000; // Duration of the fireworks animation in milliseconds
    const animationEnd = Date.now() + duration; // Calculate the end time of the animation
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }; // Default confetti settings

    // Function to generate a random number within a specified range
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    // Set interval to create confetti every 250 milliseconds until animationEnd
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now(); // Calculate remaining time

      // If animation time is up, clear the interval
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      // Calculate particle count based on remaining time
      const particleCount = 50 * (timeLeft / duration);

      // Generate confetti at two different origins
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250); // Interval time in milliseconds
  };

  // Return JSX for the component
  return (
    <div className="relative">
      <Button onClick={handleClick}>Trigger Fireworks</Button>
    </div>
  );
}
