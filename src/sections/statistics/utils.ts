export const StatsCalendar = ['past_year', 'past_month', 'past_week'] as const;

export type TStatsCalendar = (typeof StatsCalendar)[number];

export const getDescriptor = (statsCal: TStatsCalendar) => {
    switch (statsCal) {
        case 'past_year':
            return 'Week';
        case 'past_month':
            return 'Day';
        case 'past_week':
            return 'Day';
    }
};
export const getStatsCalendarCountKey = (statsCal: TStatsCalendar) => {
    switch (statsCal) {
        case 'past_year':
            return 'weekly';
        case 'past_month':
            return 'daily';
        case 'past_week':
            return 'daily';
    }
};
