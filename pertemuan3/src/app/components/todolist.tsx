import Image from "next/image";

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  image: "https://i.imgur.com/7vQD0fPs.jpg"
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}&apos; Todos</h1>
      <Image
        className="object-center"
        src={person.image}
        width={100}
        height={100}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}