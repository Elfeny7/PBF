type Props = {
    params: {
          urutan: string
    }
  }
  
  export default function Urutan({ params }: Props) {
    return (
          <h1>Details about blogs {params.urutan}</h1>
    )
  }