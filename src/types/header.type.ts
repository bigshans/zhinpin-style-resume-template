export interface HeaderProps {
    name: string;
    gender: string;
    workStart: string; // 工作开始时间，将自动计算工作经验
    workFor: string; // 求职意向
    workBase: string;
    phone: string;
    wechat?: string;
    birth: string;
};
