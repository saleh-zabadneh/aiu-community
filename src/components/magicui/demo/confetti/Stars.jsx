import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import ShimmerButton from "@/components/magicui/ShimmerButton";
import { CodeIcon } from "@radix-ui/react-icons";

export function ConfettiStars() {
  const handleClick = () => {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  return (
    <>
      <ShimmerButton
        onClick={handleClick}
        className="flex items-center justify-center gap-2 mx-auto mt-12 shadow-2xl"
      >
        <CodeIcon width={"36"} />
        Lets Code
      </ShimmerButton>
    </>
  );
}
