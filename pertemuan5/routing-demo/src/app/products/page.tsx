import Link from "next/link";

export default function ProductList() {
  return (
    <div>
      <h1>List Produk Kami</h1>
      <Link href='/products/mobil'>Mobil</Link>
      <br />
      <Link href='/products/motor'>Motor</Link>
      <br />
      <Link href='/products/pesawat'>Pesawat</Link>
      <br />
      <Link href='/products/helikopter'>Helikopter</Link>
    </div>
  );
}