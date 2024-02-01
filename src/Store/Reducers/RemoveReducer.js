
const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];


const INITIAL_STATE = {
    favoriate: initialFavorites, 
};

const RemoveReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REMOVE_FROM_FAVORITES':
            const nowRemoveFavorites = state.favoriate.filter(movie => movie.id !== action.payload);

            localStorage.setItem('favorites', JSON.stringify(nowRemoveFavorites));

            return {
                ...state,
                deletefavoriate : nowRemoveFavorites, 
            };

        default:
            return state;
    }
};

export default RemoveReducer;
