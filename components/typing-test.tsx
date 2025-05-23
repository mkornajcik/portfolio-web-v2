import { useState, useEffect, useRef } from "react";

export default function TypingTest({ flipped }: { flipped?: boolean }) {
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const totalChars = sentence.length;

  const [inputValue, setInputValue] = useState<string>("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [legToggle, setLegToggle] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [elapsed, setElapsed] = useState<number>(0);

  // Update elapsed time every 100ms
  useEffect(() => {
    if (startTime && !isFinished) {
      timerRef.current = setInterval(() => {
        setElapsed((Date.now() - startTime) / 1000);
      }, 100);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTime, isFinished]);

  // Handle input change
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (!startTime) {
      setStartTime(Date.now());
    }

    // Prevent extra typing beyond sentence length
    if (value.length > totalChars) return;

    setInputValue(value);
    setLegToggle((prev) => !prev);

    // Check completion
    if (value === sentence) {
      setIsFinished(true);
      setEndTime(Date.now());
      if (timerRef.current) clearInterval(timerRef.current);
      if (startTime) setElapsed((Date.now() - startTime) / 1000);
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      handleRestart();
    }
  };

  const handleRestart = () => {
    setInputValue("");
    setStartTime(null);
    setEndTime(null);
    setIsFinished(false);
    setElapsed(0);
    setLegToggle(false);
  };

  const handleBlur = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const renderHighlightedText = () => {
    return sentence.split("").map((char, index) => {
      let color = "";
      if (index < inputValue.length) {
        color = inputValue[index] === char ? "text-green-500" : "text-red-500";
      }
      return (
        <span key={index} className={color}>
          {char}
        </span>
      );
    });
  };

  // Calculate WPM
  function calculateWPM() {
    const wordsTyped = totalChars / 5;
    const minutes = elapsed / 60;
    return isFinished && minutes > 0 ? (wordsTyped / minutes).toFixed(2) : "0.00";
  }

  return (
    <div className="max-w-xl mx-auto mt-10 mb-10 p-4 border-1 border-[#cba6f7] rounded-lg shadow-lg bg-[#313244]">
      <p className="mb-2 text-md font-medium">{renderHighlightedText()}</p>

      {/* Input + Bongo Cat */}
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          disabled={isFinished}
          className="relative w-full p-2 rounded-md focus:outline-none bg-[#1e1e2e]"
          placeholder="Test your speed!"
        />

        <div
          className="
        absolute 
        right-1.5
        top-[-14px]
        transform 
        -translate-y-1/2
        pointer-events-none
        z-0
      "
        >
          <img
            src={flipped ? "/bongo3.png" : legToggle ? "/bongo1.png" : "/bongo2.png"}
            alt="Bongo Cat"
            className="w-42 h-42 relative transform rotate-347 z-0"
          />
        </div>
      </div>

      <div className="mt-4 space-y-2 flex items-center justify-between">
        {!isFinished ? (
          <>
            <div className="text-xs">
              <kbd className="rounded border px-1">TAB</kbd>- restart
            </div>
            <div className="text-xs">
              <p>{elapsed.toFixed(1)}s</p>
            </div>
          </>
        ) : (
          <>
            <div className="text-xs">
              <p>Total Time: {elapsed.toFixed(2)}s</p>
            </div>
            <div className="text-xs">
              <p onClick={handleRestart} className="cursor-pointer hover:text-[#cba6f7] transition hover:scale-115">
                Try again?
              </p>
            </div>
            <div className="text-xs">
              <p>WPM: {calculateWPM()}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
