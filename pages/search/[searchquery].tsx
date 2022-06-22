import { NextPage } from "next";
import { useRouter } from "next/router";

const SearchPage: NextPage = () => {
    
    const router = useRouter()

     const { query } = router
     console.log(query);

    return <h3>search result for {query.searchquery}</h3>
}

export default SearchPage;