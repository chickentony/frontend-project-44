class GameTypeInterface {

    checkUserAnswer(){};
}

class Context {
    #strategy;

    constructor(strategy) {
        this.#strategy = strategy;
    }

    setStrategy(strategy) {
        this.#strategy = strategy;
    }

    doSomeLogic() {
        return this.#strategy.checkUserAnswer();
    }
}

class CalculatorGameLogic extends GameTypeInterface {
    checkUserAnswer(userAnswer, correctAnswer) {

        super.checkUserAnswer();
    }
}
