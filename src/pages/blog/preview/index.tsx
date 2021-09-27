import * as React from 'react';
import {PageProps} from "gatsby";
import * as queryString from "querystring"
import {useEffect, useState} from "react";

type TechBlogPreview = {
  title: string
  body: string
}

const BlogPreviewPage = ({location}: PageProps): JSX.Element => {
  const {contentId, draftKey} = queryString.parse(location.search.slice(1))

  const [data, setData] = useState<TechBlogPreview | null>(null)

  // PreviewはCSRで実現
  useEffect(() => {
    fetch(`https://fukkeblog.microcms.io/api/v1/techblog/${contentId}?draftKey=${draftKey}`, {
      headers: {
        'X-API-KEY': `${process.env.GATSBY_MICROCMS_API_KEY}`,
      },
    }).then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      {data && (
        <div>
          <h1>{data?.title}</h1>
          <div dangerouslySetInnerHTML={{__html: data?.body || ""}}/>
        </div>
      )}
    </>
  )
}

export default BlogPreviewPage
