public class Forecast {

    public double predictFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0)
            return currentValue;
        return predictFutureValue(currentValue, growthRate, years - 1) * (1 + growthRate);
    }
}
