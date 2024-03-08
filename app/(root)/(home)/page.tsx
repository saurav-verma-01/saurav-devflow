import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-300">
      <UserButton />
      <h1 className="text-2xl">Home Page, Start the Game</h1>
    </div>
  );
};

export default page;
