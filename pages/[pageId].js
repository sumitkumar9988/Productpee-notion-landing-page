import * as React from "react";

import { NotionPage } from "../components/NotionPage";
import { rootNotionPageId } from "../lib/config";
import notion from "../lib/notion";

export const getStaticProps = async (context) => {
  const pageId = context.params.pageId || rootNotionPageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap
    },
    revalidate: 10
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}

export default function Page({ recordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
}
