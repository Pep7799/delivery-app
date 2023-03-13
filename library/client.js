import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "4zjg35jj",
  dataset: "production",
  apiVersion: "2023-03-13",
  useCdn: true,
  token:
    "skMx59Hclk3kCB1JZr7UWuO5PCTLq86YDLooz3PhV0YXmT2eLTnZMC0su9RnmNtGYxgvRn13fPBR5OkA6m5r5gvmRr0JSus8CeHvhHAcJ8NDHpP1nT9Mzp6WUqwvbBqy0i7PWMGDzxrB4pfKGxUjBg3CrnLGQeAPdbYQ8io8TUBg0Ive6zHf",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
