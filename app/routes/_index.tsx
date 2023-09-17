import type { V2_MetaFunction } from "@remix-run/node";
import { Layout } from "~/components";

export const meta: V2_MetaFunction = () => [
  { title: "Dices & Dragons VT - Homepage" },
];

export default function Index() {
  return (
    <main className="relative min-h-screen">
      <Layout>
        <div className="min-h-screen min-w-full bg-slate-300 flex items-center justify-center">
          NO
        </div>
      </Layout>
    </main>
  );
}
