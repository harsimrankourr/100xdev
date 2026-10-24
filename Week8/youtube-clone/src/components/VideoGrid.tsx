import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "How to learn coding in 30 days | 30 Days plan | Code with me",
    image: "ss1.png",
    thumbImage: "ss2_thumb.png",
    author: "Harkirat singh",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "How to learn jumping in 30 days | 30 Days plan | Code with me",
    image: "ss1.png",
    thumbImage: "ss2_thumb.png",
    author: "Harkirat singh",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "How to learn playing in 30 days | 30 Days plan | Code with me",
    image: "ss1.png",
    thumbImage: "ss2_thumb.png",
    author: "Harkirat singh",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 Days plan | Code with me",
    image: "ss1.png",
    thumbImage: "ss2_thumb.png",
    author: "Harkirat singh",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 Days plan | Code with me",
    image: "ss1.png",
    thumbImage: "ss2_thumb.png",
    author: "Harkirat singh",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 Days plan | Code with me",
    image: "ss1.png",
    thumbImage: "ss2_thumb.png",
    author: "Harkirat singh",
    views: "100k",
    timestamp: "2 days ago"
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1
    md:grid-cols-2 lg:grid-cols-4">
        {/* // We cam either  do 
        <VideoCard title={video[0].title}/>
        <VideoCard title={video[1].title}/>
        <VideoCard title={video[2].title}/> */}
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                image={video.image}
                thumbImage={video.thumbImage}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
            ></VideoCard>
        </div>)}

    </div>
}