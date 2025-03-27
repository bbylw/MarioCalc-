class Calculator {
    constructor() {
        this.previousOperand = '';
        this.currentOperand = '0';
        this.operation = undefined;
        this.sounds = {
            coin: document.getElementById('coin'),
            jump: document.getElementById('jump'),
            pipe: document.getElementById('pipe')
        };
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.playSound('pipe');
    }

    delete() {
        if (this.currentOperand === '0') return;
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand === '') this.currentOperand = '0';
        this.playSound('jump');
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number.toString();
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
        this.playSound('coin');
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '0';
        this.playSound('jump');
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            case '%':
                computation = prev % current;
                break;
            default:
                return;
        }

        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
        this.playSound('pipe');
    }

    playSound(soundName) {
        const sound = this.sounds[soundName];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(error => console.log('Audio play failed:', error));
        }
    }

    updateDisplay() {
        document.querySelector('.current-operand').textContent = this.currentOperand;
        if (this.operation != null) {
            document.querySelector('.previous-operand').textContent =
                `${this.previousOperand} ${this.operation}`;
        } else {
            document.querySelector('.previous-operand').textContent = '';
        }
    }
}

const calculator = new Calculator();

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        // 数字按钮
        if (button.dataset.value) {
            calculator.appendNumber(button.dataset.value);
        }
        // 操作符按钮
        else if (button.dataset.action === 'operator') {
            calculator.chooseOperation(button.textContent);
        }
        // 清除按钮
        else if (button.dataset.action === 'clear') {
            calculator.clear();
        }
        // 删除按钮
        else if (button.dataset.action === 'delete') {
            calculator.delete();
        }
        // 计算按钮
        else if (button.dataset.action === 'calculate') {
            calculator.compute();
        }
        calculator.updateDisplay();
    });
});