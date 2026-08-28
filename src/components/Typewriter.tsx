import { useEffect, useRef, useState } from 'react';

type TerminalLine = {
  prompt: string;
  command: string;
  output: string;
};

type TypewriterProps = {
  lines: TerminalLine[];
  speed?: number;
};

export default function Typewriter({ lines, speed = 45 }: TypewriterProps) {
  const [displayedLines, setDisplayedLines] = useState<
    { prompt: string; command: string; output: string }[]
  >([]);
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState<'command' | 'output' | 'done'>('command');
  const [showCaret, setShowCaret] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setShowCaret(false);
      return;
    }

    const line = lines[lineIndex];
    const fullText = phase === 'command' ? line.command : line.output;

    if (currentText.length < fullText.length) {
      const timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }

    const pauseTimer = setTimeout(() => {
      if (phase === 'command') {
        setDisplayedLines((prev) => [
          ...prev,
          { prompt: line.prompt, command: currentText, output: '' },
        ]);
        setCurrentText('');
        setPhase('output');
      } else {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            output: currentText,
          };
          return updated;
        });
        setCurrentText('');
        setLineIndex((i) => i + 1);
        setPhase('command');
      }
    }, phase === 'command' ? 200 : 150);

    return () => clearTimeout(pauseTimer);
  }, [currentText, lineIndex, phase, lines, speed]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines, currentText]);

  return (
    <div
      ref={containerRef}
      className="rounded-xl border border-ink-700 bg-ink-900/80 p-4 sm:p-5 font-mono text-sm shadow-2xl shadow-accent-950/20"
    >
      <div className="mb-3 flex items-center gap-2 border-b border-ink-700 pb-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-ink-400">bash</span>
      </div>

      <div className="space-y-1.5">
        {displayedLines.map((line, i) => (
          <div key={i}>
            <div className="flex gap-2">
              <span className="text-accent-400">{line.prompt}</span>
              <span className="text-ink-100">{line.command}</span>
            </div>
            {line.output && (
              <div className="text-ink-300 pl-4">{'→ '}{line.output}</div>
            )}
          </div>
        ))}

        {lineIndex < lines.length && (
          <div className="flex gap-2">
            <span className="text-accent-400">{lines[lineIndex].prompt}</span>
            <span className="text-ink-100">
              {currentText}
              {showCaret && (
                <span className="ml-0.5 inline-block w-2 animate-caret-blink bg-accent-400 text-transparent">
                  |
                </span>
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
