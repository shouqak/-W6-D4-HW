import React from "react"

function Cats() {
  return (
    <div
      className="  w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(184, 34, 197, 0.3), rgba(255,255,255,0.7)), url('https://cdn.pixabay.com/photo/2021/09/28/12/40/cat-6664360_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-80 my-15 max-w-2xl mx-auto bg-neutral-50 bg-opacity-80 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center space-y-6">
        <img
          src="https://cdn-icons-png.flaticon.com/128/8036/8036693.png"
          alt="Pet Icon"
          className="w-20 h-20 mb-2 rounded-full shadow-lg border-4 border-pink-200 bg-white"
        />

        <h4 className="text-xl md:text-2xl font-semibold text-pink-700 mb-2">
          القطو
        </h4>
        <p className="text-pink-900 leading-relaxed text-base md:text-lg text-center">
          القطاوة دايم يوصفونهم إنهم "أمراء البيت"، لأنهم يحبون يسوون اللي
          يبغونه، وبمزاجهم. بس ترى كثير منهم حبوبين وحنونين، وإذا حبّك القط،
          تراه ما يتركك أبد!
          <br />
        </p>
      </div>
    </div>
  )
}

export default Cats
