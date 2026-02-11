// src/components/OrganizationList.js
export default function OrganizationList({ organizations = [] }) {
  if (!organizations.length) return <p className="text-gray-600">Belum ada organisasi.</p>;

  return (
    <ul className="space-y-2">
      {organizations.map((org, idx) => (
        <li key={idx} className="p-3 bg-white shadow rounded">
          <div className="font-medium">{org.name}</div>
          <div className="text-sm text-gray-500">{org.role}</div>
        </li>
      ))}
    </ul>
  );
}
