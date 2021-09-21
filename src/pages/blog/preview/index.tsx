import {PageProps} from "gatsby";
import * as queryString from "querystring"
import {useEffect, useState} from "react";

const BlogPreviewPage = ({location}: PageProps): JSX.Element => {
  const {contentId, draftKey} = queryString.parse(location.search.slice(1))
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://fukkeblog.microcms.io/api/v1/news/${contentId}?draftKey=${draftKey}`, {
      headers: {
        'X-API-KEY': process.env.GATSBY_MICROCMS_API_KEY,
      },
    }).then(res => res.json())
      .then(data => setData(data))
  }, [])


  return (
    <div>
      <h1>preview</h1>
      {data && (
        <div>
          {data.title}
          {data.body}
        </div>
      )}
    </div>
  )
}

export default BlogPreviewPage
