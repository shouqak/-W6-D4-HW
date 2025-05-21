import React from "react";

function Home() {
  return (
    <div
      className="h-100  w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(34,197,94,0.3), rgba(255,255,255,0.7)), url('http://www.psyeta.org/wp-content/uploads/2022/02/AdobeStock_481854656-1-678x381.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-2xl mx-auto bg-white bg-opacity-80 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center space-y-6">
        <img
          src="https://cdn-icons-png.flaticon.com/128/8182/8182996.png"
          alt="Pet Icon"
          className="w-20 h-20 mb-2 rounded-full shadow-lg border-4 border-green-200 bg-white"
        />
      
        <h4 className="text-xl md:text-2xl font-semibold text-green-700  mb-2">
          أهلاً بكم في عالم حيوانات الألفية!
        </h4>
        <p className=" text-green-900 leading-relaxed text-base md:text-lg text-center">
هنا بتلقون ألطف وأشهر الحيوانات اللي عشنا معاها، وصارت جزء من حياتنا اليومية في هالألفية الجديدة. بعضهم نربيهم في البيت، وبعضهم نشوفهم في الفيديوهات والميمز، وبعضهم غريب بس يخطف القلب!
خلكم معنا، وتعرّفوا على أصدقاء الإنسان الجدّد ❤️🐾        </p>
        
      </div>
   </div>
  );
}

export default Home;