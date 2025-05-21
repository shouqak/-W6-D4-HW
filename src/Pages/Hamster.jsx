import React from "react"

function Hamster() {
  return (
    <div
      className="h-100 min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(197, 126, 34, 0.3), rgba(255,255,255,0.7)), url('https://cdn.pixabay.com/photo/2019/02/24/15/32/hamster-4017846_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-80 max-w-2xl mx-auto bg-neutral-50 bg-opacity-80 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center space-y-6">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1959/1959988.png"
          alt="Pet Icon"
          className="w-20 h-20 mb-2 rounded-full shadow-lg border-4 border-orange-200 bg-white"
        />

        <h4 className="text-xl md:text-2xl font-semibold text-orange-700 mb-2">
          الهامستر
        </h4>
        <p className="text-orange-900 leading-relaxed text-base md:text-lg text-center">
          الهامستر رغم حجمه الصغير، إلا إنه مليان طاقة! تحصله دايم يركض في
          الدولاب أو يحفر أو يخزّن الأكل في خدوده كأن عنده بقالة صغيرة داخل خده
          😂
          <br />
        </p>
      </div>
    </div>
  )
}

export default Hamster
