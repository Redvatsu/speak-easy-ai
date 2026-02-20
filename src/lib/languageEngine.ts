export type Language = "spanish" | "french" | "german" | "italian" | "japanese";
export type Mode = "vocab" | "grammar" | "translate" | "chat";

interface VocabItem {
  word: string;
  translation: string;
  hint: string;
}

const vocabData: Record<Language, VocabItem[]> = {
  spanish: [
    { word: "hola", translation: "hello", hint: "A greeting" },
    { word: "gato", translation: "cat", hint: "A furry pet" },
    { word: "agua", translation: "water", hint: "You drink this" },
    { word: "libro", translation: "book", hint: "You read this" },
    { word: "casa", translation: "house", hint: "You live here" },
    { word: "perro", translation: "dog", hint: "Man's best friend" },
    { word: "sol", translation: "sun", hint: "It shines in the sky" },
    { word: "luna", translation: "moon", hint: "Visible at night" },
    { word: "árbol", translation: "tree", hint: "It has leaves" },
    { word: "comida", translation: "food", hint: "You eat this" },
  ],
  french: [
    { word: "bonjour", translation: "hello", hint: "A greeting" },
    { word: "chat", translation: "cat", hint: "A furry pet" },
    { word: "eau", translation: "water", hint: "You drink this" },
    { word: "livre", translation: "book", hint: "You read this" },
    { word: "maison", translation: "house", hint: "You live here" },
    { word: "chien", translation: "dog", hint: "Man's best friend" },
    { word: "soleil", translation: "sun", hint: "It shines in the sky" },
    { word: "lune", translation: "moon", hint: "Visible at night" },
    { word: "arbre", translation: "tree", hint: "It has leaves" },
    { word: "nourriture", translation: "food", hint: "You eat this" },
  ],
  german: [
    { word: "hallo", translation: "hello", hint: "A greeting" },
    { word: "Katze", translation: "cat", hint: "A furry pet" },
    { word: "Wasser", translation: "water", hint: "You drink this" },
    { word: "Buch", translation: "book", hint: "You read this" },
    { word: "Haus", translation: "house", hint: "You live here" },
    { word: "Hund", translation: "dog", hint: "Man's best friend" },
    { word: "Sonne", translation: "sun", hint: "It shines in the sky" },
    { word: "Mond", translation: "moon", hint: "Visible at night" },
    { word: "Baum", translation: "tree", hint: "It has leaves" },
    { word: "Essen", translation: "food", hint: "You eat this" },
  ],
  italian: [
    { word: "ciao", translation: "hello", hint: "A greeting" },
    { word: "gatto", translation: "cat", hint: "A furry pet" },
    { word: "acqua", translation: "water", hint: "You drink this" },
    { word: "libro", translation: "book", hint: "You read this" },
    { word: "casa", translation: "house", hint: "You live here" },
    { word: "cane", translation: "dog", hint: "Man's best friend" },
    { word: "sole", translation: "sun", hint: "It shines in the sky" },
    { word: "luna", translation: "moon", hint: "Visible at night" },
    { word: "albero", translation: "tree", hint: "It has leaves" },
    { word: "cibo", translation: "food", hint: "You eat this" },
  ],
  japanese: [
    { word: "こんにちは", translation: "hello", hint: "A greeting" },
    { word: "猫 (neko)", translation: "cat", hint: "A furry pet" },
    { word: "水 (mizu)", translation: "water", hint: "You drink this" },
    { word: "本 (hon)", translation: "book", hint: "You read this" },
    { word: "家 (ie)", translation: "house", hint: "You live here" },
    { word: "犬 (inu)", translation: "dog", hint: "Man's best friend" },
    { word: "太陽 (taiyō)", translation: "sun", hint: "It shines in the sky" },
    { word: "月 (tsuki)", translation: "moon", hint: "Visible at night" },
    { word: "木 (ki)", translation: "tree", hint: "It has leaves" },
    { word: "食べ物 (tabemono)", translation: "food", hint: "You eat this" },
  ],
};

