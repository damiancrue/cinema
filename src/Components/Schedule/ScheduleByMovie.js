import React from 'react';
import './Schedule.css';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getScheduleByMovie ,resetSchedule} from './../../Redux/Actions/index';
import { Link, useParams } from "react-router-dom";
import ScheduleCard from './ScheduleCard';
import Nothing from '../Loading/Nothing';

// ICONS
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function ScheduleByMovie (){

const { id } = useParams();
const dispatch = useDispatch();

useEffect(() => {
    dispatch(resetSchedule())
    dispatch(getScheduleByMovie(id))
},[dispatch,id])
const schedule = useSelector(state => state.scheduleByMovie)

console.log(schedule)
let now1 = new Date()
const nowd =now1.getFullYear()+"-0"+now1.getMonth()+"-"+now1.getDate()
const nowt =now1.getHours() + ':' + now1.getMinutes() + ':' + now1.getSeconds();



return(
    <div className='schedule--container'>
            {schedule.length === 0 ?
                                    <>
                                    <Nothing/>
                                    <div className="movie--detail--button--container movie--detail--button__goback schedule--button--goback">
                                    <Link className="movie--detail--button" to={`/movie/${id}`}>
                                    <ArrowCircleLeftIcon fontSize='large' />
                                    GO BACK
                                    </Link>
                                </div>
                                    </>
                :
                <>
                    <img className='schedule--poster' src={schedule[0].Movie.poster} alt={schedule[0].Movie.title} />
                    <div className='schedule--cards--container'>
                        {schedule.map((m) => {
                console.log(m.time.split(":")[0]<nowt.split(":")[0])
                console.log(m.time.split(":")[1]<nowt.split(":")[1])
                if(m.day.split("-")[0]>=nowd.split("-")[0] && m.day.split("-")[1]>=nowd.split("-")[1] && m.day.split("-")[2]>=nowd.split("-")[2]) {
                    if(m.day.split("-")[2]===nowd.split("-")[2] && m.time.split(":")[0]<=nowt.split(":")[0] && m.time.split(":")[1]<nowt.split(":")[1]) return ""
                          return (
                                <Link className='schedule--card--container' key={m.schedule_id} to={m.Room.room_seats.length>m.boughtSeats.length?"/schedule/"+m.schedule_id:""}>  {/* SOLD OUT */}
                                    <ScheduleCard 
                                        day={m.day}
                                        name={m.Movie.title} 
                                        time={m.time} 
                                        room={m.Room.name} 
                                        display={m.Room.display_type}
                                    />
                                    <KeyboardDoubleArrowRightIcon fontSize='large' />
                                    {m.Room.room_seats.length <= m.boughtSeats.length && <p className='sold--out'>SOLD OUT</p>}
                                </Link>
                                )};
                            })}
                    </div>
                    <div className="movie--detail--button--container movie--detail--button__goback schedule--button--goback">
                        <Link className="movie--detail--button" to={`/movie/${id}`}>
                        <ArrowCircleLeftIcon fontSize='large' />
                        GO BACK
                        </Link>
                    </div>
                </>
            }            
        </div>
    )
}