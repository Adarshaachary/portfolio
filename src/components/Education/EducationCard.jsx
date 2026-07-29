function EducationCard({
  institution,
  degree,
  year,
  grade,
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500 hover:-translate-y-2 transition duration-300">

      <h3 className="text-xl font-bold text-cyan-400 mb-3">
        {institution}
      </h3>

      <p className="text-lg font-semibold mb-2">
        {degree}
      </p>

      <p className="text-gray-400 mb-2">
        {year}
      </p>

      <p className="text-gray-300">
        <span className="font-semibold">Grade / CGPA:</span> {grade}
      </p>

    </div>
  );
}

export default EducationCard;