const grammarTips: Record<Language, string[]> = {
  spanish: [
    "Spanish has two 'to be' verbs: 'ser' (permanent) and 'estar' (temporary). Example: 'Yo soy alto' (I am tall) vs 'Yo estoy cansado' (I am tired).",
    "Adjectives usually come AFTER the noun: 'el gato negro' (the black cat), not 'el negro gato'.",
    "To make a sentence negative, put 'no' before the verb: 'No hablo español' (I don't speak Spanish).",
    "Questions can be formed by inverting subject-verb order or just using ¿ and ? marks: '¿Hablas español?'",
    "The present tense of '-ar' verbs: hablar → hablo, hablas, habla, hablamos, habláis, hablan.",
  ],
  french: [
    "French nouns have gender (masculine/feminine). Use 'le/un' for masculine, 'la/une' for feminine: 'le livre' (the book), 'la maison' (the house).",
    "To negate, wrap the verb with 'ne...pas': 'Je ne parle pas français' (I don't speak French).",
    "Adjectives usually follow the noun, but BAGS adjectives (Beauty, Age, Goodness, Size) come before: 'une belle maison'.",
    "The verb 'être' (to be): je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.",
    "Use 'est-ce que' to form questions: 'Est-ce que tu parles français?' (Do you speak French?)",
  ],
  german: [
    "German has three genders: der (masculine), die (feminine), das (neuter). Example: 'der Hund' (the dog), 'die Katze' (the cat).",
    "The verb always goes in second position in main clauses: 'Ich spreche Deutsch' (I speak German).",
    "German capitalizes ALL nouns, not just proper nouns: 'das Buch' (the book), 'die Sonne' (the sun).",
    "To negate, use 'nicht' (for verbs/adjectives) or 'kein' (for nouns): 'Ich spreche nicht Deutsch'.",
    "The verb 'sein' (to be): ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie sind.",
  ],
  italian: [
    "Italian articles: 'il/lo/un' (masculine), 'la/una' (feminine). Example: 'il libro' (the book), 'la casa' (the house).",
    "Adjectives agree with the noun in gender and number: 'il gatto nero' (the black cat), 'la casa nera' (the black house).",
    "Double negatives are correct in Italian: 'Non ho niente' (I don't have nothing = I have nothing).",
    "The verb 'essere' (to be): io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono.",
    "To form questions, use rising intonation or invert: 'Parli italiano?' (Do you speak Italian?)",
  ],
  japanese: [
    "Japanese sentence order is Subject-Object-Verb: '私は本を読みます' (I book read = I read a book).",
    "Particles mark grammatical roles: 'は' (wa) = topic, 'を' (wo) = object, 'に' (ni) = direction/time.",
    "There are three writing systems: Hiragana (native words), Katakana (foreign words), Kanji (Chinese characters).",
    "Politeness matters: 'です/ます' forms are polite, dictionary forms are casual.",
    "To negate present tense polite: change '-ます' to '-ません': '食べます' → '食べません' (don't eat).",
  ],
};

const translatePhrases: Record<Language, { phrase: string; answer: string }[]> = {
  spanish: [
    { phrase: "I love you", answer: "te quiero" },
    { phrase: "Good morning", answer: "buenos días" },
    { phrase: "Thank you", answer: "gracias" },
    { phrase: "How are you?", answer: "¿cómo estás?" },
    { phrase: "My name is...", answer: "me llamo" },
  ],
  french: [
    { phrase: "I love you", answer: "je t'aime" },
    { phrase: "Good morning", answer: "bonjour" },
    { phrase: "Thank you", answer: "merci" },
    { phrase: "How are you?", answer: "comment allez-vous" },
    { phrase: "My name is...", answer: "je m'appelle" },
  ],
  german: [
    { phrase: "I love you", answer: "ich liebe dich" },
    { phrase: "Good morning", answer: "guten morgen" },
    { phrase: "Thank you", answer: "danke" },
    { phrase: "How are you?", answer: "wie geht es ihnen" },
    { phrase: "My name is...", answer: "ich heiße" },
  ],
  italian: [
    { phrase: "I love you", answer: "ti amo" },
    { phrase: "Good morning", answer: "buongiorno" },
    { phrase: "Thank you", answer: "grazie" },
    { phrase: "How are you?", answer: "come stai" },
    { phrase: "My name is...", answer: "mi chiamo" },
  ],
  japanese: [
    { phrase: "I love you", answer: "愛してる" },
    { phrase: "Good morning", answer: "おはようございます" },
    { phrase: "Thank you", answer: "ありがとう" },
    { phrase: "How are you?", answer: "お元気ですか" },
    { phrase: "My name is...", answer: "私の名前は" },
  ],
};

