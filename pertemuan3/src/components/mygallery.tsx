import { getImageUrl } from '@/utils/utils';

interface Person {
  name: string;
  imageId: string;
  imageSize: string;
  alt: string;
  profesi: string;
  penghargaan: string;
  penemuan: string;
}

function MyProfile({ name, imageId, imageSize, alt, profesi, penghargaan, penemuan}: Person) {
  return (
    <section className="profile">
      <h2>{name}e</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={alt}
        width={100}
        height={100}
      />
      <ul>
        <li>
          <b>Profesi: </b>
          {profesi}
        </li>
        <li>
          <b>Penghargaan: 4 </b>
          {penghargaan}
        </li>
        <li>
          <b>Telah Menemukan: </b>
          {penemuan}
        </li>
      </ul>
      <br />
    </section>
  );
}

export default function MyGallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <MyProfile name={'Maria Skłodowska-Curie'} alt={'Maria Skłodowska-Curie'} imageId={'szV5sdG'} imageSize={'s'} profesi={'Fisikawan dan kimiawan'} penghargaan={'Penghargaan Nobel Fisika, Penghargaan Nobel Kimia, Medali Davy, Medali Matteucci'} penemuan={'polonium (unsur kimia)'}/>
      <MyProfile name={'Katsuko Saruhashi'} alt={'Katsuko Saruhashi'} imageId={'YfeOqp2'} imageSize={'s'} profesi={'Ahli Geokimia'} penghargaan={'Penghargaan Miyake Geokimia, Penghargaan Tanaka'} penemuan={'sebuah metode untuk mengukur karbon dioksida pada air laut'}/>
    </div>
  );
}
