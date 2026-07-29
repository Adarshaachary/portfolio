function SkillCard({ icon: Icon, name, color }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center hover:border-cyan-500 hover:-translate-y-2 transition duration-300">

      <Icon className={`text-5xl mb-4 ${color}`} />

      <h3 className="font-semibold text-center">
        {name}
      </h3>

    </div>
  );
}

export default SkillCard;