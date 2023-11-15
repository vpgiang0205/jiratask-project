import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        // Get list project
        case actions.LIST_PROJECT_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }


        case actions.LIST_PROJECT_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }


        case actions.LIST_PROJECT_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default projectReducer