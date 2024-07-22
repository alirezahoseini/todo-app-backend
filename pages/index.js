import connectToDB from "@/utils/db";

export default function Home() {
  connectToDB()
  return (
    <h1>HOME</h1>
  );
}
