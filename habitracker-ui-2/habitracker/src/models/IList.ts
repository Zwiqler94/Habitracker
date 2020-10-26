interface IHabit{
    habitName: string,
    habitCompletionStatus: string,
    habitCompletionPercentage: number
}



export interface IList{
    habitArray: IHabit[]
}

