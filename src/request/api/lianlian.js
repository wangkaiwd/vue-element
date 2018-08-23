import { ajaxFunc } from '../http';

const lianlian = {};
// 获取连连钱包的状态信息
lianlian.fetchLianlianAccount = ajaxFunc('/lianl_api/account12');

export default lianlian;
