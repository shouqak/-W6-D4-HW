import React from 'react'

function Dogs() {
  return (
    <div
      className="h-100 w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(34, 118, 197, 0.3), rgba(255,255,255,0.7)), url('https://cdn.pixabay.com/photo/2022/01/23/16/06/dog-6961236_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-80 max-w-2xl mx-auto bg-neutral-50 bg-opacity-80 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center space-y-6">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3199/3199867.png"
          alt="Pet Icon"
          className="w-20 h-20 mb-2 rounded-full shadow-lg border-4 border-blue-200 bg-white"
        />
       
        <h4 className="text-xl md:text-2xl font-semibold text-blue-700 mb-2">
           الكلب 
        </h4>
        <p className="text-blue-900 leading-relaxed text-base md:text-lg text-center">
الكلب معروف من زمان إنه "أوفى صديق للإنسان"، ومو بس كذا، هو بعد أذكى الحيوانات الأليفة. !

<br />


        </p>
        
      </div>
   </div>
  )
}

export default Dogs