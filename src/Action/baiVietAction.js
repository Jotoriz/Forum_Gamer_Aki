import axios from 'axios';
import { notification } from 'antd';

import { api } from '../api';

export const getAllBaiViet = async () => {
    try {
        const res = await axios.get(api('/api/baiviet/getAll'));
        return res.data;
    } catch (error) {
        return null;
    }
};
export const createBaiViet = async (id_Types, title, actor, content) => {
    try {
        if (!id_Types || !title || !content || !actor) {
            notification.error({
                message: 'Bạn đang điền thiếu nội dung',
            });
            return;
        }
        const res = await axios.post(api('/api/baiviet/create'), {
            id_Types,
            title,
            content,
            actor,
        });
        window.location.href = '/';
        if (res.status === 201) {
            notification.success({
                message: 'Tạo Bài Viết Thành Công',
            });
        }
    } catch (error) {
        notification.error({
            message: error.message,
        });
    }
};
