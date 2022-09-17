type ArticleProperty = {
    id: string,
    title: string,
    thumb: string,
    content: string,
    short_description: string,
    owner_id: string,
    created_at: string,
    updated_at: string,
    inquiry: number,
};

const ArticlePattern: ArticleProperty = {
    id: "",
    title: "",
    thumb: "",
    content: "",
    short_description: "",
    owner_id: "",
    created_at: "",
    updated_at: "",
    inquiry: 0,
};

export { type ArticleProperty, ArticlePattern };