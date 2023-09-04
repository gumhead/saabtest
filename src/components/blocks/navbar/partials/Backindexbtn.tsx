import { useRouter } from "next/router"

const Backindexbtn = () => {
    const router = useRouter()
    return (
            <div className="backButton">
                <button className="btn btn-primary btn-sm rounded-pill me-2 ms-5" onClick={() => router.back()}>Tillbaka</button>
            </div>
    )
}
export default Backindexbtn;
