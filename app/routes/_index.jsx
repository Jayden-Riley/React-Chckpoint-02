import PlayersList from "../components/PlayersList";
export const meta = () => {
  return [
    { title: "FIFA Player Card" },
    {
      name: "description",
      content: "Welcome to the Official FIFA Player Cars!",
    },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}
