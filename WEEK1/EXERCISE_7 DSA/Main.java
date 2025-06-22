public class Main {
    public static void main(String[] args) {
        Forecast forecast = new Forecast();
        double currentValue = 10000;  
        double growthRate = 0.08;     
        int years = 5;

        double futureValue = forecast.predictFutureValue(currentValue, growthRate, years);

        System.out.printf("Future Value after %d years: Rs.%.2f", years, futureValue);
    }
}
