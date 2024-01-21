import { createContext, useState } from "react";
import axios from "axios";
const Base_Url = 'https://youtube-v31.p.rapidapi.com'
const options = {
  url: Base_Url,
  params: {
    maxResults: '50'
},
headers: {
'X-RapidAPI-Key': "9bcdd598ddmsh68d0bee69604048p131e2bjsna9c243487919",
'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
}
};

export const ApiData = createContext()

export const GetAllData = ( {children})=>{
    const [Query,setQuery] = useState("New")
    const [IdData,setIdData] = useState([])
    const [IdPart,setIdPart] = useState("")
    const [GetDATA,setGetDATA] = useState([])
    const [Player,setPlayer] = useState([])
    const [Type,setType] = useState([])
    const [Playdata,setPlaydata] = useState([])
    const [PlayList,setPlayList] = useState([])
   
    const VideoApi = async (url)=>{
        const response = await axios.get(`${Base_Url}/${url}`,options)
        .then((res)=> {return res.data})
        .then((res)=> setGetDATA(res))
    }
    const ChannelData = async (url)=>{
        const response = await axios.get(`${Base_Url}/${url}`,options)
        .then((res)=> {return res.data})
        .then((res)=> setIdData(res.items[0]))
    }
    const ChannelOrder = async (url)=>{
        const response = await axios.get(`${Base_Url}/${url}`,options)
        .then((res)=> {return res.data})
        .then((res)=> setIdPart(res.items))
    }
    const PlaylistData = async (url)=>{
        const response = await axios.get(`${Base_Url}/${url}`,options)
        .then((res)=> {return res.data})
        .then((res)=> setPlaydata(res.items[0]))
    }
    const PlaylistOrder = async (url)=>{
        const response = await axios.get(`${Base_Url}/${url}`,options)
        .then((res)=> {return res.data})
        .then((res)=> setPlayList(res.items))
    }
    const VideoPlayer = async (url)=>{
        const response = await axios.get(`${Base_Url}/${url}`,options)
        .then((res)=> {return res.data})
        .then((res)=> setPlayer(res.items[0]))
    }
    const Videotype = async (url)=>{
        const response = await axios.get(`${Base_Url}/${url}`,options)
        .then((res)=> {return res.data})
        .then((res)=> setType(res.items))
    }

    return <ApiData.Provider value={{VideoApi,Query,setQuery,GetDATA,ChannelData,ChannelOrder,IdData,IdPart,VideoPlayer,Player,Videotype,Type,PlaylistData,PlaylistOrder,PlayList,Playdata}}>
          {children}
        </ApiData.Provider>
}