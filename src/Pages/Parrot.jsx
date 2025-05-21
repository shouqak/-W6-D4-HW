import React from 'react'

function Parrot() {
  return (
<div
      className="h-100  w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(34, 197, 184, 0.3), rgba(255,255,255,0.7)), url('https://cdn.pixabay.com/photo/2023/04/24/02/51/crimson-rosella-7947000_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-80 max-w-2xl mx-auto bg-neutral-50 bg-opacity-80 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center space-y-6">
        <img
          src="https://cdn-icons-png.flaticon.com/128/15841/15841493.png"
          alt="Pet Icon"
          className="w-20 h-20 mb-2 rounded-full shadow-lg border-4 border-cyan-200 bg-white"
        />
       
        <h4 className="text-xl md:text-2xl font-semibold text-cyan-700 mb-2">
           الببغاء 
        </h4>
        <p className="text-cyan-900 leading-relaxed text-base md:text-lg text-center">
الببغاء ما هو طير عادي، هو طير ذكي وفضولي ومحبّ للتفاعل! تقدر تعلمه كلمات، وفيه أنواع تحفظ جمل كاملة وتقلد نغمة صوتك، وبعضها تحفظ حتى الأغاني!<br />


        </p>
        
      </div>
   </div>  )
}

export default Parrot