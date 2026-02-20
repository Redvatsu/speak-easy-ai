export type Language = "spanish" | "french" | "german" | "italian" | "japanese";
export type Mode = "vocab" | "grammar" | "translate" | "chat";
export type Difficulty = "easy" | "medium" | "hard";

interface VocabItem {
  word: string;
  translation: string;
  hint: string;
  difficulty: Difficulty;
}

const vocabData: Record<Language, VocabItem[]> = {
  spanish: [
    { word: "hola", translation: "hello", hint: "A greeting", difficulty: "easy" },
    { word: "gato", translation: "cat", hint: "A furry pet", difficulty: "easy" },
    { word: "agua", translation: "water", hint: "You drink this", difficulty: "easy" },
    { word: "libro", translation: "book", hint: "You read this", difficulty: "easy" },
    { word: "casa", translation: "house", hint: "You live here", difficulty: "easy" },
    { word: "perro", translation: "dog", hint: "Man's best friend", difficulty: "easy" },
    { word: "sol", translation: "sun", hint: "It shines in the sky", difficulty: "medium" },
    { word: "luna", translation: "moon", hint: "Visible at night", difficulty: "medium" },
    { word: "árbol", translation: "tree", hint: "It has leaves", difficulty: "medium" },
    { word: "comida", translation: "food", hint: "You eat this", difficulty: "medium" },
    { word: "biblioteca", translation: "library", hint: "Full of books", difficulty: "hard" },
    { word: "mariposa", translation: "butterfly", hint: "A colorful insect", difficulty: "hard" },
    { word: "conocimiento", translation: "knowledge", hint: "What you gain from learning", difficulty: "hard" },
  ],
  french: [
    { word: "bonjour", translation: "hello", hint: "A greeting", difficulty: "easy" },
    { word: "chat", translation: "cat", hint: "A furry pet", difficulty: "easy" },
    { word: "eau", translation: "water", hint: "You drink this", difficulty: "easy" },
    { word: "livre", translation: "book", hint: "You read this", difficulty: "easy" },
    { word: "maison", translation: "house", hint: "You live here", difficulty: "easy" },
    { word: "chien", translation: "dog", hint: "Man's best friend", difficulty: "easy" },
    { word: "soleil", translation: "sun", hint: "It shines in the sky", difficulty: "medium" },
    { word: "lune", translation: "moon", hint: "Visible at night", difficulty: "medium" },
    { word: "arbre", translation: "tree", hint: "It has leaves", difficulty: "medium" },
    { word: "nourriture", translation: "food", hint: "You eat this", difficulty: "medium" },
    { word: "bibliothèque", translation: "library", hint: "Full of books", difficulty: "hard" },
    { word: "papillon", translation: "butterfly", hint: "A colorful insect", difficulty: "hard" },
  ],
  german: [
    { word: "hallo", translation: "hello", hint: "A greeting", difficulty: "easy" },
    { word: "Katze", translation: "cat", hint: "A furry pet", difficulty: "easy" },
    { word: "Wasser", translation: "water", hint: "You drink this", difficulty: "easy" },
    { word: "Buch", translation: "book", hint: "You read this", difficulty: "easy" },
    { word: "Haus", translation: "house", hint: "You live here", difficulty: "easy" },
    { word: "Hund", translation: "dog", hint: "Man's best friend", difficulty: "easy" },
    { word: "Sonne", translation: "sun", hint: "It shines in the sky", difficulty: "medium" },
    { word: "Mond", translation: "moon", hint: "Visible at night", difficulty: "medium" },
    { word: "Baum", translation: "tree", hint: "It has leaves", difficulty: "medium" },
    { word: "Essen", translation: "food", hint: "You eat this", difficulty: "medium" },
    { word: "Schmetterling", translation: "butterfly", hint: "A colorful insect", difficulty: "hard" },
    { word: "Bibliothek", translation: "library", hint: "Full of books", difficulty: "hard" },
  ],
  italian: [
    { word: "ciao", translation: "hello", hint: "A greeting", difficulty: "easy" },
    { word: "gatto", translation: "cat", hint: "A furry pet", difficulty: "easy" },
    { word: "acqua", translation: "water", hint: "You drink this", difficulty: "easy" },
    { word: "libro", translation: "book", hint: "You read this", difficulty: "easy" },
    { word: "casa", translation: "house", hint: "You live here", difficulty: "easy" },
    { word: "cane", translation: "dog", hint: "Man's best friend", difficulty: "easy" },
    { word: "sole", translation: "sun", hint: "It shines in the sky", difficulty: "medium" },
    { word: "luna", translation: "moon", hint: "Visible at night", difficulty: "medium" },
    { word: "albero", translation: "tree", hint: "It has leaves", difficulty: "medium" },
    { word: "cibo", translation: "food", hint: "You eat this", difficulty: "medium" },
    { word: "farfalla", translation: "butterfly", hint: "A colorful insect", difficulty: "hard" },
    { word: "biblioteca", translation: "library", hint: "Full of books", difficulty: "hard" },
  ],
  japanese: [
    { word: "こんにちは", translation: "hello", hint: "A greeting", difficulty: "easy" },
    { word: "猫 (neko)", translation: "cat", hint: "A furry pet", difficulty: "easy" },
    { word: "水 (mizu)", translation: "water", hint: "You drink this", difficulty: "easy" },
    { word: "本 (hon)", translation: "book", hint: "You read this", difficulty: "easy" },
    { word: "家 (ie)", translation: "house", hint: "You live here", difficulty: "easy" },
    { word: "犬 (inu)", translation: "dog", hint: "Man's best friend", difficulty: "easy" },
    { word: "太陽 (taiyō)", translation: "sun", hint: "It shines in the sky", difficulty: "medium" },
    { word: "月 (tsuki)", translation: "moon", hint: "Visible at night", difficulty: "medium" },
    { word: "木 (ki)", translation: "tree", hint: "It has leaves", difficulty: "medium" },
    { word: "食べ物 (tabemono)", translation: "food", hint: "You eat this", difficulty: "medium" },
    { word: "図書館 (toshokan)", translation: "library", hint: "Full of books", difficulty: "hard" },
    { word: "蝶 (chō)", translation: "butterfly", hint: "A colorful insect", difficulty: "hard" },
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

const translatePhrases: Record<Language, { phrase: string; answer: string; difficulty: Difficulty }[]> = {
  spanish: [
    { phrase: "Hello", answer: "hola", difficulty: "easy" },
    { phrase: "Thank you", answer: "gracias", difficulty: "easy" },
    { phrase: "Good morning", answer: "buenos días", difficulty: "medium" },
    { phrase: "I love you", answer: "te quiero", difficulty: "medium" },
    { phrase: "How are you?", answer: "¿cómo estás?", difficulty: "medium" },
    { phrase: "My name is...", answer: "me llamo", difficulty: "medium" },
    { phrase: "Where is the bathroom?", answer: "¿dónde está el baño?", difficulty: "hard" },
    { phrase: "I don't understand", answer: "no entiendo", difficulty: "hard" },
  ],
  french: [
    { phrase: "Hello", answer: "bonjour", difficulty: "easy" },
    { phrase: "Thank you", answer: "merci", difficulty: "easy" },
    { phrase: "I love you", answer: "je t'aime", difficulty: "medium" },
    { phrase: "Good morning", answer: "bonjour", difficulty: "medium" },
    { phrase: "How are you?", answer: "comment allez-vous", difficulty: "medium" },
    { phrase: "My name is...", answer: "je m'appelle", difficulty: "medium" },
    { phrase: "I don't understand", answer: "je ne comprends pas", difficulty: "hard" },
  ],
  german: [
    { phrase: "Hello", answer: "hallo", difficulty: "easy" },
    { phrase: "Thank you", answer: "danke", difficulty: "easy" },
    { phrase: "I love you", answer: "ich liebe dich", difficulty: "medium" },
    { phrase: "Good morning", answer: "guten morgen", difficulty: "medium" },
    { phrase: "How are you?", answer: "wie geht es ihnen", difficulty: "medium" },
    { phrase: "My name is...", answer: "ich heiße", difficulty: "medium" },
    { phrase: "I don't understand", answer: "ich verstehe nicht", difficulty: "hard" },
  ],
  italian: [
    { phrase: "Hello", answer: "ciao", difficulty: "easy" },
    { phrase: "Thank you", answer: "grazie", difficulty: "easy" },
    { phrase: "I love you", answer: "ti amo", difficulty: "medium" },
    { phrase: "Good morning", answer: "buongiorno", difficulty: "medium" },
    { phrase: "How are you?", answer: "come stai", difficulty: "medium" },
    { phrase: "My name is...", answer: "mi chiamo", difficulty: "medium" },
    { phrase: "I don't understand", answer: "non capisco", difficulty: "hard" },
  ],
  japanese: [
    { phrase: "Hello", answer: "こんにちは", difficulty: "easy" },
    { phrase: "Thank you", answer: "ありがとう", difficulty: "easy" },
    { phrase: "I love you", answer: "愛してる", difficulty: "medium" },
    { phrase: "Good morning", answer: "おはようございます", difficulty: "medium" },
    { phrase: "How are you?", answer: "お元気ですか", difficulty: "medium" },
    { phrase: "My name is...", answer: "私の名前は", difficulty: "medium" },
    { phrase: "I don't understand", answer: "わかりません", difficulty: "hard" },
  ],
};

export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

export interface QuizState {
  currentItem: VocabItem | null;
  currentPhrase: { phrase: string; answer: string; difficulty?: Difficulty } | null;
  score: number;
  total: number;
  streak: number;
  bestStreak: number;
  usedIndices: number[];
  difficulty: Difficulty;
}

// Levenshtein distance for fuzzy matching
function levenshtein(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = b[i - 1] === a[j - 1]
        ? matrix[i - 1][j - 1]
        : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
    }
  }
  return matrix[b.length][a.length];
}

