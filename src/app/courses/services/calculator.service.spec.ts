import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe('CalculatorService', () => {

    let loggerSpy: any;
    let calculator: CalculatorService;

    beforeEach(() => {
        console.log("Before Each");

        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        });

        calculator = TestBed.inject(CalculatorService);

    });

    it('Should add two numbers', () => {
        console.log("add tests");
        const result = calculator.add(2, 2);

        expect(result).toBe(4);

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('Should subtract two numbers', () => {
        console.log("substract tests");
        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, "unexpected substraction result");

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
});