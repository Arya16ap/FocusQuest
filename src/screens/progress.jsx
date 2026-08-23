import React from 'react';
import './progress.css';
import { useNavigate } from "react-router-dom";
import Sidebar from '../components/Sidebar.jsx';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const data = [
  { name: "Level 1", moves: 14, time: 40 },
  { name: "Level 2", moves: 25, time: 80 },
  { name: "Level 3", moves: 39, time: 114 },

];

function Progress(){
    const navigate = useNavigate();

    return(
        <>
            <Sidebar/>
            <div className="progress-hint"><h1>Hover over me</h1></div>

            <div className="progress-container">
                <div className="progress-card-1">
                    <h2>Level 1: The Beginning</h2>
                    <h3>You learned the rules, not yet the rhythm.</h3>
                    <p>Moves: 14</p>
                    <p>Time taken: 40 sec</p>
                </div>
                <div className="progress-card-2">
                    <h2>Level 2: The Arc</h2>
                    <h3>Your in the groove, but not perfect.</h3>
                    <p>Moves: 25</p>
                    <p>Time taken: 1 min 20 sec</p>
                </div>
                <div className="progress-card-3">
                    <h2>Level 3: Boss Battle</h2>
                    <h3>You are the Legendary Master.</h3>
                    <p>Moves: 39</p>
                    <p>Time taken: 1 min 54 sec</p>
                </div>

                
            </div>
            <div className = "chart">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" label={{ value: "Level", position: "insideBottom", offset: -15 }} />
                        <YAxis label={{ value: "Score", angle: -90, position: "insideLeft" }} />
                        <Tooltip />
                        <Legend verticalAlign="bottom" align="right" wrapperStyle={{ paddingTop: "20px" }}/>
                        <Line type="monotone" dataKey="moves" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 6 }} />
                        <Line type="monotone" dataKey="time" stroke="#82ca9d" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>

                </div>
                <div className='home-button'>
                    <button onClick={() => navigate('/homepage')}>← Back to Homepage</button>
                </div>
            
        </>

    );
}
export default Progress;