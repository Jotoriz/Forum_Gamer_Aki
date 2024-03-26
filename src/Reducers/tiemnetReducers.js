import { ADD_MESSAGE } from '../Action/Types';

const tinNhan = [localStorage.getItem('messages') || null];

const TiemNetReducer = (state = tinNhan, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            // Giả sử action.payload chứa tin nhắn mới cần thêm
            return [...state, action.payload];
        default:
            return state;
    }
};

export default TiemNetReducer;
