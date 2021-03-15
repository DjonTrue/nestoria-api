const initialState = {
    bookmarks: [],
};

const bookmarksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BOOKMARKS":
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload],
            };
        default:
            return state;
    }
};

export default bookmarksReducer;
