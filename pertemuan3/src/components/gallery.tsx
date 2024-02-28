import Profile from "./profile";

export function Gallery() {
    return (
        <div className="flex justify-between">
            <Profile />
            <Profile />
            <Profile />
        </div>
    );
}