import type { HeaderProps } from "./header.type";

export interface WorkHistory {
    company: string;
    content: string;
    job: string;
    achievement: string;
    workStart: string;
    workEnd?: string;
}

export interface ProjectHistory {
    company?: string;
    projectName: string;
    job: string;
    content: string;
    achievement: string;
    startAt: string;
    endAt?: string;
}

export interface EducationHistory {
    school: string;
    level: string; // 本科、专科之类的
    major: string;
    adward: string;
    startAt: string;
    endAt?: string;
}

export interface OpenSourceHistory {
    name: string;
    link: string;
    description: string;
    contribution: string;
}

export interface Resume extends HeaderProps {
    advantaged: string;
    workHistories: WorkHistory[];
    projectHistories: ProjectHistory[];
    educationHistories: EducationHistory[];
    opensourceHistories?: OpenSourceHistory[];
    certifications?: string[];
}
