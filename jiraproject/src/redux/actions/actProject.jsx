import * as actions from '../types/constants'
import api from "../../api/apiUltis"
/**
 * Room Reducer 
 */
// Home Get List Room:
export const actListProject = () => {
    return (dispatch) => {
        dispatch(actListProjectRequest);
        api
            .get(`/Project/getAllProject`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actListProjectSuccess(result.data.content));
                }
            })
            .catch((error) => {
                console.log(error);
                // dispatch(actListProjectFail())
            });
    };
}

const actListProjectRequest = () => ({ type: actions.LIST_PROJECT_REQUEST })
const actListProjectSuccess = (data) => ({ type: actions.LIST_PROJECT_SUCCESS, payload: data })
// const actListProjectFail = (error) => ({ type: actions.LIST_PROJECT_FAIL, payload: error })

export const actDeleteProject = (id, accessToken) => {
    return (dispatch) => {
        console.log(accessToken);
        api.delete(`/Project/deleteProject?projectId=${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    console.log("deleted");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}


export const actAddProject = (newData) => {
    return (dispatch) => {
        console.log(newData);
        api.post(`/Project/deleteProject?projectId=${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    console.log("deleted");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}