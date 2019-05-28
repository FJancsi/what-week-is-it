const whatWeekIsIt = () => {
    const
        today = new Date(),
        oneJan = new Date(today.getFullYear(), 0, 1);
        
    return Math.ceil((((today - oneJan) / 86400000) + oneJan.getDay() + 1) / 7);
}

export { whatWeekIsIt };
