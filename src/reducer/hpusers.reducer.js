import hpuserConstants from '../constant/hpuser.constant';

export default function hpusers(state = {}, action) {
    switch (action.type) {
        case hpuserConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case hpuserConstants.GETALL_SUCCESS:
            return {
                items: action.hpusers
            };
        case hpuserConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case hpuserConstants.DELETE_REQUEST:
            return {
                ...state,
                items: state.items.map(hpuser =>
                    hpuser.id === action.id
                        ? { ...hpuser, deleting: true }
                        : user
                )
            };
        case hpuserConstants.DELETE_SUCCESS:
            return {
                items: state.items.filter(hpuser => hpuser.id)
            };
        case hpuserConstants.DELETE_FAILURE:
            return {
                ...state,
                items: state.items.map(hpuser => {
                    if(hpuser.id === action.id) {
                        const { deleting, ...hpuserCopy } = hpuser;
                        return { ...hpuserCopy, deleteError: action.error }
                    }
                })
            }
    }
}