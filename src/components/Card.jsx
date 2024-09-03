import React from "react";
import { SocialIcon } from "react-social-icons";
export default function Card({data}) {

console.log(data);

const handleClick=()=>{
  window.open(data.urlGame)
}


  const sizeSocialIcons = "30px";

  return (
    <div className="bg-slate-950 rounded-lg mx-auto p-4  max-w-sm  min-w-80 shadow-lg">
      <div className="flex flex-row justify-center gap-2 align-items-center my-4">
        <img
          className=" bg-cover w-12 h-12 rounded-full border-neutral-600 "
          src={data.urlCover}
        ></img>
        <h2 className="my-auto font-semibold">{data.nombre}</h2>
      </div>
      <h2 className="text-slate-500 text-start">Info:</h2>
      <div className="grid grid-cols gap-2 mb-4  mx-auto mt-1 pt-3 border-t-2 border-t-slate-900 justify-center text-sm">
        <div className="flex flex-row justify-between ">
          <p className="text-slate-500 place-self-center">
            Jugadores: <span className="text-slate-500">{data.jugadores}</span>
          </p>
        </div>
        <div className="flex flex-row gap-5 justify-between">
          <p className="text-slate-500 place-self-center">
            Comunidad: <span className="text-slate-500">{data.communityTelegram}</span>
          </p>
          <SocialIcon
            style={{
              height: sizeSocialIcons,
              width: sizeSocialIcons,
              opacity: "0.7",
            }}
            network="telegram"
            url={data.urlTelegramCommunity}
          ></SocialIcon>
        </div>
        <div className="flex flex-row gap-5 justify-between">
          <p className="text-slate-500 place-self-center">
            Comunidad: <span className="text-slate-500">{data.comunityX}</span>
            
          </p>
          <SocialIcon
              style={{
                height: sizeSocialIcons,
                width: sizeSocialIcons,
                opacity: "0.7",
              }}
              network="x"
              url={data.urlX}            ></SocialIcon>
        </div>
           <div className="flex flex-row gap-5 justify-between">
          <p className="text-slate-500 place-self-center">
            Web:
          </p>
              {
                data.web===""?"No tiene":<p className="text-slate-500 place-self-center"><a href={data.web}>{data.web}</a></p>
              }
      
        </div>
      </div>

      <div className="pt-5 border-t-2 border-t-slate-900">
        <button  className="w-full bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-green-900 hover:border-green-500 rounded" 
        onClick={handleClick}
        >
          Ganar {data.token}{"  "}
          <SocialIcon
            style={{ height: sizeSocialIcons, width: sizeSocialIcons }}
            network="telegram"
          ></SocialIcon>
        </button>
      </div>
    </div>
  );
}
