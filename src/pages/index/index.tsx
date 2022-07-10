import { View, Text } from "@tarojs/components"
import { useDidShow } from "@tarojs/taro"
import { useState } from "react"
import { fetchData } from "../../service/servers"
import  './index.css'

type fimType = {
  titlezh: string,
  year: number
}

const Index = ():JSX.Element => {
  const [filmData, setFilmData] = useState<fimType>()
  useDidShow(() => {
    const fn = async() => {
      const {data} = await fetchData()
      setFilmData({
        titlezh: data.ms.titlezh,
        year: data.ms.year
      })
      console.log(data)
      console.log(filmData)
    }
    fn()
  })
  return(
    <View className='container'>
      <View className='content'>
        <Text>titlezh：{filmData?.titlezh}</Text>
        <Text>year：{filmData?.year}</Text>
      </View>
    </View>
  )
}
export default Index
