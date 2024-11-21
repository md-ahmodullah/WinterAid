export default function HowToHelp() {
  const stories = [
    {
      name: "Rakib Ahmed",
      location: "Dhaka, Bangladesh",
      story:
        "Rakib received warm clothing for his family during the harsh winter. Your donations made this possible. Thank you for making a difference!",
      image: "https://i.ibb.co.com/ysT2fQB/image8.jpg",
    },
    {
      name: "Ayesha Begum",
      location: "Chattogram, Bangladesh",
      story:
        "Ayesha's children now have blankets to keep them warm at night. Your kindness keeps them safe and healthy. Keep spreading the warmth!",
      image: "https://i.ibb.co.com/58d3YKp/image9.jpg",
    },
    {
      name: "Rahim Khan",
      location: "Sylhet, Bangladesh",
      story:
        "Rahim's family faced extreme cold until volunteers brought essential supplies to their doorstep. Every donation counts and saves lives!",
      image: "https://i.ibb.co.com/PG07xsb/image5.jpg",
    },
    {
      name: "Karim Khan",
      location: "Jessore, Bangladesh",
      story:
        "Karim's family faced extreme cold until volunteers brought essential supplies to their doorstep. Every donation counts and saves lives!",
      image: "https://i.ibb.co.com/Q8wckFN/image3.jpg",
    },
  ];

  return (
    <section className="w-11/12 mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-deepTeal mb-8">
        Success Stories
      </h2>
      <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Discover how your contributions are making an impact. Here are stories
        from individuals whose lives have been transformed by your generosity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stories.map((story, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold text-white mb-2">
                {story.name}
              </h3>
              <p className="text-sm text-gray-200 italic">{story.location}</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-sm">{story.story}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
