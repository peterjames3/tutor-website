// SectionCard.tsx
export function SectionCard({
  section,
}: {
  section: TestService["sections"][0];
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
      {section.sample && (
        <div className="bg-gray-50 p-4 rounded mb-4">
          <p className="font-mono">{section.sample}</p>
        </div>
      )}
      <ul className="space-y-2">
        {section.tips?.map((tip, i) => (
          <li key={i} className="flex items-start">
            <input
              type="checkbox"
              checked={tip.checked}
              className="mr-2 mt-1"
              readOnly
            />
            <span>{tip.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ServiceCard.tsx
export function ServiceCard({
  service,
}: {
  service: TestService["services"][0];
}) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="space-y-1 text-sm">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
