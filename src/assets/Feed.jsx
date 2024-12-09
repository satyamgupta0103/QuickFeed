const Feed = ({ title, link, date }) => {
  // let formatted = { day: "numeric", month: "long", year: "numeric" };
  // // let articleDate = new Date(date).toLocaleDateString("en-IN", formatted);
  let formatted = { day: "numeric", month: "long", year: "numeric" };

  // Ensure the date is parsed correctly
  let articleDate = "Invalid Date";
  if (date) {
    const parsedDate = new Date(date); // Parses RFC 1123 format
    if (!isNaN(parsedDate)) {
      articleDate = parsedDate.toLocaleDateString("en-IN", formatted);
    }
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 hover:text-orange-500"
      >
        <h3 className="text-xl mb-1 underline">{title}</h3>
        <p>{articleDate}</p>
      </a>
    </>
  );
};

export default Feed;
