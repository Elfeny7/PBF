import Link from "next/link";

type Props = {
    params: {
          productId: string
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    return (
      <div>
            <h1>Details about product {params.productId}</h1>
            <h2>Lihat review {params.productId}</h2>
            <Link href={`/products/${params.productId}/reviews/review-${params.productId}`}>{params.productId}</Link>
      </div>
            
    )
  }