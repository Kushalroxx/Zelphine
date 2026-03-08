const amenities = [
  { id: 1, title: "Free Weights", className: "col-span-12 md:col-span-8 row-span-2", img: "https://res.cloudinary.com/djfquzcwz/image/upload/v1772301781/waight_roq39q.avif" },
  { id: 2, title: "Recovery Sauna", className: "col-span-12 md:col-span-4 row-span-1", img: "https://res.cloudinary.com/djfquzcwz/image/upload/v1772301779/sanuta_ek9ukr.avif" },
  { id: 3, title: "Advanced Machines", className: "col-span-12 md:col-span-4 row-span-1", img: "https://res.cloudinary.com/djfquzcwz/image/upload/v1772301777/advanced_hdv1rs.avif" },
];

export const BentoGrid = () => {
  return (
    <section id="facility" className="bg-[#050505] py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#F3F4F6] text-4xl font-bold uppercase mb-12 tracking-tight">The Facility</h2>
        {/* Parent group allows child hover effects to coordinate */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[300px] group">
          {amenities.map((item) => (
            <div 
              key={item.id} 
              className={`${item.className} relative overflow-hidden rounded-xl bg-[#121212] transition-all duration-500 hover:!opacity-100 group-hover:opacity-40 cursor-pointer`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              <h3 className="absolute bottom-6 left-6 z-20 text-[#F3F4F6] text-2xl font-bold uppercase">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};