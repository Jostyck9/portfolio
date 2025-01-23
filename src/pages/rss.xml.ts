import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
    const posts = await getCollection("blog");

    return rss({
        title: "Hugo Berthomé | Blog",
        description: "Mon évolution dans le monde du dev",
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/portfolio/posts/${post.id}/`,
        })),
        customData: `<language>fr-fr</language>`,
    });
}
