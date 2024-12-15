import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

let userData = [
    {
        id: 1,
        userprofile: "https://images.unsplash.com/photo-1634149134165-6d679d80a800?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Jessica Koel", 
        message: "Hey, Joel! I'm here to help you out. Please let me know if you need anything.",
        time: "04:00 PM"
    },
    {
        id: 2,
        userprofile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Nielson", 
        message: "I suggest we start a new business soon. Let's brainstorm some ideas.",
        time: "03:30 PM"
    }, 
    {
        id: 3,
        userprofile: "https://images.unsplash.com/photo-1707857041612-89f7d82efb38?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Komeial Bolger", 
        message: "I will send you all the documents as soon as I have them ready.",
        time: "03:00 PM"
    }, 
    {
        id: 4,
        userprofile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Alex Turner", 
        message: "Can you please review this document and provide your feedback by EOD?",
        time: "02:30 PM"
    }, 
    {
        id: 5,
        userprofile: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Tamara Suiale", 
        message: "Are you going to the business trip next week? Let's discuss the agenda.",
        time: "02:00 PM"
    }, 
    {
        id: 6,
        userprofile: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Peter", 
        message: "Let's schedule a meeting to discuss the project update.",
        time: "12:00 PM"
    }, 
    {
        id: 7,
        userprofile: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Caroline Nexon", 
        message: "We need to start a new research center. Let's discuss the budget and timeline.",
        time: "11:30 AM"
    }, 
    {
        id: 8,
        userprofile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Nixen", 
        message: "I'm available to meet tomorrow at 10 AM. Please confirm.",
        time: "11:00 AM"
    }, 
    {
        id: 9,
        userprofile: "https://images.unsplash.com/photo-1579105728744-9d6b14a45389?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Koyal", 
        message: "I've attached the latest report. Please take a look and let me know if you have any questions.",
        time: "10:30 AM"
    }, 
    {
        id: 10,
        userprofile: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Johnson", 
        message: "Let's schedule a meeting to discuss the project update.",
        time: "10:00 AM"
    }
]

function Notification() {
    const [query, setQuery] = useState("");
    return(
        <>
            <div className="searchBox">
                <input type="text" placeholder="Search by Name..." id="searchInput" onChange={(e) => setQuery(e.target.value)}></input>
                <FaSearch />
            </div>
            <div className="wrapper">
            {
                userData.filter((user) => user.username.toLowerCase().includes(query)).map((user) => {
                    return (                    
                        <div className="notification" key={user.id}>
                            <img className="profilePic" src={user.userprofile}></img>
                            <div className="message">
                                <h3>{user.username}</h3>
                                <p>{user.message}</p>
                            </div>
                            <div className="time">
                                <h4>{user.time}</h4>
                                <FaStar color="green"/>
                            </div>                            
                        </div>
                    )
                })
            }
            </div>
        </>
    );
}

export default Notification;