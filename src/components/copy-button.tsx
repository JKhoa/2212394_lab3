"use client";

export default function CopyButton({ text }: { text: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("✅ Đã copy!");
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-colors inline-block font-medium"
    >
      📋 Copy
    </button>
  );
}