export function fuzzyMatch(input: string, target: string): "exact" | "close" | "wrong" {
  const normalize = (s: string) => s.trim().toLowerCase().replace(/[¿?!¡.,]/g, "");
  const a = normalize(input);
  const b = normalize(target);
  if (a === b) return "exact";
  if (b.includes(a) && a.length > 2) return "close";
  const dist = levenshtein(a, b);
  if (dist <= Math.max(1, Math.floor(b.length * 0.25))) return "close";
  return "wrong";
}

function pickRandom<T>(arr: T[], usedIndices: number[]): { item: T; index: number } | null {
  const available = arr.map((item, i) => ({ item, i })).filter(({ i }) => !usedIndices.includes(i));
  if (available.length === 0) return null;
  const pick = available[Math.floor(Math.random() * available.length)];
  return { item: pick.item, index: pick.i };
}

function pickByDifficulty<T extends { difficulty: Difficulty }>(
  arr: T[],
  usedIndices: number[],
  difficulty: Difficulty
): { item: T; index: number } | null {
  const available = arr
    .map((item, i) => ({ item, i }))
    .filter(({ i, item }) => !usedIndices.includes(i) && item.difficulty === difficulty);
  if (available.length === 0) {
    // Fallback to any available
    return pickRandom(arr, usedIndices);
  }
  const pick = available[Math.floor(Math.random() * available.length)];
  return { item: pick.item, index: pick.i };
}

