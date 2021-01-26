import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import Card from '../../../components/Card';
import CardContent from '../../../components/CardContent'

const renderer = (blocknumber: any) => {
    return (<>
      <SubContainer>
        <NumberCountdown>{blocknumber}</NumberCountdown>
        <DetailCountdown>remaining blocks</DetailCountdown>
      </SubContainer>
      {/* {pad(hours)}:{pad(minutes)}:{pad(seconds)} */}

    </>);
  };

// const pad = (num: any) => {
//   return num < 10 ? "0" + num : num;
// }

const completed = () =>{
  return (
    <ContainerCompleted>
      <CompletedCountdown>Stay tune for the next campaign</CompletedCountdown>
    </ContainerCompleted>);
}

// interface CountdownUIProps {
//   date: number
// }

const getBlockNumber = async (setBlockNumber: any) =>{
  try{
    var _blockNumber = 11650000;
    var timestamp = Math.floor(Date.now() / 1000);
    var response = await axios.get(`https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before&apikey=DX4VNSMMV78DUEHZUTHXGSFMSPKRVWA691`);
    if(response.data.message === "OK"){
      console.log(response);
      setBlockNumber(_blockNumber - response.data.result)
    }
  } catch (e){
    console.error(e)
  }
}

const CountdownUI: React.FC = () => {
  const [blockNumber, setBlockNumber] = useState(11650000)

  useEffect(()=>{
    getBlockNumber(setBlockNumber)
    setInterval(() => getBlockNumber(setBlockNumber), 10000);
  },[blockNumber])

  return (
    <>
      <Card>
        <CardContent>
          {blockNumber <= 0 ? completed() : renderer(blockNumber)}
          {/* <Countdown
            autoStart={date && true}
            date={date}
            zeroPadTime={2}
            zeroPadDays={2}
            renderer={renderer}
          /> */}
        </CardContent>
      </Card>
    </>
  )
}

const ContainerCompleted = styled.div`
  justify-content: center;
  align-items:center;
  display: flex;
  flex-direction: row;
  width: 680px;
`

const Container = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: 680px;
`

const SubContainer = styled.div`
  justify-content: center;
  align-items:center;
  display: flex;
  flex-direction: column;
`

const NumberCountdown = styled.span`
  font-size: 70px;
  color: #ff6348;
  font-family: 'Bebas Neue', cursive;
`

const CompletedCountdown = styled.span`
  text-align: center;
  font-size: 60px;
  font-family: 'Bebas Neue', cursive;
  color: ${(props) => props.theme.color.whiteDoff};
  `
  
  const DetailCountdown = styled.span`
  font-size: 17px;
  font-family: 'Bebas Neue', cursive;
  color: grey;
`


export default CountdownUI