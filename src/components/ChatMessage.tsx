import type { Message } from "@/lib/languageEngine";

function formatText(text: string) {
  // Simple markdown-like bold and line breaks
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    // Handle line breaks and blockquotes
    return part.split("\n").map((line, j) => (
      <span key={`${i}-${j}`}>
        {j > 0 && <br />}
        {line.startsWith("> ") ? (
          <span className="block border-l-2 border-primary pl-3 my-1 italic">{line.slice(2)}</span>
        ) : line.startsWith("• ") ? (
          <span className="block ml-2">{line}</span>
        ) : (
          line
        )}
      </span>
    ));
  });
}

export default function ChatMessage({ message }: { message: Message }) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-user-bubble text-user-bubble-foreground rounded-br-md"
            : "bg-bot-bubble text-bot-bubble-foreground rounded-bl-md"
        }`}
      >
        {formatText(message.text)}
      </div>
    </div>
  );
}
