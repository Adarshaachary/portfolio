function CourseCard({
  title,
  platform,
  description,
}) {
  return (
    <div
      className="
        bg-gray-900
        border border-gray-800
        rounded-xl
        p-6
        transition-all
        duration-300
        hover:border-cyan-500
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-[0_12px_35px_rgba(34,211,238,0.12)]
        group
      "
    >

      <h3
        className="
          text-xl
          font-bold
          text-cyan-400
          mb-3
          transition-all
          duration-300
          group-hover:text-cyan-300
          group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]
        "
      >
        {title}
      </h3>

      <p
        className="
          text-lg
          font-semibold
          mb-3
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {platform}
      </p>

      <p className="text-gray-400 leading-7">
        {description}
      </p>

    </div>
  );
}

export default CourseCard;