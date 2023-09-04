import React, {useState, useEffect} from "react"
     function urlFetch() {
        const [url, setUrl] = useState("None")
        useEffect(() => {
        const cu = window.location.href;
        const substring = cu.substring(cu.indexOf('#') + 1);
        setUrl(substring)
            url.toString()
        }, [])
         return ( url )
    }

    export default urlFetch;
