import { Suspense } from "react"
type ProductPageProps = {
    params: Promise<{ data: string[] }>
}

export default async function Page({ params }: ProductPageProps) {
    const { data } = await params

    console.log("ola2")
    console.log(data)

    return (
        <div>
            <Suspense fallback={<h1>Carregando...</h1>}>
                <h1>teste</h1>
                <h1>{data}</h1>
                <h1>{data[0]}</h1>
                <h1>{data[1]}</h1>
                <h1>{data[2]}</h1>   
                <h1>{data[3]}</h1>   
            </Suspense>

        </div>
    )
}