import React from "react"

function Rabbit() {
  return (
    <div
      className=" w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(197, 34, 34, 0.3), rgba(255,255,255,0.7)), url('https://cdn.pixabay.com/photo/2019/04/16/22/05/rabbit-4132919_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-80 max-w-2xl my-15 mx-auto bg-neutral-50 bg-opacity-80 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center space-y-6">
        <img
          src="https://cdn-icons-png.flaticon.com/128/6363/6363571.png"
          alt="Pet Icon"
          className="w-20 h-20 mb-2 rounded-full shadow-lg border-4 border-red-200 bg-white"
        />

        <h4 className="text-xl md:text-2xl font-semibold text-red-700 mb-2">
          الأرنب
        </h4>
        <p className="text-red-900 leading-relaxed text-base md:text-lg text-center">
          الأرنب كائن لطيف ومرهف، ناعم الملمس، وحركاته خفيفة، وكأنك تتعامل مع غيمة صغيرة تتحرك! كثير ناس يحبون تربيته لأنه ما يصدر أصوات مزعجة، ويعطي جو من الهدوء في البيت.


          <br />
        </p>
      </div>
    </div>
  )
}

export default Rabbit
