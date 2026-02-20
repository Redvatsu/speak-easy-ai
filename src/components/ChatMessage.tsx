import type { Message } from "@/lib/languageEngine";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

function formatText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part.split("\n").map((line, j) => (
      <span key={`${i}-${j}`}>
        {j > 0 && <br />}
        {line.startsWith("> ") ? (
          <span className="block border-l-2 border-primary/60 pl-3 my-1.5 italic text-muted-foreground">{line.slice(2)}</span>
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
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex items-end gap-2 ${isUser ? "justify-end" : "justify-start"} mb-3`}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center mb-0.5">
          <Bot className="w-4 h-4 text-primary" />
        </div>
      )}
      <div
        className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
          isUser
            ? "bg-primary text-primary-foreground rounded-br-sm"
            : "bg-card text-card-foreground border border-border/60 rounded-bl-sm"
        }`}
      >
        {formatText(message.text)}
      </div>
      {isUser && (
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center mb-0.5">
          <User className="w-4 h-4 text-primary" />
        </div>
      )}
    </motion.div>
  );
}
