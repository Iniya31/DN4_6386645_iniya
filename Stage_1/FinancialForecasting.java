public class FinancialForecasting {

    public static double calculateFutureValue(double initialAmount, double growthRate, int years) {
        if (years == 0) {
            return initialAmount;
        }
        return calculateFutureValue(initialAmount, growthRate, years - 1) * (1 + growthRate);
    }

    public static double calculateFutureValueMemo(double initialAmount, double growthRate, int years, double[] memo) {
        if (years == 0) return initialAmount;
        if (memo[years] != 0) return memo[years];
        memo[years] = calculateFutureValueMemo(initialAmount, growthRate, years - 1, memo) * (1 + growthRate);
        return memo[years];
    }

    public static void main(String[] args) {
        double initialAmount = 10000;
        double growthRate = 0.08;
        int years = 5;

        double futureValue = calculateFutureValue(initialAmount, growthRate, years);
        System.out.printf("Future Value (Recursive): ₹%.2f\n", futureValue);

        double[] memo = new double[years + 1];
        double futureValueMemo = calculateFutureValueMemo(initialAmount, growthRate, years, memo);
        System.out.printf("Future Value (Memoized): ₹%.2f\n", futureValueMemo);
    }
}
