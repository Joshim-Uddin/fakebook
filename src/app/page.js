import Login from "@/components/login";

export default function Home() {
  return (
  <div className="text-center flex px-10 h-screen justify-center items-center gap-10 bg-slate-300">
    <div className="flex flex-col items-center justify-center w-1/2">
    <h1 className="text-5xl font-bold text-blue-600">Fakebook</h1>
    <p className="text-xl w-3/5 text-center">Fakebook help you to be connected with people and share your outlook</p>
    </div>
    <Login />
  </div>
  );
}