// Auto-adjust difficulty based on streak
export function getAdaptiveDifficulty(streak: number, current: Difficulty): Difficulty {
  if (streak >= 4 && current === "easy") return "medium";
  if (streak >= 4 && current === "medium") return "hard";
  if (streak <= -2 && current === "hard") return "medium";
  if (streak <= -2 && current === "medium") return "easy";
  return current;
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
  return `👋 Welcome to **Language Buddy**!\n\nI'll help you practice languages with adaptive difficulty that grows with you.\n\n• 📚 **Vocabulary** — Translate words\n• 📝 **Grammar** — Tips & rules\n• 🔄 **Translate** — Practice phrases\n• 💬 **Chat** — Free conversation\n\nPick a language to start! 🌍`;
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
  const adaptedDiff = getAdaptiveDifficulty(state.streak, state.difficulty);
  const result = pickByDifficulty(items, state.usedIndices, adaptedDiff);
  if (!result) {
    const streakMsg = state.bestStreak > 0 ? `\n🔥 Best streak: **${state.bestStreak}**` : "";
    return {
      message: `🎉 Quiz complete! You scored **${state.score}/${state.total}**!${streakMsg}\n\nType anything to start a new round or switch modes.`,
      newState: { ...state, currentItem: null, usedIndices: [], difficulty: adaptedDiff },
    };
  }
  const diffLabel = result.item.difficulty === "easy" ? "🟢" : result.item.difficulty === "medium" ? "🟡" : "🔴";
  return {
    message: `${diffLabel} **Translate to English:**\n\n> **${result.item.word}**\n\n💡 Hint: ${result.item.hint}`,
    newState: { ...state, currentItem: result.item, usedIndices: [...state.usedIndices, result.index], difficulty: adaptedDiff },
  };
}

