type Props = {
    params: {
          reviewId: string
    }
  }
  
  export default function ReviewDetails({ params }: Props) {
    return (
          <h1>Selamat datang di halaman {params.reviewId}</h1>
    )
  }