import { useState } from "react";

const phraseMap: Record<string, string> = {
  "lemon tart": "edgy",
  "wee": "small",
  "buttoned up": "carefully planned",
  "extraneous": "irrelevant",
};

function translate(input: string, toEnglish: boolean): string {
  const normalized = input.trim().toLowerCase();
  const map = toEnglish ? phraseMap : Object.fromEntries(
    Object.entries(phraseMap).map(([k, v]) => [v, k])
  );
  return map[normalized] || "Translation not found.";
}

export default function DangleseTranslator() {
  const [input, setInput] = useState("");
  const [toEnglish, setToEnglish] = useState(true);
  const [output, setOutput] = useState("");

  const handleTranslate = () => {
    setOutput(translate(input, toEnglish));
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
        Danglese Phrase Translator
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <span>Danglese ➝ English</span>
        <label>
          <input
            type="checkbox"
            checked={toEnglish}
            onChange={(e) => setToEnglish(e.target.checked)}
          /> Switch
        </label>
        <span>English ➝ Danglese</span>
      </div>
      <input
        type="text"
        placeholder="Enter a phrase..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <button onClick={handleTranslate} style={{ padding: '0.5rem 1rem' }}>Translate</button>
      {output && (
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#f0f0f0', fontSize: '18px' }}>
          {output}
        </div>
      )}
    </div>
  );
}
