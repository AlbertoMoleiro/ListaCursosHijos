//class Course, private attributes name,duration, level type enum Level with values BEGINNER, INTERMEDIATE, ADVANCED. Methods: getters, setters
export class Course {
    private static idStatic = 0;
    private _id: number;
    private _name: string;
    private _duration: number;
    private _level: Level;

    constructor(name: string, duration: number, level: Level) {
        this._id = ++Course.idStatic;
        this._name = name;
        this._duration = duration;
        this._level = level;
    }
    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get duration(): number {
        return this._duration;
    }

    public set duration(duration: number) {
        this._duration = duration;
    }

    public get level(): Level {
        return this._level;
    }

    public set level(level: Level) {
        this._level = level;
    }

}

export enum Level {
    BEGINNER = 'Iniciación',
    INTERMEDIATE = 'Intermedio',
    ADVANCED = 'Avanzado'
}




