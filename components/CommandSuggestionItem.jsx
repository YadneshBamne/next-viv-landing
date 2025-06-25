// components/CommandSuggestionItem.jsx
export default function CommandSuggestionItem({ icon, label, description, prefix }) {
  return (
    <div className="flex items-start space-x-2">
      <div className="text-lg">{icon}</div>
      <div>
        <div className="font-medium">
          {prefix} {label}
        </div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
    </div>
  );
}