import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full space-y-6 p-6 bg-white rounded-2xl shadow-xl">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Sign In Below
        </h1>
        <SignIn />
      </div>
    </div>
  );
}