export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

export interface QuizState {
  currentItem: VocabItem | null;
  currentPhrase: { phrase: string; answer: string } | null;
  score: number;
  total: number;
  usedIndices: number[];
}

function pickRandom<T>(arr: T[], usedIndices: number[]): { item: T; index: number } | null {
  const available = arr.map((item, i) => ({ item, i })).filter(({ i }) => !usedIndices.includes(i));
  if (available.length === 0) return null;
  const pick = available[Math.floor(Math.random() * available.length)];
  return { item: pick.item, index: pick.i };
}

export function validateInput(input: string): string | null {
  if (!input || input.trim().length === 0) {
    return "Please type something! I can't work with empty input. 😊";
  }
  if (input.trim().length > 500) {
    return "That's quite long! Please keep your message under 500 characters.";
  }
  return null;
}

export function getWelcomeMessage(): string {
  return `👋 Welcome to **Language Buddy**!\n\nI can help you practice:\n• 📚 **Vocabulary** — Learn new words\n• 📝 **Grammar** — Tips & rules\n• 🔄 **Translate** — Practice phrases\n• 💬 **Chat** — Free conversation\n\nFirst, pick a language, then choose a mode!`;
}

export function getLanguageLabel(lang: Language): string {
  const labels: Record<Language, string> = {
    spanish: "🇪🇸 Spanish",
    french: "🇫🇷 French",
    german: "🇩🇪 German",
    italian: "🇮🇹 Italian",
    japanese: "🇯🇵 Japanese",
  };
  return labels[lang];
}

export function startVocabQuiz(language: Language, state: QuizState): { message: string; newState: QuizState } {
  const items = vocabData[language];
  const result = pickRandom(items, state.usedIndices);
  if (!result) {
    return {
      message: `🎉 Quiz complete! You scored **${state.score}/${state.total}**!\n\nType anything to start a new round or switch modes.`,
      newState: { ...state, currentItem: null, usedIndices: [] },
    };
  }
  return {
    message: `**Translate this word to English:**\n\n> **${result.item.word}**\n\n💡 Hint: ${result.item.hint}`,
    newState: { ...state, currentItem: result.item, usedIndices: [...state.usedIndices, result.index] },
  };
}

export function checkVocabAnswer(answer: string, state: QuizState): { message: string; newState: QuizState } {
  if (!state.currentItem) {
    return { message: "No active question. Start a vocab quiz first!", newState: state };
  }
  const correct = answer.trim().toLowerCase() === state.currentItem.translation.toLowerCase();
  const newScore = correct ? state.score + 1 : state.score;
  const newTotal = state.total + 1;
  const feedback = correct
    ? `✅ Correct! **${state.currentItem.word}** = **${state.currentItem.translation}**`
    : `❌ Not quite. **${state.currentItem.word}** = **${state.currentItem.translation}** (you said: "${answer.trim()}")`;

  return {
    message: feedback,
    newState: { ...state, score: newScore, total: newTotal, currentItem: null },
  };
}

export function getGrammarTip(language: Language): string {
  const tips = grammarTips[language];
  const tip = tips[Math.floor(Math.random() * tips.length)];
  return `📝 **Grammar Tip:**\n\n${tip}\n\nType **"more"** for another tip, or switch modes!`;
}

