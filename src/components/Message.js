export default function Message({ text, sender }) {
  return (
    <div
      className={`p-3 rounded-lg max-w-xs mb-2 ${
        sender === "user"
          ? "bg-orange-500 text-white self-end"
          : "bg-white text-black self-start"
      }`}
    >
      {text}
    </div>
  );
}