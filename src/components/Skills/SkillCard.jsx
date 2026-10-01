function SkillCard({ icon: Icon, name, color }) {
  return (
    <div
      className="
        bg-gray-900
        border border-gray-800
        rounded-2xl
        p-6
        flex flex-col items-center
        transition-all
        duration-300
        hover:border-cyan-500
        hover:-translate-y-2
        hover:shadow-[0_10px_30px_rgba(34,211,238,0.12)]
        group
      "
    >
      <Icon
        className={`
          text-5xl
          mb-4
          ${color}
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:-rotate-3
        `}
      />

      <h3
        className="
          font-semibold
          text-center
          transition-colors
          duration-300
          group-hover:text-cyan-400
        "
      >
        {name}
      </h3>
    </div>
  );
}

export default SkillCard;