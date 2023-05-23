class Anim {
    constructor(frames, frameTime, stagesValues) {
        this.frames = frames;
        this.frameTime = frameTime;
        this.stagesValues = stagesValues;
        
        this.init();
    }
    init() {
        this.stages = [];
        for(var t = 0; t < this.frames * this.frameTime; t += this.frameTime) {
            const minTime = t;
            const maxTime = t + this.frameTime - 1;
            this.stages.push(new AnimStage(minTime, maxTime));
        }
    }
    getStage(time) {
        let valueIndex = this.#getValueIndex(time);
        return this.stagesValues[valueIndex];
    }
    #getValueIndex(time) {
        let valuesNumber = this.stages.length;

        for(var s = 0; s < valuesNumber; s++) {
            const stage = this.stages[s];
            const modulo = time % (valuesNumber * this.frameTime);
    
            if(modulo >= stage.minTime && modulo <= stage.maxTime) {
                return s;
            }
        }
    }
}

class AnimStage {
    constructor(minTime, maxTime) {
        this.minTime = minTime;
        this.maxTime = maxTime;
    }
}