export function startTranslateQuiz(language: Language, state: QuizState): { message: string; newState: QuizState } {
  const phrases = translatePhrases[language];
  const result = pickRandom(phrases, state.usedIndices);
  if (!result) {
    return {
      message: `🎉 Translation round complete! Score: **${state.score}/${state.total}**!\n\nType anything to restart or switch modes.`,
      newState: { ...state, currentPhrase: null, usedIndices: [] },
    };
  }
  return {
    message: `**Translate to ${language}:**\n\n> "${result.item.phrase}"`,
    newState: { ...state, currentPhrase: result.item, usedIndices: [...state.usedIndices, result.index] },
  };
}

export function checkTranslateAnswer(answer: string, state: QuizState): { message: string; newState: QuizState } {
  if (!state.currentPhrase) {
    return { message: "No active translation. Start a translate quiz first!", newState: state };
  }
  const normalize = (s: string) => s.trim().toLowerCase().replace(/[¿?!¡.,]/g, "");
  const correct = normalize(answer) === normalize(state.currentPhrase.answer);
  const partial = normalize(state.currentPhrase.answer).includes(normalize(answer)) && normalize(answer).length > 2;
  const newScore = correct ? state.score + 1 : state.score;
  const newTotal = state.total + 1;

  let feedback: string;
  if (correct) {
    feedback = `✅ Perfect! "${state.currentPhrase.phrase}" = **${state.currentPhrase.answer}**`;
  } else if (partial) {
    feedback = `🟡 Close! The full answer is: **${state.currentPhrase.answer}**`;
  } else {
    feedback = `❌ The answer is: **${state.currentPhrase.answer}** (you wrote: "${answer.trim()}")`;
  }

  return {
    message: feedback,
    newState: { ...state, score: newScore, total: newTotal, currentPhrase: null },
  };
}

const chatResponses: Record<Language, string[]> = {
  spanish: [
    "¡Muy bien! Keep practicing. Try saying: 'Me gusta aprender español' (I like learning Spanish).",
    "Here's a useful phrase: '¿Dónde está el baño?' means 'Where is the bathroom?'",
    "Fun fact: Spanish is the second most spoken native language in the world!",
    "Try this: '¿Puedes ayudarme?' means 'Can you help me?'",
  ],
  french: [
    "Très bien! Try saying: 'J'aime apprendre le français' (I like learning French).",
    "Useful phrase: 'Où sont les toilettes?' means 'Where is the bathroom?'",
    "Fun fact: French is an official language in 29 countries!",
    "Try: 'Pouvez-vous m'aider?' means 'Can you help me?'",
  ],
  german: [
    "Sehr gut! Try: 'Ich lerne gern Deutsch' (I enjoy learning German).",
    "Useful: 'Wo ist die Toilette?' means 'Where is the bathroom?'",
    "Fun fact: German has many compound words — 'Handschuh' (hand-shoe) means glove!",
    "Try: 'Können Sie mir helfen?' means 'Can you help me?'",
  ],
  italian: [
    "Molto bene! Try: 'Mi piace imparare l'italiano' (I like learning Italian).",
    "Useful: 'Dov'è il bagno?' means 'Where is the bathroom?'",
    "Fun fact: Italian is considered the closest living language to Latin!",
    "Try: 'Può aiutarmi?' means 'Can you help me?'",
  ],
  japanese: [
    "すごい！Try: '日本語を勉強するのが好きです' (I like studying Japanese).",
    "Useful: 'トイレはどこですか？' means 'Where is the bathroom?'",
    "Fun fact: Japanese has three writing systems: Hiragana, Katakana, and Kanji!",
    "Try: '助けてください' means 'Please help me.'",
  ],
};

export function getChatResponse(language: Language): string {
  const responses = chatResponses[language];
  return `💬 ${responses[Math.floor(Math.random() * responses.length)]}`;
}

export const ALL_LANGUAGES: Language[] = ["spanish", "french", "german", "italian", "japanese"];
export const ALL_MODES: { id: Mode; label: string; icon: string }[] = [
  { id: "vocab", label: "Vocabulary", icon: "📚" },
  { id: "grammar", label: "Grammar", icon: "📝" },
  { id: "translate", label: "Translate", icon: "🔄" },
  { id: "chat", label: "Chat", icon: "💬" },
];