export function checkVocabAnswer(answer: string, state: QuizState): { message: string; newState: QuizState } {
  if (!state.currentItem) {
    return { message: "No active question. Start a vocab quiz first!", newState: state };
  }
  const match = fuzzyMatch(answer, state.currentItem.translation);
  const newTotal = state.total + 1;
  let newScore = state.score;
  let newStreak = state.streak;
  let feedback: string;

  if (match === "exact") {
    newScore++;
    newStreak = Math.max(1, newStreak + 1);
    const streakEmoji = newStreak >= 3 ? ` 🔥 ${newStreak} streak!` : "";
    feedback = `✅ Correct! **${state.currentItem.word}** = **${state.currentItem.translation}**${streakEmoji}`;
  } else if (match === "close") {
    newScore++;
    newStreak = Math.max(1, newStreak + 1);
    feedback = `🟡 Close enough! The exact answer is **${state.currentItem.translation}**. I'll count it!`;
  } else {
    newStreak = Math.min(-1, newStreak - 1);
    feedback = `❌ Not quite. **${state.currentItem.word}** = **${state.currentItem.translation}** (you said: "${answer.trim()}")`;
  }

  return {
    message: feedback,
    newState: {
      ...state,
      score: newScore,
      total: newTotal,
      streak: newStreak,
      bestStreak: Math.max(state.bestStreak, newStreak),
      currentItem: null,
    },
  };
}

export function getGrammarTip(language: Language): string {
  const tips = grammarTips[language];
  const tip = tips[Math.floor(Math.random() * tips.length)];
  return `📝 **Grammar Tip:**\n\n${tip}\n\nType **"more"** for another tip, or switch modes!`;
}

export function startTranslateQuiz(language: Language, state: QuizState): { message: string; newState: QuizState } {
  const phrases = translatePhrases[language];
  const adaptedDiff = getAdaptiveDifficulty(state.streak, state.difficulty);
  const result = pickByDifficulty(phrases, state.usedIndices, adaptedDiff);
  if (!result) {
    const streakMsg = state.bestStreak > 0 ? `\n🔥 Best streak: **${state.bestStreak}**` : "";
    return {
      message: `🎉 Translation round complete! Score: **${state.score}/${state.total}**!${streakMsg}\n\nType anything to restart or switch modes.`,
      newState: { ...state, currentPhrase: null, usedIndices: [], difficulty: adaptedDiff },
    };
  }
  const diffLabel = result.item.difficulty === "easy" ? "🟢" : result.item.difficulty === "medium" ? "🟡" : "🔴";
  return {
    message: `${diffLabel} **Translate to ${getLanguageLabel(language)}:**\n\n> "${result.item.phrase}"`,
    newState: { ...state, currentPhrase: result.item, usedIndices: [...state.usedIndices, result.index], difficulty: adaptedDiff },
  };
}

