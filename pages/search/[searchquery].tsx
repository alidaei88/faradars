import { NextPage } from "next";
import { useRouter } from "next/router";

const searchPage: NextPage = () => {
    const router = useRouter()
     const { query } = router
    return <h3>search result for {query.searchquery}</h3>
}

export default searchPage;