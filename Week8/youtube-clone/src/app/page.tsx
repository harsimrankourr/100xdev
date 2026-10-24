import Image from "next/image";
import { Inter } from 'next/font/google'
import { VideoCard } from "../components/VideoCard"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"How to learn coding in 30 days | 30 Days plan | Code with me"}
        image={"ss1.png"}
        thumbImage={"ss2_thumb.png"}
        author={"Harkirat singh"}
        views={"100k"}
        timestamp={"2 days ago"}
      ></VideoCard>
    </div>
  );
}
