export default function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imageUrl,
}) {
  return (
    <div className="max-w-xs bg-gradient-to-b from-yellow-200 to-yellow-500 rounded-lg shadow-lg overflow-hidden  text-white relative shadow-black">
      {/* Player Image */}
      <img className="w-full h-56 object-cover  " src={imageUrl} alt={name} />

      {/* Player Details */}
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold mb-1">{name}</h2>
        <p className="text-lg uppercase">{team}</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-y-2 p-4 text-sm">
        <p className="text-left">
          <strong>Nationality:</strong> {nationality}
        </p>
        <p className="text-right">
          <strong>Jersey #:</strong> {jerseyNumber}
        </p>
        <p className="text-left">
          <strong>Age:</strong> {age}
        </p>
      </div>
    </div>
  );
}
