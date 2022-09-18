type UserProperty = {
    id: string,
    name: string,
    email: string,
    avatar: string,
    password: string,
    type: string,
    token: string,
    created_at: string,
    updated_at: string,
    inquiry: number,
};

const UserPattern: UserProperty = {
    id: "",
    name: "",
    email: "",
    avatar: "",
    type: "",
    password: "",
    token: "",
    created_at: "",
    updated_at: "",
    inquiry: 0,
};

export { type UserProperty, UserPattern };