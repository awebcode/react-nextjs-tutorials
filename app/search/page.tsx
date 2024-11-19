"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

// Example data
const data = [
  { id: 1.1, name: "Awebcode", email: "awebcode@vercel.com", role: "Creator" },
  { id: 1, name: "John Doe", email: "john@shadcn.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@tailwind.com", role: "Editor" },
  { id: 3, name: "Alice Johnson", email: "alice@vercel.com", role: "Viewer" },
];
// Highlight matched text
const highlightMatch = (text: string, query: string) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, `<span class="bg-yellow-200">$1</span>`);
};

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="max-w-xl mx-auto my-2">
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Results */}
      <div className="my-6">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Card
              key={item.id}
              className="p-4 border rounded-md shadow-sm bg-white flex flex-col"
            >
              <span
                className="font-medium text-gray-800"
                dangerouslySetInnerHTML={{
                  __html: highlightMatch(item.name, searchTerm),
                }}
              ></span>
              <span
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: highlightMatch(item.email, searchTerm),
                }}
              ></span>
              <span
                className="text-xs text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: highlightMatch(item.role, searchTerm),
                }}
              ></span>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
