type CategoryProperty = {
    id: string,
    name: string,
    created_at: string,
    updated_at: string,
    inquiry: number,
};

const CategoryPattern: CategoryProperty = {
    id: "",
    name: "",
    created_at: "",
    updated_at: "",
    inquiry: 0,
};

export { type CategoryProperty, CategoryPattern };