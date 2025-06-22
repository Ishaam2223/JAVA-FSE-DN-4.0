import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int n = 100000; 
        Product[] products = new Product[n];
        for (int i = 0; i < n; i++) {
            products[i] = new Product(1000 + i, "Product" + i, "Category" + (i % 10));
        }

        int targetId = 1000 + new Random().nextInt(n);

        // Linear Search
        long startTime = System.nanoTime();
        Product result1 = SearchUtils.linearSearch(products, targetId);
        long endTime = System.nanoTime();
        if (result1 != null) {
            System.out.println("Linear Search Result:");
            System.out.println("Product ID   : " + result1.productId);
            System.out.println("Product Name : " + result1.productName);
            System.out.println("Category     : " + result1.category);
        } else {
            System.out.println("Product not found (Linear Search)");
        }
        System.out.println("Time Taken   : " + (endTime - startTime) + " ns");
        System.out.println(result1);
        System.out.println();

        // Binary Search
        startTime = System.nanoTime();
        Product result2 = SearchUtils.binarySearch(products, targetId);
        endTime = System.nanoTime();
        if (result2 != null) {
            System.out.println("Binary Search Result:");
            System.out.println("Product ID   : " + result2.productId);
            System.out.println("Product Name : " + result2.productName);
            System.out.println("Category     : " + result2.category);
        } else {
            System.out.println("Product not found (Binary Search)");
        }
        System.out.println("Time Taken   : " + (endTime - startTime) + " ns");
        System.out.println(result2);
    }
}
