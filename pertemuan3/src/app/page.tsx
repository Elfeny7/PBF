import Profile from "./components/profile";

export default function Home() {
  return (
    <div className="text-center h-screen">
      <h1 className="text-2xl font-bold text-white mb-10 pt-10">Ilmuwan yang luar biasa</h1>
      <div className="flex justify-between">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
}
