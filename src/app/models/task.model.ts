export class TaskModel {
    constructor(
                public id: number,
                public name: string,
                public description: string,
                public timeStimated: number,
                public state: string,
                public active: boolean
                ) { }
}
