import Profile from "../components/profile";
import { Gallery } from "../components/gallery";
import TodoList from "../components/todolist";
import MyGallery from "@/components/mygallery";
import MyProfile from "@/components/myprofile";
import MyProfileV2 from "@/components/myprofilev2";

export default function Home() {
  return (
    <div className="text-center h-screen">
      <h1 className="text-2xl font-bold text-white mb-10 pt-10">Ilmuwan yang luar biasa</h1>
        <Gallery />
        <hr />
        <TodoList />
        <hr />
        <MyGallery />
        <hr />
        <MyProfile />
        <hr />
        <MyProfileV2 />
    </div>
  );
}
