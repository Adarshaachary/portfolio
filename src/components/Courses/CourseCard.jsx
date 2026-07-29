function CourseCard({
  title,
  platform,
  description,
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500 hover:-translate-y-2 transition duration-300">

      <h3 className="text-xl font-bold text-cyan-400 mb-3">
        {title}
      </h3>

      <p className="text-lg font-semibold mb-3">
        {platform}
      </p>

      <p className="text-gray-400 leading-7">
        {description}
      </p>

    </div>
  );
}

export default CourseCard;