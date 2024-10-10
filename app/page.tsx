import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Home() {
  const examples = [
    { name: "Authentication", path: "authentication" },
    { name: "Cards", path: "cards" },
    { name: "Dashboard", path: "dashboard" },
    { name: "Forms", path: "forms" },
    { name: "Mail", path: "mail" },,
    { name: "Music", path: "music" },
    { name: "Playground", path: "playground" },
    { name: "Tasks", path: "tasks" },
  ];

  return (
    <div className="w-full h-screen p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Example Projects</h1>
        <ModeToggle />
      </div>
      <ul className="space-y-2">
        {examples.map((example, index) => (
          <li key={example?.id ?? index}>
            <Link href={`/examples/${example?.path}`} className="text-blue-500 hover:underline">
              {example?.name ?? 'Untitled'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
