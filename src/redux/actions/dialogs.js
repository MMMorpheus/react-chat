import {dialogsAPI} from "@/utils/API"

const actions = {
    setDialogs: items => ({
        type: "DIALOGS:SET_ITEMS",
        payload: items
    }),
    fetchDialogs: () => dispatch => {
        dialogsAPI.getAll().then(({data}) => {
            dispatch(actions.setDialogs(data))
        })

    }
}

export default actions;