export function checkTranslateAnswer(answer: string, state: QuizState): { message: string; newState: QuizState } {
  if (!state.currentPhrase) {
    return { message: "No active translation. Start a translate quiz first!", newState: state };
  }
  const match = fuzzyMatch(answer, state.currentPhrase.answer);
  const newTotal = state.total + 1;
  let newScore = state.score;
  let newStreak = state.streak;
  let feedback: string;

  if (match === "exact") {
    newScore++;
    newStreak = Math.max(1, newStreak + 1);
    const streakEmoji = newStreak >= 3 ? ` 🔥 ${newStreak} streak!` : "";
    feedback = `✅ Perfect! "${state.currentPhrase.phrase}" = **${state.currentPhrase.answer}**${streakEmoji}`;
  } else if (match === "close") {
    newScore++;
    newStreak = Math.max(1, newStreak + 1);
    feedback = `🟡 Almost! The full answer is: **${state.currentPhrase.answer}**. I'll count it!`;
  } else {
    newStreak = Math.min(-1, newStreak - 1);
    feedback = `❌ The answer is: **${state.currentPhrase.answer}** (you wrote: "${answer.trim()}")`;
  }

  return {
    message: feedback,
    newState: {
      ...state,
      score: newScore,
      total: newTotal,
      streak: newStreak,
      bestStreak: Math.max(state.bestStreak, newStreak),
      currentPhrase: null,
    },
  };
}

const chatResponses: Record<Language, string[]> = {
  spanish: [
    "¡Muy bien! Keep practicing. Try saying: 'Me gusta aprender español' (I like learning Spanish).",
    "Here's a useful phrase: '¿Dónde está el baño?' means 'Where is the bathroom?'",
    "Fun fact: Spanish is the second most spoken native language in the world!",
    "Try this: '¿Puedes ayudarme?' means 'Can you help me?'",
    "Numbers 1-5: uno, dos, tres, cuatro, cinco. Try counting!",
  ],
  french: [
    "Très bien! Try saying: 'J'aime apprendre le français' (I like learning French).",
    "Useful phrase: 'Où sont les toilettes?' means 'Where is the bathroom?'",
    "Fun fact: French is an official language in 29 countries!",
    "Try: 'Pouvez-vous m'aider?' means 'Can you help me?'",
    "Numbers 1-5: un, deux, trois, quatre, cinq. Try counting!",
  ],
  german: [
    "Sehr gut! Try: 'Ich lerne gern Deutsch' (I enjoy learning German).",
    "Useful: 'Wo ist die Toilette?' means 'Where is the bathroom?'",
    "Fun fact: German has many compound words — 'Handschuh' (hand-shoe) means glove!",
    "Try: 'Können Sie mir helfen?' means 'Can you help me?'",
    "Numbers 1-5: eins, zwei, drei, vier, fünf. Try counting!",
  ],
  italian: [
    "Molto bene! Try: 'Mi piace imparare l'italiano' (I like learning Italian).",
    "Useful: 'Dov'è il bagno?' means 'Where is the bathroom?'",
    "Fun fact: Italian is considered the closest living language to Latin!",
    "Try: 'Può aiutarmi?' means 'Can you help me?'",
    "Numbers 1-5: uno, due, tre, quattro, cinque. Try counting!",
  ],
  japanese: [
    "すごい！Try: '日本語を勉強するのが好きです' (I like studying Japanese).",
    "Useful: 'トイレはどこですか？' means 'Where is the bathroom?'",
    "Fun fact: Japanese has three writing systems: Hiragana, Katakana, and Kanji!",
    "Try: '助けてください' means 'Please help me.'",
    "Numbers 1-5: いち, に, さん, し/よん, ご. Try counting!",
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
