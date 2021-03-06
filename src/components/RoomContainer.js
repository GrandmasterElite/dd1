
import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomConsumer, withroomConsumer } from '../context'
import Loading from './Loading'

function RoomContainer ({context}){
const { loading, sortedRooms, rooms}=context;
if(loading){
    return <Loading/>;
  }
  return(
    <>
   
    <RoomFilter rooms={rooms}/>
    <RoomList rooms={sortedRooms}/>
    </>
  );
}

export default withroomConsumer(RoomContainer)