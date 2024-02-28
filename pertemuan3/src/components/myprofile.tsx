import { getImageUrlV2 } from '@/utils/utils';

interface Person {
    name: string;
    imageId: string;
}

interface MyAvatarProps {
    person: Person;
    size: number;
}

function MyAvatar({ person, size }: MyAvatarProps) {
    var trueSize;
    if (size >= 90) {
        trueSize = 'b'
    } else if (size < 90) {
        trueSize = 's'
    } else {
        trueSize = 's'
    }
    return (
        <img
            className="avatar"
            src={getImageUrlV2(person, trueSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function MyProfile() {
    return (
        <MyAvatar
            size={100}
            person={{
                name: 'Gregorio Y. Zara',
                imageId: '7vQD0fP'
            }}
        />
    );
}