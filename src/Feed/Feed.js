import React, {useState, useEffect} from 'react'
import styles from "./Feed.module.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/Event"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "../Post/Post";
import {db} from "../firebase";
import firebase from 'firebase';
import {useSelector} from "react-redux";
import {selectUser} from "../features/counter/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");

    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data()
                }
            }));
        });
    }, []);
    
    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: user.user.displayName,
            description: user.user.email,
            message: input,
            photoUrl: user.user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("");
    }

    return (
        <div className={styles.feed}>
            <div className={styles.feed_inputContainer}>
                <div className={styles.feed_input}> 
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
                </div>
                <div className={styles.feed_inputOptions}>
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>
            <FlipMove>
            {posts.map(({id, data: {name, description, message, photoUrl}}) => {
                return <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            })} 
            </FlipMove>
            
        </div>
    )
}

export default Feed;
