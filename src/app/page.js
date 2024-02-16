import Login from "@/components/login";

export default function Home() {
  return (
  <div className="text-center flex md:px-32 h-screen justify-center items-center gap-14 bg-slate-300">
    <div className="flex flex-col items-center justify-center w-1/2">
    <h1 className="text-5xl font-bold text-blue-600 mb-2">Fakebook</h1>
    <p className="text-xl">Fakebook help you to be connected with people and share your outlook</p>
    </div>
    <Login />
  </div>
  );
}
