import Navigation from "./components/Navigation/Navigation";
import PostCard from "./components/PostCard/PostCard";

function App() {
  return (
    <main className="max-w-7xl mx-auto flex flex-col gap-y-5 p-3">
      <Navigation />
      <PostCard />
    </main>
  );
}

export default App;
