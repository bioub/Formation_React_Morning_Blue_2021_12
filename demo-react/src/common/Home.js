import Clock from "./Clock";
import { lambda } from "./lib";

export function Home() {
  lambda();
  return <div className="Home">
    <h2>Home page</h2>
    <Clock />
    </div>;
}