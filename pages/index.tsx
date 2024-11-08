import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "@/components/HomePage.jsx"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <HomePage/>
      <Analytics/>
    </div>
  );
}

